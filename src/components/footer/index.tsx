import { FcLike } from "react-icons/fc";

const media = [
  {
    name: "LINKEDIN",
    link: "https://www.linkedin.com/in/susilawati-budi-utami-9a08841a0",
  },
  { name: "GITHUB",
    link: "https://github.com/mecinsusi"
  },
  { name: "EMAIL",
    link: "mailto:susilawatibudiutami@gmail.com"
  },
  { name: "INSTAGRAM",
    link: "https://www.instagram.com/susilawatibudiu/"
  },
];

export function Footer() {
  return (
    <div className="flex container max-w-full bg-black relative left-0 bottom-0 right-0 w-full h-fit">
      <div className="text-neutral-100 mx-auto items-center text-center">
        <h1 className="font-serif tracking-widest text-yellow-500 pt-32 md:pt-44 pb-8 text-4xl md:text-6xl">
          SUSILAWATI BUDI UTAMI
        </h1>
        <h2 className="font-code text-lg md:text-xl pb-8">mecinsusi.dev</h2>
        <h3 className="flex justify-center font-code pb-10">
          {media.map((item) => {
            return (
              <a href={item.link} className="text-sm md:text-lg hover:text-cyan-500" target="__blank">
                / {item.name} /
              </a>
            );
          })}
        </h3>
        <p className="flex text-sm pt-32 pb-24 justify-center">
          Made with
          <a className="px-2 animate-pulse">
            <FcLike />
          </a>
          by Susilawati Budi Utami
        </p>
      </div>
    </div>
  );
}
