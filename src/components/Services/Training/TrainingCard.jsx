import Image from 'next/image'
import React from 'react'


const TrainingCard = ({title,img,details}) => {

   
    return (
        <>
           
                    
                    <div  className="w-full bg-[#ffffff] h-[600px] rounded-lg border border-solid border-[#ECECEC] transition-[border_0.6s,border-radius_0.6s,box-shadow_0.6s] mx-[5px] relative p-[10px]
                        hover:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] hover:border-b-[10px] hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:border-[#1A73E9]">

                        <div className="mb-5 w-full h-[240px]"><Image src={img} alt="img" className="w-full h-full object-fill" loading="lazy" /></div>
                        <div className="text-center text-[#343434]">
                            <h2 className="text-[25px] leading-[30px] font-semibold text-text-black mb-5">{title}
                            </h2>
                            <p className="text-base font-normal leading-[28px] text-center">{details}</p>
                        </div>
                    </div>
                    
           

        </>
    )
}

export default TrainingCard