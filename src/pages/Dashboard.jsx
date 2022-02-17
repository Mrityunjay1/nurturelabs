import React from "react";
import {
  FaAirbnb,
  FaAngleDoubleRight,
  FaApplePay,
  FaArrowLeft,
  FaBullhorn,
  FaCaretDown,
  FaMoneyBill,
} from "react-icons/fa";
import BasicTabs from "../components/Tabpanel";
import bitcoin from "./11bitcoin.png";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="div-one">
        <div className="div-one-container">
          <h3>Section <hr/></h3>
          
          <div className="div-one-inside">
            <FaMoneyBill className="bill-icon" />
            <p>0.2 $XYZ</p>
            <button>Text</button>
          </div>
        </div>
        <div className="div-inside-two">
          <div className="div-inside-two-img">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <img src={bitcoin} alt="bitcoin" />
          </div>

          <p className="div-inside-two-p" style={{fontWeight:'500',fontSize:'15px',fontFamily:'Inter'}}>Tutorial</p>
        </div>
        <div className="div-inside-three">
          <div>
            <p>Your rewards</p>
            <h3>$ 0.26231428</h3>
          </div>
          <div className="div-inside-three-button">
            <p>$40 AVAX</p>
            <p>$10 BNB</p>
            <p>$210 BTC</p>
          </div>
        </div>
        <div className="div-inside-four-main">
          <div className="div-inside-four-container">
            <div className="div-inside-four">
              <FaAirbnb className="icon" />
              <p>12.5% of fee</p>
            </div>
            <p>Your Referral Link for xyz</p>
            <p className="div-inside-four-p2">https://unityexchange.design </p>
          </div>
          <div className="div-inside-four-container">
            <div className="div-inside-four">
              <FaAirbnb className="icon" />
              <p>12.5% of fee</p>
            </div>
            <p>Your Referral Link for xyz</p>
            <p className="div-inside-four-p2">https://unityexchange.design </p>
          </div>
        </div>
        <BasicTabs />
      </div>
      <div>
        <div>
          <div className="div-two-container">
            <div className="div-two-container2">
              <img
                src={bitcoin}
                alt="bitcoin"
                style={{ height: "20px", width: "20px" }}
              />
              <p style={{ marginLeft: "5px" }}>Avalanche</p>
              <FaCaretDown style={{ height: "20px", width: "20px" }} />
            </div>
            <div className="div-two-container3">
              <FaApplePay
                style={{
                  height: "20px",
                  width: "20px",
                  border: "1.25176px solid #3772FF",
                  borderRadius: "10px",
                }}
              />
              <p style={{ marginLeft: "5px" }}>0xf6...1353</p>
              <FaCaretDown style={{ height: "20px", width: "20px" }} />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaArrowLeft style={{ marginLeft: "25px", marginTop: "25px" }} />
            <p
              style={{
                marginLeft: "15px",
                marginTop: "25px",
                textAlign: "center",
                fontSize: "20px",
                textTransform: "capitalize",
              }}
            >
              Custom Link
            </p>
          </div>
          <p style={{ marginLeft: "25px", marginTop: "25px" }}>
            https://testnet.xyz.xyz/trade?ref
          </p>
          <input
            style={{
              marginLeft: "25px",
              marginTop: "25px",
              color: "white",
              background: "#242731",
              mixBlendMode: "normal",
              borderRadius: "12px",
              width: "335px",
              height: "55px",
            }}
            placeholder="Enter"
          />
          <div style={{display:'flex',justifyContent:'space-between',marginTop:'25px',marginLeft:'25px'}}>
            <button style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',background:'#3772FF',color:'white',borderRadius: '10px',width:'145px',height:'40px'}}>
              <FaBullhorn style={{fontSize:'20px'}} />
              <p style={{fontSize:'18px'}}>Custom link</p>
            </button>
            <button style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',background:'black',borderRadius:'12px',border:'1px solid #242731',color:'white',borderRadius: '10px',width:'145px',height:'40px'}}>
              <FaAngleDoubleRight style={{fontSize:'20px'}} />
              <p style={{fontSize:'18px'}}>Cancel</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
