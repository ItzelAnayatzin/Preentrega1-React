import {useState,useEffect} from 'react';
import {ItemList} from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('./json/products.json')
        .then(response => response.json())
        .then(prods => {
            console.log(prods)
            const productsList = ItemList ({prods})
            console.log(productsList)
            setProducts(productsList)
        })
    }, [])
    return (
        <div className='row align-items-center justify-content-center m-3'>
            {products}
        </div>
    );
}

export default ItemListContainer;
