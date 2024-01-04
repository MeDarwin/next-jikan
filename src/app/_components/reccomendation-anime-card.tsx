"use client";
import { useGetRecommendedAnimeQuery } from "@/lib/redux/services/animeApi";
import { RecomendationAnime } from "@/types";
import { useAnimate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

/** Helper to loop over entry */
const renderEntry = (anime: RecomendationAnime) => {
  return anime.entry.map((entry) => (
    <EntryCard key={entry.mal_id} entry={entry} />
  ));
};

const EntryCard = ({ entry }: { entry: RecomendationAnime["entry"][0] }) => {
  const [isHovered, setHovered] = useState<boolean>(false);
  const [scope, animate] = useAnimate<HTMLImageElement>();

  useEffect(() => {
    let clearZIndex: NodeJS.Timeout;
    if (isHovered) {
      const enterHoverAnimation = async () => {
        await animate(
          scope.current,
          {
            scale: 2,
            zIndex: 10,
            boxShadow: "rgba(110, 53, 174, .8) 0 0 20px 3px",
          },
          { ease: "backOut" }
        );
      };
      enterHoverAnimation();
    } else {
      const exitHoverAnimation = async () => {
        await animate(
          scope.current,
          { scale: 1, zIndex: 1, boxShadow: "rgba(110, 53, 174, .8) 0 0 0" },
          { ease: "backIn" }
        );
      };
      clearZIndex = setTimeout(() => (scope.current.style.zIndex = "0"), 500);
      exitHoverAnimation();
    }
    return () => clearTimeout(clearZIndex);
  }, [animate, isHovered, scope]);

  return (
    <article
      className="relative grid grid-rows-[auto_1fr] place-items-center rounded-sm px-2 outline outline-primary outline-offset-4 mb-8 h-fit py-3"
      key={entry.mal_id}
    >
      <Image
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        ref={scope}
        src={entry.images.webp.image_url}
        alt={entry.title}
        height={224}
        width={126}
        objectFit="cover"
        objectPosition="center"
      />
      <Link href={`/anime/${entry.mal_id}`}>
        <h5 className="text-white text-start w-fit transition-all text-base hover:font-[600] mt-2">
          {entry.title}
        </h5>
      </Link>
    </article>
  );
};

const ReccomendationAnimeCard = () => {
  const { isError, isLoading, data } = useGetRecommendedAnimeQuery();
  if (isError) return <div>Unable to show reccomendation</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="columns-[126px] gap-6">
      {data?.data.map((anime) => renderEntry(anime))}
    </div>
  );
};

export default ReccomendationAnimeCard;
