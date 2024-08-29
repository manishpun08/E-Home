import React from "react";
import { CustomTab } from "../ui/CustomTab";
import { Button } from "../ui/button";

export const RugColorChoice = () => {
  return (
    <>
      <div className="container">
        <h3 className="text-light font-Cinzel font-normal text-xl ">
          Choose your color
        </h3>
        <CustomTab />
        <div className="flex ">
          <div className="CustomSize mr-32">
            <h3 className="text-light font-Cinzel font-normal text-xl mb-4">
              Choose your Size
            </h3>
            <Button
              variant="secondary"
              className="text-d9d9 px-14 mr-8"
              style={{
                background:
                  "linear-gradient(90.73deg, rgba(233, 206, 110, 0.3) 1.69%, rgba(179, 135, 58, 0.3) 96.02%)",
              }}
            >
              Size 1
            </Button>
            <Button variant="secondary" className="text-d9d9 px-14 mr-8">
              Size 2
            </Button>
          </div>

          <div className="PaymentMethod ">
            <h3 className="text-light font-Cinzel font-normal text-xl mb-4">
              Choose your PAYMENT Method
            </h3>
            <Button
              variant="secondary"
              className="text-d9d9 px-14 mr-8"
              style={{
                background:
                  "linear-gradient(90.73deg, rgba(233, 206, 110, 0.3) 1.69%, rgba(179, 135, 58, 0.3) 96.02%)",
              }}
            >
              Cash in delivery
            </Button>
            <Button variant="secondary" className="text-d9d9 px-14 mr-8">
              Online
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
