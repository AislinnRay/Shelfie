import React from 'react';
// import {withRouter} from 'react-router-dom';
// import axios from 'axios';
import styleProd from './styleProd.css';

// function Product({product, history, setList}){
//     const deleteItem = () => {
//         axios.delete(`/api/products/${product.product_id}`).then((res) => {
//             setList()
//         })
//     }
//     return (
//         <div className="Product">
//             <img className="product_img" src={product.image}/>
//             <a>
//             <div className="product_title">{product.name}</div>
//             <div className="product_price">${product.price}</div>
//             <a className="buttons">
//             <button className="product_box"
//             onClick ={() => history.push(`/form/${product.product_id}`)}
//             >Edit</button>
//             <button className="product_box" onClick={deleteItem}>Delete</button>
//             </a>
//             </a>
//         </div>
//     )
// }

// export default withRouter(Product)

function Product(props){
    return(
        <div className = "Product">
            <img className="product_img" src ={props.newProd.image} alt = 'Picture'/>
            <a>
            <div className="product_title">{props.newProd.name}</div>
             <div className="product_price">${props.newProd.price}</div>
             <a className="buttons">
             <button className="product_box"
                onClick ={() => props.edit(props.id)}
                >Edit</button>
            <button className="product_box" onClick={() => props.delete(props.id)}>Delete</button>
            </a>
            </a>
        </div>
    )
}

 export default Product