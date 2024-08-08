import Card from "./Card";
import { useContext } from "react";
import { ContextItems } from "../Store/Context";
import styles from "./Cards.module.css";
import EmptyMsg from "./EmptyMsg";
function Cards() {
    const {provideItems,addListItemsDef}=useContext(ContextItems);
    const fetchMethod=(range)=>{
      fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data=>addListItemsDef(data.posts,range));
    }
    return <div className= {styles.cards} >
    {provideItems.length==0 && <EmptyMsg btnFunc={fetchMethod}></EmptyMsg>}
    {provideItems.map((item)=> <Card item={item} ></Card>)}
    </div>
}
export default Cards;