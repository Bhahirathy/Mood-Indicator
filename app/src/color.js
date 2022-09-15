import Select from "react-select"
import { useState } from "react"
const Bgcolor=()=>{
    var colors=[
        {
            value:1,
            label:"Sad",
            color:"blue"
        },
        {
            value:2,
            label:"Happy",
            color:"yellow"
        },
        {
            value:3,
            label:"Sleep",
            color:"green"
        },
        {
            value:4,
            label:"Excited",
            color:"pink"
        }
    ]
    const [label,setLabel]=useState(colors.label)
    const [setBgcolor,bgValue]=useState(colors.color)
    const colorHanlde=(e)=>{
        bgValue(e.color)
        setLabel(e.label)
    }
    return(
        <>
        <style>
            {"body{background-Color:"+setBgcolor+";}"}
        </style>
        <Select options={colors} onChange={colorHanlde}></Select>
        <center>
            <b>I am  {label}</b>
        </center>
        </>
    )
}
export default Bgcolor