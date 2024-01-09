import SuggestionButton from "@/app/_components/suggestion-button";
import RandomAnimeCard from "./_components/random-anime-card";
import ReccomendationAnimeCard from "./_components/reccomendation-anime-card";

const Page = async () => {
  return (
    <div className="flex flex-col gap-y-8">
      <span className="divider text-xs text-gray-600">Grape Vine</span>
      <section className="grid grid-cols-[1fr_auto] grid-rows-[auto_1fr] gap-y-10 gap-7">
        {/* <SloganCard /> */}
        <SuggestionButton />
      </section>
      <RandomAnimeCard />
      {/* //TODO: add anime recommendation */}
      <span className="divider text-xs text-gray-600">Cherry Blossom</span>
      <section>
        <h1 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent w-fit mb-8">
          Anime Recommendation
        </h1>
        <ReccomendationAnimeCard />
      </section>
    </div>
  );
};

export default Page;
