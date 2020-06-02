import React, { Component } from "react";
import Product from "../Product/Product";
import axios from "axios";
import styleDash from './styleDash.css';

class Dashboard extends Component {
  constructor() {
    super()


    this.handleDelete=this.handleDelete.bind(this)
  }

  handleDelete(product_id){
    axios.delete(`/api/products/${product_id}`).then(res => {this.props.getList(res.data)})
  }
//       list: [
//       {name: "Bird",
//       price: 10,
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTy2-DPTSQn93zUhWvPCTJ9KaEfsSL8_37xvwinUHdR9AEgAVtK&usqp=CAU"}, 
//       {name: "White Cat",
//       price: 20,
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeCs-LxBuRQeKSMX_9ReThaeT4MQwhEVVWTOiNmIdwSHUSYPWY&usqp=CAU"},
//       {name: "Angry Cat",
//       price: 30,
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6oxnCdS9tPl-jbnzEGFpc04EokkcsY4ESz-4WqKlxeE9l4Q92&usqp=CAU"},
//       {name: "Curious Cat",
//       price: 40,
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGByiRj-WDu4Go07uy15XvmLwXFAgU9NGLBbjVSMZMlMlA7w3p&usqp=CAU"}
//     ],
//     }
//   }
//   componentDidMount() {
//     this.setList()
//   }

//   setList = () => {
//     axios
//       .get("/api/products")
//       .then((res) => {
//         this.setState({ list: res.data })
//       })
//       .catch((err) => console.log(err))
//   }
//   render() {
//     return (
//       <div className="Dash">
//         {this.state.list.map((product) => {
//           return <Product key={product.product_id} setList={this.setList} product={product} />
//         })}
//       </div>
//     )

      render(){
        const mapList = this.props.list.map((product) => {
          console.log(product)
          return (<Product key={product.index} newProd={product} id={product.product_id} delete={this.handleDelete}/>
        )})
        return (
          <div className="Dash">
            {mapList}
          </div>
        )
      }
}

export default Dashboard