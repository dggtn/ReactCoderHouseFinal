import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { obtenerProductoPorId } from '../assets/api';
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
    const params = useParams();
    const [item, setItem] = useState({})

    useEffect(()=>{
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(obtenerProductoPorId(params.id))
            }, 2000)
        })

        promise.then((itemEncontrado) => {
            setItem(itemEncontrado);
        })
    }, [params])

    return (
        <div className='flex flex-col items-center mt-20 mb-40'>
            <ItemDetail item={item}/>
        </div>
    );
}