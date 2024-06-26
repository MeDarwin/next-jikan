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
      className="relative break-inside-avoid-column grid grid-rows-[auto_1fr] place-items-center w-full rounded shadow-lg border-2 border-primary shadow-primary mb-8 h-fit"
      key={entry.mal_id}
    >
      {/* //TODO: Force open tooltip or look for alternative in samll device */}
      <div className="relative min-h-[160px] w-full tooltip tooltip-bottom" data-tip={entry.title}>
        <Link href={`/anime/${entry.mal_id}`}>
          {/* //TODO: Placeholder fix if possible. Not working since widht and height is 0 */}
          <Image
            className="object-contain object-center w-full h-full"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            width={0}
            height={0}
            sizes="100%"
            ref={scope}
            src={entry.images.webp.image_url}
            alt={entry.title}
          />
        </Link>
      </div>
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
    <div className="columns-[160px] gap-10">
      {data?.data.map((anime) => renderEntry(anime))}
    </div>
  );
};

export default ReccomendationAnimeCard;
