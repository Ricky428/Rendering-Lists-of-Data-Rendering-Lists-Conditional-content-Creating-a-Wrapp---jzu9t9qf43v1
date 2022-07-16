import React, {Component, useState} from "react";
import '../styles/App.css';

const arr = [{key :"relativeListItem1",name : "Ricky"},
{key :"relativeListItem2", name : "Chinnu"},
{key :"relativeListItem3", name : "Alex"},
{key :"relativeListItem4", name : "Caesar"}]

class App extends Component {
  
    render() {
        
        const relativeList = arr.map((item)=>
             <li key={item.key}>{item.name}</li> )

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <ol key="relativeList">{relativeList}</ol>
            </div>
        )
    }
}


export default App;
