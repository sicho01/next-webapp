"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const Input = ({ title, body, button, onSubmit }: InputParams) => {
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<any>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const title = target.title.value;
    const body = target.body.value;
    const { method, href, options } = await onSubmit(title, body);
    router[method](href, options);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input type="text" name="title" placeholder={title} />
      </p>
      <p>
        <textarea name="body" placeholder={body} />
      </p>
      <p>
        <input type="submit" value={button.label} />
      </p>
    </form>
  );
};

export type InputParams = {
  title: string;
  body: string;
  button: { label: string };
  onSubmit: (
    title: string,
    body: string
  ) => Promise<{
    method: "push" | "replace";
    href: string;
    options?: any;
  }>;
};

export default Input;
