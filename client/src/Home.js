import Button from "./Components/UI/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Components/UI/Card";
import { services } from "./constants";

function Home() {
  return (
    <div>
      <section className="bg-[#f4f8fd] py-2 px-20">
        <h1 className="font-[800] text-center my-10 text-[55px]">
          Efficient Trade Document Management
        </h1>
        <p className="px-16  text-center   text-[18px]">
          Welcome to ReiXport, where we specialize in providing secure and
          reliable document management solutions for international trade. Our
          Blockchain Document Transfer (BDT) solution is the largest and
          fastest-growing platform for electronic trade documents. With over 65
          types of documents supported, including bills of lading, letters of
          credit, and certificates, our platform streamlines your trade document
          processing. Trust ReiXport for secure and efficient digital document
          management.
        </p>

        <img
          className="my-5 rounded-[20px]"
          alt="homepage hero"
          src={require("./assets/homepage-hero.jpg")}
        />

        <div className="flex justify-center w-full">
          <Button>LEARN MORE</Button>
        </div>
      </section>
      {/* <section className="bg-[#f4f8fd] py-2 px-20">
        <div className="grid grid-cols-2">
          <div>
            <h1 className="font-[800] text-center my-10 text-[40px]">
              Efficient Trade Document Management
            </h1>
            <p className="px-16  text-center pb-5  text-[18px]">
              Welcome to ReiXport, where we specialize in providing secure and
              reliable document management solutions for international trade.
              Our Blockchain Document Transfer (BDT) solution is the largest and
              fastest-growing platform for electronic trade documents. With over
              65 types of documents supported, including bills of lading,
              letters of credit, and certificates, our platform streamlines your
              trade document processing. Trust ReiXport for secure and efficient
              digital document management.
            </p>
            <div className="flex justify-center w-full">
              <Button>LEARN MORE</Button>
            </div>
          </div>
          <div className="flex felx-col justify-center">
            <img
              className="object-cover my-5 rounded-[20px]"
              alt="homepage hero"
              src={require("./assets/homepage-hero.jpg")}
            />
          </div>
        </div>
      </section> */}
      <section className="py-2 my-16 px-20">
        <h1 className="font-[500] py-5 text-[40px] ">Services we provide</h1>
        <div className="grid grid-cols-2 gap-5">
          {services.map((service) => {
            return (
              <Card title={service.title} description={service.description} />
            );
          })}
        </div>
      </section>
      <section className="bg-[#f4f8fd] py-10  px-20">
        <div className="grid grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="font-bold text-[40px] my-2">
              Global Trading Inc: Automating Trade Document Processing
            </h1>
            <p className="text-[18px]">
              Discover how we helped Global Trading Inc streamline their trade
              document processing with our ReiXport Platform, resulting in a 50%
              reduction in processing time and increased accuracy in document
              management.
            </p>
            <div className="my-4">
              <Button>READ MORE</Button>
            </div>
          </div>
          <div>
            <img
              className="rounded-[10px]"
              src={require("./assets/main-1.jpg")}
              alt="main-1"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f4f8fd]  py-5 px-20">
        <div className="grid grid-cols-2 gap-16">
          <img
            className="rounded-[10px]"
            src={require("./assets/main-2.jpg")}
            alt="main-2"
          />
          <div className="flex flex-col justify-center">
            <h1 className="font-bold text-[40px] my-2">
              Baltic Shipping Co: Secure Electronic Document Transfer
            </h1>
            <p className="text-[18px]">
              Learn how we helped Baltic Shipping Co improve their document
              transfer process with our Blockchain Document Transfer (BDT)
              solution, ensuring the highest level of security and reducing the
              risk of fraud.
            </p>
            <div className="my-4">
              <Button>READ MORE</Button>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
