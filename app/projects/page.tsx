import { getCards } from "./card";
import { SectionTitle } from "@/components/sectionTitle";

export default function ProjectsPage() {
  const tagFilter = undefined;
  const cardElems = getCards(tagFilter);
  return (
    <main className="mx-auto max-w-7xl">
      <section id="projects" className="mb-12 p-6 sm:mt-10">
        <SectionTitle text="Projects" />
        <div className="grid justify-items-center gap-6 p-2 sm:grid-cols-2 lg:grid-cols-2">
          {cardElems.map((elem, index) => (
            <div key={index} className="w-full">
              {elem}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
