import { useState } from "react";

export function useSendMessage(opts?: {
  onSuccess?: () => void;
  onError?: () => void;
}) {
  const [result, setResult] = useState("");

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
      setResult("Form Submitted Successfully");
      opts?.onSuccess?.();
    } else {
      setResult("Error");
    }
  };

  return { result, sendMessage };
}
