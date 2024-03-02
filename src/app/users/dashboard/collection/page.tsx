import Header from "@/components/Dashboard/Header";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  return (
    <section className="mt-4 px-4 w-full">
      <Header title={"My collection"} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"></div>
    </section>
  );
};

export default Page;
