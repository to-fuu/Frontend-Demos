import gsap from "gsap"
import { DOMElement, useEffect, useState } from "react"
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { Swiper, SwiperSlide } from "swiper/react";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Head from "next/head";


function handleMenuItemEnter(e: Event) {
  const el = e.target as HTMLElement
  console.log(el);

  const label1 = el.querySelector('.menu__link__label1');
  const label2 = el.querySelector('.menu__link__label2');
  console.log(label1);

  gsap.to(label1?.querySelectorAll('div')!, {
    yPercent: -100,
    stagger: 0.1,
    duration: 0.5,
    ease: 'power4.out'

  });

  gsap.to(label2?.querySelectorAll('div')!, {
    yPercent: 0,
    stagger: 0.1,
    duration: 0.5,
    ease: 'power4.out'
  });
}

function handleMenuItemExit(e: Event) {
  const el = e.target as HTMLElement

  const label1 = el.querySelector('.menu__link__label1');
  const label2 = el.querySelector('.menu__link__label2');

  gsap.to(label1?.querySelectorAll('div')!, {
    yPercent: 0,
    stagger: 0.1,
    duration: 0.5,
    ease: 'power4.out'
  });

  gsap.to(label2?.querySelectorAll('div')!, {
    yPercent: 100,
    stagger: 0.1,
    duration: 0.5,
    ease: 'power4.out'
  });
}




