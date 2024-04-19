import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionTitle from "@/components/sectionTitle";
import Link from "next/link";

function Contact({
  icon,
  iconColor,
  text,
  href,
  prefetch,
}: {
  icon: any;
  iconColor?: string;
  text: string;
  href: string;
  prefetch?: boolean;
}) {
  return (
    <div className="flex h-fit flex-row items-center gap-4">
      <span className={"text-[" + iconColor + "]"}>
        <FontAwesomeIcon icon={icon} className="h-10 w-10" />
      </span>
      <Link
        href={href}
        prefetch={prefetch}
        className="sm:text-2xl text-xl text-slate-900 hover:text-slate-700 dark:text-white dark:hover:text-gray-300"
      >
        {text}
      </Link>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl">
      <section id="contact" className="mb-12 p-6 sm:mt-10">
        <SectionTitle text="My Contact Info" />

        <div className="m-auto flex h-fit w-fit flex-col items-start gap-4 p-2">
          <Contact icon={faLinkedin} text="/in/vinikuhlmann" href="https://www.linkedin.com/in/vinikuhlmann" prefetch={true} />
          <Contact icon={faEnvelope} text="vinikuhlmann@gmail.com" href="mailto:vinikuhlmann@gmail.com" />
          <Contact icon={faGithub} text="vinikuhlmann" href="https://github.com/vinikuhlmann" />
          <Contact icon={faWhatsapp} text="+55 11 97315-2766" href="https://wa.me/5511973152766" />
        </div>
      </section>
    </main>
  );
}
