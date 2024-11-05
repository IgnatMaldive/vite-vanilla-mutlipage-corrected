import './style.css';
import { Router } from './router';
import { createLayout } from './components/layout';
import { createNavigation } from './components/Navigation';
import { createDashboard } from './components/Dashboard';
import { createPosts } from './components/Posts';
import { createAudience } from './components/Audience';
import { createSettings } from './components/Settings';
import { schedulePost } from './utils';

// Add schedulePost to window object for onclick access
window.schedulePost = schedulePost;

const routes = {
  '/': () => {
    return createLayout(`
      ${createNavigation()}
      ${createDashboard()}
    `);
  },
  '/dashboard': () => {
    return createLayout(`
      ${createNavigation()}
      ${createDashboard()}
    `);
  },
  '/posts': () => {
    return createLayout(`
      ${createNavigation()}
      ${createPosts()}
    `);
  },
  '/audience': () => {
    return createLayout(`
      ${createNavigation()}
      ${createAudience()}
    `);
  },
  '/settings': () => {
    return createLayout(`
      ${createNavigation()}
      ${createSettings()}
    `);
  },
  '/404': () => {
    return createLayout(`
      ${createNavigation()}
      <div class="text-center py-16">
        <h1 class="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p class="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
        <a href="/" data-link class="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
          Go Home
        </a>
      </div>
    `);
  }
};

const router = new Router(routes);
router.init();