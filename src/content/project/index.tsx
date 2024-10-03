export function ProjectContent() {
  return (
    <div className="bg-black pt-32 px-4 md:px-0">
      <div className="font-zila text-cyan-500 text-wrap text-3xl md:text-5xl tracking-widest text-center font-bold pb-5 md:pb-10">
        P.R.O.J.E.C.T
      </div>
      <div className="container border-white border p-4 md:p-8 flex-wrap text-neutral-100 font-abeezee tracking-wider items-center mx-auto w-full md:w-3/4 xl:w-2/3 text-justify">
        <section className="text-lg font-bold text-yellow-500 pb-2">
          Project Name:
        </section>
        <p className="pb-5 list-disc  text-md">
          Website Development and Inventory Management for PASAINS Organization
        </p>
        <section className="text-lg font-bold text-cyan-500">Role:</section>
        <p className="pb-5 list-disc  text-md">Developer</p>
        <section className="text-lg font-bold text-yellow-500 pb-2">
          Overview:
        </section>
        <p className="pb-5 list-disc text-md">
          I am currently working on a comprehensive project for PASAINS
          Organization, a nature-loving student group from the Faculty of
          Mathematics and Natural Sciences at UGM. This project involves
          developing their website and creating an efficient inventory
          management system. My responsibilities include designing the website's
          structure, ensuring an intuitive user experience, and establishing a
          cozy and inviting brand identity.
        </p>
        <section className="text-lg font-bold text-cyan-500 pb-2">
          Objectives:
        </section>
        <ol className="pb-5 list-disc pl-5 text-md">
          <li>
            Website Design: Creating a visually appealing and user-friendly
            website that reflects the organization's values.
          </li>
          <li>
            Inventory Management: Implementing a comprehensive inventory
            management system to streamline resource tracking.
          </li>
        </ol>
        <section className="text-lg font-bold text-yellow-500 pb-2">
          Process:
        </section>
        <ol className="pb-5 list-disc pl-5 text-md">
          <li>
            Research Conducted thorough research to understand the
            organization's goals, target audience, and brand values.
          </li>
          <li>
            Website Development: Designed a responsive and aesthetically
            pleasing website using modern web development technologies.
            Currently using static data for evaluation the website and get
            feedback from the user.
          </li>
          <li>
            Inventory System: Developed and integrated a user-friendly inventory
            management system to facilitate efficient resource management.
          </li>
        </ol>
        <section className="text-lg font-bold text-cyan-500 pb-2">
          Technologies Used:
        </section>
        <ol className="pb-5 list-disc pl-5 text-md">
          <li>
            Front-end:{" "}
            <em className="font-bold">HTML, Tailwind CSS, TypeScript</em>
          </li>
          <li>
            Framework: <em className="font-bold">React.js </em>
          </li>
          <li>
            Back-end: <em className="font-bold">Node.js, Express.js</em>
          </li>
          <li>
            Database: <em className="font-bold">PostgreSQL</em>{" "}
          </li>
        </ol>
        <section className="text-lg font-bold text-yellow-500 pb-2">
          Outcome (Expected):{" "}
        </section>
        <p className="pb-5 list-disc  text-md">
          The new branding and website are expected to significantly enhance the
          online presence of PASAINS Organization, making it easier for the
          community to engage with the organization. The user-friendly design
          and effective inventory system will contribute to improved operational
          efficiency and better user satisfaction.
        </p>
        <section className="text-lg font-bold text-cyan-500 pb-2">
          Project Link:{" "}
        </section>
        <ol className="pb-5 list-disc pl-5 text-md">
          <li>
            Website organization:{" "}
            <a
              href="https://pasains.org/"
              className="text-red-500 italic hover:text-green-500"
              target="__blank"
            >
              pasains.dev{" "}
            </a>
            Git Hub:{" "}
            <a
              href="https://github.com/pasains/landingpage"
              className="text-red-500 italic hover:text-green-500"
              target="__blank"
            >
              github.com/pasains/landingpage
            </a>
          </li>
          <li>
            Inventory managemen: Currently still develop this project, link
            github the back-end:{" "}
            <a
              href="https://github.com/pasains/portal-be"
              className="text-red-500 italic hover:text-green-500"
              target="__blank"
            >
              github.com/pasains/portal-be{" "}
            </a>
            and the front-end:{" "}
            <a
              href="https://github.com/pasains/portal-fe"
              className="text-red-500 italic hover:text-green-500"
              target="__blank"
            >
              github.com/pasains/portal-fe
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}
