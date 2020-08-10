import React from 'react';
import './list-items.css';

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
   {
       return <div className="list" key={item.key}>
     <p>
         <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
        <span>
       
        <div >
        <img src={require("./Icon.png")} className="faicons"   onClick={() => {
            props.deleteItem(item.key)
        }}
        />
        </div>
        
        </span>
        </p>
     
     
    </div>
    })
     return <div>
         {listItems}
        
    
    </div>;
  }

  export default ListItems;