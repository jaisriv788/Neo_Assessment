import React from "react";
//import Button from "../Button/Button";
import "./Body.css";
import img from "../Images/Ethereum.png";
import Modal from "../Modal/Modal";
import Amount from "./Amount";
import ETHvalue from "./ETHvalue"

function Body() {
  return (
    <div className="box">
      <div className="topIcon">
        <img  src={img} alt="err" />
      </div>
      <div className="box1">
        <div>
          <div className="currentValue" >
            <p>Current value</p>
            <h3 className="price">$2000</h3>
          </div>
          <div className="selectbox">
            <img src={img} alt="err" />
            <h3>Etherum</h3>
            <div className="modal">
              <Modal  />
            </div>
          </div>
        </div>

        <div>
          <div className="val">
            <p>Amount You Want To Invest</p>
            <Amount />
          </div>
        </div>

        <div>
          <div  className="val Mui-readOnly">
            <p>Estimate number Of ETH you will get</p>
            <ETHvalue className="Mui-readOnly" />
          </div>
        </div>

        <div className="buy">
          <p>Buy</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
