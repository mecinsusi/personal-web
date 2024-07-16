import React, { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { Link, NavLink } from "react-router-dom";

const Heading: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const listNavbar = [
    {
      id: 1,
      title: "About",
      link: "/about",
    },
    { id: 2,
      title: "Project",
      link: "/project"
    },
  ];

  return (
    <div className="bg-black font-concert tracking-widest w-full fixed top-0 z-0">
      <div className="flex items-center bg-black justify-between mx-auto p-4 md:p-6">
        <section className="flex items-center">
          <Link to="/">
            <img
              src={require("../../assets/logoms.png")}
              alt="logoms"
              className="size-12 md:size-16 hover:opacity-75"
            />
          </Link>
        </section>
        <section className="hidden md:block">
          <div className="flex items-baseline space-x-4">
            {listNavbar.map((item) => (
              <NavLink key={item.id} to={item.link}>
                <div className="text-lg md:text-xl text-neutral-100 font-semibold hover:text-cyan-500 hover:underline-offset-3 hover:underline">
                  {item.title}
                </div>
              </NavLink>
            ))}
          </div>
        </section>
        <section onClick={toggleMenu} className="block text-cyan-600 md:hidden">
          <TfiMenu className="size-8" />
        </section>
      </div>
      <div className={`md:hidden text-lg text-neutral-100 px-4 mb-2 ${isOpen ? "block" : "hidden"}`}>
        {listNavbar.map((item) => (
          <NavLink key={item.id} to={item.link}>
            <div className="block py-1"></div>
            {item.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Heading;
