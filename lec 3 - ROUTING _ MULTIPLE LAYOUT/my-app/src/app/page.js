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

      <br />
      <br />
      <Link href={"/about/profile"}>
        Go To About Profile Page
      </Link>

      <br />
      <br />
      <Link href={"/about/profile/Jitendriya"}>
        Go To About profile [name] Page
      </Link>

      <br />
      <br />
      <Link href={"/about/profile/Jitendriya/Meher/Amit"}>
        Go To About profile [...name] Page
      </Link>

      <br />
      <br />
      <Link href={"/ad"}>
        Go To AD Page
      </Link>

      <br />
      <br />
      <Link href={"/shopping"}>
        Go To Shopping Page
      </Link>

    </h1>
  )
} 
