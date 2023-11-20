import create from "zustand";

export const useStore = create((set) => ({
  cartItems: [],
  cartTotal: 0,
  isSignedIn: false,

  setIsSignedIn: () => {
    set((state) => ({
      isSignedIn: !state.isSignedIn,
    }));
  },

  addToCart: (item) => {
    set((state) => {
      // SEE IF I ALREADY HAVE ITEM IN CART
      const existingItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        // ADD QUANTITY IF I ALREADY HAVE IT
        state.cartItems[existingItemIndex].quantity += 1;
      } else {
        // IF I DON'T HAVE IT, ADD QUANTITY STILL
        state.cartItems.push({ ...item, quantity: 1 });
      }

      // UPDATE MY TOTAL
      state.cartTotal += item.price;

      // GIVE ME BACK UPDATE STATE
      return { cartItems: [...state.cartItems], cartTotal: state.cartTotal };
    });
  },

  //REMOVE ITEMS & CHANGE TOTAL
  removeFromCart: (item) => {
    set((state) => ({
      cartItems: state.cartItems.filter((cartItem) => cartItem !== item),
      cartTotal: (state.cartTotal -= item.price),
    }));
  },

  //RESET MY CART AFTER CHECKOUT
  resetCart: () => {
    set({
      cartItems: [],
      cartTotal: 0,
    });
  },
}));
