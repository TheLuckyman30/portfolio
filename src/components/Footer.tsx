import { findIcon } from "./common-ui";

const contacts = [
  { name: "Github", link: "https://github.com/TheLuckyman30" },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/brandon-nauta-0077b3259/",
  },
];

export function Footer() {
  return (
    <footer className="flex w-screen justify-center bg-slate-700">
      <div className="flex flex-col w-full mx-auto sm:max-w-5xl p-5 gap-5 justify-center items-center text-white">
        <small>&copy; 2026 Brandon Nauta. All rights reserved.</small>
        <div className="flex gap-10">
          {contacts.map((contact) => (
            <a
              href={contact.link}
              target="_blank"
              className="flex flex-col gap-2 items-center cursor-pointer"
            >
              {findIcon(contact.name, "md")}
              <span>{contact.name}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
