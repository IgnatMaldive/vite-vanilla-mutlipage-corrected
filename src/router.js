export class Router {
  constructor(routes) {
    this.routes = routes;
    this.currentPath = window.location.pathname;
    
    window.addEventListener('popstate', () => {
      this.handleRoute(window.location.pathname);
    });
    
    document.addEventListener('click', (e) => {
      const link = e.target.closest('[data-link]');
      if (link) {
        e.preventDefault();
        this.navigate(link.href);
      }
    });
  }

  async handleRoute(pathname) {
    // Handle root path
    if (pathname === '/') {
      pathname = '/dashboard';
    }
    
    this.currentPath = pathname;
    const route = this.routes[pathname] || this.routes['/404'];
    const content = await route();
    document.querySelector('#app').innerHTML = content;
    this.updateActiveLinks();
  }

  navigate(url) {
    const pathname = new URL(url).pathname;
    window.history.pushState({}, '', pathname);
    this.handleRoute(pathname);
  }

  updateActiveLinks() {
    document.querySelectorAll('[data-link]').forEach(link => {
      const linkPath = link.pathname === '/' ? '/dashboard' : link.pathname;
      link.classList.toggle('active', linkPath === this.currentPath);
    });
  }

  init() {
    this.handleRoute(this.currentPath);
  }
}