import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <span className="text-4xl font-semibold">
        Delvik<span className="text-accent">.</span>
      </span>
    </Link>
  );
}

export default Logo;
