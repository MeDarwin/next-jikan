"use client";
import { useGetRandomAnimeQuery } from "@/lib/redux/services/animeApi";
import Image from "next/image";
import Link from "next/link";

// TODO: Stylize loading
const RandomAnimeCard = () => {
  const { isLoading, data, isError } = useGetRandomAnimeQuery();
  if (isError) return <div>Unable to show random anime</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <Link href={`/anime/${data?.mal_id}`} className="group">
      <section className="flex flex-row transition-all ease-out duration-500 group-hover:shadow-xl group-hover:shadow-primary px-2 py-3 gap-x-8 items-center outline outline-primary outline-offset-4 rounded-lg">
        <div className="relative max-h-64 min-h-64 max-w-40 min-w-40">
          <Image
            src={data!.images.webp.image_url}
            alt={data!.title}
            fill
            objectFit="contain"
            objectPosition="center"
          />
        </div>
        {/* //TODO : Add details page on every anime */}
        <div className="prose prose-sm max-w-full">
          <h1>{data?.title_japanese}</h1>
          <h2>{data?.title}</h2>
          <p>{data?.synopsis}</p>
          <div className="flex not-prose flex-row gap-x-2 flex-wrap mb-3">
            <span className="badge badge-sm badge-primary text-xs font-bold">
              {data?.duration}
            </span>
            <span className="badge badge-sm badge-secondary text-xs font-bold">
              {data?.status}
            </span>
          </div>
          <div className="flex not-prose flex-row gap-x-2 flex-wrap">
            {data?.themes.map(({ mal_id, name, url }) => (
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                key={mal_id}
                className="badge badge-sm badge-accent text-xs font-bold"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </Link>
  );
};

export default RandomAnimeCard;
