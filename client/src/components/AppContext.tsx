import { createContext } from "react";

export const AppContext = createContext({
  isLoggedIn: undefined,
  loadProducts: () => undefined,
  handleSignUpSubmit: () => undefined,
  handleArrowClick: () => undefined,
  handleSignInSubmit: () => undefined,
  handleSignIn: () => undefined,
  addToCart: () => undefined,
});
