import React, { useState } from "react";
import styled from "styled-components";
import Main from "./Main";
import ETH from "../assets/eth.png"
const PunkCard=styled.div`
    margin-top:15px;
    width:250px;
    height:auto;
    display:flex;
    border-radius:16px;
    background-color:#1a1c1e;
    margin-right:20px;
    cursor:pointer;
    flex-direction:column;

`
const Logo=styled.img`
    width:16px;
`

const Img=styled.img`
    width:100%;
    height:auto;
    border-radius:16px 16px 0px 0px ;
`
const TextWhite=
{
    color:"white"
}

const LogoModify={
    marginRight:"6px",

}
const Name=styled.p`
    font-size:1.2rem;
    color:#fff;
    margin-bottom:.5rem;
    font-weight:600;
`

const InfoOfPunk=styled.div`
    padding:1rem .5rem 2rem .5rem;
`
function Cards(props)
{
    function handleClickedPunk()
    {
        props.func(props)
    }
    return (
        <PunkCard onClick={handleClickedPunk} >
            <div>
                <Img src={props.img} alt="" />

            </div>
            <InfoOfPunk>
                <Name>{props.name}</Name>
                <p style={TextWhite}>{props.index}</p>
                <div style={{display:"flex",alignItems: "center",marginTop:"5px"}}>
                    <Logo style={LogoModify}src={ETH} alt="" />
                    <span style={TextWhite}>{props.price}</span>

                </div>

            </InfoOfPunk>

        </PunkCard>

    )

}

export default Cards;