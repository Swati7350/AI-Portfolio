/**
 * app.js – Portfolio project loader
 *
 * Reads projects.json and renders project cards into the grid.
 * To add a new project, ONLY edit projects.json — no changes needed here.
 */

(function () {
  'use strict';

  const PROJECTS_URL = 'projects.json';

  // ── DOM refs ──────────────────────────────────────────────
  const grid        = document.getElementById('projects-grid');
  const loadingEl   = document.getElementById('loading-state');
  const emptyEl     = document.getElementById('empty-state');
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const statProjects = document.getElementById('stat-projects');

  let allProjects = [];
  let activeFilter = 'All';

  // ── Fetch & initialise ────────────────────────────────────
  async function init() {
    try {
      const res = await fetch(PROJECTS_URL);
      if (!res.ok) throw new Error(`Could not load ${PROJECTS_URL} (${res.status})`);
      allProjects = await res.json();
    } catch (err) {
      console.error('[Portfolio]', err);
      loadingEl.innerHTML = `<p style="color:var(--text-muted)">Failed to load projects.json.<br><small>${err.message}</small></p>`;
      return;
    }

    // Update live stat counter
    if (statProjects) statProjects.textContent = allProjects.length;

    renderCards(allProjects);
    setupFilters();
  }

  // ── Render cards ──────────────────────────────────────────
  function renderCards(projects) {
    // Remove old cards (keep loading/empty els out of the way)
    grid.querySelectorAll('.project-card').forEach(el => el.remove());

    loadingEl.classList.add('hidden');

    if (projects.length === 0) {
      emptyEl.classList.remove('hidden');
      return;
    }
    emptyEl.classList.add('hidden');

    projects.forEach((project, index) => {
      const card = buildCard(project, index);
      grid.appendChild(card);
    });
  }

  // ── Build a single card DOM element ───────────────────────
  function buildCard(p, index) {
    const card = document.createElement('article');
    card.className = 'project-card' + (p.featured ? ' featured' : '');
    // Stagger the fade-in animation
    card.style.animationDelay = `${index * 60}ms`;

    // ── Image / placeholder ──────────────────────────────
    const imageHtml = p.image
      ? `<img src="${escHtml(p.image)}" alt="${escHtml(p.name)} screenshot" loading="lazy" onerror="this.outerHTML='<div class=\\'card-image-placeholder\\'><svg width=\\'64\\' height=\\'64\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'1\\' aria-hidden=\\'true\\'><rect x=\\'3\\' y=\\'3\\' width=\\'18\\' height=\\'18\\' rx=\\'2\\'/><circle cx=\\'8.5\\' cy=\\'8.5\\' r=\\'1.5\\'/><polyline points=\\'21 15 16 10 5 21\\'/></svg></div>'" />`
      : `<div class="card-image-placeholder">${placeholderSvgStr()}</div>`;

    // ── Featured badge ───────────────────────────────────
    const featuredBadge = p.featured
      ? `<div class="featured-badge" aria-label="Featured project">Featured</div>`
      : '';

    // ── Category tags ────────────────────────────────────
    const tagsHtml = (p.categories || [])
      .map(cat => `<span class="tag">${escHtml(cat)}</span>`)
      .join('');

    // ── Tech stack chips ─────────────────────────────────
    const techHtml = (p.tech_stack || [])
      .map(tech => `<span class="tech-chip">${escHtml(tech)}</span>`)
      .join('');

    // ── Action buttons ───────────────────────────────────
    const liveBtn = p.live_url
      ? `<a href="${escHtml(p.live_url)}" target="_blank" rel="noopener noreferrer"
            class="btn btn-primary btn-sm" aria-label="Open live demo of ${escHtml(p.name)}">
           ${externalIcon()} Live Demo
         </a>`
      : `<span class="btn btn-ghost btn-sm" style="opacity:0.4;cursor:default;pointer-events:none">Coming Soon</span>`;

    const githubBtn = p.github_url
      ? `<a href="${escHtml(p.github_url)}" target="_blank" rel="noopener noreferrer"
            class="btn btn-ghost btn-sm" aria-label="View source code of ${escHtml(p.name)} on GitHub">
           ${githubIcon()} GitHub
         </a>`
      : '';

    card.innerHTML = `
      <div class="card-image">
        ${imageHtml}
        ${featuredBadge}
      </div>
      <div class="card-body">
        <h3 class="card-title">${escHtml(p.name)}</h3>
        <p class="card-description">${escHtml(p.description)}</p>
        <div class="card-tags">${tagsHtml}</div>
        <div class="card-tech">${techHtml}</div>
        <div class="card-actions">
          ${liveBtn}
          ${githubBtn}
        </div>
      </div>
    `;

    return card;
  }

  // ── Filter logic ──────────────────────────────────────────
  function setupFilters() {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        activeFilter = btn.dataset.filter;

        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filtered = activeFilter === 'All'
          ? allProjects
          : allProjects.filter(p =>
              p.categories && p.categories.includes(activeFilter)
            );

        renderCards(filtered);
      });
    });
  }

  // ── Helpers ───────────────────────────────────────────────
  function escHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function placeholderSvgStr() {
    return `<svg width="64" height="64" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <polyline points="21 15 16 10 5 21"/>
    </svg>`;
  }

  function externalIcon() {
    return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2.5" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>`;
  }

  function githubIcon() {
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

  // ── Boot ──────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', init);
})();
