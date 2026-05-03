import { useRef, useState } from "react";

export function useForm<T extends { [key: string]: string }>(input: T) {
  const defaultState = useRef({ ...input });
  const [formInputs, setFormInputs] = useState<T>(defaultState.current);

  const updateFormInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newFormInput = { ...formInputs, [e.target.name]: e.target.value };
    setFormInputs(newFormInput);
  };

  const resetFormInputs = () => {
    setFormInputs({ ...defaultState.current });
  };

  return { formInputs, setFormInputs, updateFormInput, resetFormInputs };
}
