
import SuccessStoryCard from "./SuccessStoryCard";

const SuccessStories = () => {
  const paperBenchStory = {
    title: "Tim, Ryan, Ayush, and Kaylee's paper was featured in <span class=\"text-[#00d2ff]\">OpenAI's PaperBench</span>",
    description: [
      "In an outstanding recognition of their cutting-edge work, their paper, <span class=\"text-[#00d2ff]\">Semantic Self-Consistency</span> was featured among 20 state-of-the-art AI research papers in <span class=\"text-[#00d2ff]\">OpenAI's PaperBench</span>. OpenAI handpicked these 20 papers from ICML and NeurIPS and reached out to collaborate with our student author, Tim.",
      "Earlier, their paper was also accepted at <span class=\"text-[#00d2ff]\">NeurIPS MATH-AI</span>. Notably, after their NeurIPS presentation, two of the four researchers were admitted to <span class=\"text-[#00d2ff]\">Stanford University</span>.*",
      "*The other two researchers were 1: already accepted to college at the time they joined the project and 2: based in Germany"
    ],
    image: "carousel1.jpeg",
    imageCaption: "OpenAI's PaperBench features Algoverse paper among its chosen 20 state-of-the-art papers"
  };

  const abhayStory = {
    title: "As a high school student, Abhay's research was <span class=\"text-[#00d2ff]\">accepted to NeurIPS</span> and cited by Microsoft",
    description: [
      "Abhay's paper, <span class=\"text-[#00d2ff]\">AAVENUE</span>, was accepted to an EMNLP Workshop and the NeurIPS High School Track (5% acceptance rate). Furthermore, it was cited by researchers at Microsoft, Oxford, University of Washington, and other institutions.",
      "Abhay came into the program with <span class=\"text-[#00d2ff]\">no prior experience</span> in AI or research.",
      "After Algoverse, Abhay acquired internships at <span class=\"text-[#00d2ff]\">Stanford, MIT, and Harvard</span>."
    ],
    image: "/lovable-uploads/9e0cf913-ba11-4e1b-979b-dff08f5b392a.png",
    imageCaption: "Abhay presents AAVENUE at EMNLP Positive Impact 2024 in Miami, Florida"
  };

  return (
    <div className="container-inner mt-24">
      <div className="flex flex-col gap-8">
        <SuccessStoryCard {...paperBenchStory} />
        <SuccessStoryCard {...abhayStory} delay={0.2} />
      </div>
    </div>
  );
};

export default SuccessStories;
