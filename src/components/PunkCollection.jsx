import React from "react";
import styled from "styled-components";
import Punks from "../Punks"
import Card from "./Cards"
import Main from "./Main"

const Punkies=styled.div`
    display:flex;
    justify-content:space-between;
    margin-left:20px;
    border-top:1px solid #fff; 

`
function PunkCollection(props)
{
    return(
        <Punkies>
            {Punks.map((punk)=>{
                return(
                    <Card
                    func={props.clickedPunk}
                    img={punk.img}
                    name={punk.name}
                    id={punk.id}
                    index={punk.index}
                    icon={punk.icon}
                    price={punk.price}/>
                )
            })}

        </Punkies>
    )
   
    
}
export default PunkCollection;