// projects.js - Dynamic UI controller relying on projects-db.js

document.addEventListener('DOMContentLoaded', () => {
  // Use projectsData from projects-db.js or fallback to empty array if missing
  const data = typeof projectsData !== 'undefined' ? projectsData : [];
  // 1. Update Footer Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 2. Mobile Nav Toggle
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // 3. Elements
  const landscapeGroup = document.getElementById('landscapeGroup');
  const portraitGroup = document.getElementById('portraitGroup');
  const landscapeGrid = document.getElementById('landscapeGrid');
  const portraitGrid = document.getElementById('portraitGrid');
  const landscapeCount = document.getElementById('landscapeCount');
  const portraitCount = document.getElementById('portraitCount');

  const searchInput = document.getElementById('projectSearch');
  const filterTabs = document.getElementById('filterTabs');
  const noResults = document.getElementById('noResults');
  const resetBtn = document.getElementById('resetFilters');

  // Modal elements
  const modal = document.getElementById('videoModal');
  const modalClose = document.getElementById('modalClose');
  const modalVideoWrap = document.getElementById('modalVideoWrap');
  const modalTitle = document.getElementById('modalTitle');
  const modalBadge = document.getElementById('modalBadge');
  const modalTools = document.getElementById('modalTools');
  const modalDesc = document.getElementById('modalDesc');

  let activeCategory = 'all';
  let searchQuery = '';

  // 4. Update Category Counts
  function updateCounts() {
    const counts = {
      'all': data.length,
      'short-form': data.filter(p => p.category === 'short-form').length,
      'long-form': data.filter(p => p.category === 'long-form').length,
      'motion-graphics': data.filter(p => p.category === 'motion-graphics').length,
      'ai-video': data.filter(p => p.category === 'ai-video').length
    };

    for (const [cat, count] of Object.entries(counts)) {
      const el = document.getElementById(`cnt-${cat}`);
      if (el) el.textContent = count;
    }
  }

  // Helper to generate project card HTML
  function createCardHTML(project) {
    return `
      <article class="project-card project-card--${project.aspectRatio}" data-id="${project.id}">
        <div class="project-thumb">
          <iframe src="${project.vimeoUrl}" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="${project.title}"></iframe>
        </div>
        <div class="project-info">
          <div class="project-info-header">
            <h3 class="project-title">${project.title}</h3>
            <span class="project-badge">${project.categoryLabel}</span>
          </div>
          <div class="project-tags">
            ${project.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
          </div>
          <button class="btn-card-details" onclick="openModal(${project.id})">View Details &rarr;</button>
        </div>
      </article>
    `;
  }

  // 5. Render Projects Separated by Landscape and Portrait
  function renderProjects() {
    const filtered = data.filter(project => {
      const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        project.title.toLowerCase().includes(q) ||
        project.categoryLabel.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.tools.some(t => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      if (landscapeGroup) landscapeGroup.style.display = 'none';
      if (portraitGroup) portraitGroup.style.display = 'none';
      noResults.classList.remove('hidden');
      return;
    }

    noResults.classList.add('hidden');

    const landscapeList = filtered.filter(p => p.aspectRatio === '16-9');
    const portraitList = filtered.filter(p => p.aspectRatio === '9-16');

    // Landscape section
    if (landscapeGroup && landscapeGrid) {
      if (landscapeList.length === 0) {
        landscapeGroup.style.display = 'none';
      } else {
        landscapeGroup.style.display = 'block';
        landscapeGrid.innerHTML = landscapeList.map(createCardHTML).join('');
        if (landscapeCount) landscapeCount.textContent = `(${landscapeList.length})`;
      }
    }

    // Portrait section
    if (portraitGroup && portraitGrid) {
      if (portraitList.length === 0) {
        portraitGroup.style.display = 'none';
      } else {
        portraitGroup.style.display = 'block';
        portraitGrid.innerHTML = portraitList.map(createCardHTML).join('');
        if (portraitCount) portraitCount.textContent = `(${portraitList.length})`;
      }
    }
  }

  // 6. Filter Tab Click Event
  if (filterTabs) {
    filterTabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      filterTabs.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      activeCategory = btn.dataset.category;
      renderProjects();
    });
  }

  // 7. Search Input Event
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProjects();
    });
  }

  // 8. Reset Filters Event
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      activeCategory = 'all';
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      filterTabs.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.category === 'all');
      });
      renderProjects();
    });
  }

  // 9. Open Modal Function
  window.openModal = function(id) {
    const project = data.find(p => p.id === id);
    if (!project) return;

    modalTitle.textContent = project.title;
    modalBadge.textContent = project.categoryLabel;
    modalDesc.textContent = project.description;

    modalTools.innerHTML = project.tools.map(t => `<span class="tool-tag">${t}</span>`).join('');
    
    // Inject video iframe inside modal
    modalVideoWrap.className = `modal-video-wrap modal-video-wrap--${project.aspectRatio}`;
    const autoplayUrl = project.vimeoUrl.includes('vimeo.com') 
      ? (project.vimeoUrl.includes('?') ? `${project.vimeoUrl}&autoplay=1` : `${project.vimeoUrl}?autoplay=1`)
      : project.vimeoUrl;
    modalVideoWrap.innerHTML = `
      <iframe src="${autoplayUrl}" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="${project.title}"></iframe>
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Lock background scrolling
  };

  // 10. Close Modal Function
  function closeModal() {
    modal.classList.add('hidden');
    modalVideoWrap.innerHTML = ''; // Stop video playback
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // Initial load
  updateCounts();
  renderProjects();
});
