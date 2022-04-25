import Link from "next/link"


export default function Home() {

  return <main className="grid min-h-screen font-bold uppercase bg-neutral-900 text-neutral-200 font-Demo1 place-items-center" >

    <ul className="flex flex-col items-center justify-center h-full gap-10 text-[min(7vw,72px)]">
      <li>
        <Link href={'/demo1'}><a className="hover:underline underline-offset-8 hover:text-[#e1ff00]">Demo 1</a></Link>
      </li>
      <li>
        <Link href={'/demo2'}><a className="hover:underline underline-offset-8 hover:text-[#db5d4f]">Demo 2</a></Link>
      </li>
    </ul>

  </main >
}
