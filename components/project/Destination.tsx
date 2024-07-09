import React from "react";
import { LinkPreview } from "../ui/link-preview";
import { Button } from "../ui/moving-border";
import { Globe } from "lucide-react";
import { VscGithubInverted } from "react-icons/vsc";

type Props = {
  liveLink: string;
  githubLink: string;
  imageSrc: string;
};

const Destination = ({ liveLink, githubLink, imageSrc }: Props) => {
  return (
    <div className="flex items-center justify-center gap-x-10 p-2  mb-5">
      <LinkPreview url={liveLink} imageSrc={imageSrc} isStatic>
        <Button className="bg-black-100 text-white border-slate-800 text-base md:text-xl rounded-none">
          <Globe className="mr-2" /> Live link
        </Button>
      </LinkPreview>
      <LinkPreview url={githubLink}>
        <Button className="bg-black-100 text-white border-slate-800 text-base md:text-xl rounded-none  text-nowrap">
          <VscGithubInverted className="mr-2 h-5 w-20" /> Source code
        </Button>
      </LinkPreview>
    </div>
  );
};

export default Destination;
