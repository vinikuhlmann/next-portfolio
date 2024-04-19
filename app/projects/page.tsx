import SectionTitle from "@/components/sectionTitle";
import { GetProjectCards } from "./projectCards";

export default async function ProjectsPage() {
  const projectCards = GetProjectCards();
  return (
    <main className="mx-auto max-w-7xl">
      <section id="aboutme" className="mb-12 p-6 sm:mt-10">
        <SectionTitle text="Projects" />
        <div className="grid justify-items-center gap-6 p-2 sm:grid-cols-2 lg:grid-cols-2">
          {projectCards.map((card, index) => (
            <div key={index} className="w-full">
              {card}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
