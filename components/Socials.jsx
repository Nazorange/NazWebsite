import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaSteam } from "react-icons/fa";
import { SiTableau } from "react-icons/si";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Nazorange" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/cusenaz/" },
  { icon: <SiTableau />, path:"https://public.tableau.com/app/profile/nawazish.khalander.shaik.mohammed/vizzes"},
  { icon: <FaSteam />, path: "https://steamcommunity.com/id/NwZz69/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" className={iconStyles}>
            {item.icon}
          </a>
        </Link>
      ))}
    </div>
  );
};
export default Social;
