import Image from "next/image";
import React from "react";
import { Button, Input } from "@nextui-org/react";

const Contact = () => {
  const Line = () => <div className="w-[100px] p-[.5px] bg-black  my-3"></div>;
  const Heading = ({ title }: { title: string }) => (
    <h5 className="h5">{title}</h5>
  );
  const Content = ({ children }: { children: React.ReactNode }) => (
    <div className="fx-col w-ful flex">
      {children}
      <Line />
    </div>
  );
  return (
    <div className="pxs w-full bg-white">
      <div className=" sm:hidden flex w-full fx-c pt-20 lg:pt-24  z-[5] -mt-[250px]">
        <Image
          src="/music.png"
          width={500}
          height={500}
          alt="Helooe"
          className=" h-[300px] md:h-[300px]
           w-full md:w-[80vw] object-cover"
        />
      </div>

      <div className="flex mb:flex-col gap-10 w-full mt-10">
        <div className="flex-1 flex flex-col gap-5">
          <Content>
            <Heading title="Address" />
            <p className="text-lg opacity-80">
              28 Foregate Street (Second Floor), Worcester, WR1 1DS
            </p>
          </Content>
          <Content>
            <Heading title="Phone & Email" />
            <p className="text-lg opacity-80">+44 (0) 1905 642 830</p>
            <p className="text-lg opacity-80">mail@creativemouse.co.uk</p>
          </Content>
          <Content>
            <Heading title="Social Media" />
            <p className="text-lg opacity-80">Facebook</p>
            <p className="text-lg opacity-80">Instagram</p>
            <p className="text-lg opacity-80">Twitter</p>
          </Content>
        </div>
        <div className="flex-[2] w-full  fx-col gap-5">
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
              className=" bg-black text-white   w-auto px-5 py-3 
            "
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
