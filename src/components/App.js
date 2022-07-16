import React, {Component, useState} from "react";
import '../styles/App.css';

const arr = [{key :"relativeListItem",name : "Ricky"},
{key :"relativeListItem", name : "Chinnu"},
{key :"relativeListItem", name : "Alex"},
{key :"relativeListItem", name : "Caesar"}]

class App extends Component {
  
    render() {
        
        const relativeList = arr.map((item,idx)=>
             <li key={item.key+idx}>{item.name}</li> )

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <ol key="relativeList">{relativeList}</ol>
            </div>
        )
    }
}


export default App;
