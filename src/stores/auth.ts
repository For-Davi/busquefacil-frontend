import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { User } from 'src/ts/interfaces/data/User';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    loadingAuth: false,
    user: useStorage('auto_user', {} as User | null),
    token: useStorage('auto_token', null as string | null),
  }),

  actions: {
    setUser(user: User | null) {
      this.user = user;
    },
    setLoading(loading: boolean) {
      this.loadingAuth = loading;
    },
    setToken(token: string | null) {
      this.token = token;
    },
  },
});
