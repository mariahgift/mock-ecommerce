import { createContext, useReducer } from "react";

export const Cartcontext = createContext();
export const Context = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "AddToCart":
        const tempstateAdd = state.filter(
          (product) => action.payload.id === product.id
        );
        if (tempstateAdd.length > 0) {
          return state;
        } else {
          return [...state, action.payload];
        }
      case "IncreaseCart":
        const tempstateIncrease = state.map((product) => {
          if (product.id === action.payload.id) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        });
        return tempstateIncrease;
      case "DecreaseCart":
        const tempstateDecrease = state.map((product) => {
          if (product.id === action.payload.id) {
            return { ...product, quantity: product.quantity - 1 };
          } else {
            return product;
          }
        });
        return tempstateDecrease;
      case "RemoveToCart":
        const tempstateRemove = state.filter(
          (product) => product.id !== action.payload.id
        );
        return tempstateRemove;

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };
  return (
    <Cartcontext.Provider value={info}>{props.children}</Cartcontext.Provider>
  );
};
