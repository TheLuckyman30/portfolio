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
    <footer
      id="footer"
      className="flex w-screen justify-center bg-white border-t border-gray-300 shadow-[0_-1px_3px_0_rgba(0,0,0,0.1)]"
    >
      <div className="flex flex-col w-full mx-auto sm:max-w-5xl p-5 gap-5 justify-center items-center">
        <small>&copy; 2026 Brandon Nauta. All rights reserved.</small>
        <div className="flex gap-10">
          {contacts.map((contact) => (
            <a
              href={contact.link}
              key={contact.name}
              target="_blank"
              className="cursor-pointer hover:scale-120 duration-75"
            >
              {findIcon(contact.name, "md")}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
