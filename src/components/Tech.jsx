import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech) => (
        <div
          className="w-28 h-28 rounded-full border border-white flex justify-center items-center"
          key={tech.name}
        >
          <img
            src={tech.icon}
            alt="tech"
            width="75px"
            height="75px"
            className="rounded-full"
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
