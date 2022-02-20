import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div>
        <a>Logo</a>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/Projects">
        <a>Projects</a>
      </Link>
      <Link href="/Contact">
        <a>Contact</a>
      </Link>
    </nav>
  );
};

export default NavBar;
