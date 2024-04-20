import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export function Contact({
  icon,
  iconColor,
  text,
  href,
  prefetch,
}: {
  icon: IconDefinition;
  iconColor?: string;
  text: string;
  href: string;
  prefetch?: boolean;
}) {
  return (
    <Link
      href={href}
      prefetch={prefetch}
      className="sm:text-2xl text-xl text-slate-900 hover:text-slate-700 dark:text-white dark:hover:text-gray-300"
    >
      <div className="flex h-fit flex-row items-center gap-4">
        <span className={"text-[" + iconColor + "]"}>
          <FontAwesomeIcon icon={icon} className="h-10 w-10" />
        </span>
        {text}
      </div>
    </Link>
  );
}