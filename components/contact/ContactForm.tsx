import Image from "next/image";
import React from "react";
import { Button, Input } from "@nextui-org/react";
import Form from "./Form";

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
      <div
        className="  flex w-full fx-c pt-20 lg:pt-24 
       z-[5] -mt-[250px]"
      >
        <Image
          src="/connect.jpg"
          width={500}
          height={500}
          alt="Helooe"
          className=" h-[300px] md:h-[400px]
           w-full md:w-[80vw] object-cover"
        />
      </div>

      <div className="flex mb:flex-col gap-10 w-full mt-10">
        <div className="flex-1 flex flex-col gap-5">
          <Content>
            <Heading title="Address" />
            <p className="text-lg opacity-80">Nairobi, Kenya, 00100, Nairobi</p>
          </Content>
          <Content>
            <Heading title="Phone & Email" />
            <p className="text-lg opacity-80">+254 791568168</p>
            <p className="text-lg opacity-80">
              <a href="mailto:chari.rightson@gmail.com">
                chari.rightson@gmail.com
              </a>
            </p>
          </Content>
          <Content>
            <Heading title="Social Media" />

            <p>
              <a
                href="https://www.github.com/rightson1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg opacity-80"
              >
                Github
              </a>
            </p>
            <p>
              <a
                href="https://www.twitter.com/_rightson_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg opacity-80"
              >
                Twitter
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/rightson-kirigha/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg opacity-80"
              >
                LinkedIn
              </a>
            </p>
          </Content>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
