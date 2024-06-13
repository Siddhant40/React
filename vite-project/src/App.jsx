import { useState } from "react";

function App(){
  let [counter,SetCounter]=useState(0);
  const add=()=>{
    console.log("Clicked");
    // now here if we have done just counter+1 then it will not be updated in our dom to do so we have to use Setcounter
    SetCounter(counter+1);
 
    //Now here  if we will try to update the value of set counter multiple time then it will not update it each time because
    //what react does is sends the functions in batches so all the setcounters are executed at the same time so there will be no change 
    
    // SetCounter(counter+1);
    // SetCounter(counter+1);
    // SetCounter(counter+1);
    // SetCounter(counter+1);
    // SetCounter(counter+1);

    //to update the counter multiple time we will use previous state

    // SetCounter((prevstate)=> prevstate+1);
    // SetCounter((prevstate)=> prevstate+1);
    // SetCounter((prevstate)=> prevstate+1);
    // SetCounter((prevstate)=> prevstate+1);
    // SetCounter((prevstate)=> prevstate+1);

  }
  const decrease=()=>{
    if(counter<=0){
      SetCounter(0);
    }
    else{
      SetCounter(counter-1);
    }
  }
  return(
    <>
    <h1>Siddhant</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={add}>Increase</button>
    <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default App
