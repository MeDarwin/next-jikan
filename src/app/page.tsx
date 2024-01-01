import SloganCard from "@/components/home/slogan-card";
import SuggestionButton from "@/components/home/suggestion-button";

//TODO: do client fetching (preferred) since it only fetch one specific data
const Page = async () => {
  return (
    <div>
      <section className="grid grid-cols-[1fr_auto] grid-rows-[auto_1fr] gap-y-10 gap-7 mb-8">
        <SloganCard />
        <SuggestionButton />
      </section>
      <section>{/* //TODO: add anime recommendation */}</section>
    </div>
  );
};

export default Page;
