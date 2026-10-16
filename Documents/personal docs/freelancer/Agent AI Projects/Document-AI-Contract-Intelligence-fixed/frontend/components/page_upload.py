"""PDF upload and indexing for the RAG chat workflow only."""
from __future__ import annotations
import sys
import html
import io
from pathlib import Path

import streamlit as st

ROOT = Path(__file__).parent.parent.parent
sys.path.insert(0, str(ROOT))


def render() -> None:
    st.markdown(
        '<div class="sec-header">'
        '<div class="sec-title">📤 Upload Document</div>'
        '<div class="sec-sub">Upload a readable PDF to chat with its contents.</div>'
        '</div>',
        unsafe_allow_html=True,
    )

    sample_path = ROOT / "assets" / "sample_contract.pdf"
    if sample_path.exists():
        col_dl, _ = st.columns([2, 3])
        with col_dl:
            st.download_button(
                label="⬇️ Download sample contract PDF",
                data=sample_path.read_bytes(),
                file_name="sample_contract.pdf",
                mime="application/pdf",
                use_container_width=True,
            )

    st.markdown(
        '<div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;'
        'padding:10px 14px;margin-bottom:12px;font-size:.82rem;color:#1e40af;">'
        'ℹ️ This RAG-only version supports text-based PDFs. Scanned/image-only PDFs '
        'are not supported.'
        '</div>',
        unsafe_allow_html=True,
    )

    uploaded = st.file_uploader(
        "PDF document", type=["pdf"], label_visibility="collapsed", key="rag_pdf_upload"
    )

    if not uploaded:
        _clear_document_state()
        st.markdown("""
        <div class="upload-hint">
          <span class="icon">📂</span>
          Drag and drop a <strong>PDF</strong> document<br>
          <span style="font-size:.8rem;color:#94a3b8;margin-top:6px;display:block;">
            PDF only · Text-based PDFs recommended
          </span>
        </div>
        """, unsafe_allow_html=True)
        return

    file_bytes = uploaded.getvalue()
    file_size = len(file_bytes)
    prev_name = st.session_state.get("doc_name", "")
    prev_size = st.session_state.get("_doc_size", 0)
    if uploaded.name != prev_name or file_size != prev_size:
        _ingest_document(file_bytes, uploaded.name, file_size)

    document_text = st.session_state.get("document_text", "")
    document_pages = st.session_state.get("document_pages", [])
    has_text = bool(document_text.strip())
    size_kb = file_size / 1024

    st.markdown(f"""
    <div class="card" style="display:flex;align-items:center;gap:14px;margin-bottom:16px;">
      <span style="font-size:2rem">📄</span>
      <div>
        <div style="font-weight:700;color:#0f172a;">{html.escape(uploaded.name)}</div>
        <div style="font-size:.78rem;color:#64748b;">{size_kb:.1f} KB · PDF · {len(document_pages)} page(s)</div>
      </div>
      <span class="badge {'badge-green' if has_text else 'badge-orange'}" style="margin-left:auto;">
        {'✓ Text available' if has_text else '⚠ No readable text'}
      </span>
    </div>
    """, unsafe_allow_html=True)

    if not has_text:
        st.warning(
            "No readable text was found in this PDF. Scanned/image-only PDFs are not "
            "supported. Please try a text-based PDF."
        )
        return

    with st.expander("👁 Preview extracted text", expanded=False):
        st.text(document_text[:1500] + ("…" if len(document_text) > 1500 else ""))

    st.markdown("""
    <div class="lp-wf-card" style="margin-bottom:10px;">
      <div class="lp-wf-icon">💬</div>
      <div class="lp-wf-title">Chat with Document</div>
      <div class="lp-wf-desc">Build a searchable index, then ask questions with source citations.</div>
    </div>
    """, unsafe_allow_html=True)
    if st.button("Build Index & Start Chat →", type="primary", use_container_width=True, key="do_rag"):
        _run_rag()


def _ingest_document(file_bytes: bytes, filename: str, file_size: int) -> None:
    """Read text and page boundaries from a PDF for RAG; does not run OCR."""
    from pypdf import PdfReader

    with st.spinner("Reading PDF text…"):
        try:
            reader = PdfReader(io.BytesIO(file_bytes))
            page_strs = [(page.extract_text() or "").strip() for page in reader.pages]
            full_text = "\n\n".join(text for text in page_strs if text).strip()
        except Exception as exc:
            st.error(f"Could not read this PDF: {exc}")
            return

    if page_strs:
        document_pages = [
            {"page": i + 1, "text": text}
            for i, text in enumerate(page_strs) if text
        ]
    elif full_text:
        document_pages = [{"page": 1, "text": full_text}]
    else:
        document_pages = []

    st.session_state.uploaded_file = file_bytes
    st.session_state.uploaded_bytes = file_bytes
    st.session_state.uploaded_filename = filename
    st.session_state.doc_name = filename
    st.session_state.document_text = full_text
    st.session_state.document_pages = document_pages
    st.session_state._doc_size = file_size
    st.session_state.vector_store = None
    st.session_state.doc_embedded = False
    st.session_state.chat_history = []
    st.session_state._rag_is_demo = False


def _clear_document_state() -> None:
    for key in [
        "uploaded_file", "uploaded_bytes", "uploaded_filename", "doc_name",
        "document_text", "document_pages", "_doc_size", "ocr_result",
        "extraction_result", "vector_store", "doc_embedded", "chat_history",
        "_rag_is_demo",
    ]:
        st.session_state.pop(key, None)


def _run_rag() -> None:
    """Embed the uploaded PDF text and navigate to the RAG chat page."""
    from processors import rag as rag_proc

    doc_text = st.session_state.get("document_text", "")
    doc_name = st.session_state.get("doc_name", "uploaded_doc")
    doc_pages = st.session_state.get("document_pages", [])
    if not doc_text.strip():
        st.error("No text available to index. Please upload a readable, text-based PDF.")
        return

    page_texts = [page["text"] for page in doc_pages] if doc_pages else [doc_text]
    with st.spinner("Building vector index…"):
        result = rag_proc.embed_document(text=doc_text, doc_id=doc_name, pages=page_texts)
    st.session_state.vector_store = result
    st.session_state.doc_embedded = True
    st.session_state.chat_history = []
    st.session_state._rag_is_demo = False
    st.session_state.page = "rag"
    st.rerun()
