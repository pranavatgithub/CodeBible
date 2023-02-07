// Force update a Functional Component - Hack

import React from "react";

export default function App() {
 const [, updateState] = React.useState();
 const forceUpdate = React.useCallback(() => updateState({}), []);

 console.log("rendering...");

 return (
   <div className="App">
     <h1>Time to force some updates</h1>
     <button onClick={forceUpdate}>Force re-render</button>
   </div>
 );
}

// In class based component

class Test extends React.Component {
  state = {};
  
  updateMeForcefully(){
    this.forceUpdate(() => {
      console.log('Updated!')
    });
  }
  
  render() {
    return (
       <p>Hello Force Update!</p>
    )
  }
}
