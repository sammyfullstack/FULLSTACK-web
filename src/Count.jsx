import { useEffect, useState } from "react"

function Count(){
  const [count, setCount] = useState(0);

  useEffect(()=> {
    document.title = `Pressed ${count} times`;
  }, [count]);

  useEffect(()=> {
    return count < 0 ? setCount(0) : undefined;
  }, [count]);

  useEffect(()=> {
     return count < 0 ? alert ("Cannot go below Zero") : undefined;
  }, [count]);
  return(
    <div>
      <h1 style={{fontSize: "20px", color: "blue"}}>Count: <strong>{count}</strong></h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Subtract</button>
      <button onClick={() => setCount(count * 3)}>Multiply by 3</button>
      <button onClick={()=> setCount(0)}>Reset</button>
      {/* <button onClick={()=> setCount }></button> */}

    </div>
  )
}

export default Count;