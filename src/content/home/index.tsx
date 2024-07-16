import { PiFlowerFill } from "react-icons/pi";

export function HomeContent() {
  return (
    <section className="bg-neutral-100 xl:flex xl:flex-cols-2 flex-wrap items-center mx-auto w-full pt-20 md:pt-24">
      <div className="w-full xl:w-1/2 p-4 md:p-6">
        <h1 className="flex flex-wrap font-latin font-semibold text-xl md:text-3xl pb-4 md:pb-8">
          <span className="hover:text-cyan-500 mr-2">Hi, </span>
          <span className="hover:text-yellow-500 mr-2">welcome</span>
          <span className="hover:text-cyan-500 mr-2">to</span>
          <span className="hover:text-yellow-500 mr-2">my</span>
          <span className="hover:text-cyan-500 mr-2">corner</span>
          <span className="hover:text-yellow-500 mr-2">of</span>
          <span className="hover:text-cyan-500 mr-2">my</span>
          <span className="hover:text-yellow-500 mr-2">web!</span>
        </h1>
        <body className="font-code text-justify text-pretty">
          <p className="text-md md:text-lg font-bold mb-3">
            I'm Susilawati Budi Utami, <br />
            web development enthusiast who still on continuous learning.
          </p>
          <p className="text-md md:text-lg">
            I'm eager to improve myself and acquire new skills, leveraging them
            to broaden my knowledge and expertise. With the encouragement and
            guidance of a supportive community, I am enthusiastic about diving
            into new programming challenges and giving my best effort. As a
            passionate web developer, I am dedicated to crafting robust
            applications and exploring the endless possibilities of technology.
          </p>
          <p className="text-lg md:text-xl font-bold text-cyan-500 my-4">
            Why Website Development?
          </p>
          <p className="text-md md:text-lg">
            My journey into web development began with a fascination for
            how code can transform ideas into reality. Recently, I've honed my
            skills in{" "}
            <em>
              {" "}
              Typescript, HTML, CSS, Tailwind CSS, ReactJS, ExpressJS, and
              PostgreSQL{" "}
            </em>{" "}
            allowing me to tackle challenges and innovate in the ever-evolving
            tech landscape but also open to learning another language,
            framework, database, etc.
          </p>
          <p className="text-lg md:text-xl font-bold my-4 text-yellow-500">
            What You'll Find Here
          </p>
          <p className="text-md md:text-lg">
            This website provides a glimpse into my journey of continuous growth
            in web development. Join me as I embrace new learning
            opportunities and strive to contribute meaningfully to the tech
            world.
          </p>
          <p className="text-lg md:text-xl font-bold my-4 text-cyan-500">
            Let's Connect
          </p>
          <p className="text-md md:text-lg">
            Let's collaborate, learn, and create something amazing together.
          </p>
        </body>
        <h2 className="md:flex font-code text-md md:text-lg text-justify md:text-center p-4 md:py-6 mt-14 font-bold justify-center border-2 border-yellow-500">
          <PiFlowerFill className="items-center mx-auto size-6 text-cyan-500 animate-spin" />
          Thank you for visiting, and I look forward to sharing more with you
          soon!
          <PiFlowerFill className="items-center mx-auto size-6 text-cyan-500 animate-spin" />
        </h2>
        <div></div>
      </div>
      <div className="w-full xl:w-1/2 h-fit">
        <img
          src={require("../../assets/siluet.jpeg")}
          alt="susi"
          className="md:w-full object-cover h-fit md:h-[920px]"
        />
      </div>
    </section>
  );
}
