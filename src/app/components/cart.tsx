import { CartContext } from "@/context";
import React, { useContext } from "react";

const Cart = () => {
  const obj = useContext(CartContext);
  return (
    <div className="ml-5">
      <h1 className="ml-5">Cart</h1>
      <ol>
        {
            obj.cart[0]&&
        obj.cart.map((val: any, i: number) => {
          return (
         <li key={i}>
              <span className="mr-5">{val.id}</span>
              {val.name}
              <span className="ml-5" onClick={()=>obj.del(val.id)}>Remove from cart</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Cart;
