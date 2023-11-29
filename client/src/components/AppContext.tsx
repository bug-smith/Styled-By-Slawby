import { createContext } from "react";

export const AppContext = createContext({
  isLoggedIn: undefined,
  products: undefined,
  loadProducts: () => undefined,
  handleSignUpSubmit: () => undefined,
  handleArrowClick: () => undefined,
  handleSignInSubmit: () => undefined,
  handleSignIn: () => undefined,
  addToCart: () => undefined,
});
