import React from "react"

export const Input = (props) => {
    const { value,label,handleInput,setfname, key} = props
    return (
        <>
            {label}
            <input type="text" onChange={(e) => handleInput(e.target.value,key )} />
        </>
    )
}




export const Input2 = (props) => {
    const { value,label,setfname} = props
    return (
        <>
            {label}
            <input type="text" onChange={(e) => setfname(e.target.value)} />
        </>
    )
}