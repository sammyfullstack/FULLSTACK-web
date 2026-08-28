import {useState} from "react";
   
function Sneaker(){
  const [sneakerCount, setSneakerCount] = useState(0);

  const addSneaker = ()=>{
    setSneakerCount(sneakerCount + 1)
  }

  const removeSneaker = ()=>{
    setSneakerCount(sneakerCount - 1)
  }

  return(
    <div>
      <h1 style={{fontSize: "40px"}}>Sammy Soles</h1>
      <p>Cart: <strong>{sneakerCount}</strong></p>
      <button onClick={addSneaker}
      style={{padding: "5px", borderRadius: "4px", border: "none", backgroundColor: "gold", marginRight: "20px"}}>Add cart</button>
      <button onClick={removeSneaker}
      style={{padding: "5px", borderRadius: "4px", border: "none", backgroundColor: "gold"}}>Remove cart</button>
    </div>
  )
}
export default Sneaker;

