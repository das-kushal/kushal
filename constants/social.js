import {
  SiLeetcode,
  SiGithub,
  SiGeeksforgeeks,
  SiLinkedin,
} from "react-icons/si";
const socialLinks = [
  {
    id: 1,
    text: "Linkedin",
    icon: <SiLinkedin />,
    href: "https://www.linkedin.com/in/kushal-das-3936b3211/",
  },
  {
    id: 2,
    text: "LeetCode",
    icon: <SiLeetcode />,
    href: "https://leetcode.com/kd-83/",
  },
  {
    id: 3,
    text: "Github",
    icon: <SiGithub />,
    href: "https://github.com/das-kushal",
  },
  {
    id: 4,
    text: "GFG",
    icon: <SiGeeksforgeeks />,
    href: "https://auth.geeksforgeeks.org/user/kushaldas30102002/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user",
  },
];

export default socialLinks;
