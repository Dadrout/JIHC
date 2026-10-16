(() => {
  const programControls = document.querySelector('[data-program-controls]');
  const programComparison = document.querySelector('.program-comparison');
  if (programControls && programComparison) {
    const fields = [...programComparison.querySelectorAll('[data-program-field]')];
    const buttons = [...programControls.querySelectorAll('[data-program-view]')];
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const view = button.dataset.programView;
        programComparison.dataset.view = view;
        buttons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
        fields.forEach((field) => {
          field.hidden = view !== 'all' && field.dataset.programField !== view;
        });
      });
    });
    programControls.hidden = false;
  }

  const tracker = document.querySelector('[data-prep-tracker]');
  if (tracker) {
    const storageKey = 'jihc-preparation-v1';
    const steps = [...document.querySelectorAll('[data-prep-step]')];
    const progress = tracker.querySelector('[data-prep-progress]');
    const status = tracker.querySelector('[data-prep-status]');
    const note = tracker.querySelector('[data-prep-note]');
    const reset = tracker.querySelector('[data-prep-reset]');
    let canSave = true;
    let saved = [];
    try {
      const stored = JSON.parse(localStorage.getItem(storageKey) || '[]');
      if (Array.isArray(stored)) saved = stored;
    } catch {
      canSave = false;
    }
    const update = (save = false) => {
      const completed = steps.filter((step) => step.checked).map((step) => step.dataset.prepStep);
      if (save && canSave) {
        try {
          if (completed.length) localStorage.setItem(storageKey, JSON.stringify(completed));
          else localStorage.removeItem(storageKey);
        } catch {
          canSave = false;
        }
      }
      progress.max = steps.length;
      progress.value = completed.length;
      status.textContent = `${completed.length} of ${steps.length} steps checked`;
      reset.disabled = completed.length === 0;
      note.textContent = canSave
        ? 'Saved on this browser. This is your preparation checklist, not an application.'
        : 'Progress is available for this visit only. This browser could not save your checklist.';
      steps.forEach((step) => step.closest('.step-card').classList.toggle('is-complete', step.checked));
    };
    steps.forEach((step) => {
      step.checked = saved.includes(step.dataset.prepStep);
      step.closest('.step-check').hidden = false;
      step.closest('.step-marker').querySelector('.step-index').hidden = true;
      step.addEventListener('change', () => update(true));
    });
    reset.addEventListener('click', () => {
      steps.forEach((step) => { step.checked = false; });
      update(true);
    });
    tracker.hidden = false;
    update();
  }

  const toolbar = document.querySelector('[data-gallery-toolbar]');
  const gallery = document.querySelector('.student-story-mosaic');
  if (toolbar && gallery) {
    const items = [...gallery.querySelectorAll('[data-gallery-item]')];
    const filters = [...toolbar.querySelectorAll('[data-gallery-filter]')];
    const status = toolbar.querySelector('[data-gallery-status]');
    filters.forEach((button) => {
      button.addEventListener('click', () => {
        const category = button.dataset.galleryFilter;
        items.forEach((item) => { item.hidden = category !== 'all' && item.dataset.galleryItem !== category; });
        filters.forEach((filter) => filter.setAttribute('aria-pressed', String(filter === button)));
        gallery.classList.toggle('is-filtered', category !== 'all');
        const visible = items.filter((item) => !item.hidden).length;
        status.textContent = `${visible} ${visible === 1 ? 'story' : 'stories'}`;
      });
    });
    toolbar.hidden = false;

    const dialog = document.querySelector('.photo-dialog');
    if (dialog && typeof dialog.showModal === 'function') {
      const image = dialog.querySelector('[data-photo-image]');
      const caption = dialog.querySelector('[data-photo-caption]');
      const position = dialog.querySelector('[data-photo-position]');
      const close = dialog.querySelector('[data-photo-close]');
      const previous = dialog.querySelector('[data-photo-previous]');
      const next = dialog.querySelector('[data-photo-next]');
      let activeItems = [];
      let index = 0;
      let trigger = null;
      const render = () => {
        const item = activeItems[index];
        image.src = item.querySelector('.gallery-open').getAttribute('href');
        image.alt = item.querySelector('img').alt;
        caption.textContent = item.querySelector('h3').textContent.trim();
        position.textContent = `${index + 1} of ${activeItems.length}`;
        previous.disabled = next.disabled = activeItems.length < 2;
      };
      const move = (direction) => {
        if (activeItems.length < 2) return;
        index = (index + direction + activeItems.length) % activeItems.length;
        render();
      };
      items.forEach((item) => {
        const link = item.querySelector('.gallery-open');
        link.addEventListener('click', (event) => {
          if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
          event.preventDefault();
          activeItems = items.filter((entry) => !entry.hidden);
          index = activeItems.indexOf(item);
          trigger = link;
          render();
          dialog.showModal();
          close.focus();
        });
      });
      close.addEventListener('click', () => dialog.close());
      previous.addEventListener('click', () => move(-1));
      next.addEventListener('click', () => move(1));
      dialog.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault();
          move(event.key === 'ArrowLeft' ? -1 : 1);
        }
      });
      dialog.addEventListener('click', (event) => {
        const bounds = dialog.getBoundingClientRect();
        if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
      });
      dialog.addEventListener('close', () => trigger?.focus({ preventScroll: true }));
    }
  }
})();
