import Context from "./Context";
import React, {useState} from "react";

const ContextState=(props)=>{
    const [searchValue,setSearchValue]=useState("")
    return <Context.Provider value={{searchValue, setSearchValue}}>
        {props.children}
    </Context.Provider>
}

export default  ContextState