"""RAG landing page with inline document upload and native Streamlit chat."""

from __future__ import annotations

import html

import streamlit as st

from .page_upload import ROOT, _ingest_document

EXAMPLE_QUESTIONS = [

    "What are the payment terms?",

    "What is the agreement duration?",

    "What are each party's obligations?",

    "What's the Termination Policy?",

]

def render() -> None:

    """Render the two-column document assistant and documents workspace."""

    st.markdown(

        """

        <style>

        /* Landing workspace refinements; backend and RAG flow remain unchanged. */

        [data-testid="stAppViewContainer"] > .main {

            margin-top: 0 !important;

            padding-top: 0 !important;

        }



        [data-testid="stAppViewContainer"] > .main .block-container {

            max-width: 1240px !important;

            margin-top: -1rem !important;

            padding-top: 0 !important;

            padding-bottom: 1rem !important;

            padding-left: 1.4rem !important;

            padding-right: 1.4rem !important;

            box-sizing: border-box !important;

        }



        .lp-header {
            margin-top: 0 !important;
        }

        /* Let Streamlit's native bordered containers render their own single card.

           Avoid styling every nested wrapper, which creates stacked white panels. */

        div[data-testid="stVerticalBlockBorderWrapper"] {

            border-color: #dbe4f0 !important;

            border-radius: 14px !important;

            background: #ffffff !important;

            box-shadow: none !important;

        }

        .lp-panel-spacer { min-height: 12px; }

        .lp-index-help { color: #64748b; font-size: .78rem; line-height: 1.45; margin-top: .4rem; }

        .lp-suggestions {

            display: flex;

            flex-wrap: wrap;

            align-items: center;

            gap: 8px;

            margin: 8px 0 40px;

        }

        .lp-suggested-question {

            display: inline-flex;

            width: fit-content;

            max-width: 100%;

            box-sizing: border-box;

            border: 1px solid #d8e2f0;

            border-radius: 999px;

            padding: 7px 12px;

            margin: 0;

            background: #fff;

            color: #34445a;

            font-size: 0.8rem;

            line-height: 1.4;

            overflow-wrap: anywhere;

        }

        /* PDF upload area */



        [data-testid="stFileUploader"] > label {

            display: none !important;

        }



        [data-testid="stFileUploaderDropzone"] {

            min-height: 110px !important;

            padding: 0px 7px !important;

            border: 1px solid #cbd5ff !important;

            border-radius: 12px !important;

            background: #0000 !important;

            box-sizing: border-box !important;

        }



        /* Keep the uploader's internal content aligned without changing its size. */

        .st-emotion-cache-fis6aj {

            # left: 0px;

            # right: 0px;

            line-height: 1.2;

        }



        /* Compact Markdown spacing in the landing page. */

        .st-emotion-cache-1dqv233 {

            font-family: "Source Sans Pro", sans-serif;

            margin-bottom: -1rem;

        }



        /* Compact divider spacing around Document status. */

        .lp-doc-status-divider {

            margin: -4px 1px 8px;

            height: 1px;

        }

        .lp-doc-status-divider hr {

            margin: 0;

            border: none;

            border-top: 1px solid #dbe4f0;

        }



        [data-testid="stFileUploaderDropzone"] svg {

            color: #5145ff !important;

        }



        [data-testid="stFileUploaderDropzoneInstructions"] {

            text-align: center !important;

        }

        [data-testid="stFileUploaderDropzoneInstructions"] small {

            display: block !important;

            font-size: 0 !important;

        }



        [data-testid="stFileUploaderDropzoneInstructions"] small::after {

            content: "Limit 3KB per file • PDF";

            font-size: 12px !important;

            color: #6b7280 !important;

        }



        [data-testid="stFileUploaderDropzoneInstructions"] p {

            font-size: 0.9rem !important;

            color: #172554 !important;

        }



        [data-testid="stFileUploaderDropzone"] button {

            border-radius: 8px !important;

            min-height: 36px !important;

        }



        [data-testid="stTabs"] [role="tablist"] {

            gap: 8px !important;

        }

        [data-testid="stTabs"] button[role="tab"] {

            border-radius: 8px 8px 0 0 !important;

            padding: 8px 14px !important;

        }

        [data-testid="stChatInput"] {

            border-radius: 12px !important;

            border-color: #cbd8eb !important;

            box-shadow: 0 3px 12px rgba(30,65,112,.05);

        }

        [data-testid="stExpander"] {

            border: 1px solid #dce5f1 !important;

            border-radius: 10px !important;

            background: #fbfcff;

        }

        div.stButton > button, div.stDownloadButton > button {

            border-radius: 10px;

            font-weight: 600;

            min-height: 2.5rem;

        }

        div.stButton > button[kind="primary"] {

            background: #2856a6;

            border-color: #2856a6;

        }

        .lp-index-action {

            border-top: 1px solid #e7edf5;

            margin-top: 1rem;

            padding-top: 1rem;

        }

        [data-testid="stMarkdown"] {

             ̰   margin-top: 0 !important;

                margin-bottom: 0 !important;

            }



        [data-testid="stMarkdown"] hr {

            margin: 0 !important;

        }



        [data-testid="element-container"]:has([data-testid="stMarkdown"] hr) {

            height: auto !important;

            min-height: 0 !important;

            margin: 0 !important;

        }

        </style>

        """,

        unsafe_allow_html=True,

    )



