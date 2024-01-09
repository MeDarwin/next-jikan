"use client";
import { placeholderImg } from "@/lib/placeholderImg";
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
          { scale: 1.1, zIndex: 10 },
          { ease: "backOut" }
        );
      };
      enterHoverAnimation();
    } else {
      const exitHoverAnimation = async () => {
        await animate(
          scope.current,
          { scale: 1, zIndex: 1 },
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
      className="relative break-inside-avoid-column grid grid-rows-[auto_1fr] place-items-center w-full rounded-sm px-2 shadow-lg shadow-primary outline outline-primary outline-offset-4 mb-8 h-fit py-3"
      key={entry.mal_id}
    >

      <div className="relative h-56 w-40">
        <Image
          className="object-contain object-center"
          placeholder={placeholderImg}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          ref={scope}
          src={entry.images.webp.image_url}
          alt={entry.title}
          fill
        />
      </div>
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
  if (isLoading)
    return (
      <div className="flex flex-wrap gap-6">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="flex break-inside-avoid-column gap-4 flex-col w-40 mb-8"
          >
            <div className="skeleton h-56 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
          </div>
        ))}
      </div>
    );

  return (
    <div className="columns-[160px] gap-6">
      {data?.data.map((anime) => renderEntry(anime))}
    </div>
  );
};

export default ReccomendationAnimeCard;
