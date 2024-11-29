import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:justify-between md:gap-8">
        <h1 className="inline-block font-black text-4xl lg:text-5xl">
          À Propos de moi
        </h1>
      </div>
      <hr className="my-8" />
      <div className="flex flex-row gap-8 items-center md-item:start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/avatar.png" alt={siteConfig.author} />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-indigo-600 text-center break-words ">
            Développeur Front-end
          </p>
        </div>
        <div className="">
          <p className="text-muted-foreground text-lg py-4">
            Ancien journaliste sportif reconverti dans le développement web, je
            suis spécialisé en React.js, Next.js, TypeScript et Tailwind CSS.
            Grâce à mes compétences, je vous aide à concevoir des interfaces
            utilisateurs modernes et responsive.{" "}
          </p>
          <p className="text-muted-foreground text-lg py-4">
            J’ai vécu 2 ans dans la belle ville de Barcelone.
            <br />
            Je suis beaucoup l’actualité sportive, plus particulièrement
            footballistique. Supporter du PSG bien avant l’arrivée des Qataris,
            et c’est pas tous les jours facile ! 😅
          </p>
          <p className="text-muted-foreground text-lg py-4">
            J’aime l’humour, la raclette, la pâte à tartiner cacao-noisette...
          </p>
        </div>
      </div>
    </div>
  );
}
