import SloganCard from "@/components/home/slogan-card";
import { app } from "@/config";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const getAnimeRecommendation = async () => {
  const response = await fetch(`${app.apiUrl}/random/anime`, {
    headers: {
      Accept: "application/json",
    },
    next: { tags: ["anime"] },
  });
  if(!response.ok){
    throw new Error("Failed to fetch data.")
  }
  return response.json();
};

const Page = async () => {
  const animeRecommendation = await getAnimeRecommendation()
  console.log(app.apiUrl);
  
  return (
    <div>
      <article className="grid grid-cols-[1fr_auto] grid-rows-[auto_1fr] gap-y-16 gap-7 mb-8">
        <SloganCard />
        <div>
          <Image
            src="https://placehold.co/1920x1080.png"
            width={1920}
            height={1080}
            alt="placehold"
          />
        </div>
        <div>
          <button className="relative group btn btn-primary px-10 shadow-2xl hover:h-full transition-all ease-out duration-700">
            <span className="-translate-x-3 group-hover:translate-x-0 group-hover:-translate-y-20 group-hover:text-4xl transition-all ease-out">
              Watch now
            </span>
            <span className="absolute translate-x-12 group-hover:translate-x-0 group-hover:translate-y-5 group-hover:scale-[8] transition-all ease-out">
              <FontAwesomeIcon icon={faDesktop} />
            </span>
          </button>
        </div>
      </article>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quos
      quas ex nam enim, velit aliquid eaque nesciunt suscipit blanditiis
      incidunt rerum eum fuga error fugit repellendus dolor commodi minima.
      Dicta rem eos dolores odit ipsum sunt doloremque, officiis laudantium.
      Incidunt, optio quam. Explicabo quod nisi, et similique illo molestiae
      facere velit dolore minus rerum impedit aliquam ad rem amet? Incidunt quod
      nisi, iure corporis at optio dignissimos non reprehenderit expedita
      distinctio dolorem suscipit cumque laudantium cum quae corrupti velit eum
      asperiores blanditiis, facere illum. Ex maiores magni officia alias. Quas,
      nostrum. Facere odit iure rem expedita! Corrupti accusamus laboriosam
      dignissimos voluptatum porro iure. Veniam voluptate nobis provident vitae
      iste enim, commodi numquam sapiente laudantium cum et, molestias
      aspernatur fuga? Maxime accusamus, consequatur a, minima excepturi harum
      cumque ipsam, similique hic repellat earum sunt! Ullam consequatur,
      perspiciatis, recusandae natus aut ex cumque aliquam, suscipit cupiditate
      quia veritatis voluptates impedit maiores. Quisquam nobis expedita
      nesciunt eaque natus adipisci libero autem nemo, saepe, impedit similique
      perspiciatis hic itaque mollitia perferendis repellat laborum aliquid
      dolorum. Sunt alias maxime, perspiciatis expedita non dicta
      exercitationem? Eius, corrupti non omnis reprehenderit pariatur
      praesentium ut, facere quos vitae beatae optio architecto ad quia
      assumenda, sunt aliquam ipsa amet voluptates repellat. Beatae qui
      inventore earum voluptate pariatur nisi? Eos ullam delectus ipsa laborum
      debitis similique illo, porro ea molestias voluptatem nam aliquid quia
      magni? Alias eligendi quisquam molestiae iure ipsa veniam, exercitationem,
      sint officia, dolorem obcaecati impedit quasi. Consequuntur suscipit, non
      iste, tempora cum facere temporibus, id officiis saepe sed optio magni
      commodi culpa ipsum fugit quod. Dolores minus doloremque hic porro
      impedit. Nihil molestias dolor alias vel. Praesentium est, velit saepe
      nemo, a odio corrupti provident nihil fugiat dolores sed accusantium
      nesciunt repellat, dolorum ipsum! Ratione quidem esse quo nesciunt dolorem
      asperiores, error saepe repellat accusantium obcaecati. Assumenda
      asperiores veniam, pariatur temporibus unde dolorum culpa ut sint ea atque
      saepe modi illum in molestiae dolore officiis ullam, distinctio est
      doloremque eveniet aspernatur, perferendis soluta ad. Nisi, ratione! Porro
      praesentium odit veritatis enim cumque voluptates placeat voluptatum
      perferendis. Fuga delectus praesentium velit a officia odio eaque quo
      harum exercitationem quibusdam maxime in sapiente iusto voluptate aperiam,
      provident veritatis. Dolore dicta architecto error quos sed quia ex
      voluptatum modi esse voluptatibus laudantium et minima perferendis, ad
      corporis, tempore nesciunt, sequi neque magnam. Suscipit sequi error velit
      dolorem, tempore officiis. Non quod explicabo iusto tempore vitae dolorem
      suscipit laudantium magni impedit pariatur distinctio qui quas sed sit,
      dolore velit veniam ipsa et? Vitae ad architecto, fugit quos voluptatem at
      doloribus? Aut, repudiandae dolore illo aperiam nihil debitis quod quae
      error molestias modi voluptatem eius dolorum sit ex facere recusandae
      repellendus voluptates quasi, numquam excepturi corrupti qui? Voluptatum
      necessitatibus qui a. Sed architecto sequi praesentium excepturi nam rerum
      ullam quisquam labore placeat, fugit iste provident quia at error earum
      officia adipisci enim repellendus non temporibus, incidunt voluptas.
      Incidunt omnis pariatur quibusdam. Consequuntur provident fugit in, nam,
      delectus asperiores qui, obcaecati vero quam architecto omnis consectetur.
      Facilis ea possimus voluptatibus saepe dicta. Officiis adipisci iusto quia
      deleniti placeat itaque, nisi iste veniam. Sed placeat non similique odio
      iusto culpa ipsum laborum cum veritatis facere pariatur adipisci
      exercitationem, necessitatibus dolores. Quos illo magnam porro in eveniet
      culpa qui explicabo officiis, deleniti excepturi. Nostrum? Blanditiis
      consectetur obcaecati expedita repudiandae a, optio exercitationem
      voluptatibus odit? Amet ea numquam quaerat dignissimos reprehenderit
      inventore iure excepturi illum ad? Error dicta iste rerum atque nemo dolor
      magni veritatis! Unde excepturi odio placeat magni velit libero provident
      ullam expedita cum suscipit eveniet at perferendis quas obcaecati in quos
      temporibus, soluta debitis voluptas vitae illum nulla? Porro eum velit
      illum.
    </div>
  );
};

export default Page;
