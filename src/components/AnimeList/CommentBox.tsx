import prisma from "@/libs/prisma";

const CommentBox = async ({ anime_mal_id }) => {
  const comments = await prisma.comment.findMany({ where: { anime_mal_id } });
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
      {comments.map((comment) => {
        return (
          <div
            className="text-color-dark bg-color-primary p-4"
            key={comment.id}
          >
            <p>{comment.username}</p>
            <p>{comment.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentBox;
