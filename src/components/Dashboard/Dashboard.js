import React, { Component } from "react";
import Product from "../Product/Product";
import axios from "axios";
import styleDash from './styleDash.css';

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
    }
  }
  componentDidMount() {
    this.setList()
  }

  setList = () => {
    axios
      .get("/api/products")
      .then((res) => {
        this.setState({ list: res.data })
      })
      .catch((err) => console.log(err))
  }
  render() {
    return (
      <div className="Dash">
        {this.state.list.map((product) => {
          return <Product key={product.product_id} setList={this.setList} product={product} />
        })}
      </div>
    )
  }
}

export default Dashboard