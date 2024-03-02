import Header from "@/components/Dashboard/Header";
// import { authUserSession } from "@/libs/auth-libs";
// import prisma from "@/libs/prisma";
import Link from "next/link";

const page = async () => {
  // const user = await authUserSession();
  // const comments = await prisma.comment.findMany({
  //   where: { user_email: user?.email },
  // });
  return (
    <section className="mt-4 px-4 w-full">
      <Header title={"My comments"} />

      {/* {comments.length > 0 ? (
        <div className="grid grid-cols-1 py-2 gap-4">
          {comments.map((comment) => {
            return (
              <Link
                href={`/anime/${comment.anime_mal_id}`}
                className="bg-color-primary text-color-dark p-4"
                key={comment.id}
              >
                <p className="text-sm">{comment.anime_title}</p>
                <p>{comment.comment}</p>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="text-color-primary text-2xl justify-between items-center">
          Data Kosong
        </div>
      )} */}
    </section>
  );
};

export default page;
