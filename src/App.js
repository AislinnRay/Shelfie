import React, {Component} from "react";
// import routes from "./routes";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form"
import axios from 'axios';
import Dashboard from './components/Dashboard/Dashboard';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       {routes}
//     </div>
//   )
// }

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: [
      // {name: "Bird",
      // price: 10,
      // image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTy2-DPTSQn93zUhWvPCTJ9KaEfsSL8_37xvwinUHdR9AEgAVtK&usqp=CAU"}, 
      // {name: "White Cat",
      // price: 20,
      // image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeCs-LxBuRQeKSMX_9ReThaeT4MQwhEVVWTOiNmIdwSHUSYPWY&usqp=CAU"},
      // {name: "Angry Cat",
      // price: 30,
      // image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6oxnCdS9tPl-jbnzEGFpc04EokkcsY4ESz-4WqKlxeE9l4Q92&usqp=CAU"},
      // {name: "Curious Cat",
      // price: 40,
      // image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGByiRj-WDu4Go07uy15XvmLwXFAgU9NGLBbjVSMZMlMlA7w3p&usqp=CAU"}
    ],

    }
    this.setList = this.setList.bind(this)
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
      <div className="App">
        <nav>
          <Header/>
          <Dashboard id = {this.state.list.id}
                   list = {this.state.list}
                   getList = {this.setList}/>
          <Form/>
        </nav>
      </div>
    )
  }
}

export default App
