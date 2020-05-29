import React, {Component} from 'react'
import axios from 'axios'
 
class Form extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            price: '',
            image: ''
        }
    }

    // componentDidMount() {}

    // componentDidUpdate() {}

    handleChange = ({name, value}) => {
        this.setState({[name]: value})
    }

    handleAdd = () => {
        const {name, price} = this.state
        axios.post("api/products", {name, price})
        .then(() => this.props.history.push("/"))
    }

    resetState = () => this.setState({name: "", price: "", image: ""});


    render(){
        const { name, price } = this.state
        return(
            <div>
                <input placeholder="product name" name="name" value={name} 
                    onChange={(e) => this.handleChange(e.target)}/>
                <input placeholder="product price" name="price" value={price} 
                    onChange={(e) => this.handleChange(e.target)}/>
                <input placeholder="product image" name="image" value={image}
                    onChange={(e) => this.handleChange(e.target)}/>
                <button onClick={this.resetState}>Cancel</button>
                <button onClick={this.handleAdd}>Add to Inventory</button>
            </div>
        )
    }
}
export default Form