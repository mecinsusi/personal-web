export function AboutContent() {
  return (
    <div className="bg-black pt-20 md:pt-32 w-full h-fit items-center mx-auto flex-row">
      <img
        src={require("../../assets/susi.png")}
        alt="susisiluet"
        className="border-2 border-yellow-500 rounded-full items-center mx-auto size-96 md:size-fit"
      />
      <p className="text-neutral-100 font-roboto text-wrap  tracking-wider p-4 md:p-8 text-center text-md md:text-lg items-center w-full sm:w-3/4 md:w-2/3 xl:w-1/2 mx-auto">
        Hello! I'm Susi, currently living in the Special Region of Yogyakarta
        and an undergraduate from Physics Universitas Gadjah Mada in February
        2021. With two years of experience in a financial technology startup
        company as a payment operations team, I'm dedicated to continually
        learning and upgrading my skills in web development. My passion for this
        field drives me to strive for excellence, staying abreast of the latest
        advancements to maximize my impact in the future.
      </p>
      <div className="text-center font-lilita text-md md:text-lg p-8">
        <a
          href={
            "https://drive.google.com/file/d/1IPIaLOsfefkYv2uEcfY2JfCZf17xMzQi/view?usp=sharing"
          }
          className="text-neutral-100 border-2 border-cyan-500 p-4 rounded-lg animate-pulse"
          target="__blank"
        >
          CURICULUM VITAE
        </a>
      </div>
    </div>
  );
}
