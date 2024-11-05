export function createPosts() {
  return `
    <div class="container mx-auto p-4">
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h1 class="text-2xl font-bold mb-6">Content Management</h1>
        
        <!-- Post Management Tools -->
        <div class="mt-8 grid md:grid-cols-2 gap-6">
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-lg font-semibold mb-4">Scheduled Posts</h3>
            <div class="space-y-4">
              <div class="bg-white p-4 rounded shadow">
                <div class="text-sm text-blue-600 mb-1">Twitter • Tomorrow at 9:00 AM</div>
                <p class="text-gray-600">Exciting news coming soon! Stay tuned for our big announcement! #Innovation</p>
              </div>
              <div class="bg-white p-4 rounded shadow">
                <div class="text-sm text-blue-600 mb-1">Instagram • Feb 15 at 3:00 PM</div>
                <p class="text-gray-600">Behind the scenes look at our latest project. #BTS #Innovation</p>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-lg font-semibold mb-4">Post Performance</h3>
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Average Engagement</span>
                <span class="text-green-600 font-semibold">+12.5%</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Best Performing Time</span>
                <span class="font-semibold">3:00 PM - 6:00 PM</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Top Hashtag</span>
                <span class="font-semibold">#Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}