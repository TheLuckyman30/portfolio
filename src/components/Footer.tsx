import { findIcon } from "./common-ui";
import "@componentCss/footer.css";

const contacts = [
  { name: "Github", link: "https://github.com/TheLuckyman30" },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/brandon-nauta-0077b3259/",
  },
];

export function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <small>&copy; 2026 Brandon Nauta. All rights reserved.</small>
        <div className="footer-contacts">
          {contacts.map((contact) => (
            <a
              href={contact.link}
              key={contact.name}
              target="_blank"
              className="footer-buttons"
            >
              {findIcon(contact.name, "lg")}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
