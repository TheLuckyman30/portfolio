import { useState } from "react";

export function useSendMessage(opts?: {
  onSuccess?: () => void;
  onError?: () => void;
}) {
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const sendMessage = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_FORM_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your message was successfully sent!");
      setError(true);
      opts?.onSuccess?.();
    } else {
      setResult("There was a problem sending your message.");
      setError(false);
      opts?.onError?.();
    }
  };

  return { result, error, sendMessage };
}
