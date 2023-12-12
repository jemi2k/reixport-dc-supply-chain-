import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <img
        className="w-full h-48 object-cover"
        src={require("../assets/main-11.jpg")}
        alt="about us"
      />

      <div className="w-[60%] my-8 mx-auto">
        <h1 className="text-[40px] text-blue-700 w-[80%] mb-3 mx-auto font-bold">
          Welcome to ReiXport: Simplifying Trade Documents with Blockchain
        </h1>
        <p className="mt-3 text-center mt-4 text-[20px]">
          Experience hassle-free document management with our secure and
          user-friendly web application. Easily transfer and manage your
          electronic trade documents, all while enjoying the highest level of
          security and peace of mind.{" "}
        </p>

        <p className="mt-3 text-center text-[20px]">
          {" "}
          The problem we are addressing is that African trade relies on slow,
          paper-heavy processes for sharing documents between buyers and sellers
          across borders. This introduces delays, costs, and risks that impair
          efficiency and trust. Our product allows users to create trade
          documents to our blockchain based platform, where they are digitally
          signed and encrypted.{" "}
        </p>

        <p className="mt-3 text-center text-[20px]">
          {" "}
          Counterparties can then access and authenticate the documents through
          our web app. ReiXport is streamlining international trade through a
          blockchain-based document transfer platform. Our solution digitizes
          the transmission of critical trade documents like bills of lading,
          letters of credit, and certificates of origin.{" "}
        </p>

        <p className="mt-3 text-center text-[20px]">
          Our goal is to become the global standard for digital trade document
          exchange. We plan to aggressively expand our document library and
          integrate with key platforms like shipping systems and trade finance
          networks.
        </p>
        <div className="flex justify-center">
          <Link to="/contact">
            <button className="px-5 py-3 mt-3 rounded-[10px] text-white hover:bg-blue-900 hover:border-black border-2  bg-blue-600">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
