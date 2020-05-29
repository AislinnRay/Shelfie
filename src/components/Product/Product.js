import React from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

function Product({product, history, setList}){
    const deleteItem = () => {
        axios.delete(`/api/products/${product.product_id}`).then((res) => {
            setList()
        })
    }
    return (
        <div>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <img src={product.image}/>
            <button
            onClick ={() => history.push(`/form/${product.product_id}`)}
            >Edit</button>
            <button onClick={deleteItem}>Delete</button>
        </div>
    )
}

export default withRouter(Product)