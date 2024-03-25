import { useEffect, useState } from 'react';
import Item from './Item';
import { useParams } from 'react-router-dom';
import { getAll, getByCategory } from '../repository/item.repository';

export default function ItemListContainer(props) {
    const params = useParams()
    const [items, setItems] = useState([])
    useEffect(() => {
        const promise = params.id ? getByCategory(params.id) : getAll();
        promise.then( (items) => setItems(items));
    }, [params]);
    return (
        <div className='flex flex-col items-center mt-20 mb-40'>
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                { items.length > 0 ? 
                    items.map( (item) => <Item key={item.id} item={item}/>)
                     :
                    <>
                        <span>Cargando productos...</span>
                    </>

                }
            </div>
        </div>
    );
}