import { faExternalLink } from "@fortawesome/free-solid-svg-icons/faExternalLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fs from "fs";
import Image from "next/image";
import Link from "next/link";
import path from "path";

function Card({ title, href, imgSrc, imgAlt, date, description, tags }: {
  title: string;
  href: string;
  imgSrc: string;
  imgAlt?: string;
  date?: string;
  description: string;
  tags?: string[];
}) {
  const hrefIsExternal = href.startsWith('http');

  const titleElem = (
    <h3 className="mb-2 text-2xl font-bold  text-gray-700 dark:text-white">
      <span className="flex items-center">
        {title}
        <FontAwesomeIcon icon={faExternalLink} className="ml-2 w-4 h-4" />
      </span>
    </h3>
  );

  const tagsElem = tags && tags.map((tag, index) => (
    <span
      key={index}
      className="my-1 mr-2 rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
    >
      {tag}
    </span>
  ));

  return (
    <div className="rounded-lg p-5 dark:bg-gray-800 bg-gray-100 h-full">
      <Link href={href} rel={hrefIsExternal ? 'noopener noreferrer' : ''} target={hrefIsExternal ? '_blank' : ''}>
        <div className="relative h-60 w-full">
          <Image
            src={imgSrc}
            alt={imgAlt || title}
            className="rounded-md"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="px-3 py-4">
          {titleElem}
          <p className="text-lg text-gray-700 dark:text-white">{date}</p>
          <p className="text-lg text-gray-700 dark:text-white">{description}</p>
          <div className="gaṕ-2 justify-left flex flex-wrap py-2">
            {tagsElem}
          </div>
        </div>
      </Link>
    </div>
  );
}

function readCardData() {
  const cardsFolder = path.join(process.cwd(), 'app', 'projects', 'cards');
  const cardFiles = fs.readdirSync(cardsFolder);
  const cardData = cardFiles.map((file) => {
    const filePath = path.join(cardsFolder, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const cardJson = JSON.parse(fileContents);
    if (cardJson.href === undefined) {
      cardJson.href = `/projects/${ file.replace('.json', '') }`;
    }
    return cardJson;
  });
  return cardData;
};

function filterCardData(cardData: any[], tagFilter: string[]) {
  return cardData.filter((card) => {
    const tags = card.tags;
    if (tags === undefined) {
      return false;
    }
    return tags.some((tag: string) => tagFilter.includes(tag));
  });
}

export function getCards(tagFilter?: string[]) {
  let cardData = readCardData();
  if (tagFilter !== undefined) {
    cardData = filterCardData(cardData, tagFilter);
  }
  return cardData.map((data) => {
    return Card(data);
  });
}