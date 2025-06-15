import AllEmotions from "@/components/AllEmotions";
import ContactUs from "@/components/ContactUs";
// import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div
        className="flex h-screen w-full bg-black "
        // style={{
        //   backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px ,transparent 0)`,
        //   backgroundSize: "8px 8px ",
        //   backgroundRepeat: "repeat",
        // }}
      >
        <div
          className="mt-1 h-full w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/health5.png')" }}
        >
          <div className=" font-mono font-extralight text-white flex justify-end items-end mr-24 mt-80 text-3xl ">
            <h1> Emotions are chemicals with meaning </h1>
          </div>
          <div className=" font-mono font-extralight text-white flex justify-end items-end mr-24 mt-8 ">
            <p>Understand , Uncover & take control of your journey.</p>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <p className="   text-center  text-white text-4xl font-bold font-mono">
          {" "}
          <br />
          <br />
          So what are you feeling today?
        </p>
      </div>
      <div
        className="mt-1 min-h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/mental.png')" }}
      >
        <AllEmotions />
      </div>
      <div
        className="mt-1 min-h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/health3.png')" }}
      >
        <div className=" font-mono font-extralight text-white flex justify-start items-start ml-24 mt-20 text-3xl ">
          <h1> Together, We Rise Stronger! </h1>
        </div>
        <div className=" font-mono font-extralight text-white  justify-start items-start  ml-24 mr-96 mt-8  text-justify">
          <p>
            Sometimes, keeping everything bottled up can feel like an endless
            battle. We believe that sharing your story can be a powerful step
            toward healing. In this space, you&lsquo;re invited to let your
            heart speak—pour out your thoughts, feelings, and experiences
            without judgment. If you&apos;d like to engage in a conversation or
            receive a reply, feel free to include your email address. However,
            if you prefer to remain anonymous and simply share what&apos;s
            weighing on your heart, that&#39;s perfectly okay too. Below is the
            confession box where you can express yourself freely, knowing that
            every word contributes to a larger community of support. Remember,
            expressing your emotions is not a sign of weakness, but a courageous
            act of connection..
          </p>
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default page;
