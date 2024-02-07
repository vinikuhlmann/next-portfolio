import Image from "next/image";
import projects from "../../public/data/projects.json";

type GalleryItemProps = {
  imgSrc: string;
  imgAlt?: string;
  title: string;
  description: string;
  tags?: string[];
};

function GalleryItem({
  imgSrc,
  imgAlt,
  title,
  description,
  tags,
}: GalleryItemProps) {
  if (!imgAlt) imgAlt = title;
  return (
    <div className="rounded-lg p-5 dark:bg-gray-800">
      <div className="relative h-60 w-full">
        <Image
          src={imgSrc}
          alt={imgAlt}
          className="rounded-md"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="px-3 py-4">
        <h3 className="mb-2 text-2xl font-bold  text-gray-700 dark:text-white">
          {title}
        </h3>
        <p className="text-lg text-gray-700 dark:text-white">{description}</p>
        <div className="gaṕ-2 justify-left flex flex-wrap py-2">
          {tags &&
            tags.map((tag, index) => (
              <span
                key={index}
                className="my-1 mr-2 rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
              >
                {tag}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}

export default async function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl">
      <section id="aboutme" className="mb-12 p-6 sm:mt-10">
        <h2 className="mb-12 text-center text-4xl font-bold text-slate-900 sm:text-5xl dark:text-white">
          My projects
        </h2>

        <div className="grid justify-items-center gap-6 p-2 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <GalleryItem key={index} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}
