import React from "react";
import { services } from "../constants";
import Card from "../Components/UI/Card";

const Service = () => {
  return (
    <div>
      <section className="py-2 my-16 px-20">
        <h1 className="font-[500] py-5 text-[40px] ">Services we provide</h1>
        <div className="grid grid-cols-2 gap-5">
          {services.map((service) => {
            return (
              <Card
                title={service.title}
                button={service.button}
                link={service.link}
                description={service.description}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Service;
