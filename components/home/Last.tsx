import Image from "next/image";
import React from "react";

const Last = () => {
  return (
    <div className="pt-20 scroll-smooth" id="about">
      <div
        className="flex justify-between w-full pxs
         h-full  gap-72 "
      >
        <div className=" pt-5 hidden md:flex ">
          <Image
            src="/rightson-black.svg"
            width={100}
            height={100}
            className="h-24 "
            alt="RIGHTSON KIRIGHA"
          />
        </div>
        <div
          className="flex-col flex gap-3 
           h-full  md:justify-center "
        >
          {" "}
          <h1 className="text-4xl font-[500] leading-[50px]">
            Its not just about the design, its about the results. But now, lets
            learn about Rightson, you might need an pen and paper for this.
          </h1>
          <p
            className="text-base  
            font-[400] w-full"
          >
            <br />
            <br />
            So, I am a twenty something year old designer, developer and
            founder(multiple failed projects). I went to Chavakali High School,
            located in Vihiga County. I did my KCSE in 2021 and scored a
            (something between A-E, just guess). Was it easy? Yes. Was it worth
            it? Yes. Am i a genius? Nope. Anyways, joined Riara University in
            2021 to pursue a degree in Computer Science.
            <br />
            <br />
            I started my tech journey immediately in highschool, had a dream of
            creating an adult site(childish right?). I started learning HTML and
            CSS , but then ,got bored and decided to focus on my studies. When I
            joined campus, I started learning web development again, but this
            time, I was more serious.Knowing i needed to make money and start a
            startup
            <br />
            <br />
            Two and a half years down the line , am currently a full time
            student and a freelancer. I have worked with a may clients and i am
            looking forward to working with more. I have like a million
            projects, but i will only mention a few.
            <br />
            <br />
          </p>
        </div>
      </div>
      <div className="relative  text-black fx-c py-32 overflow-hidden">
        <h1 className="text-4xl font-[700] text-center  p-10 md:max-w-[700px] text-black z-[2]">
          Thank you for reading, now lets get to work.
        </h1>
        <Image
          src="/chari.png"
          className="absolute  object-cover 
          w-full h-full md:object-cover z-[1]  "
          alt="chari"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Last;
