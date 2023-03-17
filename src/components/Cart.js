import React, {useContext} from "react";
import { Cartcontext } from "../context/Context";

const Cart = () => {
    const Globalstate = useContext(Cartcontext);
    const state = Globalstate.state;
    const dispatch = Globalstate.dispatch;

    const total = state.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0);

    return (
        <div>   
            <h1 className="text-center m-5">Cart</h1>
            <div className="cart">
            {state.map((product, index) => {
                return (
                    <div className="card" key={index}>
                    <img src={product.image} alt={product.price} />
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                    <p>{product.quantity}</p>
                    <div className="quantity">
                      <button
                        onClick={() => dispatch({ type: "IncreaseCart", payload: product })}>
                        +
                      </button>
                     
                      <button
                        onClick={() => {
                          if (product.quantity > 1) {
                            dispatch({ type: "DecreaseCart", payload: product });
                          } else {
                            dispatch({ type: "RemoveToCart", payload: product });
                          }
                        }}>
                        -
                      </button>
                    </div>
                    <h2 onClick={() => dispatch({ type: "RemoveToCart", payload: product })}>
                      x
                    </h2>
                  </div>
                );
            })};

            {state.length > 0 && (
                    <div className="total">
                    <h2>{total}</h2>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart