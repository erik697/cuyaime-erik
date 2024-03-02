import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex justify-between md:items-center md:flex-row flex-col p-4 gap-2">
        <Link href="/" className="font-bold text-white text-2xl">
          CuyAnimeList
        </Link>
        <InputSearch />
        <UserActionButton />
      </div>
    </header>
  );
};
export default Navbar;
