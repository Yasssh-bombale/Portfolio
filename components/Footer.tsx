import React from "react";
import MagicButton from "./ui/MagicButton";
import { Send } from "lucide-react";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-70"
        />
      </div>

      {/* heading reach out to me seciton */}
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 my-5 md:mt-10 text-center">
          Reach out to me today,let&apos;s discuss how i can help you
        </p>
        <a href="mailto:yashbombale@gmail.com">
          <MagicButton
            position="right"
            title="Let's get in touch"
            icon={<Send size={16} />}
          />
        </a>
      </div>
      {/* social media icons */}
      <div className="flex flex-col md:flex-row mt-16 items-center justify-between p-2">
        <p className="text-sm font-ligt md:text-base md:font-normal">
          Copyright © 2024 Yash Bombale
        </p>
        <div className="flex items-center  gap-3 md:gap-6">
          {socialMedia.map((profile) => (
            <a
              href={profile.href}
              target="_blank"
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={profile.img} alt={"social"} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
