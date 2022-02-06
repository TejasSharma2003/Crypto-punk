import React from "react";
import master from "../punks/1.jpg";
import insta from "../assets/owner/instagram.png";
import twitter from "../assets/owner/twitter.png";
import more from "../assets/owner/more.png";
import styled from "styled-components"

const MainDiv=styled.div`
  margin-left:20px;
  // border-bottom:2px solid #fff;
  margin-bottom:15px;
`
function Main(props) {
  return (
    <MainDiv className="mainDiv">
      <div className="highLigthedPunk">
        <img src={props.img} alt="" />
      </div>
      <div className="userInfo">
        <div className="name" style={{ display: "flex" }}>
          <h1 style={{marginRight:"10px"}}>{props.name}</h1>
          <h1>{props.index}</h1>
        </div>
        <div className="details">
          <h1>osdijfoisdjfjsdfisdh</h1>
          <div className="handles">
            <div className="circel">
              <img src={twitter} alt="" />
            </div>
            <div className="circel">
              <img src={insta} alt="" />
            </div>

            <div className="circel">
              <img src={more} alt="" />
            </div>
          </div>
        </div>
      </div>
    </MainDiv>
  );
}
export default Main;
