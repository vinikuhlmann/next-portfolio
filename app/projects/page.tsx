import Image from 'next/image';
import projects from '../../public/data/projects.json';

type GalleryItemProps = {
  imgSrc: string
  imgAlt?: string
  title: string
  description: string
  tags?: string[]
}

function GalleryItem({ imgSrc, imgAlt, title, description, tags }: GalleryItemProps) {
  if (!imgAlt) imgAlt = title;
  return (
    <div className="rounded-lg dark:bg-gray-800 p-5">
      <div className="h-60 w-full relative">
        <Image
          src={imgSrc}
          alt={imgAlt}
          className="rounded-md"
          fill
          style={{ objectFit: "cover" }} />
      </div>
      <div className="px-3 py-4">
        <h3 className="font-bold text-gray-700 dark:text-white  text-2xl mb-2">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-white text-lg">
          {description}
        </p>
        <div className="py-2 flex flex-wrap gaṕ-2 justify-left">
          {tags && tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 rounded-full px-3 py-1 my-1 text-sm font-semibold text-gray-700 mr-2">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div >
  )
}

export default async function ProjectsPage() {

  return (
    <main className="max-w-7xl mx-auto">

      <section id="aboutme" className="p-6 sm:mt-10 mb-12">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-12 text-slate-900 dark:text-white">
          My projects
        </h2>

        <div className="p-2 grid lg:grid-cols-3 sm:grid-cols-2 gap-6 justify-items-center">
          {projects.map((project, index) => (
            <GalleryItem key={index} {...project} />
          ))}
        </div>

      </section>

    </main>
  );
}