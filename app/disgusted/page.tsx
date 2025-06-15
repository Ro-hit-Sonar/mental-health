import DisgustedEmotion from "@/components/DisgustedEmotion";
import React from "react";

const page = () => {
  return (
    <div className="bg-black">
      <h1 className="bg-black text-white ml-28 mr-28 text-center text-2xl font-mono ">
        Disgust can arise when something feels off or wrong. Let’s explore
        what’s triggering this reaction and why..
      </h1>
      <DisgustedEmotion />
    </div>
  );
};

export default page;
