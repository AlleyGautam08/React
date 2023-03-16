import { Component } from "react";
class Resume extends Component{
     render(){
          const {name} = this.props;
          return <h1>This is a class compnents {name}</h1>;
     }
}
export default Resume;