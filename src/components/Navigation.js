export function createNavigation() {
  return `
    <div class="bg-white shadow rounded-lg flex items-center justify-between p-4 mb-6">
      <div class="flex space-x-4">
        <a href="/dashboard" data-link class="text-sm font-bold text-gray-600 hover:text-blue-600 transition active:bg-blue-100 py-2 px-3 rounded-lg">Dashboard</a>
        <a href="/posts" data-link class="text-sm font-bold text-gray-600 hover:text-blue-600 transition active:bg-blue-100 py-2 px-3 rounded-lg">Posts</a>
        <a href="/audience" data-link class="text-sm font-bold text-gray-600 hover:text-blue-600 transition active:bg-blue-100 py-2 px-3 rounded-lg">Audience</a>
        <a href="/settings" data-link class="text-sm font-bold text-gray-600 hover:text-blue-600 transition active:bg-blue-100 py-2 px-3 rounded-lg">Settings</a>
      </div>
      <div class="bg-gray-200 text-gray-800 text-sm font-bold py-2 px-4 rounded-full">
        JD
      </div>
    </div>
  `;
}