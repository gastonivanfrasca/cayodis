import { FaReact, FaAngular, FaVuejs, FaJs, FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const getIconFromStr = (str: string): React.ReactNode => {
  switch (str) {
    case "react":
      return <FaReact className="icon" />;
    case "angular":
      return <FaAngular className="icon" />;
    case "vue":
      return <FaVuejs className="icon" />;
    case "vanillaJS":
      return <FaJs className="icon" />;
    case "nodeJS":
      return <FaNodeJs className="icon" />;
    case "typescript":
      return <SiTypescript className="icon" />;
    default:
      return <FaJs className="icon" />;
  }
};

export default getIconFromStr;
