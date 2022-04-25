import gsap from "gsap"
import Head from "next/head"
import { useEffect, useState } from "react"
import { FaArrowRight } from "react-icons/fa"

const circleColor = '#578f8a'
export default function Home() {

  const [loading, setLoading] = useState(true)

  //clip-path: polygon(00% 0, 100% 0%, 100% 100%, 0 100%);
  return <main className="relative min-h-screen overflow-y-hidden overflow-x-clip font-Poppins bg-[#fbfeff]">
    <Head>
      <title>Landing Page Demo3</title>
      <link rel="icon" href="Demo2/fav.png" />
    </Head>

    <div className="absolute inset-x-0 top-0 min-h-[200vh] bg-no-repeat" style={{ backgroundImage: 'url("/Demo3/hero-bg.png")', backgroundSize: 'cover' }}></div>
    <div className="relative flex flex-col min-h-screen 3xl:min-h-0 " >
      <header className="w-full">
        <div className="container max-w-[1140px]  flex items-center justify-between w-full h-32 mx-auto ">
          <a href="">
            <img src="/Demo3/highking.svg" alt="" />
          </a>

          <nav className="flex gap-12 text-lg font-semibold">
            <a className="duration-300 cursor-pointer hover:text-Purple">
              Location
            </a>
            <a className="duration-300 cursor-pointer hover:text-Purple">
              Blogs
            </a>
            <a className="duration-300 cursor-pointer hover:text-Purple">
              Testimonials
            </a>
            <a className="duration-300 cursor-pointer hover:text-Purple">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <div className="container flex w-full mx-auto max-w-[1140px] my-auto 3xl:py-40 ">
        <div className="flex-1 font-semibold">
          <h1 className=" text-7xl leading-[1.28]">Be prepared for the mountains and beyond.</h1>
          <p className="text-[22px] max-w-ml mt-2.5 text-GrayBlue pr-32">Are you looking for amazing hiking travel? Don’t worry! We got it for you!</p>
          <div className="flex gap-7 mt-[52px]">
            <button className="w-[198px] h-[62px] rounded-full text-lg font-semibold bg-Purple text-white shadow-xl shadow-Purple/30 hover:bg-Purple/80 duration-300 active:shadow-none active:bg-HardPurple ">
              Contact Us
            </button>
            <button className="w-[198px] h-[62px] rounded-full text-lg font-semibold text-Purple border-Purple border hover:bg-[#ecf3ff] duration-300 hover:shadow-Purple/30 hover:shadow-xl active:bg-Purple/10 active:shadow-none">
              Watch Video
            </button>
          </div>
        </div>
        <div className="relative flex flex-1">
          <img src="/Demo3/hero-img.png" className="absolute w-full ml-8 max-w-[488px]" alt="" />
        </div>
      </div>

    </div>

    <div className="relative pt-44">
      <div className="container py-52 mx-auto bg-white max-w-[1140px] shadow-2xl shadow-black/5">
      </div>
      <p className="mx-auto mt-12 text-center">Don’t hesitate to contact us to get better Information.

        <em className="ml-2 text-lg italic font-bold text-Red">EXPLORE ALL TREKKING.</em></p>
    </div>

    {/* <img src="/Demo2/ref.png" className="fixed inset-0 z-50 w-full " alt="" /> */}

  </main>
}
