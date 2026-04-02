import { Backdrop, Input } from "./";
import { Textarea } from "./Textarea";

export function ContactMe() {
  return (
    <Backdrop>
      <div className="flex flex-col gap-5 bg-gray-200 min-w-fit w-100 p-2 rounded-md shadow-md">
        <h1 className="font-bold text-2xl">Contact Me</h1>
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Input placeholder="Subject" />
        <Textarea placeholder="Text" />
      </div>
    </Backdrop>
  );
}
