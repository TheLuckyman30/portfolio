import { useState } from "react";
import { Backdrop, Input, MyButton } from "./";
import { Textarea } from "./Textarea";

interface ContactMeProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

export function ContactMe({ show, setShow }: ContactMeProps) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [text, setText] = useState<string>("");

  function sendMessage() {}

  return (
    <div className={`${show ? "" : "hidden"}`}>
      <Backdrop>
        <div className="flex flex-col gap-5 bg-gray-200 min-w-fit w-100 p-2 rounded-md shadow-md">
          <div className="flex w-full justify-between">
            <div className="font-bold text-2xl">Contact Me</div>
            <button
              className="text-xl text-slate-700 cursor-pointer"
              onClick={() => setShow(false)}
            >
              X
            </button>
          </div>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <Input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
          />
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Text"
          />
          <MyButton>Send Message</MyButton>
        </div>
      </Backdrop>
    </div>
  );
}
