import React , { useState } from "react";
export default function Hook1Example(){
    const [count,setCount] = useState(0);   //start with usestate that's why this is hook  if  don't use the useState at that time this is function
        // first is  name of state variable(count), function is (setCount)
    const[name,setName] = useState("Guest");
    const[checked,setchecked]=useState(true);
    return(
        <div>
            <input type="checkbox" checked={checked} onChange={()=>setchecked(!checked)} />
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count+1)}> Increment</button>
            <button onClick={() => setCount(count-1)}> Decrement</button>
            <h1>Name:{name}</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />{" "}
        </div>
    )
}