import { CiCircleRemove } from "react-icons/ci";
import { ContextItems } from "../Store/Context";
import { SlLike } from "react-icons/sl";
import { FaRegCircleUser } from "react-icons/fa6";
import { useContext, useState } from "react";
import { SlDislike } from "react-icons/sl";

function Card({item}) {
    const {delListItems,liked,disLikes}=useContext(ContextItems);

    const [check,setCheck]= useState(false);
    const [disLike,setDisLike]= useState(false);

    const btnCheck=()=>{
        liked(item.id,item.reactions.likes);
        setCheck(true);
    }
    const btnDislike=()=>{
        disLikes(item.id,item.reactions.dislikes);
        setDisLike(true);
    }
    return <>
    <div class="card" style={{width: "18rem"}}>
    <div class="card-body">
        <h5>  <CiCircleRemove  onClick={()=>{delListItems(item.id)}}></CiCircleRemove> <FaRegCircleUser /> {item.id} </h5>
        <h5 class="card-title"> {item.title}</h5>
        <p class="card-text"> {item.body} </p>
        <div className="btnGroup">
        <button type="button" class="btn btn-primary" disabled={check} onClick={btnCheck}>
        <SlLike /> <span class="badge text-bg-secondary">{item.reactions.likes} </span>
        </button>
        <button disabled={disLike}  onClick={btnDislike}  type="button" class="btn btn-info"><SlDislike />   <span class="badge text-bg-primary">{item.reactions.dislikes} </span></button>
        </div>
        <br/>
        {item.tags.map((item)=><span class="badge text-bg-secondary">{item}</span>)}
    </div>
    </div>
    </>
}
export default Card;