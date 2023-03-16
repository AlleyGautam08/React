import {Component} from "react";
class Counter extends Component{
     constructor(){
          super();
          this.state= {
               Counter :0,
          };
          // this.increment = this.increment.bind(this);
     } 
     increment = () => {
          console.log(this);
          this.setState({
               Counter: this.state.Counter +1,
          });
     }
    render(){
         return (<div>
              <h3>Count value is :{this.state.Counter}</h3>
         <button onClick={this.increment}>click</button>
         </div>)
         
    }
}
export default Counter;