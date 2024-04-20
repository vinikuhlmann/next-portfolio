import Image from "next/image";
export function CvItem({
  jobTitle,
  company,
  date,
  description: companyDescription,
  text,
  bulletPoints,
  imgSrc,
  imgAlt,
}: {
  jobTitle?: string;
  company?: string;
  date: string;
  description?: string;
  text?: string;
  bulletPoints?: string[];
  imgSrc: string;
  imgAlt: string;
}) {
  let at = jobTitle != undefined && company != undefined ? " at " : "";

  let textHtml = text != undefined && (
    <p className="text-lg text-slate-900 dark:text-white">
      {text}
    </p>
  );

  let bulletPointsHtml = bulletPoints != undefined && (
    <ul className="ml-4 list-disc text-lg text-slate-900 dark:text-white text-left">
      {bulletPoints.map((point, index) => (
        <li key={index} className="text-xl">
          {point}
        </li>
      ))}
    </ul>
  )

  return (
    <div className="mt-12 flex flex-col items-center gap-8 sm:flex-row sm:items-start">
      <div className="relative size-40 shrink-0">
        <Image
          fill
          src={imgSrc}
          alt={imgAlt}
          className="rounded-lg"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col text-center sm:text-left">
        <h3 className="text-center text-3xl text-slate-900 sm:text-left dark:text-white">
          {jobTitle}
          {at}
          <span className="font-semibold">{company}</span>
        </h3>
        <p className="text-lg text-slate-900 dark:text-gray-300">
          {date}
        </p>
        <p className="text-lg italic text-slate-900 dark:text-white">
          {companyDescription}
        </p>
        {textHtml}
        {bulletPointsHtml}
      </div>
    </div>
  );
}