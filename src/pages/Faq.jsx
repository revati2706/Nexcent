import { Divide } from 'lucide-react'
import React from 'react'

const Faq = () => {
    const info=[{
        img:"https://nexcent4.netlify.app/assets/blog-1-DAJd0q7A.png",
        title:"Creating Streamlined Safeguarding Processes with One Ren"
    },{
        img:"https://nexcent4.netlify.app/assets/blog-1-DAJd0q7A.png",
        title:"What are your safeguarding responsibilities and how can you manage them?"
    },{
        img:"https://nexcent4.netlify.app/assets/blog-1-DAJd0q7A.png",
        title:"Revamping the Membership Model with Triathlon Australia"
    }]
  return (
    <section className='w-full min-h-[600px] '>
     <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center p-10 gap-5 md:p-20 text-center lg:max-w-[800px] '>
            <h1 className='text-xl font-bold text-center text-stone-600 md:text-2xl'>Caring is the new marketing</h1>
            <p className='text-sm text-justify text-stone-500 md:text-center lg:text-lg'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
        </div>

        <div className="flex flex-col items-center  md:flex-row md:flex-wrap md:justify-center">
  {info.map((i, indx) => (
    <div
      key={indx}
      className="relative m-10 flex flex-col justify-center items-center"
    >
      {/* Image */}
      <div className="h-45 w-60 md:h-60 md:w-80">
        <img className="h-full w-full object-cover rounded-xl" src={i.img} alt="" />
      </div>

      {/* Overlay */}
      <div className="
        absolute left-1/2 -translate-x-1/2 
        -bottom-8 md:-bottom-10
        w-52 md:w-60
        flex flex-col items-center font-[inter]
        p-4 rounded-2xl bg-[#f6f7fb] shadow-xl
      ">
        <h1 className="text-center text-sm md:text-base text-stone-600">{i.title}</h1>
        <button className="text-[#4baf4f] font-bold mt-1">Read More</button>
      </div>
    </div>
  ))}
</div>

     </div>

     <div className='flex flex-col items-center lg:m-10 m-5 gap-5'>
        <h1 className='text-xl font-bold text-stone-600 text-center capitalize md:text-2xl md:max-w-[500px]'>Experience seamless and flexible support tailored to your needs</h1>
        <button className='p-3 bg-[#4baf4f] w-1/2 md:w-[180px] font-bold text-white rounded-md hover:bg-transparent border-2 hover:border-[#4baf4f] hover:text-[#4baf4f]'>Get A Demo </button>
     </div>
    </section>
  )
}

export default Faq