export function createLayout(content) {
  return `
    <div class="min-h-screen bg-gray-100 font-sans antialiased">
      ${content}
    </div>
  `;
}