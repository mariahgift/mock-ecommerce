import React, { useContext } from "react";
import { Cartcontext } from "../context/Context";
import "../index.css";
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
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Product Image</th>
              <th scope="col">Product Title</th>
              <th scope="col">Product Price</th>
              <th scope="col">Product Quantity</th>
              <th scope="col">Product Total</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          </table>
        {state.map((product, index) => {
          return (
            <table>
 <tbody>
              <tr>
                <td>
                  <img
                    className="img-thumbnail"
                    src={product.image}
                    alt={product.title}
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    className="btn btn-info m-2"
                    onClick={() =>
                      dispatch({ type: "IncreaseCart", payload: product })
                    }
                  >
                    +
                  </button>
                  {product.quantity}
                  <button
                    className="btn btn-info m-2"
                    onClick={() => {
                      if (product.quantity > 1) {
                        dispatch({ type: "DecreaseCart", payload: product });
                      } else {
                        dispatch({ type: "RemoveToCart", payload: product });
                      }
                    }}
                  >
                    -
                  </button>
                </td>
                <td>{product.price * product.quantity}</td>
                {/* <td>{product.price * product.quantity}</td> */}
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() =>
                      dispatch({ type: "RemoveToCart", payload: product })
                    }
                  >
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
            </table>
           
          );
        })}

        {state.length > 0 && (
          <div className="total">
            <p className="text-right fw-bold h2"> Total: {total}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
