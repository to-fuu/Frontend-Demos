import gsap from "gsap"
import Head from "next/head"
import { useEffect, useState } from "react"
import { FaArrowRight } from "react-icons/fa"

const circleColor = '#578f8a'
export default function Home() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    gsap.fromTo('.intro-text div', {
      yPercent: 110, scaleX: 1.1
    }, {
      yPercent: 0,
      stagger: 0.1,
      ease: 'circ.out',
    })

    gsap.fromTo('.transition__window__1', {
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0 100%)'
      , scaleX: 1.1
    }, {
      clipPath: 'polygon(00% 0%, 100% 0%, 100% 100%, 0 100%)',
      ease: 'circ.out',
      delay: 1.5
    })


    gsap.fromTo('.transition__window__2', {
      clipPath: 'polygon(00% 0%, 100% 0%, 100% 0%, 0 0%)'
      , scaleX: 1.1
    }, {
      clipPath: 'polygon(00% 0%, 100% 0%, 100% 100%, 0 100%)',
      ease: 'circ.out',
      delay: 1.5
    })

    gsap.fromTo('.transition__window__3', {
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0 100%)',
    }, {
      clipPath: 'polygon(00% 0%, 100% 0%, 100% 100%, 0 100%)',
      ease: 'circ.out',
      delay: 1.5,
      onComplete: () => {
        setLoading(false);
      }
    })

  }, [])

  useEffect(() => {

    if (loading) return

    var tl = gsap.timeline();

    tl.set('.shoe', {
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0 100%)',
      yPercent: 50
    })
    tl.set('.sandal', {
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0 100%)',
      yPercent: 20
    })
    tl.to('.shoe', {
      clipPath: 'polygon(00% 0%, 100% 0%, 100% 100%, 0 100%)',
      duration: 2,
      yPercent: 0,
      ease: 'power4.out'
    })


    tl.to('.sandal', {
      clipPath: 'polygon(00% 0%, 100% 0%, 100% 100%, 0 100%)',
      duration: 1.25,
      yPercent: 0,
      ease: 'circ.out',
    }, '<+=0.3')


    tl.fromTo('.blog', {
      opacity: 0,
      y: 40
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'circ.out',
    }, '<+=0.33')

    tl.fromTo('h1 .line', {
      yPercent: 110
    }, {
      yPercent: 0,
      stagger: 0.25,
      duration: 1,
      ease: 'circ.out',
    }, '<+=0.25')

    tl.fromTo('.desc', {
      opacity: 0,
      y: 40
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'circ.out',
    }, '-=0.55')

      
    tl.fromTo('.circle', {
      opacity: 0,
      y: 40
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'circ.out',
    }, '<+=0.25')


    tl.fromTo('.rest', {
      opacity: 0,
      y: 40,
      pointerEvents:'none'
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      pointerEvents:'auto',
      ease: 'circ.out',
    }, '<+=0.2')


    gsap.fromTo('.circle img',{scale:0.75},{
      rotate:360,
      repeat:Infinity,
      ease:'none',
      duration:7.5
    })

  }, [loading])

  //clip-path: polygon(00% 0, 100% 0%, 100% 100%, 0 100%);
  return <main className="min-h-screen  bg-[#f7f3ef] text-[#a07656]  overflow-x-clip font-Zen relative">
    <Head>
      <title>GSAP Demo2</title>
      <link rel="icon" href="Demo2/fav.png" />
    </Head>

    <div className="flex min-h-screen overflow-hidden">
      <div className="relative flex" style={{ width: '25%' }}>
        <img src="/Demo2/sandals.webp" className="object-cover w-2/3 my-auto  h-[75%] object-right sandal" alt="" />
      </div>
      <div className="z-10 flex flex-col justify-center pt-32 pb-10 " style={{ width: '30%' }}>
        <div className="flex flex-col justify-around h-full -mr-40">
          <span className="blog text-lg font-Playfair text-[#df6e60] font-medium my-auto  3xl:text-2xl">Blog</span>
          <h1 className="font-PlayfairSC 3xl:text-[5vw] text-[6.25vw] leading-[0.8] text-[#483a2e]">
            <div className="overflow-y-hidden py-0.5">
              <div className="line">SELECTION </div>
            </div>
            <div className="overflow-y-hidden py-0.5">
              <div className="line">VALUE-<i>TOP</i></div>
            </div>
            <div className="overflow-y-hidden py-0.5">
              <div className="line"><i>2021</i> </div>
            </div>
          </h1>
          <p className="desc 3xl:max-w-sm max-w-[260px] leading-loose 3xl:leading-[1.7] font-Playfair my-auto font-medium 3xl:text-2xl">
            We increase the value of products by giving them the right style. <br />
            On our website you will find many interesting articles from the world of fashion. Follow our social networks.
          </p>
          <div className="rest text-lg font-Playfair text-[#d46152] mb-auto font-medium my-auto py-4 max-w-[260px] w-full flex items-center relative 3xl:text-2xl group cursor-not-allowed">
            View all article
            <FaArrowRight className="ml-auto" />
            <div className="absolute w-1/2 bg-[#d46152] h-0.5 bottom-0 group-hover:w-full duration-500"></div>
          </div>
        </div>

      </div>
      <div className="relative" style={{ width: '45%' }}>
        <img src="/Demo2/shoe.webp" className="absolute inset-0 object-cover w-full h-full shoe" alt="" />
        <div className="absolute left-0 w-48 h-48 -translate-x-1/2 bg-white rounded-full bottom-[20%] circle" style={{ backgroundColor: circleColor }}>
          <img src="/Demo2/circletext.svg" className="absolute w-full h-full " data-rotate data-speed="-1" alt="" />
        </div>
      </div>

    </div>

    <div className="fixed inset-x-0 top-0 flex items-center justify-between w-full h-32 px-12 text-xl">
      <a href="https://dribbble.com/shots/15629747-Valuable-Website-concept" target={'_blank'} rel='noreferrer noopener nofollow' className="top-0 z-50 my-auto text-red-700 font-Playfair">DRIBBBLE SHOT</a>
      <a  href="https://dribbble.com/thomsoon_com" target={'_blank'} rel='noreferrer noopener nofollow' className="top-0 z-50 pr-8 my-auto text-red-700 font-Playfair">Design by <em className="font-bold">Tomasz Mazurczak</em></a>

    </div>

    {loading && <div className="fixed z-[99] bg-[#483a2e] inset-0 grid place-items-center">
      <div className="flex overflow-hidden text-7xl font-PlayfairSC intro-text">
        <div>V</div>
        <div>A</div>
        <div>L</div>
        <div>U</div>
        <div>A</div>
        <div>B</div>
        <div>L</div>
        <div>E</div>
      </div>

      <div className="absolute grid w-full h-full grid-cols-3">
        <div className="bottom-0 w-full h-full bg-[#f7f3ef] transition__window__1"></div>
        <div className="bottom-0 w-full h-full bg-[#f7f3ef] transition__window__2"></div>
        <div className="bottom-0 w-full h-full bg-[#f7f3ef] transition__window__3"></div>
      </div>
    </div>}
    {/* <img src="/Demo2/ref.png" className="fixed inset-0 z-50 w-full " alt="" /> */}

  </main>
}
