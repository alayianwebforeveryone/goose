import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AboutAccordian = () => {
  return (
    <>
      <div className="lg:w-[80%] xl:w-[60%] w-full mx-auto my-8 ">
        <div className="flex  flex-col lg:flex-row justify-center  gap-2" >
          <Accordion
            type="single"
            collapsible
            className=" gap-4 justify-center px-3 w-full   lg:w-[50%]  "
          >
          <div className="border px-3 ">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex justify-between items-center   w-full">
                    <span className=" ">1. Expertise</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                At Goose ITTC, We Have Teams Of Experts With Extensive Knowledge And Experience Across Technology Verticals And Domains. We Can Help You Analyze Your Business Needs, Design The Best Solution For You, And Execute It Flawlessly.
                </AccordionContent>
              </AccordionItem>
            </div>

            <div className="border px-3">
              <AccordionItem value="item-2">
                <AccordionTrigger>2. Flexibility</AccordionTrigger>
                <AccordionContent>
                Goose ITTC Can Adapt To Your Changing Requirements And Preferences. They Can Work With You On-Site Or Remotely, Depending On Your Convenience. They Can Also Customize Their Services And Solutions To Fit Your Budget And Timeline.
                </AccordionContent>
              </AccordionItem>
            </div>
          </Accordion>
          <Accordion
            type="single"
            collapsible
            className=" gap-4 justify-center px-3   w-full   lg:w-[50%]   "
          >
            <div className="border px-3 ">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex justify-between    w-full">
                    <span className=" ">3. Quality</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                Goose ITTC Follows The Best Practices And Standards In The Industry To Ensure That Their Services And Solutions Are Of The Highest Quality. They Also Use The Latest Tools And Technologies To Deliver Optimal Performance And Efficiency.
                </AccordionContent>
              </AccordionItem>
            </div>

            <div className="border px-3">
              <AccordionItem value="item-2">
                <AccordionTrigger>4. Customer Satisfaction</AccordionTrigger>
                <AccordionContent>
                Goose ITTC Values Its Customers And Strives To Exceed Their Expectations. They Provide Regular Updates And Feedback On The Progress Of The Project, And Are Always Available To Answer Any Questions Or Concerns. They Also Offer Post-Implementation Support And Maintenance To Ensure That Everything Runs Smoothly.
                </AccordionContent>
              </AccordionItem>
            </div>
          </Accordion>
          
        </div>
      </div>
    </>
  );
};

export default AboutAccordian;
