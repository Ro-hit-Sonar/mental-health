//import AllEmotions from "@/components/AllEmotions";
import HappyEmotion from "@/components/HappyEmotion";
import React from "react";

const page = () => {
  return (
    <div className="bg-black">
      <h1 className="bg-black text-white ml-28 mr-28 text-center text-2xl font-mono ">
        It’s wonderful to see you feeling happy today. Let’s explore the layers
        of your happiness—it might reveal something beautiful about your
        journey.
      </h1>
      <HappyEmotion />
    </div>
  );
};

export default page;
