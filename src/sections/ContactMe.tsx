import { Input, Textarea, Button } from "../components";
import { useForm, useSendMessage } from "@utils";

export function ContactMe() {
  const { formInputs, updateFormInput, resetFormInputs } = useForm({
    name: "",
    email: "",
    subject: "",
    text: "",
  });

  const { sendMessage } = useSendMessage({
    onSuccess: () => {
      resetFormInputs();
    },
  });

  return (
    <div className="flex justify-center w-full">
      <div className="w-full sm:w-[70%]">
        <form className="flex flex-col flex-1 gap-2" onSubmit={sendMessage}>
          <div className="flex gap-2">
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
