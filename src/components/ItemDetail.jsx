import { useState } from "react";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext"
import { NavLink } from "react-router-dom";

export default function ItemDetail(props) {
  const cartContext = useContext(CartContext)
  const [agregado, setAgregado] = useState(cartContext.isInCart(props.item.id));

  function onAdd(quantity) {
    cartContext.addToCart(props.item, quantity)
    setAgregado(true);
  }

  const precio = props.item.price.toLocaleString('es-ar', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2
  });

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={props.item.pictureUrl}
        alt={props.item.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.item.title}</div>
        <p className="text-gray-700 text-base">
          {props.item.description}
        </p>
        {agregado ? <NavLink to="/cart" className='bg-white/60 rounded-lg text-black text-m m-2 px-3 py-0.5 flex justify-center items-center'>Terminar compra</NavLink> : <ItemCount stock={props.item.stock} initial={1} onAdd={onAdd} />}
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {precio}
        </span>
      </div>
    </div>
  );
}
