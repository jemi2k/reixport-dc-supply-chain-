import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Web3 from "web3";
import SupplyChainABI from "../artifacts/SupplyChain.json";

function AddMed() {
  const navigate = useNavigate();
  useEffect(() => {
    loadWeb3();
    loadBlockchaindata();
  }, []);

  const [currentaccount, setCurrentaccount] = useState("");
  const [loader, setloader] = useState(true);
  const [SupplyChain, setSupplyChain] = useState();
  const [MED, setMED] = useState();
  const [MedName, setMedName] = useState();
  const [MedDes, setMedDes] = useState();
  const [MedStage, setMedStage] = useState();

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
      window.alert("The smart contract is not deployed to current network, run on local node frist read more on README.md on github");
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
  const handlerChangeNameMED = (event) => {
    setMedName(event.target.value);
  };
  const handlerChangeDesMED = (event) => {
    setMedDes(event.target.value);
  };
  const handlerSubmitMED = async (event) => {
    event.preventDefault();
    try {
      var reciept = await SupplyChain.methods
        .addMedicine(MedName, MedDes)
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

      <hr />
      <br />

      <div class="container">
        <h4 className="btn btn-outline-dark  border-spacing: 5px">
          Add TF/DLC Order:
        </h4>
        <form onSubmit={handlerSubmitMED}>
          <div class="form-row">
            <div class="col-3">
              <input
                className="form-control"
                type="text"
                onChange={handlerChangeNameMED}
                placeholder="TF Name"
                required
              />
            </div>

            <div class="col-3">
              <input
                className="form-control"
                type="text"
                onChange={handlerChangeDesMED}
                placeholder="TF Description"
                required
              />
            </div>

            <div class="col-auto">
              <button
                className="btn btn-outline-primary mb-2"
                onSubmit={handlerSubmitMED}
              >
                Order/Apply
              </button>
            </div>
          </div>

          <br />
        </form>

        <h4 className="btn btn-outline-dark  border-spacing: 5px">
          Ordered TF/DLC
        </h4>
        <table className="table-bordered table-striped table  w-auto">
          <thead>
            <tr>
              <th scope="col">TF ID</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Current Stage</th>
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
      </div>
    </div>
  );
}

export default AddMed;
