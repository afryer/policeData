import { Component } from "react"
import axios from "axios"
import Dropdown from "../Dropdown"

class Forces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forces: []
    }
  }
componentDidMount() {
  axios.get("https://data.police.uk/api/forces")
    .then( (response) =>{
      console.log(response.data);
      const forces = response.data
      this.setState({forces});

    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render() {
    console.log(this.state.forces)
    return (
      <Dropdown options={this.state.forces}/>
    )
  }
}

export default Forces;
