import { useState } from "react";

export default function ItemCount(props) {
    const [cantidad, setCantidad] = useState(props.stock > 0 ? 1 : 0)

    function onAdd() {
        if (props.stock > 0) {
            console.log("Se agregaron: ", cantidad)
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
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    );
}