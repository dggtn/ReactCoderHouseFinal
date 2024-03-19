import { useEffect, useState } from 'react';
import Item from './Item';
import { obtenerProductoPorCategoria, obtenerTodos } from '../assets/api';
import { useParams } from 'react-router-dom';

export default function ItemListContainer(props) {
    const params = useParams()
    const [items, setItems] = useState([])
    useEffect(() => {
        const promise = new Promise((resolve) =>{
                setTimeout( () => {
                    if (params.id) {
                        resolve(obtenerProductoPorCategoria(params.id))
                    } else {
                        resolve(obtenerTodos())
                    }
                }, 2000)
            });

        promise.then((items) => {
            setItems(items)
        });
    }, [params]);
    return (
        <div className='flex flex-col items-center mt-20 mb-40'>
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                { items.length > 0 ? 
                    items.map( (item) => <Item item={item}/>)
                     :
                    <>
                        <span>No se encontraron productos</span>
                    </>

                }
            </div>
        </div>
    );
}