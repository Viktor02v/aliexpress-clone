import { defineStore } from "pinia";

interface UserStore {
  cart: Array<{ id: number; name: string;}>;
  isMenuOverlay: boolean;
  isLoading: boolean;
  checkout: Array<{}>;
}

export const useUserStore = defineStore('user', {
  state: (): UserStore => ({
    cart: [],
		isMenuOverlay:false,
		isLoading:false,
		checkout:[],
	}),
	persist:true
})