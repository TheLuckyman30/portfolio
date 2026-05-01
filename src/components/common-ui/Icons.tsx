import {
  AndroidStudio,
  AzureSqlDatabase,
  C,
  Cplusplus,
  Css,
  Discorddotjs,
  Express,
  Git,
  Github,
  Html5,
  Java,
  Javascript,
  JetpackCompose,
  Linkedin,
  Mongodb,
  Nestjs,
  Nodedotjs,
  Prisma,
  Python,
  React,
  Typescript,
  VisualStudioCode,
  Vite,
} from "@thesvg/react";
import zustand from "../../assets/svgs/zustand.svg";

export function findIcon(
  label: string,
  size: "xs" | "sm" | "md" | "lg" | "xl" | "twoxl" = "xs",
) {
  const sizeClasses = {
    xs: "w-2 h-2",
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
    xl: "w-6 h-6",
    twoxl: "w-8 h-8",
  };

  switch (label.toLowerCase()) {
    // Programming Languages

    case "typescript":
      return <Typescript className={`${sizeClasses[size]}`} />;
    case "javascript":
      return <Javascript className={`${sizeClasses[size]}`} />;
    case "python":
      return <Python className={`${sizeClasses[size]}`} />;
    case "c":
      return <C className={`${sizeClasses[size]}`} />;
    case "c++":
      return <Cplusplus className={`${sizeClasses[size]}`} />;
    case "java":
      return <Java className={`${sizeClasses[size]}`} />;
    case "kotlin":
      return (
        <img
          src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/kotlin/default.svg"
          className={`${sizeClasses[size]}`}
        />
      );
    case "html":
      return <Html5 className={`${sizeClasses[size]}`} />;
    case "css":
      return <Css className={`${sizeClasses[size]}`} />;

    // Frameworks/Libraries

    case "react":
      return <React className={`${sizeClasses[size]}`} />;
    case "tanstack":
      return (
        <img
          src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/tanstack/default.svg"
          className={`${sizeClasses[size]}`}
        />
      );
    case "tanstack start":
      return (
        <img
          src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/tanstack/default.svg"
          className={`${sizeClasses[size]}`}
        />
      );
    case "tanstack query":
      return (
        <img
          src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/tanstack/default.svg"
          className={`${sizeClasses[size]}`}
        />
      );
    case "prisma":
      return (
        <Prisma
          className={` ${sizeClasses[size]} text-black **:fill-current`}
        />
      );
    case "nestjs":
      return <Nestjs className={`${sizeClasses[size]}`} />;
    case "expressjs":
      return <Express className={`${sizeClasses[size]}`} />;
    case "zustand":
      return <img src={zustand} className={`${sizeClasses[size]}`} />;
    case "jetpack compose":
      return <JetpackCompose className={`${sizeClasses[size]}`} />;

    // Database

    case "sql":
      return <AzureSqlDatabase className={`${sizeClasses[size]}`} />;
    case "supabase":
      return (
        <img
          src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/supabase/default.svg"
          className={`${sizeClasses[size]}`}
        />
      );
    case "postgresql":
      return (
        <img
          src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/postgresql/default.svg"
          className={`${sizeClasses[size]}`}
        />
      );
    case "mongodb":
      return <Mongodb className={`${sizeClasses[size]}`} />;

    // Tools/Software

    case "android studio":
      return <AndroidStudio className={`${sizeClasses[size]}`} />;
    case "git":
      return <Git className={`${sizeClasses[size]}`} />;
    case "github":
      return (
        <Github className={`${sizeClasses[size]} text-black **:fill-current`} />
      );
    case "vite":
      return <Vite className={`${sizeClasses[size]}`} />;
    case "vscode":
      return <VisualStudioCode className={`${sizeClasses[size]}`} />;
    case "nodejs":
      return <Nodedotjs className={`${sizeClasses[size]}`} />;
    case "discordjs":
      return <Discorddotjs className={`${sizeClasses[size]}`} />;

    // Contacts
    case "linkedin":
      return (
        <Linkedin
          className={`${sizeClasses[size]} text-black **:fill-current`}
        />
      );
    default:
      return null;
  }
}
