import Link from "next/link";
import { FaGithub, FaTelegram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/delvikdan" },
  { icon: <FaTelegram />, path: "https://t.me/delvik" },
];

function Social({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link
          target="_blank"
          key={index}
          href={`${social.path}`}
          className={iconStyles}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
}

export default Social;
