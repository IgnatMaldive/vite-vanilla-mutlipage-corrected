export function createAudience() {
  return `
    <div class="container mx-auto p-4">
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h1 class="text-2xl font-bold mb-6">Audience Insights</h1>
        
        <!-- Audience Analytics -->
        <div class="mt-8 grid md:grid-cols-2 gap-6">
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-lg font-semibold mb-4">Demographics</h3>
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Age 18-24</span>
                <span class="font-semibold">35%</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Age 25-34</span>
                <span class="font-semibold">45%</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Age 35-44</span>
                <span class="font-semibold">15%</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Age 45+</span>
                <span class="font-semibold">5%</span>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-lg font-semibold mb-4">Top Locations</h3>
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-gray-600">United States</span>
                <span class="font-semibold">45%</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">United Kingdom</span>
                <span class="font-semibold">20%</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Canada</span>
                <span class="font-semibold">15%</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Australia</span>
                <span class="font-semibold">10%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}