# st.markdown(

#     """

#     <div class="lp-header">

#         <div class="lp-brand">

#             <div class="lp-brand-name">PARAS AI INNOVATIONS</div>

#         </div>

#         <a class="lp-back-link"

#         href="https://parasaiinnovations.com"

#         target="_blank"

#         rel="noopener noreferrer">

#             Back to Website ↗

#         </a>

#     </div>

#     """,

#     unsafe_allow_html=True,

# )



    st.markdown(

        """

            <div class="lp-hero">
                <div class="lp-hero-header">
                    <span class="lp-brand-name">PARAS AI INNOVATIONS</span>
                    <a class="lp-back-link"
                       href="https://parasaiinnovations.com"
                       target="_blank"
                       rel="noopener noreferrer">
                        Back to Website ↗
                    </a>
                </div>
                <h1 class="lp-hero-title">Chat with your Documents</h1>
                <p class="lp-hero-sub">
                    Ask questions across contracts, NDAs, and business PDFs. Get grounded answers with source references you can review.
                </p>
            </div>

        """,

        unsafe_allow_html=True,

    )

    spacer_col, chat_col, docs_col = st.columns([0.001, 1.65, 1], gap="small")

    with chat_col:

        with st.container(border=True):

            head_col, clear_col = st.columns([6, 1])

            with head_col:

                st.subheader("💬 Document Assistant")

            with clear_col:

                if st.button("🗑️ Clear", key="landing_clear_chat", help="Clear conversation"):

                    st.session_state.chat_history = []

                    st.rerun()

            doc_name = st.session_state.get("doc_name", "")

            is_ready = bool(st.session_state.get("doc_embedded"))

            if is_ready and doc_name:

                st.caption(f"Asking questions about: {doc_name}")

            if not st.session_state.get("chat_history"):

                st.markdown(

                        "<div class='lp-suggestions'>"

                        + "".join(

                            f"<div class='lp-suggested-question'>{html.escape(question)}</div>"

                            for question in EXAMPLE_QUESTIONS

                        )

                        + "</div>",

                        unsafe_allow_html=True,

                    )

# Use native Streamlit chat messages so the conversation remains

# accessible and works with Streamlit's built-in chat components.

            for message in st.session_state.get("chat_history", []):

                role = message.get("role", "assistant")

                with st.chat_message("user" if role == "user" else "assistant"):

                    st.markdown(message.get("content", ""))

                    if role != "user":

                        _render_sources(message.get("chunks", []))

            prompt = st.chat_input(

                "Ask a question about your documents…",

                key="landing_chat_input",

                disabled=not is_ready,

            )

            if prompt and prompt.strip():

                _ask_question(prompt.strip())

            st.caption("#### Click Build & Index to prepare your document before asking questions.")

    with docs_col:

        with st.container(border=True):

            st.markdown("### Your documents")

            upload_tab, samples_tab = st.tabs(["Upload", "Samples"])

            with upload_tab:

                uploaded = st.file_uploader(

                    "Drop PDFs here or choose files",

                    type=["pdf"],

                    key="landing_rag_pdf_upload",

                    help="Text-based PDFs are supported. Scanned/image-only PDFs require OCR, which is not enabled in this RAG-only workflow.",

                )

                if uploaded is not None:

                    file_bytes = uploaded.getvalue()

                    signature = (uploaded.name, len(file_bytes))

                    if signature != st.session_state.get("_landing_upload_signature"):

                        _ingest_document(file_bytes, uploaded.name, len(file_bytes))

                        st.session_state["_landing_upload_signature"] = signature

                        st.session_state["_landing_selected_source"] = "upload"

                        st.rerun()

            with samples_tab:

                sample_path = ROOT / "assets" / "sample_contract.pdf"

                if sample_path.exists():

                    st.markdown("**Sample contract**")

                    st.caption("Load the included text-based sample to try the document assistant.")

                    if st.button("Load sample contract", use_container_width=True, key="landing_load_sample"):

                        sample_bytes = sample_path.read_bytes()

                        _ingest_document(sample_bytes, sample_path.name, len(sample_bytes))

                        st.session_state["_landing_selected_source"] = "sample"

                        st.session_state["_landing_upload_signature"] = None

                        st.rerun()

                    st.download_button(

                        "Download sample PDF",

                        data=sample_path.read_bytes(),

                        file_name=sample_path.name,

                        mime="application/pdf",

                        use_container_width=True,

                        key="landing_download_sample",

                    )

                else:

                    st.info("No sample PDF is available in the assets folder.")

            document_text = st.session_state.get("document_text", "")

            selected_name = st.session_state.get("doc_name", "")

            document_pages = st.session_state.get("document_pages", [])

            indexed = bool(st.session_state.get("doc_embedded"))

            st.divider()

            st.markdown("**Document status**")

            if document_text.strip() and selected_name:

                status = "Indexed and ready" if indexed else "Ready to index"

                status_color = "#059669" if indexed else "#64748b"

                if indexed:

                    chunks_n = (st.session_state.get("vector_store") or {}).get("chunks_created", "?")

                    st.caption(f"Search index contains {chunks_n} chunk(s).")

            elif selected_name and not document_text.strip():

                st.warning("No readable text found. Try a text-based PDF; scanned PDFs need OCR.")

            st.markdown(

                "<div class='lp-notice' style='margin-top:6px;padding:8px 12px;font-size:.78rem;line-height:1.45;'>"

                "<strong>How it works</strong><br>1. Upload a PDF or choose a sample<br>"

                "2. Build the document index<br>3. Ask questions and review source references"

                "</div>",

                unsafe_allow_html=True,

            )

