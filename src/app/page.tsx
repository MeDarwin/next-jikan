import Brand from "@/components/brand";
import Image from "next/image";

const Page = () => {
  return (
    <div>
      <div className="group relative flex transition-all delay-200 duration-300 outline hover:outline-secondary outline-primary outline-offset-8 shadow-primary shadow-md hover:shadow-2xl hover:shadow-secondary py-4 px-2 rounded-lg mb-16">
        <span className="after:block group-hover:after:bg-secondary after:w-2 after:h-full after:absolute after:bottom-0 after:-skew-x-12 after:left-32 after:shadow-lg after:shadow-secondary after:bg-primary"></span>
        <Brand />
        {/* //TODO: On hover each sentence staggers */}
        <h1 className="group-hover:text-secondary transition-colors delay-500 duration-100 ms-12 text-3xl italic font-semibold text-primary">
          Watch anime like never before.
        </h1>
        {/* //TODO: Image below the quote */}
        <Image src="https://picsum.photos/id/237/200" width={1200} height={800} alt="photos" className="block"/>
      </div>
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
