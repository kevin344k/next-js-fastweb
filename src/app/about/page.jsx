"use client"
import { useRouter } from "next/navigation";


function AboutPage() {
const router= useRouter()



  return (
    <section>
      <h1>About</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit in, nihil,
        minus praesentium deserunt qui esse laborum earum illo dignissimos eum
        atque repellendus et dicta facilis neque, ducimus dolore nisi!
      </p>

      <button className="bg-sky-400 px-3 py-2 rounded-md" onClick={() => {
        alert("executing code")
        router.push("/")
      }}>
        Click
      </button>
    </section>
  );
}

export default AboutPage;
