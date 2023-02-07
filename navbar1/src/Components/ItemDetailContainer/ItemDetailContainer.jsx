import {useState,useEffect} from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [element, setElement] = useState([])
    useEffect(() => {
        fetch('./json/products.json')
        .then(response => response.json())
        .then(prods => {
           const item = prods.find(prod => prod.id === 5)
           setElement(item)
        })
    }, [])
    return (
        <div className='card mb-3 container itemDetail'>
            <ItemDetail item={element}/>
        </div>
    );
}

export default ItemDetailContainer;