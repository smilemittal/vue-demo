/* eslint-disable */
<template>
  <div class="flex h-screen bg-gray-100 font-sans">
    <!-- Sidebar -->
    <div class="w-64 bg-white border-r">
      <!-- Sidebar Content -->
      <ul class="p-4">
        <li class="mb-4">
          <router-link to="/" class="text-blue-500">Dashboard</router-link>
        </li>
        <li class="mb-4">
          <router-link to="/analytics" class="text-gray-500">Analytics</router-link>
        </li>
        <li class="mb-4">
          <router-link to="/settings" class="text-gray-500">Settings</router-link>
        </li>
      </ul>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Top Bar -->
      <header class="bg-white border-b">
        <div class="flex justify-between items-center p-4">
          <h1 class="text-2xl font-semibold">Dashboard</h1>
          <div class="flex items-center">
            <router-link to="/notifications" class="mr-4 text-gray-600">Notifications</router-link>
            <router-link to="/profile" class="text-gray-600">Profile</router-link>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
        <!-- Cards -->
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <!-- Counter Card 1 -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold text-gray-800">Users</h2>
            <p class="text-3xl font-bold text-blue-500">{{ userCount }}</p>
          </div>

          <!-- Counter Card 2 -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold text-gray-800">Revenue</h2>
            <p class="text-3xl font-bold text-green-500">{{ revenue }}</p>
          </div>

          <!-- Counter Card 3 -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold text-gray-800">Orders</h2>
            <p class="text-3xl font-bold text-yellow-500">{{ orderCount }}</p>
          </div>

          <!-- Counter Card 4 -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold text-gray-800">Visits</h2>
            <p class="text-3xl font-bold text-red-500">{{ visitCount }}</p>
          </div>
        </div>

        <!-- Other Dashboard Components Go Here -->
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      userCount: 245,
      revenue: '$12,345',
      orderCount: 98,
      visitCount: 1234,
    };
  },
  mounted() {
    // Access the store
    console.log(this.$store);
  }
};
</script>
  