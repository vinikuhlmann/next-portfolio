import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function ContactPage() {
  return (
    <section id="contact" className="mb-12 p-6 sm:mt-10">
      <h2 className="mb-12 text-center text-4xl font-bold text-slate-900 sm:text-5xl dark:text-white">
        Contact me
      </h2>

      <div className="m-auto flex h-fit w-fit flex-col items-start gap-4 p-2">
        <div className="flex h-fit flex-row items-center gap-4">
          <span className="text-[#0072B1]">
            <FontAwesomeIcon icon={faLinkedin} className="h-12 w-12" />
          </span>
          <a
            href="https://www.linkedin.com/in/vinikuhlmann"
            className="text-3xl text-slate-900 hover:text-slate-700 dark:text-white dark:hover:text-gray-300"
          >
            linkedin.com/in/vinikuhlmann
          </a>
        </div>

        <div className="flex h-fit flex-row items-center gap-4">
          <span className="bg-white text-black">
            <FontAwesomeIcon icon={faGithub} className="h-12 w-12" />
          </span>
          <a
            href="https://github.com/vinikuhlmann"
            className="text-3xl text-slate-900 hover:text-slate-700 dark:text-white dark:hover:text-gray-300"
          >
            github.com/vinikuhlmann
          </a>
        </div>

        <div className="flex h-fit flex-row items-center gap-4">
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="h-12 w-12 text-[#25D366]"
          />
          <a
            href="https://wa.me/5511973152766"
            className="text-3xl text-slate-900 hover:text-slate-700 dark:text-white dark:hover:text-gray-300"
          >
            +55 11 97315-2766
          </a>
        </div>

        <div className="flex h-fit flex-row items-center gap-4">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="h-12 w-12 text-black dark:text-white"
          />
          <a
            href="mailto:vinikuhlmann@gmail.com"
            className="text-3xl text-slate-900 hover:text-slate-700 dark:text-white dark:hover:text-gray-300"
          >
            vinikuhlmann@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
