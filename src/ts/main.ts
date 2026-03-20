import '../styles/main.css';

function wireNavigation(buttonId: string, destination: string): void {
  document.getElementById(buttonId)?.addEventListener('click', () => {
    window.location.href = destination;
  });
}

function wireExpandableMenus(): void {
  const toggleButtons = document.querySelectorAll<HTMLElement>(
    '[data-toggle-target]',
  );

  toggleButtons.forEach((button) => {
    const targetId = button.dataset.toggleTarget;

    if (!targetId) {
      return;
    }

    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    button.addEventListener('click', (event) => {
      event.stopPropagation();

      const isOpen = button.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(isOpen));
      target.classList.toggle('is-open', isOpen);
    });
  });
}

wireNavigation('btn-enter-here', 'main.html');
wireNavigation('btn-home', 'index.html');
wireExpandableMenus();
