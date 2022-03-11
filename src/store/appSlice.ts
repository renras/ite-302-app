import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import thumbnail1 from "../images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../images/image-product-4-thumbnail.jpg";
import fullimage1 from "../images/image-product-1.jpg";
import fullimage2 from "../images/image-product-2.jpg";
import fullimage3 from "../images/image-product-3.jpg";
import fullimage4 from "../images/image-product-4.jpg";

import * as data from "../users.json";

export interface User {
  username: string;
  password: string;
}

interface Products {
  title: string;
  price: number;
  thumbnail: string[];
  fullimages: string[];
}

interface Cart {
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
  id: number;
}

interface InitialState {
  products: Products[];
  cart: Cart[];
  totalItems: number;
  showLightBox: boolean;
  activeThumbnailIndex: number;
  showNavDrawer: boolean;
  showCartContent: boolean;
  showLoginForm: boolean;
  users: User[];
  loggedInUser: User | null;
  isRegistering: boolean;
  isHuman: boolean;
}

const initialState: InitialState = {
  products: [
    {
      title: "Fall Limited Edition Sneakers",
      price: 125,
      thumbnail: [thumbnail1, thumbnail2, thumbnail3, thumbnail4],
      fullimages: [fullimage1, fullimage2, fullimage3, fullimage4],
    },
  ],
  cart: [],
  users: data.users,
  totalItems: 0,
  showLightBox: false,
  activeThumbnailIndex: 0,
  showNavDrawer: false,
  showCartContent: false,
  loggedInUser: null,
  showLoginForm: false,
  isRegistering: false,
  isHuman: false,
};

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    addToCart(state, action: PayloadAction<{ quantity: number; id: number }>) {
      state.cart.push({
        title: state.products[0].title,
        price: state.products[0].price,
        quantity: action.payload.quantity,
        thumbnail: state.products[0].thumbnail[0],
        id: action.payload.id,
      });

      let total: number = 0;
      state.cart.forEach((item) => {
        total += item.quantity;
      });
      state.totalItems = total;
    },
    removeItem(state, action: PayloadAction<number>) {
      let found:
        | {
            title: string;
            price: number;
            quantity: number;
            thumbnail: string;
            id: number;
          }
        | undefined = state.cart.find((item) => item.id === action.payload);

      if (found) {
        state.totalItems -= found.quantity;
      }

      let newCart: {
        title: string;
        price: number;
        quantity: number;
        thumbnail: string;
        id: number;
      }[] = state.cart.filter((item) => item.id !== action.payload);

      state.cart = newCart;
    },
    changeLightBoxIndex(state, action: PayloadAction<number>) {
      state.activeThumbnailIndex = action.payload;
    },
    showLightBox(state) {
      state.showLightBox = true;
    },
    closeLightBox(state) {
      state.showLightBox = false;
    },
    incrementActiveThumbnailIndex(state) {
      state.activeThumbnailIndex += 1;
      if (state.activeThumbnailIndex > state.products[0].thumbnail.length - 1) {
        state.activeThumbnailIndex = 0;
      }
    },
    decrementActiveThumbnailIndex(state) {
      state.activeThumbnailIndex -= 1;
      if (state.activeThumbnailIndex < 0) {
        state.activeThumbnailIndex = state.products[0].thumbnail.length - 1;
      }
    },
    changeActiveThumbnailIndex(state, action: PayloadAction<number>) {
      state.activeThumbnailIndex = action.payload;
    },
    showNavDrawer(state) {
      state.showNavDrawer = !state.showNavDrawer;
    },
    showCart(state) {
      state.showCartContent = !state.showCartContent;
    },
    toggleLoginForm(state) {
      state.showLoginForm = !state.showLoginForm;
    },
    login(state, action: PayloadAction<User>) {
      state.loggedInUser = action.payload;
    },
    toggleIsRegistering(state) {
      state.isRegistering = !state.isRegistering;
    },
    registerUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
    toggleIsHuman(state, action: PayloadAction<boolean>) {
      state.isHuman = action.payload;
    },
    logout(state) {
      state.loggedInUser = null;
    },
  },
});

export const selectApp = (state: RootState) => state.app;

export const appActions = appSlice.actions;

export default appSlice.reducer;
