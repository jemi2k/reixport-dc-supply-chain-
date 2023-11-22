import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const redirect_to_roles = () => {
    navigate("/roles");
  };
  const redirect_to_addmed = () => {
    navigate("/addmed");
  };
  const redirect_to_supply = () => {
    navigate("/supply");
  };
  const redirect_to_track = () => {
    navigate("/track");
  };
  return (
    <div className="container1">
      <div className="header">
        <h3 >Reixport &#8611; A Decentralized Trade Finance </h3>
      </div>
      <hr />
      <br />
      <div className="registe">
        {/* <h6>
          (Note: Here <u>Owner</u> is the person who deployed the smart contract
          on the blockchain)
        </h6> */}
        <h5 className="btn btn-outline-dark  border-spacing: 5px" >
          Register and Verify &#8611; Seller/Exporter, Buyer/Importer, Shipment and Logistics Provider, Issuing Bank and Advising Bank
        </h5>
        <h6>Note: This is a one time step</h6>
        <div class="col-auto">
        <button
          onClick={redirect_to_roles}
          className="btn btn-outline-primary mb-2"
        >
          Register and Verify
        </button></div>
      </div>
      <hr />
      <br />
      <div className="ordermedicine">
        <h5 className="btn btn-outline-dark  border-spacing: 5px" >Trade Intiation</h5>
        <div class="col-auto">
        <button
          onClick={redirect_to_addmed}
          className="btn btn-outline-primary mb-2"
        >
          Order/Apply for TF/DLC
        </button></div>
      </div>

      <hr />
      <br />
      <div className="controlchai">
        <h5 className="btn btn-outline-dark  border-spacing: 5px" >Manage Trade Finance </h5>
        <div class="col-auto">
        <button
          onClick={redirect_to_supply}
          className="btn btn-outline-primary mb-2"
        >
          Manage Trade Finance
        </button></div>
      </div>

      <hr />
      <br />
      <div className="trac">
        <h5 className="btn btn-outline-dark  border-spacing: 5px" >
          Track Trade Finance Transaction:
        </h5>
        <div class="col-auto">
        <button
          onClick={redirect_to_track}
          className="btn btn-outline-primary mb-2"
        >
          Track Trade Finance Transaction
        </button></div>
      </div>
      <hr />
      <br />
    </div>
  );
}

export default Home;
