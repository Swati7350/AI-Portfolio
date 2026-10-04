/**
 * app.js – Portfolio JS
 *
 * 1. Project loader  — reads projects.json, renders cards + filter.
 * 2. Enquiry form    — submits to Formspree, shows success/error state.
 *
 * To add a new project: edit projects.json only. No changes needed here.
 */

(function () {
  'use strict';

  /* ═══════════════════════════════════════════════════════════
     1. PROJECT LOADER
  ═══════════════════════════════════════════════════════════ */

  const PROJECTS_URL = 'projects.json';

  const grid         = document.getElementById('projects-grid');
  const loadingEl    = document.getElementById('loading-state');
  const emptyEl      = document.getElementById('empty-state');
  const filterBtns   = document.querySelectorAll('.filter-btn');
  const statProjects = document.getElementById('stat-projects');

  let allProjects  = [];
  let activeFilter = 'All';

  async function initProjects() {
    try {
      const res = await fetch(PROJECTS_URL);
      if (!res.ok) throw new Error(`Could not load ${PROJECTS_URL} (${res.status})`);
      allProjects = await res.json();
    } catch (err) {
      console.error('[Portfolio]', err);
      loadingEl.innerHTML = `<p style="color:var(--text-muted)">Failed to load projects.json.<br><small>${err.message}</small></p>`;
      return;
    }

    if (statProjects) statProjects.textContent = allProjects.length;
    renderCards(allProjects);
    setupFilters();
  }

  function renderCards(projects) {
    grid.querySelectorAll('.project-card').forEach(el => el.remove());
    loadingEl.classList.add('hidden');

    if (projects.length === 0) {
      emptyEl.classList.remove('hidden');
      return;
    }
    emptyEl.classList.add('hidden');
    carouselIndex = 0;
    projects.forEach((project, index) => grid.appendChild(buildCard(project, index)));
    updateCarousel();
  }

  function buildCard(p, index) {
    const card = document.createElement('article');
    card.className = 'project-card' + (p.featured ? ' featured' : '');
    card.style.animationDelay = `${index * 60}ms`;

    const imageHtml = p.image
      ? `<img src="${esc(p.image)}" alt="${esc(p.name)} screenshot" loading="lazy" />`
      : `<div class="card-image-placeholder">${placeholderSvgStr()}</div>`;

    const featuredBadge = p.featured
      ? `<div class="featured-badge" aria-label="Featured project">Featured</div>`
      : '';

    const tagsHtml  = (p.categories  || []).map(c  => `<span class="tag">${esc(c)}</span>`).join('');
    const techHtml  = (p.tech_stack  || []).map(t  => `<span class="tech-chip">${esc(t)}</span>`).join('');

    const liveBtn = p.live_url
      ? `<a href="${esc(p.live_url)}" target="_blank" rel="noopener noreferrer"
            class="btn btn-primary btn-sm" aria-label="Open live demo of ${esc(p.name)}">
           ${iconExternal()} Live Demo
         </a>`
      : `<span class="btn btn-ghost btn-sm" style="opacity:0.4;cursor:default;pointer-events:none">In Progress</span>`;

    const githubBtn = p.github_url
      ? `<a href="${esc(p.github_url)}" target="_blank" rel="noopener noreferrer"
            class="btn btn-ghost btn-sm" aria-label="View GitHub repo for ${esc(p.name)}">
           ${iconGithub()} GitHub
         </a>`
      : '';

    card.innerHTML = `
      <div class="card-image">
        ${imageHtml}
        ${featuredBadge}
      </div>
      <div class="card-body">
        <h3 class="card-title">${esc(p.name)}</h3>
        <p class="card-description">${esc(p.description)}</p>

        ${p.problem ? `
          <div class="project-detail">
            <span class="project-detail-label">The Problem</span>
            <p class="project-detail-text">${esc(p.problem)}</p>
          </div>
        ` : ''}

        ${p.built ? `
          <div class="project-detail">
            <span class="project-detail-label">What We Built</span>
            <p class="project-detail-text">${esc(p.built)}</p>
          </div>
        ` : ''}

        <div class="card-tags">${tagsHtml}</div>
        <div class="card-tech">${techHtml}</div>

        <div class="card-actions">
          ${liveBtn}
          ${githubBtn}
        </div>
      </div>`;

    // Attach error handler via JS — avoids the broken inline onerror approach
    if (p.image) {
      const img = card.querySelector('.card-image img');
      if (img) {
        img.addEventListener('error', () => {
          const wrapper = img.parentElement;
          wrapper.innerHTML = `<div class="card-image-placeholder">${placeholderSvgStr()}</div>`;
        }, { once: true });
      }
    }

    return card;
  }

  /* ─── Carousel — desktop, 3 cards per page ───────────────── */
  const prevBtn    = document.getElementById('carousel-prev');
  const nextBtn    = document.getElementById('carousel-next');
  const PAGE_SIZE  = 3;
  let   carouselIndex = 0;   // current page index (0-based)

  function updateCarousel() {
    const cards = grid.querySelectorAll('.project-card');
    if (!cards.length) return;

    const totalPages = Math.ceil(cards.length / PAGE_SIZE);
    const start = carouselIndex * PAGE_SIZE;
    const end   = start + PAGE_SIZE;

    cards.forEach((card, i) => {
      card.classList.toggle('carousel-hidden', i < start || i >= end);
    });

    prevBtn.disabled = carouselIndex === 0;
    nextBtn.disabled = carouselIndex >= totalPages - 1;
  }

  function setupCarousel() {
    prevBtn.addEventListener('click', () => {
      if (carouselIndex > 0) {
        carouselIndex--;
        updateCarousel();
      }
    });

    nextBtn.addEventListener('click', () => {
      const cards = grid.querySelectorAll('.project-card');
      const totalPages = Math.ceil(cards.length / PAGE_SIZE);
      if (carouselIndex < totalPages - 1) {
        carouselIndex++;
        updateCarousel();
      }
    });
  }

  function setupFilters() {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        activeFilter = btn.dataset.filter;
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filtered = activeFilter === 'All'
          ? allProjects
          : allProjects.filter(p => p.categories && p.categories.includes(activeFilter));

        renderCards(filtered);
      });
    });
  }

  /* ═══════════════════════════════════════════════════════════
     2. ENQUIRY FORM
     Submits to Formspree. The action URL in the <form> element
     contains your Formspree endpoint — set it there, not here.
  ═══════════════════════════════════════════════════════════ */

  function initForm() {
    const form      = document.getElementById('enquiry-form');
    const submitBtn = document.getElementById('submit-btn');
    const successEl = document.getElementById('form-success');
    const errorEl   = document.getElementById('form-error');
    const emailEl   = document.getElementById('field-email');
    const replyToEl = document.getElementById('field-replyto');

    if (!form) return;

    // Keep _replyto in sync with the email field so Formspree
    // sets Reply-To correctly, letting you reply straight from Gmail.
    emailEl.addEventListener('input', () => {
      replyToEl.value = emailEl.value;
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Sync Reply-To one final time before submit
      replyToEl.value = emailEl.value;

      successEl.classList.add('hidden');
      errorEl.classList.add('hidden');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      const data = new FormData(form);

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          form.reset();
          replyToEl.value = '';
          successEl.classList.remove('hidden');
          successEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
          const json = await res.json().catch(() => ({}));
          console.error('[Form]', json);
          errorEl.classList.remove('hidden');
        }
      } catch (err) {
        console.error('[Form]', err);
        errorEl.classList.remove('hidden');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Enquiry →';
      }
    });
  }

  /* ═══════════════════════════════════════════════════════════
     3. HELPERS
  ═══════════════════════════════════════════════════════════ */

  function esc(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function placeholderSvgStr() {
    return `<svg width="56" height="56" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <polyline points="21 15 16 10 5 21"/>
    </svg>`;
  }


  function iconExternal() {
    return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2.5" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>`;
  }

  function iconGithub() {
    return `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482
        0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462
        -.908-.62.069-.608.069-.608 1.003.07 1.531 1.031 1.531 1.031.892 1.529 2.341 1.087 2.91.832
        .092-.647.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683
        -.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836
        a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647
        .64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852
        0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12
        c0-5.523-4.477-10-10-10z"/>
    </svg>`;
  }

  /* ═══════════════════════════════════════════════════════════
     4. BOOT
  ═══════════════════════════════════════════════════════════ */
  document.addEventListener('DOMContentLoaded', () => {
    initProjects();
    initForm();
    setupCarousel();
  });

})();
