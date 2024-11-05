export function createSettings() {
  return `
    <div class="container mx-auto p-4">
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h1 class="text-2xl font-bold mb-6">Account Settings</h1>
        
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Profile Settings</h2>
          <div class="space-y-4">
            <div class="flex flex-col">
              <label class="text-sm font-medium text-gray-700">Account Name</label>
              <input type="text" value="John Doe" 
                     class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            </div>
            <div class="flex flex-col">
              <label class="text-sm font-medium text-gray-700">Email</label>
              <input type="email" value="john@example.com" 
                     class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            </div>
          </div>
        </div>

        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Connected Accounts</h2>
          <div class="space-y-4">
            <div class="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 class="font-medium">Twitter</h3>
                <p class="text-sm text-gray-500">Last synced: Feb 10, 2024</p>
              </div>
              <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Connected
              </button>
            </div>
            <div class="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 class="font-medium">Facebook</h3>
                <p class="text-sm text-gray-500">Last synced: Feb 10, 2024</p>
              </div>
              <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Connected
              </button>
            </div>
          </div>
        </div>
        
        <div class="mt-6 flex justify-end">
          <button class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  `;
}