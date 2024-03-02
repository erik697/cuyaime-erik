import Link from "next/link";
import { Animelist } from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";

const Page = async () => {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  // );
  // const topAnime = await response.json();

  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  // const recommendedAnime = await getAnimeResponse(
  //   "recommendations/anime",
  //   "limit=8"
  // );
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  // const rndmNumber = Math.floor(Math.random() * 10)
  recommendedAnime = reproduce(recommendedAnime, 10);

  return (
    <>
      {/* anime terpopuler */}
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <Animelist api={topAnime} />
      </section>
      {/* anime rekomendasi */}
      <section>
        <Header title="Rekomendasi" />
        <Animelist api={recommendedAnime} />
      </section>
    </>
  );
};
export default Page;
