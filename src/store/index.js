// auth.js

import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isAuthenticated: false,
    user: null,
  }),
  actions: {
    login(username, password) {
      this.isAuthenticated = true;
      this.user = { username };
      this.password = { password };
    },
    logout() {
      this.isAuthenticated = false;
      this.user = null;
    },
  },
});
