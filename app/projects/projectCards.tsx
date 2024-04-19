import fs from "fs";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons/faExternalLink";

export function ProjectCard({
  title,
  href,
  imgSrc,
  imgAlt,
  date,
  description,
  tags,
}: {
  title: string;
  href: string;
  imgSrc: string;
  imgAlt?: string;
  date: string;
  description: string;
  tags?: string[];

}) {
  if (!imgAlt) imgAlt = title;
  const hrefIsExternal = href.startsWith('http');
  return (
    <div className="rounded-lg p-5 dark:bg-gray-800 h-full">
      <Link href={href} rel={hrefIsExternal ? 'noopener noreferrer' : ''} target={hrefIsExternal ? '_blank' : ''}>
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
            <span className="flex items-center">
              {title}
              {hrefIsExternal && <FontAwesomeIcon icon={faExternalLink} className="ml-2 w-4 h-4" />}
            </span>
          </h3>
          <p className="text-lg text-gray-700 dark:text-white">{date}</p>
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
      </Link>
    </div>
  );
}

export function GetProjectCards() {
  const cardsFolder = path.join(process.cwd(), 'app', 'projects', 'cards');
  const cardJsonFiles = fs.readdirSync(cardsFolder);
  const projectCards = cardJsonFiles.map((file) => {
    const filePath = path.join(cardsFolder, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const projectJson = JSON.parse(fileContents);
    if (projectJson.href === undefined) {
      projectJson.href = `/projects/${ file.replace('.json', '') }`;
    }
    return ProjectCard(projectJson);
  });
  return projectCards;
};