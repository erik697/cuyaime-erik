import Header from "@/components/Dashboard/Header";
import Link from "next/link";

const page = async () => {
  return (
    <section className="mt-4 px-4 w-full">
      <Header title={"My comments"} />
    </section>
  );
};

export default page;