# st.markdown(

#     "<div class='lp-index-help'>Prepare the selected document for question answering. The chat activates after indexing succeeds.</div>",

#     unsafe_allow_html=True,

# )

            can_index = bool(document_text.strip()) and not indexed

            if indexed:

                index_label = "✓ Indexed and ready to chat"

            elif document_text.strip():

                index_label = "Build & Index"

            else:

                index_label = "Build & Index — upload a PDF first"

            if st.button(

                index_label,

                type="primary",

                use_container_width=True,

                key="landing_build_rag_index",

                disabled=not can_index,

                help="Build a searchable index from the selected document." if can_index else "Upload a readable PDF or load a sample before indexing.",

            ):

                _index_for_landing()

def _index_for_landing() -> None:

    """Build the existing RAG index without navigating away from the landing page."""

    from processors import rag as rag_proc

    doc_text = st.session_state.get("document_text", "")

    doc_name = st.session_state.get("doc_name", "uploaded_doc")

    doc_pages = st.session_state.get("document_pages", [])

    if not doc_text.strip():

        st.error("No text available to index. Please upload a readable, text-based PDF.")

        return

    page_texts = [page["text"] for page in doc_pages] if doc_pages else [doc_text]

    try:

        with st.spinner("Building vector index…"):

            result = rag_proc.embed_document(text=doc_text, doc_id=doc_name, pages=page_texts)

        if not result or result.get("chunks_created", 0) == 0:

            st.session_state.doc_embedded = False

            st.error("No searchable text chunks were created. Try a text-based PDF with selectable text.")

            return

        st.session_state.vector_store = result

        st.session_state.doc_embedded = True

        st.session_state.chat_history = []

        st.session_state._rag_is_demo = False

        st.success(f"Index ready — {result['chunks_created']} searchable chunks created. You can now ask questions below.")

    except Exception as exc:

        st.session_state.doc_embedded = False

        st.error(f"Could not build the document index: {exc}")

def _ask_question(question: str) -> None:

    """Query the existing RAG processor and retain the conversation."""

    from processors import rag as rag_proc

    history = st.session_state.setdefault("chat_history", [])

    history.append({"role": "user", "content": question})

    try:

        with st.spinner("Searching your document…"):

            response = rag_proc.query(question)

        history.append(

            {

                "role": "assistant",

                "content": response.get("answer", "No answer was returned."),

                "chunks": response.get("retrieved_chunks", []),

            }

        )

    except Exception as exc:

        history.append({"role": "assistant", "content": f"I couldn't query the index: {exc}", "chunks": []})

    st.rerun()

def _render_sources(chunks: list[dict]) -> None:

    """Display retrieved source snippets and page numbers below an answer."""

    if not chunks:

        return

    with st.expander(f"Sources · {len(chunks)} reference(s)", expanded=False):

        for index, chunk in enumerate(chunks, start=1):

            source_name = html.escape(str(chunk.get("doc_id") or st.session_state.get("doc_name", "Document")))

            page = chunk.get("page")

            page_label = f" · Page {page}" if page else ""

            st.markdown(f"**{index}. {source_name}{page_label}**")

            st.caption(str(chunk.get("text", ""))[:700])

            if index < len(chunks):

                st.divider()
