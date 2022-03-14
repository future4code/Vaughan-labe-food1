import React, { useState } from "react";

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setForm({ ...form, [name]: value });
  };

  const clear = () => {
    setForm(initialState);
  };

  return { form, onChange, clear };
};

export default useForm;
