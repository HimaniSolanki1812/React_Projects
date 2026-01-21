// import React, { useState } from "react";

// export default function UseState3() {

//     // Array state
//     const [arr1, setArr1] = useState([10, 20, 30, 40, 50]);

//     // Input values
//     const [val1, setVal1] = useState(0);
//     const [val2, setVal2] = useState(0);

//     // Add element
//     const addElement = () => {
//         setArr1([...arr1, val1]);
//     };

//     // Remove element
//     const removeElement = () => {
//         setArr1(arr1.filter((x) => x !== val1));
//     };

//     // Update element (replace val1 with val2)
//     const updateElement = () => {
//         setArr1(arr1.map((x) => (x === val1 ? val2 : x)));
//     };

//     return (
//         <>
//             <h1>Array elements are: {arr1.join(", ")}</h1>

//             <input
//                 type="number"
//                 placeholder="Enter value"
//                 onChange={(e) => setVal1(parseInt(e.target.value))}
//             />
//             <br /><br />

//             <input
//                 type="number"
//                 placeholder="Enter new value (for update)"
//                 onChange={(e) => setVal2(parseInt(e.target.value))}
//             />
//             <br /><br />

//             <button onClick={addElement}>Add</button>
//             <button onClick={removeElement}>Remove</button>
//             <button onClick={updateElement}>Update</button>
//         </>
//     );
// }


import React,{useState} from "react";
export default function UseState3(){
    const [arr1,setArr1]=useState([10,20,30,40,50]);
    const [val1,setVal1]=useState(0);
    const [val2,setVal2]=useState(0);
    const addElement=(v1)=>{
        setArr1([...arr1,v1]);
    }
    const removeElement=(v1)=>{
        setArr1(arr1.filter((x)=>x!=v1));
    }
    const updateElement=(k1,v1)=>{
        setArr1(arr1.map((x)=>x==k1?k1=v1:x))
    }
    return(
        <>
        <h1>Array elements are:{arr1.join(", ")}</h1>
        <br/>
        <input type="text" onChange={(e)=>setVal1(parseInt(e.target.value))} placeholder="enter value to add" value={val1}/>
        <br/><br/>
        <input type="text" onChange={(e)=>setVal2(parseInt(e.target.value))} placeholder="enter value to remove" value={val2}/><br/><br/>
        <button onClick={()=>addElement(val1)}>Add elemnt</button>&nbsp;&nbsp;&nbsp;
        <button onClick={()=>removeElement(val2)}>remove element</button>&nbsp;&nbsp;&nbsp;
        <button onClick={()=>updateElement(val1,val2)}>update</button><br/>
        <div>
            <h2>
                Val1:{val1}<br/>
                val2:{val2}
            </h2>
        </div>
        </>
    );
}