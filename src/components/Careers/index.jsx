import Image from "next/image";
import Link from "next/link";
import React from "react";
import TrainingCard from "./TrainingCard";
import Course1 from '../../../Assets/images/assessment.jpg';
import instructionDesign from '../../../Assets/images/instructionDesign.png';
import globalContractAndLMS from '../../../Assets/images/globalContractAndLMS.png';
import Elearning from '../../../Assets/images/Elearning.png';
import userAdoptation from '../../../Assets/images/userAdoptation.jpg';


const Careers = () => {

  const trainingContent = [
    {
      title: "Training Needs Assessment",
      details: "Our Skilled Instructional Design Consultants Will Work With Your Team To Deliver The Right Training Needs Analysis To Identify And Address Your Learner Knowledge And Skills Gaps. Download Free Training Needs Assessment Templates And Tools Today.",
      img: Course1,

    },
    {
      title: "Instructional Design Consulting Services",
      details: "Our Top Instructional Designers Provide Employee-Centric Learning Design Based On Your Learners’ Needs And Training Program Objectives. Contact Us Today To Learn More About How Our Instructional Design Consulting Services Can HelpYour Organization.",
      img: instructionDesign,

    },
    {
      title: "Global Contract Trainers",
      details: "Create New Custom ELearning Programs, Maintain Existing Ones Or Take In-Class Training Content Online With Gooseittc’ Dedicated Team OfExperienced ELearning Developers.",
      img: globalContractAndLMS,

    },
    {
      title: "Custom ELearning Design And Development",
      details: "Train Sales And Services Teams And More With The Right Corporate Trainer. With A Network Of Over 30,000 Training Consultants, Gooseittc IsYour Top Contract Training Services Provider.",
      img: Elearning,

    },
    {
      title: "User Adoption Strategy And Training",
      details: "Increase Employee Adoption Of New Technologies Like Salesforce, SAP, Workday, Microsoft Dynamics, And More. Our Team Of Training Consultants Will Create Results-Driven User Adoption Strategies And Training.",
      img: userAdoptation,

    },
    {
      title: "Learning Management System (LMS)",
      details: "Improve Your Overall Learner Experience  While Easily Managing Company Training And Development Records, Data And Reports With A Fully Hosted LMS Solution From Gooseittc. See What Your Learner Portal Could Look Like With A Free Demo.",
      img: globalContractAndLMS,

    },

  ]
  return (
    <div>
      <h1 className="text-4xl  font-bold text-center text-black">Careers</h1>
      <div className="h-[calc(100vh-150px)] flex flex-col gap-4 justify-center items-center">
        <h1 className="2xl:text-[55px] text-center sm:text-5xl text-4xl font-bold text-blue">Careers page is under
          maintenance.</h1><svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-[64px] 2xl:text-[80px]  font-bold text-blue animate-spin" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
        <Link href="/">
          <button className="py-3 px-10 bg-blue text-2xl text-white rounded-md"> Back</button>
        </Link>
      </div>








      <div className="technology-training-hero-bg bg-cover overflow-hidden">
        <div className="md:max-w-[760px] mx-auto xl:max-w-[1160px] w-full px-4 md:min-h-[420px] min-h-[602px] relative flex items-center">
          <div className>
            <h1 className="md:text-[42px] xl:text-[50px] md:leading-[3.5rem] sm:text-4xl text-3xl text-left leading-[1.4] font-bold text-[#FFFFFF] mb-[20px]">
              Technology Training</h1>
            <p className="text-[#FFFFFF] font-medium lg:max-w-[63.956%] lg:w-[62%] md:w-[55.9%] sm:w-[70%] w-[90%] sm:text-base text-sm md:leading-[30px] leading-[25px] mb-[20px]">
              We Understand That Technology Is Always Evolving, And It Can Be Difficult For Businesses And
              Organizations To Keep Up. That’s Why We Offer Interactive Instructor-Led Training Services To Help You
              And Your Team Stay Up-To-Date With The Latest Technology Advancements. Our Training Sessions Are
              Interactive And Engaging, And Our Instructors Are Experts In Their Respective Fields. Whether You Need
              Training For Software Development, Technology Consulting Or Any Other IT Related Fields, We Have Got
              You Covered</p><a href="https://gooseittc.com/contact"><button className="btn-sub z-[3] inline-flex items-center bg-blue text-base font-semibold text-center px-5 md:px-10 justify-center
                                                overflow-hidden relative text-[#FFFFFF] uppercase py-4 md:py-5 rounded-full">Contact us<svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="ml-2 text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z" />
                  <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z" />
                </svg></button></a>
          </div>
        </div>
      </div>

      <div class="my-[50px] bg-bg-color relative">
        <div class="md:max-w-[760px] mx-auto xl:max-w-[1160px] w-full px-4">
          <div class="p-[10px]">
            <div class="mb-1">
              <h2 class="p-[10px] text-center w-full md:text-[36px] text-[20px] font-bold">Leading Training Services
                Company</h2>
            </div>
            <div class="text-[#000000] text-[30px] text-center">
              <h6 class="text-base font-medium leading-[30px] text-text-black">To Stay Relevant And Competitive In
                Today’s Fast-Paced Business World, Your Employees Must Perform At Their Best. Gooseittc Delivers
                Engaging And Innovative Corporate Training Programs That Strategically Align With Your Business
                Goals</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-bg-color relative">
        {/* <div className="md:max-w-[760px] mx-auto xl:max-w-[1160px] w-full px-4"> */}
        <div className="grid place-content-center xl:gap-y-12 md:gap-y-8 gap-y-5 gap-x-6 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 pb-5">
          {
            trainingContent.map(({ img, title, details }, index) => {
              return (
                <div key={index}>
                  <TrainingCard title={title} img={img} details={details} />
                </div>
              )
            })
          }

        </div>
        {/* </div> */}
      </div>





      <div className="bg-bg-color relative">
        <div className="md:max-w-[760px] mx-auto xl:max-w-[1160px] w-full px-4">
          <div className="p-[10px]">
            <div className="mb-1 my-[50px]">
              <h2 className="p-[10px] text-center w-full md:text-[36px] text-[20px] font-bold">Training Streams</h2>
            </div>
          </div>
        </div>
        <div className="bg-[#F5F5F5]">
          <div className="md:max-w-[760px] mx-auto xl:max-w-[1160px] w-full px-4">
            <div className="py-[30px] w-full">
              <div className="w-full flex md:flex-row flex-col justify-between gap-y-5">
                <div className="md:w-[50%] w-full sm:p-[10px] text-center">
                  <div className="w-full text-center flex justify-center"><Image src={Course1}   alt="training-img" className="self-end" /></div>
                </div>
                <div className="md:w-[50%] w-full sm:p-[10px] text-start text-[#000000]">
                  <h2 className="text-[25px] mb-5 font-bold text-start">Microsoft</h2>
                  <p className="mb-5 text-base font-normal leading-[30px] text-start">Microsoft Power Platform And
                    SharePoint Are Two Microsoft Technologies That Organizations Can Use To Automate Processes,
                    Create Workflows, And Share Information.</p>
                  <p className=" text-base font-normal leading-[30px] text-start">Overall, Both Microsoft Power Platform
                    And SharePoint Enable Organizations To Streamline Processes, Automate Tasks, And Improve
                    Collaboration Across Teams And Departments. They Are Powerful Tools That Can Help Organizations
                    To Increase Efficiency, Reduce Costs, And Drive Innovation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFFF] md:my-[50px] my-5">
          <div className="md:max-w-[760px] mx-auto xl:max-w-[1160px] w-full px-4">
            <div className="py-[30px] w-full">
              <div className="w-full flex md:flex-row-reverse flex-col justify-between gap-y-5">
                <div className="md:w-[50%] w-full sm:p-[10px] text-center">
                  <div className="w-full text-center flex justify-center"><Image src={instructionDesign}  alt="training-img" className="self-end" /></div>
                </div>
                <div className="md:w-[50%] w-full sm:p-[10px] text-start text-[#000000]">
                  <h2 className="text-[25px] mb-5 font-bold text-start">SAP IBP Cloud</h2>
                  <p className="mb-5 text-base font-normal leading-[30px] text-start">SAP Integrated Business Planning
                    (IBP) Is A Cloud-Based Planning And Forecasting Solution That Helps Organizations Improve Their
                    Supply Chain Processes. IBP Enables Businesses To Create Integrated Plans For Demand, Inventory,
                    Supply, And Financials. It Provides Real-Time Visibility Into Planning Data, Enables
                    Collaboration Across Departments And Partners, And Helps Organizations To Quickly Respond To
                    Changing Business Conditions Using A Range Of Functions, Including Demand Planning, Inventory
                    Optimization, Supply, Response Planning And Supply Chain Control Tower.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F5F5F5] md:my-[50px] my-5">
          <div className="md:max-w-[760px] mx-auto xl:max-w-[1160px] w-full px-4">
            <div className="py-[30px] w-full">
              <div className="w-full flex md:flex-row flex-col justify-between gap-y-5">
                <div className="md:w-[50%] w-full sm:p-[10px] text-center">
                  <div className="w-full text-center flex justify-center"><Image src={globalContractAndLMS}  alt="training-img" className="self-end" /></div>
                </div>
                <div className="md:w-[50%] w-full sm:p-[10px] text-start text-[#000000]">
                  <h2 className="text-[25px] mb-5 font-bold text-start">Oracle Cloud</h2>
                  <p className="mb-5 text-base font-normal leading-[30px] text-start">Oracle Cloud Is A Suite Of Cloud
                    Computing Services Offered By Oracle Corporation. It Includes A Wide Range Of Services Such As
                    Infrastructure As A Service (IaaS), Platform As A Service (PaaS), Software As A Service (SaaS),
                    And Data As A Service (DaaS). Oracle Cloud Provides Businesses With A Comprehensive And
                    Integrated Cloud Platform That Can Be Used To Build, Deploy, And Manage Various Types Of
                    Applications And Services. With Features Such As High Availability, Security, Scalability, And
                    Flexibility, Oracle Cloud Enables Businesses To Reduce Costs, Increase Efficiency, And Drive
                    Innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFFF] md:my-[50px] my-5">
          <div className="md:max-w-[760px] mx-auto xl:max-w-[1160px] w-full px-4">
            <div className="py-[30px] w-full">
              <div className="w-full flex md:flex-row-reverse flex-col justify-between gap-y-5">
                <div className="md:w-[50%] w-full sm:p-[10px] text-center">
                  <div className="w-full text-center flex justify-center"><Image src={Course1}  alt="training-img" className="self-end" /></div>
                </div>
                <div className="md:w-[50%] w-full sm:p-[10px] text-start text-[#000000]">
                  <h2 className="text-[25px] mb-5 font-bold text-start">SCRUM</h2>
                  <p className="mb-5 text-base font-normal leading-[30px] text-start">Scrum Is An Agile Methodology Used
                    For Software Development And Project Management. It Is A Framework That Enables Teams To Work
                    Collaboratively To Deliver High-Quality Products In An Iterative And Incremental Manner. Scrum
                    Is Based On The Principles Of Transparency, Inspection, And Adaptation.</p>
                  <p className="mb-5 text-base font-normal leading-[30px] text-start">Scrum Involves A Set Of Predefined
                    Roles, Events, Artifacts, And Rules.</p>
                  <p className="text-base font-normal leading-[30px] text-start">Overall, Scrum Provides A Flexible And
                    Adaptable Framework For Teams To Work Collaboratively And Iteratively To Deliver High-Quality
                    Products. It Encourages Transparency, Inspection, And Adaptation, Enabling Teams To Continuously
                    Improve Their Processes And Deliverables.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F5F5F5]">
          <div className="md:max-w-[760px] mx-auto xl:max-w-[1160px] w-full px-4">
            <div className="py-[30px] w-full">
              <div className="w-full flex md:flex-row flex-col justify-between gap-y-5">
                <div className="md:w-[50%] w-full sm:p-[10px] text-center">
                  <div className="w-full text-center flex justify-center"><Image src={globalContractAndLMS}   alt="training-img" className="self-end" /></div>
                </div>
                <div className="md:w-[50%] w-full sm:p-[10px] text-start text-[#000000]">
                  <h2 className="text-[25px] mb-5 font-bold text-start">Multimedia Tools</h2>
                  <p className="mb-5 text-base font-normal leading-[30px] text-start">Multimedia Tools Are Software
                    Applications Designed To Create, Edit, And Manipulate Multimedia Content, Such As Images, Audio,
                    Video, And Animations. These Tools Can Be Used In A Wide Range Of Fields And Industries,
                    Including Education, Entertainment, Marketing, Advertising, And More.</p>
                  <p className=" text-base font-normal leading-[30px] text-start">Overall, Multimedia Tools Have
                    Numerous Uses And Applications In Various Industries, And Their Importance Continues To Grow As
                    Digital Media Becomes More Prevalent In Our Daily Lives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>




  );
};

export default Careers;
