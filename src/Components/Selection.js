import React from "react";

const Selection=(props)=>{
    console.log(props)
    const {applyColor}=props
    console.log(applyColor.background)
    const Applyer=(e)=>{
       e.target.style.backgroundColor=applyColor.background;
    }

    return(
        <div className="selection">
           <div className="selection-color" onClick={(e)=>Applyer(e)}></div>
        </div>
    )
}
export default Selection;