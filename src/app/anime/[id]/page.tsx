import { app } from "@/config";
import { AnimeFullById } from "@/types";

const getAnimeById = async (id: string) => {
  const res = await fetch(`${app.apiUrl}/anime/${id}/full`);
  const data: AnimeFullById = await res.json();
  return data.data;
};

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await getAnimeById(params.id);
  return <>#{data.rank}</>;
};

export default Page;
