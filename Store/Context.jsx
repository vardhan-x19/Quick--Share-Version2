import { createContext, useReducer } from "react";


export const ContextItems=createContext([]);

const defValues=[{
    id:1,
    title:"Iam going to hyd",
    body:"Iam very much intersted and its good to go after completing my semister exams I hope i can enjoy a Lot",
    tags:["#happy","#enjoy","#pandagow"],
    likes:0
},
{
    id:2,
    title:"Pass Hogaya BenStokes",
    body:"After wasting 4 years of enginneing stiil I passed .I Can't Believ it that i really pass the exam?",
    tags:["#proud","#unbelevable","#emotional"],
    likes:0
}
]

function reduceFunc(curValue,action) {
   let updatedValues=curValue;
   if(action.type==="DELETE_ITEM")
   {
    updatedValues=curValue.filter((item)=>item.id!==action.payload.id);
   }
   else if(action.type==="Liked")
   {
    updatedValues=curValue.map((item)=>item.id===action.payload.id?{...item,reactions: {
        ...item.reactions,
        likes: action.payload.likes++ 
    }}:item)
   }
   else if(action.type==="addListItems")
   {
    updatedValues=[
        ...curValue,{
            id:action.payload.id,
            title:action.payload.title,
            body:action.payload.desc,
            tags:[action.payload.tags],
            reactions: {likes: 0, dislikes: 0}
        }
    ]
   }
   else if(action.type==="addListItemsDef")
   {
    updatedValues = action.payload.posts.slice(0,action.payload.range);
    console.log(action.payload.range);
   }
   else if(action.type==="disLike"){
    updatedValues=curValue.map((item)=>item.id===action.payload.id?{...item,reactions: {
        ...item.reactions,
        dislikes: action.payload.dislikes++
    }}:item)
   }
   return updatedValues;
}
function ContextProvider({children}) {
    
    const[provideItems,dispachItems]=useReducer(reduceFunc,[]);
    
    const addListItems=(id,title,desc,tags)=>{
        const changeItems={
            type:"addListItems",
            payload:{
                id,
                title,
                desc,
                tags
            }
        }
        dispachItems(changeItems);
    }
    const addListItemsDef=(posts,range)=>{
        const changeItems={
            type:"addListItemsDef",
            payload:{
                posts,
                range
            }
        }
        dispachItems(changeItems);
    }

    const delListItems=(id)=>{
        const changeItems={
            type:"DELETE_ITEM",
            payload:{id}
        }
        dispachItems(changeItems);
    }

    const liked=(id,likes)=>{ 
        const changeItems={
            type:"Liked",
            payload:{id,likes}
        }
        dispachItems(changeItems);
    }
    const disLikes=(id,dislikes)=>{ 
        const changeItems={
            type:"disLike",
            payload:{id,dislikes}
        }
        dispachItems(changeItems);
    }
   
    return (
        <ContextItems.Provider 
        value={{provideItems, addListItems,
        delListItems,liked,addListItemsDef,disLikes}}>
        {children}
        </ContextItems.Provider>
    ) 
}


export default ContextProvider;
