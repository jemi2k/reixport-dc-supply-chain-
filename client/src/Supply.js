import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Web3 from "web3";
import SupplyChainABI from "./artifacts/SupplyChain.json";

function Supply() {
  const navigate = useNavigate();
  useEffect(() => {
    loadWeb3();
    loadBlockchaindata();
  }, []);

  const [currentaccount, setCurrentaccount] = useState("");
  const [loader, setloader] = useState(true);
  const [SupplyChain, setSupplyChain] = useState();
  const [MED, setMED] = useState();
  const [MedStage, setMedStage] = useState();
  const [ID, setID] = useState();

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };
  const loadBlockchaindata = async () => {
    setloader(true);
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    setCurrentaccount(account);
    const networkId = await web3.eth.net.getId();
    const networkData = SupplyChainABI.networks[networkId];
    if (networkData) {
      const supplychain = new web3.eth.Contract(
        SupplyChainABI.abi,
        networkData.address
      );
      setSupplyChain(supplychain);
      var i;
      const medCtr = await supplychain.methods.medicineCtr().call();
      const med = {};
      const medStage = [];
      for (i = 0; i < medCtr; i++) {
        med[i] = await supplychain.methods.MedicineStock(i + 1).call();
        medStage[i] = await supplychain.methods.showStage(i + 1).call();
      }
      setMED(med);
      setMedStage(medStage);
      setloader(false);
    } else {
      window.alert("The smart contract is not deployed to current network");
    }
  };
  if (loader) {
    return (
      <div>
        <h1 className="wait">Loading...</h1>
      </div>
    );
  }
  const redirect_to_home = () => {
    navigate("/");
  };
  const handlerChangeID = (event) => {
    setID(event.target.value);
  };
  const handlerSubmitRMSsupply = async (event) => {
    event.preventDefault();
    try {
      var reciept = await SupplyChain.methods
        .RMSsupply(ID)
        .send({ from: currentaccount });
      if (reciept) {
        loadBlockchaindata();
      }
    } catch (err) {
      alert("An error occured!!!");
    }
  };
  const handlerSubmitManufacturing = async (event) => {
    event.preventDefault();
    try {
      var reciept = await SupplyChain.methods
        .Manufacturing(ID)
        .send({ from: currentaccount });
      if (reciept) {
        loadBlockchaindata();
      }
    } catch (err) {
      alert("An error occured!!!");
    }
  };
  const handlerSubmitDistribute = async (event) => {
    event.preventDefault();
    try {
      var reciept = await SupplyChain.methods
        .Distribute(ID)
        .send({ from: currentaccount });
      if (reciept) {
        loadBlockchaindata();
      }
    } catch (err) {
      alert("An error occured!!!");
    }
  };
  const handlerSubmitRetail = async (event) => {
    event.preventDefault();
    try {
      var reciept = await SupplyChain.methods
        .Retail(ID)
        .send({ from: currentaccount });
      if (reciept) {
        loadBlockchaindata();
      }
    } catch (err) {
      alert("An error occured!!!");
    }
  };
  const handlerSubmitSold = async (event) => {
    event.preventDefault();
    try {
      var reciept = await SupplyChain.methods
        .sold(ID)
        .send({ from: currentaccount });
      if (reciept) {
        loadBlockchaindata();
      }
    } catch (err) {
      alert("An error occured!!!");
    }
  };
  return (
    <div>
      
      <span
        onClick={redirect_to_home}
        className="btn btn-primary  border-spacing: 5px"
      >
        HOME 
      </span>
      <span className="btn btn-outline-primary  border-spacing: 5px">
        Account Address: {currentaccount}
      </span>

      <div class="container"> 
      
      <h5 className="btn btn-outline-dark  border-spacing: 5px" >
        ReiXport Work Flow
      </h5>
      <br />
      <p>
        TF/DLC Order &#8611; Issuing TF/DLC &#8611; Goods Shipment &#8611;
        Exporter/Seller Send DDC &#8611; Payment Settlement &#8611; Confirmation
      </p>
      
      <hr />
      <br />
      

      <table className="table-bordered table-striped table  w-auto">
        <thead>
          <tr>
            <th scope="col">TF/DLC Number</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Current Processing Stage</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(MED).map(function (key) {
            return (
              <tr key={key}>
                <td>{MED[key].id}</td>
                <td>{MED[key].name}</td>
                <td>{MED[key].description}</td>
                <td>{MedStage[key]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
      <hr />
      <br />
      <h5 className="btn btn-outline-dark  border-spacing: 5px" >
        Step 1 &#8611; Issuing TF/DLC | Only a Registered Party, Buyer/Importer/Bank,
       can Perform this Step
      </h5>
      <form onSubmit={handlerSubmitRMSsupply}>

      <div class="form-row">
    <div class="col-3">
        <input
          className="form-control"
          type="text"
          onChange={handlerChangeID}
          placeholder="Enter TF/DLC ID"
          required
        />
        </div>
        <div class="col-auto">
        <button
          className="btn btn-outline-primary mb-2"
          onSubmit={handlerSubmitRMSsupply}
        >
          Issue
        </button>
        </div>
        </div>

      </form>

     
      <br />
      <h5 className="btn btn-outline-dark  border-spacing: 5px" >
        Step 2 &#8611; Shipment | Only a Registered Logistics and Shipment Provider can Perform
        this Step
      </h5>
      <form onSubmit={handlerSubmitManufacturing}>

      <div class="form-row">
      <div class="col-3">
        <input
          className="form-control"
          type="text"
          onChange={handlerChangeID}
          placeholder="Enter TF/DLC ID"
          required
        />
        </div>
        <div class="col-auto">
        <button
          className="btn btn-outline-primary mb-2"
          onSubmit={handlerSubmitManufacturing}
        >
          Generate Shipment DDC
        </button>
        </div>
        </div> 

      </form>
      
      <br />
      <h5 className="btn btn-outline-dark  border-spacing: 5px" >
        Step 3 &#8611; Seller/Exporter | Only a registered Exporter/Seller can Perform this
        Step
      </h5>
      <form onSubmit={handlerSubmitDistribute}>
      <div class="form-row">
      <div class="col-3">
        <input
          className="form-control"
          type="text"
          onChange={handlerChangeID}
          placeholder="Enter TF/DLC ID"
          required
        />
        </div>
        <div class="col-auto">
        <button
          className="btn btn-outline-primary mb-2"
          onSubmit={handlerSubmitDistribute}
        >
          Send Shipment DDC
        </button></div>
        </div>
      </form>
      
      <br />
      <h5 className="btn btn-outline-dark  border-spacing: 5px" >
        Step 4 &#8611; Payment Settlement | Only a Registered, Buyer/Importer/Issuing Bank, can Perform this
        step
      </h5>
      <form onSubmit={handlerSubmitRetail}>
      <div class="form-row">
      <div class="col-3">
        <input
          className="form-control"
          type="text"
          onChange={handlerChangeID}
          placeholder="Enter TF/DLC ID"
          required
        />
        </div>
        <div class="col-auto">
        <button
          className="btn btn-outline-primary mb-2"
          onSubmit={handlerSubmitRetail}
        >
          Release Payment
        </button></div>
        </div>
      </form>
     
      <br />
      <h5 className="btn btn-outline-dark  border-spacing: 5px" >
        Step 5 &#8611; Confirm as Done | Only a Registered Party can Perform this
        step
      </h5>
      <form onSubmit={handlerSubmitSold}>
      <div class="form-row">
      <div class="col-3">
        <input
          className="form-control"
          type="text"
          onChange={handlerChangeID}
          placeholder="Enter TF/DLC ID"
          required
        />
        </div>
        <div class="col-auto">
        <button
          className="btn btn-outline-primary mb-2"
          onSubmit={handlerSubmitSold}
        >
          Confirm
        </button></div>
        </div>
      </form>
  
      </div>
    </div>
  );
}

export default Supply;
