import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getById } from "../repository/item.repository";

export default function ItemDetailContainer() {
    const params = useParams();
    const [item, setItem] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        getById(params.id).then( (item) => {
            setItem(item);
            setIsLoading(false)
        },
        (error) => {
            console.log(error.message);
        })
    }, [params])

    return (
        <div className='flex flex-col items-center mt-20 mb-40'>
            {isLoading ? <span>Loading...</span> : <ItemDetail item={item}/> }
        </div>
    );
}