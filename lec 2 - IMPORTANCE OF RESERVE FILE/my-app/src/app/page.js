import Link from "next/link";

export default function Home() {
  return (
    <h1 className="">
      Hello World from app 
      <br />
      <br />
      <Link href={"/about"}>
        Go To About Page
      </Link>
    </h1>
  )
} 
