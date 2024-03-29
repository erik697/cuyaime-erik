import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="text-md md:text-xl underline hover:text-indigo-500 transition-all hover:text-color-accent text-color-primary"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};
export default Header;
