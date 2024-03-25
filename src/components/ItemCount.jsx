import { useState } from "react";

export default function ItemCount(props) {
    const [cantidad, setCantidad] = useState(props.initial)

    function onAdd() {
        if (props.stock > 0) {
            props.onAdd(cantidad);
        }
    }

    function decrementar() {
        if (props.stock > 0) {
            const nuevaCantidad = cantidad - 1;
            setCantidad(nuevaCantidad == 0 ? 1 : nuevaCantidad);
        }
    }

    function aumentar() {
        if (props.stock > 0) {
            const nuevaCantidad = cantidad + 1;
            setCantidad(nuevaCantidad > props.stock ? props.stock : nuevaCantidad);
        }
    }

    return (
        <div>
            <button onClick={decrementar}>-</button>
            <input type="text" value={cantidad}/>
            <button onClick={aumentar}>+</button>
            <button onClick={onAdd} className='bg-white/60 rounded-lg text-black text-m m-2 px-4 py-0.6 flex justify-center items-center'>Agregar al carrito</button>
        </div>
    );
}