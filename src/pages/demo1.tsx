import gsap from "gsap"
import { useEffect, useState } from "react"
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { Swiper, SwiperSlide } from "swiper/react";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Head from "next/head";

export default function Home() {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  useEffect(() => {

    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    gsap.to("[data-scroll]", {
      scrollTrigger: {
        scrub: 0.5,
        trigger: '.featured'

      },
      y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed / 10,
      ease: "none"
    });


    gsap.to("[data-rotate]", {
      scrollTrigger: {
        scrub: 0.5,
      },
      rotate: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed / 10,
    });


    gsap.to("[data-scroll-horizontal]", {
      scrollTrigger: {
        scrub: 0.5,
        trigger: '.hscroll'
      },
      x: (i, target) => (-ScrollTrigger.maxScroll(window)) * target.dataset.speed / 10,
    });

    var posX = 0,
      posY = 0;


    document.addEventListener("mousemove", function (e) {
      gsap.to('.cursor', {
        left: e.clientX,
        top: e.clientY
      });
    });




    return () => {
      document.removeEventListener("mousemove", function (e) {
        gsap.to('.cursor', {
          left: e.clientX,
          top: e.clientY
        });
      });
    }
  }, [])


  return <main className="min-h-screen  text-[#dfd3c3] overflow-x-clip font-Zen relative">
    <Head>
      <title>GSAP Demo1</title>
    </Head>
    <div className="relative z-10 pb-32 bg-neutral-900">
      <div className="relative ">
        <div className="font-Demo1 text-[12vw] whitespace-nowrap text-[#dfd3c3] uppercase leading-none sticky top-0 min-h-[80vh] py-[10%] pointer-events-none">
          <h1>Experience Designer – Experience Designer</h1>
          <h1 className="-translate-x-20">Experience Designer – Experience Designer</h1>
        </div>
        <div className="">
          <div className="relative h-[70vw] w-[65vw] mx-auto bg-[#e1ff00]">
            <img src="/Demo1/tokyo.jpg" className="object-cover w-full h-full" alt="" />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-neutral-900 via-transparent"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 translate-x-1/2 translate-y-1/2 3xl:w-64 3xl:h-64"><img src="/Demo1/circletext.svg" className="absolute w-full h-full " data-rotate data-speed="-1" alt="" /></div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl px-20 pt-48 mx-auto 3xl:max-w-screen-2xl">
        <h2 className="text-4xl 3xl:text-5xl">Hi I&apos;m Ala. I&apos;m a front-end developer from Sousse, Tunisia.</h2>
        <div className="max-w-xl mt-20 ml-auto ">
          <p className="text-xl font-light leading-relaxed 3xl:text-3xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia fuga velit repellat? Laboriosam sed, autem quae rerum commodi voluptate ab dolorem ipsum, aperiam consequuntur blanditiis, debitis deserunt quas. Alias vero velit consequatur?</p>
          <a href="" className="link">Get to know me
            <svg width="37" height="17" viewBox="0 0 37 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M27.5377 1.1906L28.1347 2.63918C29.0998 4.98087 30.8573 6.86515 33.0501 8.0001L0 8.0001V9.0001L33.05 9.0001C30.8572 10.135 29.0998 12.0193 28.1347 14.361L27.5377 15.8096L28.4623 16.1906L29.0593 14.742C30.287 11.763 32.9311 9.60166 36.0948 8.99103V8.00915C32.9311 7.39852 30.287 5.23713 29.0593 2.25815L28.4623 0.80957L27.5377 1.1906Z" fill="#EBFF00"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="px-20 pt-64 mt-64 text-white featured">
        <h2 data-scroll data-speed='0.25' className="w-fit font-Demo1 mx-auto text-[7vw]">FEATURED</h2>
        <Swiper className="px-32 -mt-32 demo1-slider" slidesPerView={2} spaceBetween={20} >
          <SwiperSlide >
            <div className="relative w-full overflow-hidden aspect-video">
              <img src="/Demo1/P1.png" className="absolute w-full duration-500 hover:scale-110" alt="Project1" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-neutral-900 via-transparent"></div>
            </div>
            <a href="" className="link">Project name
              <svg width="37" height="17" viewBox="0 0 37 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M27.5377 1.1906L28.1347 2.63918C29.0998 4.98087 30.8573 6.86515 33.0501 8.0001L0 8.0001V9.0001L33.05 9.0001C30.8572 10.135 29.0998 12.0193 28.1347 14.361L27.5377 15.8096L28.4623 16.1906L29.0593 14.742C30.287 11.763 32.9311 9.60166 36.0948 8.99103V8.00915C32.9311 7.39852 30.287 5.23713 29.0593 2.25815L28.4623 0.80957L27.5377 1.1906Z" fill="#EBFF00"></path>
              </svg>
            </a>
          </SwiperSlide>
          <SwiperSlide >
            <div className="relative w-full overflow-hidden aspect-video">
              <img src="/Demo1/P1.png" className="absolute w-full duration-500 hover:scale-110" alt="Project1" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-neutral-900 via-transparent"></div>
            </div>
            <a href="" className="link">Project name
              <svg width="37" height="17" viewBox="0 0 37 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M27.5377 1.1906L28.1347 2.63918C29.0998 4.98087 30.8573 6.86515 33.0501 8.0001L0 8.0001V9.0001L33.05 9.0001C30.8572 10.135 29.0998 12.0193 28.1347 14.361L27.5377 15.8096L28.4623 16.1906L29.0593 14.742C30.287 11.763 32.9311 9.60166 36.0948 8.99103V8.00915C32.9311 7.39852 30.287 5.23713 29.0593 2.25815L28.4623 0.80957L27.5377 1.1906Z" fill="#EBFF00"></path>
              </svg>
            </a>
          </SwiperSlide>
          <SwiperSlide >
            <div className="relative w-full overflow-hidden aspect-video">
              <img src="/Demo1/P1.png" className="absolute w-full duration-500 hover:scale-110" alt="Project1" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-neutral-900 via-transparent"></div>
            </div>
            <a href="" className="link">Project name
              <svg width="37" height="17" viewBox="0 0 37 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M27.5377 1.1906L28.1347 2.63918C29.0998 4.98087 30.8573 6.86515 33.0501 8.0001L0 8.0001V9.0001L33.05 9.0001C30.8572 10.135 29.0998 12.0193 28.1347 14.361L27.5377 15.8096L28.4623 16.1906L29.0593 14.742C30.287 11.763 32.9311 9.60166 36.0948 8.99103V8.00915C32.9311 7.39852 30.287 5.23713 29.0593 2.25815L28.4623 0.80957L27.5377 1.1906Z" fill="#EBFF00"></path>
              </svg>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="grid max-w-screen-xl grid-cols-2 gap-8 px-20 mx-auto pt-96">
        <h2 className="text-4xl 3xl:text-5xl">Frontend Expertise</h2>
        <div className="">
          <div className="flex flex-col uppercase divide-y 3xl:text-2xl">
            <div className=""></div>
            <span className="py-8">UI Design</span>
            <span className="py-8">React</span>
            <span className="py-8">Next.js</span>
            <span className="py-8">TailwindCss</span>
            <span className="py-8">Responsive design</span>
            <span className="py-8">Animations</span>
          </div>
          <a href="" className="link">Read about my experience
            <svg width="37" height="17" viewBox="0 0 37 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M27.5377 1.1906L28.1347 2.63918C29.0998 4.98087 30.8573 6.86515 33.0501 8.0001L0 8.0001V9.0001L33.05 9.0001C30.8572 10.135 29.0998 12.0193 28.1347 14.361L27.5377 15.8096L28.4623 16.1906L29.0593 14.742C30.287 11.763 32.9311 9.60166 36.0948 8.99103V8.00915C32.9311 7.39852 30.287 5.23713 29.0593 2.25815L28.4623 0.80957L27.5377 1.1906Z" fill="#EBFF00"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="grid max-w-screen-xl grid-cols-2 gap-8 px-20 mx-auto pt-96">
        <h2 className="text-4xl 3xl:text-5xl">Game Dev Expertise</h2>
        <div className="">
          <div className="flex flex-col uppercase divide-y 3xl:text-2xl">

            <div className=""></div>
            <span className="py-8">Unity3D</span>
            <span className="py-8">Animation</span>
            <span className="py-8">Statemachine</span>
            <span className="py-8">3D Modeling</span>
            <span className="py-8">UI Design</span>
            <span className="py-8">Teaching</span>
          </div>
          <a href="" className="link">Read about my experience
            <svg width="37" height="17" viewBox="0 0 37 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M27.5377 1.1906L28.1347 2.63918C29.0998 4.98087 30.8573 6.86515 33.0501 8.0001L0 8.0001V9.0001L33.05 9.0001C30.8572 10.135 29.0998 12.0193 28.1347 14.361L27.5377 15.8096L28.4623 16.1906L29.0593 14.742C30.287 11.763 32.9311 9.60166 36.0948 8.99103V8.00915C32.9311 7.39852 30.287 5.23713 29.0593 2.25815L28.4623 0.80957L27.5377 1.1906Z" fill="#EBFF00"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="text-[4vw] whitespace-nowrap leading-normal hscroll mt-80 relative  ">
        {[1, 2, 3, 4, 5, 6, 7].map(i => (
          <div data-scroll-horizontal data-speed={i % 2 === 0 ? -0.25 : 0.25} className={`opacity-60 ${i % 2 === 0 ? '-ml-40' : '-mr-40'}`} key={i}>
            <span className="font-Demo1">Experience is key.</span> <span> Get in touch.</span>
            <span className="font-Demo1">Experience is key.</span> <span> Get in touch.</span>
            <span className="font-Demo1">Experience is key.</span> <span> Get in touch.</span>
            <span className="font-Demo1">Experience is key.</span> <span> Get in touch.</span>
            <span className="font-Demo1">Experience is key.</span> <span> Get in touch.</span>
            <span className="font-Demo1">Experience is key.</span> <span> Get in touch.</span>
            <span className="font-Demo1">Experience is key.</span> <span> Get in touch.</span>
          </div>
        ))}
        <div className="absolute w-44 h-44 bg-[#e1ff00] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full text-neutral-900 text-base font-medium grid items-center text-center hover:scale-110 hover:-rotate-12 duration-300">
          EMAIL ME
        </div>
      </div>
    </div>

    <div className="h-screen bottom-0 sticky bg-[#1b1b1b] flex items-center flex-col justify-center ">

      <span className="text-[8vw] uppercase font-Demo1">
        Have an idea?
      </span>
      <a href="" className="flex items-center gap-4 text-[#e1ff00] duration-1000 hover:gap-8 font-medium text-3xl">Hire Me
        <svg width="37" height="17" viewBox="0 0 37 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M27.5377 1.1906L28.1347 2.63918C29.0998 4.98087 30.8573 6.86515 33.0501 8.0001L0 8.0001V9.0001L33.05 9.0001C30.8572 10.135 29.0998 12.0193 28.1347 14.361L27.5377 15.8096L28.4623 16.1906L29.0593 14.742C30.287 11.763 32.9311 9.60166 36.0948 8.99103V8.00915C32.9311 7.39852 30.287 5.23713 29.0593 2.25815L28.4623 0.80957L27.5377 1.1906Z" fill="#EBFF00"></path>
        </svg>
      </a>

      <div className="absolute bottom-0 flex w-full px-20 py-14">
        <div className="opacity-75">
          &copy; Ala Chebbi 2022
        </div>
        <div className="flex gap-2 ml-auto">
          <a href="" className="w-[50px] border-[#3b3b3b] h-[50px] border rounded-full grid place-items-center text-lg hover:bg-[#3b3b3b] duration-300"><FaLinkedinIn /></a>
          <a href="" className="w-[50px] border-[#3b3b3b] h-[50px] border rounded-full grid place-items-center text-lg hover:bg-[#3b3b3b] duration-300"><FaGithub /></a>
        </div>
      </div>

      <div className="absolute flex w-full px-20 top-20 py-14">
        <div className="flex gap-6">
          <a href="" className="ml-auto font-medium duration-300 text-white/95 hover:text-white/75">Home</a>
          <a href="" className="ml-auto font-medium duration-300 text-white/95 hover:text-white/75">Work</a>
          <a href="" className="ml-auto font-medium duration-300 text-white/95 hover:text-white/75">About</a>
        </div>
        <a href="" className="pb-2 ml-auto font-medium duration-300 border-b text-white/95 hover:text-white/75">Send me an email</a>
      </div>
    </div>

    <button className="fixed rounded-full hover:bg-[#3b3b3b] duration-300 backdrop-blur-md z-50 right-8 top-8 w-[70px] h-[70px] flex items-center justify-center gap-2 flex-col">
      <div className="w-6 h-0.5 bg-white"></div>
      <div className="w-6 h-0.5 bg-white"></div>
    </button>

    <div className="w-4 h-4 border border-[#e1ff00] fixed top-0 left-0 z-50 rounded-full -mt-2 -ml-2 cursor"></div>

  </main>
}
