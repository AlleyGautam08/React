import { Component } from "react";

class ClassEvent extends Component{
     handleClick(){
          console.log("class based event hanlding");
     }
     render(){
          return(
               <div>
                    this is a class base components
                    <button onClick={this.handleClick}>Click me please!</button>
               </div>
          );
     }
}
export default ClassEvent;