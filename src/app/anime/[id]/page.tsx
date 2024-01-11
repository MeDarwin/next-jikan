import Badge from "@/components/badge";
import { app } from "@/config";
import { placeholderImg } from "@/lib/placeholderImg";
import { AnimeFullById } from "@/types";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const getAnimeById = async (id: string) => {
  const res = await fetch(`${app.apiUrl}/anime/${id}/full`);
  const data: AnimeFullById = await res.json();
  return data.data;
};

//TODO: add more stuff from API
const Page = async ({ params }: { params: { id: string } }) => {
  const data = await getAnimeById(params.id);
  return (
    <article className="flex flex-col gap-8">
      <section className="flex flex-row outline outline-primary outline-offset-4 rounded-lg px-2 py-3 justify-between">
        <div>
          <h3 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent w-fit">
            #{data.rank ?? "Unranked"}
          </h3>
          <h1 className="text-3xl font-semibold">{data.title}</h1>
          <h2 className="text-xl">{data.title_japanese}</h2>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-row gap-2 flex-wrap">
            <Badge className="badge-secondary">{data.status}</Badge>
            <Badge className="badge-primary">{data.type}</Badge>
            <Badge className="badge-primary">{data.duration}</Badge>
          </div>
          <div className="self-end text-3xl">
            <FontAwesomeIcon icon={faStar} color="#facc15" className="mr-2" />
            {data.score}
          </div>
        </div>
      </section>
      <section className="grid grid-cols-12 h-96 gap-x-2">
        <div className="relative col-span-4">
          <Image
            className="object-contain object-left"
            placeholder={placeholderImg}
            src={data.images.webp.large_image_url}
            alt={data.title}
            fill
          />
        </div>
        <div className="h-full col-span-8 place-self-center w-full">
          {data.trailer.embed_url ? (
            <iframe
              className="w-full h-full"
              src={`${data.trailer.embed_url}&mute=1`}
              title={data.title}
              allowFullScreen
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          ) : (
            <span className="h-full flex justify-center items-center text-xl font-bold">
              No trailer available
            </span>
          )}
        </div>
      </section>
      <section className="flex flex-col outline outline-primary outline-offset-4 rounded-lg px-2 py-3 gap-y-4">
        <h3 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent w-fit leading-tight">
          Synopsis
        </h3>
        <p className="w-full text-sm">{data.synopsis}</p>
      </section>
      <section>
        <span className="divider divider-start divider-accent">
          <h6 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent w-fit">
            Where to watch
          </h6>
        </span>
        {data.streaming.map((streaming) => (
          <div key={streaming.name} className="inline mr-4">
            <a
              href={streaming.url}
              target="_blank"
              rel="noreferrer"
              className="text-lg font-semibold hover:font-[800] hover:text-accent transition-all hover:tracking-widest"
            >
              {streaming.name}
            </a>
          </div>
        ))}
      </section>
      <section>
        <span className="divider divider-start divider-accent">
          <h6 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent w-fit">
            External links
          </h6>
        </span>
        {data.external.map((external) => (
          <div key={external.name} className="inline mr-4">
            <a
              href={external.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold hover:font-[800] hover:text-accent transition-all hover:tracking-wider"
            >
              {external.name}
            </a>
          </div>
        ))}
      </section>
      <section>
        <span className="divider divider-start divider-accent">
          <h5 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent w-fit">
            Other
          </h5>
        </span>
        {data.relations.map(({ relation, entry }) => (
          <>
            <p>{relation}</p>
            {entry.map((entry) => (
              <div key={entry.mal_id} className="inline mx-4">
                <Link
                  href={`/anime/${entry.mal_id}`}
                  className="text-sm font-semibold hover:font-[800] hover:text-accent transition-all hover:tracking-wider"
                >
                  {entry.name}
                </Link>
              </div>
            ))}
          </>
        ))}
      </section>
    </article>
  );
};

export default Page;
