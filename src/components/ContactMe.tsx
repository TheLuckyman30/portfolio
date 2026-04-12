import { useRef, useState } from "react";
import { Backdrop, Input, Button, Textarea } from "./";
import { useClickOutsie } from "../utils/click-outside-handler";

interface ContactMeProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

export function ContactMe({ show, setShow }: ContactMeProps) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [text, setText] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);
  useClickOutsie(formRef, show, setShow);

  function sendMessage(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setName("");
    setEmail("");
    setSubject("");
    setText("");
  }

  return (
    <div className={`${show ? "" : "hidden"}`}>
      <Backdrop>
        <form ref={formRef} onSubmit={(e) => sendMessage(e)}>
          <div className="flex flex-col gap-5 bg-gray-200 min-w-fit w-100 p-2 rounded-md shadow-md">
            <div className="flex w-full justify-between">
              <div className="font-bold text-2xl">Contact Me</div>
              <button
                type="button"
                className="text-xl text-slate-700 cursor-pointer"
                onClick={() => setShow(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-slate-500 hover:text-slate-700 duration-75"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
              </button>
            </div>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <Input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              required
            />
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Text"
              required
            />
            <Button
              type="submit"
              disabled={!name || !email || !subject || !text}
            >
              Send Message
            </Button>
          </div>
        </form>
      </Backdrop>
    </div>
  );
}
