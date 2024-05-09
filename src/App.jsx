import React from "react"
import Navbar from "./components/Navbar" 
import Secondpage from "./components/secondpage/Secondpage"
function App(){
  return(
    <div className="root">
      <Navbar></Navbar>
      {/* jo navbar ke naam upper diye hai na vo use karna */}
      <h1>first app</h1>
      <h1>home page</h1>
      <Secondpage></Secondpage>

    </div>
  )
}
export default App