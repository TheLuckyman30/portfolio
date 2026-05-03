import { useState } from "react";
import { Input, Textarea, Button } from "../components";
import { useForm, useSendMessage } from "@utils";
import "@sectionsCss/contact-me.css";

export function ContactMe() {
  const { formInputs, updateFormInput, resetFormInputs } = useForm({
    name: "",
    email: "",
    subject: "",
    text: "",
  });
  const [test, setTest] = useState<boolean>(false);

  const { result, error, sendMessage } = useSendMessage({
    onSuccess: () => {
      resetFormInputs();
      setTest(true);
      setTimeout(() => setTest(false), 3000);
    },
  });

  return (
    <div className="contact-me-main">
      <div className="contact-me-items">
        {test && <div>{result}</div>}
        <form className="contact-me-form" onSubmit={sendMessage}>
          <div className="contact-me-form-items">
            <Input
              id="contact-me-name"
              name="name"
              value={formInputs.name}
              onChange={updateFormInput}
              placeholder="Name"
              required
            />
            <Input
              id="contact-me-email"
              name="email"
              value={formInputs.email}
              onChange={updateFormInput}
              placeholder="Email"
              required
            />
          </div>
          <Input
            id="contact-me-subject"
            name="subject"
            value={formInputs.subject}
            onChange={updateFormInput}
            placeholder="Subject"
            required
          />
          <Textarea
            id="contact-me-text"
            name="text"
            value={formInputs.text}
            onChange={updateFormInput}
            placeholder="Text"
            required
          />
          <Button
            type="submit"
            disabled={
              !formInputs.name ||
              !formInputs.email ||
              !formInputs.subject ||
              !formInputs.text
            }
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
