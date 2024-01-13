"use client";
import { Button } from "@nextui-org/react";
import React from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
const Form = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const send = async () => {
      await emailjs.sendForm(
        "service_0ady6pa",
        "template_ver6v3e",
        e.currentTarget,
        "5kOjUoERLzqz_vj0O"
      );
    };
    toast.promise(send(), {
      loading: "Sending...",
      success: "Message sent",
      error: "Error sending message",
    });
    (e.target as HTMLFormElement).reset();
  };
  return (
    <form className="flex-[2] w-full  fx-col gap-5" onSubmit={handleSubmit}>
      <div className="fx-col gap-2">
        <label htmlFor="name">Name*</label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full h-[50px] outline-none bg-transparent border-2 border-black px-3 py-2"
        />
      </div>
      <div className="fx-col gap-2">
        <label htmlFor="email">Email*</label>
        <input
          type="text"
          id="email"
          name="email"
          className="w-full h-[50px] outline-none bg-transparent border-2 border-black px-3 py-2"
        />
      </div>
      <div className="fx-col gap-2">
        <label htmlFor="message">Message*</label>
        <textarea
          name="message"
          id="message"
          className="w-full h-[150px] outline-none bg-transparent border-2 border-black px-3 py-2"
        ></textarea>
      </div>
      <div className=" flex-end">
        <Button
          size="lg"
          className=" bg-black text-white   w-auto rounded-none 
            "
          type="submit"
        >
          Send
        </Button>
      </div>
    </form>
  );
};

export default Form;
