import Link from "next/link";

export function Certificate({ title, issuer, date, href }: {
  title: string;
  issuer: string;
  date: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
    >
      <div className="flex sm:flex-row flex-col sm:gap-8 my-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <p className="flex-grow text-lg text-slate-900 dark:text-white">
          <strong>{title}</strong>
        </p>
        <p className="text-lg text-slate-900 dark:text-white">
          <i>{issuer}</i>
        </p>
        <p className="text-lg text-slate-900 dark:text-white">
          {date}
        </p>
      </div>
    </Link>
  );
}