export function createDashboard() {
  return `
    <div class="container mx-auto p-4">
      <div class="text-2xl font-bold text-gray-800 mb-6">Social Media Dashboard</div>
      
      <div class="flex flex-col md:flex-row md:space-x-4 mb-6">
        <!-- Schedule Post Section -->
        <div class="flex-1 bg-white p-6 rounded-lg shadow mb-4 md:mb-0">
          <h2 class="text-xl font-semibold text-gray-800 mb-4">Schedule Post</h2>
          <label for="platform" class="block text-sm font-medium text-gray-600 mb-2">Select Platform</label>
          <select id="platform" class="w-full p-2 border border-gray-300 rounded mb-4 focus:ring-blue-500 focus:border-blue-500">
            <option value="twitter">Twitter</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
          </select>
          <label for="message" class="block text-sm font-medium text-gray-600 mb-2">What's on your mind?</label>
          <input type="text" id="message" placeholder="Write something..." class="w-full p-2 border border-gray-300 rounded mb-4 focus:ring-blue-500 focus:border-blue-500">
          <label for="date" class="block text-sm font-medium text-gray-600 mb-2">Date & Time</label>
          <input type="datetime-local" id="date" class="w-full p-2 border border-gray-300 rounded mb-4 focus:ring-blue-500 focus:border-blue-500">
          <button onclick="window.schedulePost()" class="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition">Schedule</button>
        </div>

        <!-- Analytics Overview Section -->
        <div class="flex-1 bg-white p-6 rounded-lg shadow">
          <h2 class="text-xl font-semibold text-gray-800 mb-4">Analytics Overview</h2>
          <p class="text-gray-800 text-sm mb-2"><strong>Total Followers:</strong> 24.5K <span class="text-green-600">(+2.5% this week)</span></p>
          <p class="text-gray-800 text-sm mb-2"><strong>Total Posts:</strong> 128 <span class="text-green-600">(+12 this week)</span></p>
          <p class="text-gray-800 text-sm mb-2"><strong>Engagement Rate:</strong> 3.2% <span class="text-red-600">(-0.5% this week)</span></p>
          <p class="text-gray-800 text-sm"><strong>Average Reach:</strong> 5.7K <span class="text-green-600">(+1.2K this week)</span></p>
        </div>
      </div>

      <!-- Recent Posts section -->
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Recent Posts</h2>
        <div class="border-b border-gray-200 pb-4 mb-4">
          <div class="text-blue-600 font-semibold text-sm">Twitter</div>
          <div class="text-gray-600 text-sm mt-1">Just launched our new product! Check it out... <br><small class="text-gray-500">352 likes • 48 retweets</small></div>
        </div>
        <div class="border-b border-gray-200 pb-4 mb-4">
          <div class="text-blue-600 font-semibold text-sm">Facebook</div>
          <div class="text-gray-600 text-sm mt-1">We're hiring! Join our team and help us build the future... <br><small class="text-gray-500">89 likes • 23 comments</small></div>
        </div>
        <div>
          <div class="text-blue-600 font-semibold text-sm">Instagram</div>
          <div class="text-gray-600 text-sm mt-1">Behind the scenes at our annual team retreat! #TeamBuilding <br><small class="text-gray-500">1.2K likes • 78 comments</small></div>
        </div>
      </div>
    </div>
  `;
}