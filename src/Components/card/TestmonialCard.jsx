import React from 'react'
import unity_logo from "../../assests/logo/unity_logo.png"
import industry_logo from "../../assests/logo/industry_logo.png"
import help_logo from "../../assests/logo/help_logo.png"
const TestmonialCard = () => {
    const info=[
        {
            img:unity_logo,
            title:"Membership Organisations",
            paragraph:"Our membership management software provides full automation of membership renewals and payments"
        },{
         title:"National Associations",
         paragraph:"Our membership management software provides full automation of membership renewals and payments",
         img:industry_logo,
        },
        {
            title:"Clubs And Groups",
            paragraph:"Our membership management software provides full automation of membership renewals and payments",
            img:help_logo,
        }

    ]
  return (
    <div className='flex gap-10 flex-col md:flex-row lg:gap-20 mt-10'>
       {
        info.map((i,idx)=>(
            <div key={idx} className='p-10 rounded-2xl flex flex-col gap-3 items-center justify-center text-center border-2 border-white hover:border-[#4baf4f] max-w-[300px] shadow-2xs text-stone-600'>
                <div><img src={i.img} alt="" /></div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-lg font-bold max-w-sm lg:text-3xl'>{i.title}</h1>
                    <p className='text-sm text-center '>{i.paragraph}</p>
                </div>
            </div>
        ))
       }
    </div> 
  )
}

export default TestmonialCard