import { useState } from "react";
import { Input, Textarea, Button } from "../components";

interface ContactFormInput {
  name: string;
  email: string;
  subject: string;
  text: string;
}

export function ContactMe() {
  const [formInput, setFormInput] = useState<ContactFormInput>({
    name: "",
    email: "",
    subject: "",
    text: "",
  });
  const [result, setResult] = useState("");

  const sendMessage = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    console.log(event.target);
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_FORM_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setFormInput({ name: "", email: "", subject: "", text: "" });
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  function updateFormInput(
    e:
      | React.ChangeEvent<HTMLInputElement, HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>,
  ) {
    const newFormInput = { ...formInput, [e.target.name]: e.target.value };
    setFormInput(newFormInput);
  }

  return (
    <div className="flex justify-center w-full">
      <div className="w-full sm:w-[70%]">
        <form
          className="flex flex-col flex-1 gap-2"
          onSubmit={(e) => sendMessage(e)}
        >
          <div className="flex gap-2">
            <Input
              id="contact-me-name"
              name="name"
              value={formInput.name}
              onChange={(e) => updateFormInput(e)}
              placeholder="Name"
              required
            />
            <Input
              id="contact-me-email"
              name="email"
              value={formInput.email}
              onChange={(e) => updateFormInput(e)}
              placeholder="Email"
              required
            />
          </div>
          <Input
            id="contact-me-subject"
            name="subject"
            value={formInput.subject}
            onChange={(e) => updateFormInput(e)}
            placeholder="Subject"
            required
          />
          <Textarea
            id="contact-me-text"
            name="text"
            value={formInput.text}
            onChange={(e) => updateFormInput(e)}
            placeholder="Text"
            required
          />
          <Button
            type="submit"
            disabled={
              !formInput.name ||
              !formInput.email ||
              !formInput.subject ||
              !formInput.text
            }
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
