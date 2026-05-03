import { useAnimation } from "@utils";
import { useRef } from "react";
import { Fragment } from "react/jsx-runtime";

export function About() {
  const ref = useRef<HTMLDivElement | null>(null);
  useAnimation(ref, "animate-drop-in");

  const aboutMeText = [
    "I am an aspiring software engineer/full-stack developer. I’m currently a senior at the University of Delaware, soon to graduate with a major in Computer Science (BS) and minors in Game Studies and Interactive Media. ",
    "Over the past 4 years, I have built out strong foundations in modern web development, and I love building out intuitive, scalable, and maintainable full-stack applications. I have extensive experience with React and Typescript on the frontend, along with backend technologies such as NestJs, PostgreSQL, and Supabase. I’ve worked on projects that involve building RESTful APIs, integrating third-party services, and designing database schemas. Whether working independently or on a team, I aim to contribute meaningfully in any way that I can. Whether it be delivering a new feature, debugging an existing one, or just helping out a teammate when they get stuck. ",
    "Outside of Computer Science, I am an avid gamer and I love watching soccer. I spend my free time playing some of my favorite games (Football Manager, my soccer interest has overlapped with my gaming interest), and I also enjoy getting out to the field to practice and stay active. ",
    "I’m always looking for opportunities to grow both professionally and personally. I try to challenge myself with personal projects that push me outside of my comfort zone, especially when it involves learning new technologies or tracking unfamiliar problems. ",
  ];

  return (
    <div
      ref={ref}
      className="sm:text-justify bg-linear-65 from-purple-500 to-blue-500 p-5 sm:p-10 rounded-md shadow-xl text-white font-medium text-shadow-md delay-200"
    >
      {aboutMeText.map((text, index) => (
        <Fragment key={index}>
          <p>{text}</p>
          <br className="last:hidden" />
        </Fragment>
      ))}
    </div>
  );
}
