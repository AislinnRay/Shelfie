import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEdit: false,
      name: "",
      price: 0,
      image: ""
    }
  }

  componentDidMount() {
    const { product_id } = this.props.match.params
    if (product_id) {
      axios.get(`/api/products/${product_id}`).then((results) => {
        this.setState({
          name: results.data.name,
          price: results.data.price,
          image: results.data.image,
          isEdit: true,
        })
      })
    }
  }

  componentDidUpdate(prevProps) {
    const { product_id } = this.props.match.params
    if (!product_id && prevProps.match.params.product_id) { // if there is no longer an id and there was previously one (need previously one so this does not fire over and over)
      this.setState({ isEdit: false, name: "", price: 0, image: "" })
    }
  }

  handleChange = ({ name, value }) => {
    this.setState({ [name]: value })  //name is a value on the state object and name is in brackets because it is a key (key value pairs)
  }

  handleAdd = () => {
    const { name, price, image} = this.state
    axios.post("/api/products", { name, price, image }).then(() => {
      this.props.history.push("/")
    })
  }

  handleEdit = () => {
    const { name, price, image } = this.state
    axios
      .put(`/api/people/${this.props.match.params.product_id}`, { name, price, image })
      .then(() => {
        this.props.history.push("/")
      })
  }

  resetState = () => this.setState({name: "", price: 0, image: ""});

  render() {
    const { name, price, image, isEdit } = this.state
    return (
      <div className="form-container">
        <img src={image}/>
        <p>Image</p>
        <input placeholder="name product"
          name="name"
          value={name}
          onChange={(e) => this.handleChange(e.target)}
        />
        <input
          name="price"
          value={price}
          onChange={(e) => this.handleChange(e.target)}
        />
        <input placeholder="image URL"
          name="image"
          value={image}
          onChange={(e) => this.handleChange(e.target)}
        />
        {isEdit ? (
          <button onClick={this.handleEdit}>Edit</button>
        ) : (
            <div>
                <button onClick={this.handleAdd}>Add</button>
                <button onClick={this.resetState}>Cancel</button>
            </div>
        )}
      </div>
    )
  }
}

export default Form