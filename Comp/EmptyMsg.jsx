import { useContext, useRef } from "react";
import { ContextItems } from "../Store/Context";
function EmptyMsg({btnFunc}) {
    const range=useRef();
    return (
        <center className="msg">
        <h3>No Updated Data</h3>
        <div class="mb-3">
        <label for="Range" class="form-label">Enter the Range of Tweets you want 0-30</label>
        <input type="text" ref={range} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
         </div>
        <button  className="btn btn-primary" onClick={()=>btnFunc(range.current.value)}  >Click To Load</button>
    </center>
    ) 
    
  
}
export default EmptyMsg;