export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [setup, setSetup] = useState(false)

  useEffect(() => {


    gsap.set('h1', {
      opacity: 1,
      skewX: 20,
      yPercent: 200,
      rotateY: 0,
      rotateX: 0,
    })


    gsap.set('.tokyo', {
      y: 300,
    })
    gsap.set('.tokyo-cover', {
      maxHeight: '100%',
    })
    
    gsap.set('.menu', {
      maxHeight: 0,
    })
    
    gsap.set('.welcome1', {
      opacity: 0,
      y: 40,
    })

    gsap.to('.welcome1', {
      opacity: 1,
      y: 0,
      delay: 0.1,
      duration:0.5
    })

    gsap.set('.welcome1', {
      opacity: 0,
      delay: 0.6
    })

    gsap.set('.welcome2', {
      opacity: 0,
    })


    gsap.set('.welcome2', {
      opacity: 0,
      delay: 0.8
    })
    gsap.set('.welcome3', {
      opacity: 0,
    })

    gsap.set('.welcome2', {
      opacity: 1,
      delay: 0.6
    })

    gsap.set('.welcome3', {
      opacity: 1,
      delay: 0.8
    })

    gsap.set('.welcome3', {
      opacity: 0,
      delay: 1
    })
    gsap.set('.welcome1', {
      opacity: 1,
      delay: 1
    })


    gsap.to('.preloader', {
      yPercent: -100,
      delay: 1.5,
      duration: 0.75,
      ease: 'power1.out',
      onStart: () => {
        setMounted(true)
      },
      onComplete: () => {
        setLoaded(true)
      }
    })

  }, [])

  useEffect(() => {

    if (!mounted) return;
    if (setup) return;

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

    gsap.set('.menu__link__label2 .menu__label__letter', {
      yPercent: 100
    })

    document.querySelector('.menu__link')!.addEventListener('mouseover', (e) => {
      handleMenuItemEnter(e)
    })

    document.querySelector('.menu__link')!.addEventListener('mouseleave', (e) => {
      handleMenuItemExit(e)

    })



    document.addEventListener("mousemove", function (e) {
      gsap.to('.cursor', {
        left: e.clientX,
        top: e.clientY
      });
    });


    gsap.utils.toArray(".expertise").forEach((element) => {
      const el = element as HTMLElement;
      const dividers = el.querySelectorAll("hr")
      const texts = el.querySelectorAll("span")
      const link = el.querySelector("a")

      gsap.set(dividers, {
        maxWidth: 0
      });
      gsap.set(texts, {
        y: 40,
        opacity: 0
      });
      gsap.set(link, {
        opacity: 0
      });

      gsap.to(dividers, {
        scrollTrigger: {
          trigger: el,
          start: 'top 200px',
          end: 'bottom bottom'
        },
        maxWidth: '100%',
        duration: 1,
        stagger: 0.1

      })


      gsap.to(texts, {
        scrollTrigger: {
          trigger: el,
          start: 'top 200px',
          end: 'bottom bottom'
        },
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        stagger: 0.1

      });

      gsap.to(link, {
        scrollTrigger: {
          trigger: el,
          start: 'top 200px',
          end: 'bottom bottom'
        },
        opacity: 1,
        delay: 1.5,
        duration: 0.25,

      })

    });

    gsap.to('.tokyo', {
      y: 0,
      duration: 1,
      ease: 'power2.out'
    })

    gsap.to('.tokyo-cover', {
      maxHeight: 0,
      duration: 1,
      delay:0.5,
      ease: 'power2.out'
    })


    gsap.to('h1', {
      skewX: 0,
      yPercent: 0,
      duration: 0.75,
      stagger: 0.05,
      ease: 'power1.out'

    })



    gsap.to(".marquee__part", { xPercent: -100, duration: 30, repeat: Infinity, ease: "none" });
    setSetup(true)


    return () => {


      document.querySelector('.menu__link')!.removeEventListener('mouseover', (e) => {
        handleMenuItemEnter(e)
      })

      document.querySelector('.menu__link')!.removeEventListener('mouseleave', (e) => {
        handleMenuItemExit(e)

      })


      document.removeEventListener("mousemove", function (e) {
        gsap.to('.cursor', {
          left: e.clientX,
          top: e.clientY
        });
      });
      setSetup(false)
      setMounted(false)
    }

  }, [mounted])

  useEffect(() => {

    gsap.to('.menu', {
      maxHeight: menuOpen ? '100%' : 0,
      ease: 'power1.out',
      duration: 0.75

    })


  }, [menuOpen])

  return <main className="min-h-screen  text-[#dfd3c3] overflow-x-clip font-Zen relative">
    <Head>
      <title>GSAP Demo1</title>
      <link rel="icon" href="Demo1/fav.png" />
    </Head>
    <div className="relative z-10 pb-32 bg-neutral-900">
      <div className="relative ">
        <div className="font-Demo1 text-[12vw] whitespace-nowrap text-[#dfd3c3] uppercase leading-none sticky top-0 h-[80vh] py-[10%] pointer-events-none">
          <h1 className="overflow-hidden marquee">
            <div className="flex flex-auto marquee__inner ">
              <div className="marquee__part">Experience Designer{' – '}</div>
              <div className="marquee__part">Experience Designer{' – '}</div>
            </div>
          </h1>
          <h1 className="overflow-hidden marquee">
            <div className="flex flex-auto -ml-[30%] marquee__inner">
              <div className="marquee__part">Experience Designer{' – '}</div>
              <div className="marquee__part">Experience Designer{' – '}</div>
            </div>
          </h1>
        </div>
        <div className="">
          <div className="relative h-[70vw] w-[65vw] mx-auto bg-[#e1ff00] tokyo">
            <img src="/Demo1/tokyo.jpg" className="object-cover w-full h-full" alt="" />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-neutral-900 via-transparent"></div>
            <div className="absolute inset-0 pointer-events-none bg-[#e1ff00] tokyo-cover"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 translate-x-1/2 translate-y-1/2 3xl:w-64 3xl:h-64"><img src="/Demo1/circletext.svg" className="absolute w-full h-full " data-rotate data-speed="-1" alt="" /></div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl px-20 pt-48 mx-auto 3xl:max-w-screen-2xl">
        <h2 className="text-4xl 3xl:text-5xl">Hi I&apos;m Ala. I&apos;m a front-end developer from Sousse, Tunisia.</h2>
        <div className="max-w-xl mt-20 ml-auto ">
          <p className="text-xl font-light leading-relaxed 3xl:text-3xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia fuga velit repellat? Laboriosam sed, autem quae rerum commodi voluptate ab dolorem ipsum, aperiam consequuntur blanditiis, debitis deserunt quas. Alias vero velit consequatur?</p>
          <a className="link">Get to know me
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
            <a className="cursor-not-allowed group">
              <div className="relative w-full overflow-hidden aspect-video">
                <img src="/Demo1/P1.png" className="absolute w-full duration-500 hover:scale-110" alt="Project1" />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-neutral-900 via-transparent"></div>
              </div>
              <div className="link group-hover:gap-8">Project name
                <svg width="37" height="17" viewBox="0 0 37 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M27.5377 1.1906L28.1347 2.63918C29.0998 4.98087 30.8573 6.86515 33.0501 8.0001L0 8.0001V9.0001L33.05 9.0001C30.8572 10.135 29.0998 12.0193 28.1347 14.361L27.5377 15.8096L28.4623 16.1906L29.0593 14.742C30.287 11.763 32.9311 9.60166 36.0948 8.99103V8.00915C32.9311 7.39852 30.287 5.23713 29.0593 2.25815L28.4623 0.80957L27.5377 1.1906Z" fill="#EBFF00"></path>
                </svg>
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide >
            <a className="cursor-not-allowed group">
              <div className="relative w-full overflow-hidden aspect-video">
                <img src="/Demo1/P1.png" className="absolute w-full duration-500 hover:scale-110" alt="Project1" />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-neutral-900 via-transparent"></div>
              </div>
              <div className="link group-hover:gap-8">Project name
                <svg width="37" height="17" viewBox="0 0 37 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M27.5377 1.1906L28.1347 2.63918C29.0998 4.98087 30.8573 6.86515 33.0501 8.0001L0 8.0001V9.0001L33.05 9.0001C30.8572 10.135 29.0998 12.0193 28.1347 14.361L27.5377 15.8096L28.4623 16.1906L29.0593 14.742C30.287 11.763 32.9311 9.60166 36.0948 8.99103V8.00915C32.9311 7.39852 30.287 5.23713 29.0593 2.25815L28.4623 0.80957L27.5377 1.1906Z" fill="#EBFF00"></path>
                </svg>
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide >
            <a className="cursor-not-allowed group">
              <div className="relative w-full overflow-hidden aspect-video">
                <img src="/Demo1/P1.png" className="absolute w-full duration-500 hover:scale-110" alt="Project1" />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-neutral-900 via-transparent"></div>
              </div>
              <div className="link group-hover:gap-8">Project name
                <svg width="37" height="17" viewBox="0 0 37 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M27.5377 1.1906L28.1347 2.63918C29.0998 4.98087 30.8573 6.86515 33.0501 8.0001L0 8.0001V9.0001L33.05 9.0001C30.8572 10.135 29.0998 12.0193 28.1347 14.361L27.5377 15.8096L28.4623 16.1906L29.0593 14.742C30.287 11.763 32.9311 9.60166 36.0948 8.99103V8.00915C32.9311 7.39852 30.287 5.23713 29.0593 2.25815L28.4623 0.80957L27.5377 1.1906Z" fill="#EBFF00"></path>
                </svg>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="grid max-w-screen-xl grid-cols-2 gap-8 px-20 mx-auto pt-96 expertise">
        <h2 className="text-4xl 3xl:text-5xl ">Frontend Expertise</h2>
        <div className="">
          <div className="flex flex-col uppercase 3xl:text-2xl">
            <hr />

            <span className="py-8">UI Design</span>
            <hr />
            <span className="py-8">React</span>
            <hr />
            <span className="py-8">Next.js</span>
            <hr />
            <span className="py-8">TailwindCss</span>
            <hr />
            <span className="py-8">Responsive design</span>
            <hr />
            <span className="py-8">Animations</span>
          </div>
          <a className="link">Read about my experience
            <svg width="37" height="17" viewBox="0 0 37 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M27.5377 1.1906L28.1347 2.63918C29.0998 4.98087 30.8573 6.86515 33.0501 8.0001L0 8.0001V9.0001L33.05 9.0001C30.8572 10.135 29.0998 12.0193 28.1347 14.361L27.5377 15.8096L28.4623 16.1906L29.0593 14.742C30.287 11.763 32.9311 9.60166 36.0948 8.99103V8.00915C32.9311 7.39852 30.287 5.23713 29.0593 2.25815L28.4623 0.80957L27.5377 1.1906Z" fill="#EBFF00"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="grid max-w-screen-xl grid-cols-2 gap-8 px-20 mx-auto pt-96 expertise">
        <h2 className="text-4xl 3xl:text-5xl">Game Dev Expertise</h2>
        <div className="">
          <div className="flex flex-col uppercase 3xl:text-2xl">

            <hr className="" />
            <span className="py-8">Unity3D</span>
            <hr />
            <span className="py-8">Animation</span>
            <hr />
            <span className="py-8">Statemachine</span>
            <hr />
            <span className="py-8">3D Modeling</span>
            <hr />
            <span className="py-8">UI Design</span>
            <hr />
            <span className="py-8">Teaching</span>
          </div>
          <a className="link">Read about my experience
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
        <a className="cursor-not-allowed absolute w-44 h-44 bg-[#e1ff00] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full text-neutral-900 text-base font-medium grid items-center text-center hover:scale-110 hover:-rotate-12 duration-300">
          EMAIL ME
        </a>
      </div>
    </div>

    <div className="h-screen bottom-0 sticky bg-[#1b1b1b] flex items-center flex-col justify-center ">

      <span className="text-[8vw] uppercase font-Demo1">
        Have an idea?
      </span>
      <a className="flex items-center gap-4 text-[#e1ff00] duration-1000 hover:gap-8 font-medium text-3xl">Hire Me
        <svg width="37" height="17" viewBox="0 0 37 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M27.5377 1.1906L28.1347 2.63918C29.0998 4.98087 30.8573 6.86515 33.0501 8.0001L0 8.0001V9.0001L33.05 9.0001C30.8572 10.135 29.0998 12.0193 28.1347 14.361L27.5377 15.8096L28.4623 16.1906L29.0593 14.742C30.287 11.763 32.9311 9.60166 36.0948 8.99103V8.00915C32.9311 7.39852 30.287 5.23713 29.0593 2.25815L28.4623 0.80957L27.5377 1.1906Z" fill="#EBFF00"></path>
        </svg>
      </a>

      <div className="absolute bottom-0 flex w-full px-20 py-14">
        <div className="opacity-75">
          &copy; Ala Chebbi 2022
        </div>
        <div className="flex gap-2 ml-auto">
          <a rel='noreferrer noopener nofollow' target={'_blank'} href="https://www.linkedin.com/in/ala-chebbi-32266b168/" className="w-[50px] border-[#3b3b3b] h-[50px] border rounded-full grid place-items-center text-lg hover:bg-[#3b3b3b] duration-300"><FaLinkedinIn /></a>
          <a rel='noreferrer noopener nofollow' target={'_blank'} href="https://github.com/to-fuu" className="w-[50px] border-[#3b3b3b] h-[50px] border rounded-full grid place-items-center text-lg hover:bg-[#3b3b3b] duration-300"><FaGithub /></a>
        </div>
      </div>

      <div className="absolute flex w-full px-20 top-20 py-14">
        <div className="flex gap-6">
          <a className="ml-auto font-medium duration-300 text-white/95 hover:text-white/75">Home</a>
          <a className="ml-auto font-medium duration-300 text-white/95 hover:text-white/75">Work</a>
          <a className="ml-auto font-medium duration-300 text-white/95 hover:text-white/75">About</a>
        </div>
        <a className="pb-2 ml-auto font-medium duration-300 border-b cursor-not-allowed text-white/95 hover:text-white/75">Send me an email</a>
      </div>
    </div>

    <button onClick={() => {
      setMenuOpen(old => !old)
    }} className="fixed rounded-full hover:bg-[#3b3b3b] duration-300 backdrop-blur-md z-[100] right-8 top-8 w-[70px] h-[70px] flex items-center justify-center gap-2 flex-col">
      <div className="w-6 h-0.5 bg-white"></div>
      <div className="w-6 h-0.5 bg-white"></div>
    </button>

    <div className="w-4 h-4 border border-[#e1ff00] fixed top-0 left-0 z-[999] rounded-full -mt-2 -ml-2 cursor pointer-events-none"></div>

    <div className="fixed bg-[#1b1b1b] inset-0 z-[99] menu overflow-hidden">

      <div className="flex w-full h-full mx-auto pb-[2.5%] absolute">

        <div className="flex w-full mx-auto mt-auto max-w-screen-3xl">
          <div className="flex flex-col gap-3 mt-auto text-[#888]">
            <a className="relative overflow-hidden menu__link">
              <span className="absolute font-serif pointer-events-none">01</span>
              <div className="menu__link__label1 font-Demo1 text-[3vw] pl-10 pointer-events-none flex">
                <div className="menu__label__letter">H</div>
                <div className="menu__label__letter">O</div>
                <div className="menu__label__letter">M</div>
                <div className="menu__label__letter">E</div>
              </div>
              <span className="menu__link__label2 text-[3vw] pl-9 absolute -top-3 left-0 pointer-events-none flex text-white font-bold">
                <div className="menu__label__letter">H</div>
                <div className="menu__label__letter">O</div>
                <div className="menu__label__letter">M</div>
                <div className="menu__label__letter">E</div>
              </span>
            </a>
            <a className="relative">
              <span className="absolute font-serif">02</span>
              <span className="font-Demo1 text-[3vw] pl-10">Work</span>
            </a>
            <a className="relative">
              <span className="absolute font-serif">03</span>
              <span className="font-Demo1 text-[3vw] pl-10">About</span>
            </a>
            <a className="relative">
              <span className="absolute font-serif">04</span>
              <span className="font-Demo1 text-[3vw] pl-10">Hire me</span>
            </a>
          </div>
        </div>

      </div>

    </div>
    <div className="fixed top-0 left-0 z-[998] text-white p-8">
      <a href="https://www.liamforshort.com/" rel='noreferrer noopener nofollow' target={'_blank'} className="flex items-center gap-2 text-[#EBFF00] !text-base hover:gap-3 duration-300 py-2 px-4 backdrop-blur-md rounded-full ">Original Design
        <svg width="37" height="17" className="scale-75" viewBox="0 0 37 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M27.5377 1.1906L28.1347 2.63918C29.0998 4.98087 30.8573 6.86515 33.0501 8.0001L0 8.0001V9.0001L33.05 9.0001C30.8572 10.135 29.0998 12.0193 28.1347 14.361L27.5377 15.8096L28.4623 16.1906L29.0593 14.742C30.287 11.763 32.9311 9.60166 36.0948 8.99103V8.00915C32.9311 7.39852 30.287 5.23713 29.0593 2.25815L28.4623 0.80957L27.5377 1.1906Z" fill="#EBFF00"></path>
        </svg>
      </a>
    </div>

    {!loaded && <div className="fixed inset-0 bg-[#272727] z-[5000] grid place-items-center text-xl preloader ">
      <span className="absolute font-bold uppercase welcome1">Welcome</span>
      <span className="absolute uppercase font-Demo1 text-neutral-600 welcome2">Welcome</span>
      <span className="absolute text-[#e1ff00] font-Demo1 welcome3">Welcome</span>
    </div>}

  </main>
}
