import SadEmotion from "@/components/SadEmotion";
import React from "react";

const page = () => {
  return (
    <div className="bg-black">
      <h1 className="bg-black text-white ml-28 mr-28 text-center text-2xl font-mono ">
        Its okay to feel sad—every emotion has something to teach us. Lets
        explore this sadness together and find its roots.
      </h1>
      <SadEmotion />
    </div>
  );
};

export default page;
