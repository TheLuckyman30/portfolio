import { useRef, useState } from "react";
import { Input, Textarea, Button, Alert } from "../components";
import { useAnimation, useForm, useSendMessage } from "@utils";
import "@sectionsCss/contact-me.css";

export function ContactMe() {
  const { formInputs, updateFormInput, resetFormInputs } = useForm({
    name: "",
    email: "",
    subject: "",
    text: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useAnimation(ref, "animate-drop-in");

  const { result, error, sendMessage } = useSendMessage({
    onSuccess: () => {
      resetFormInputs();
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    },
    onError: () => {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    },
  });

  return (
    <div ref={ref} className="contact-me-main opacity-0 delay-200">
      <div className="contact-me-items">
        {submitted && (
          <Alert
            variant={error ? "error" : "success"}
            header="Message Response"
            message={result}
          />
        )}
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
