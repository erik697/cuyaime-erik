import Image from "next/image";
import Link from "next/link";

export const Animelist = ({ api }: { api: any }) => {
  return (
    <div className="grid grid-cols-2 gap-4 px-4 md:grid-cols-4 sm:grid-cols-3">
      {api.data?.map((anime: any) => {
        return (
          <div key={anime.mal_id} className="shadow-lg">
            <Link
              href={`/anime/${anime.mal_id}`}
              className="cursor-pointer text-color-primary hover:text-color-accent"
            >
              <Image
                src={anime.images.webp.image_url}
                width={350}
                height={350}
                className="w-full max-h-64 object-cover"
                alt=""
              />
              <h3 className="font-bold md:text-xl p-4 ">{anime.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
