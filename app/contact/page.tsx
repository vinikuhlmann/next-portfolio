import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function ContactPage() {
  return (
    <section id="contact" className="p-6 sm:mt-10 mb-12">
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-12 text-slate-900 dark:text-white">
        Contact me
      </h2>

      <div className="flex flex-col h-fit w-fit p-2 m-auto items-start gap-4">
        <div className="flex flex-row items-center gap-4 h-fit">
          <span className="text-[#0072B1]">
            <FontAwesomeIcon icon={faLinkedin} className="h-12 w-12" />
          </span>
          <a
            href="https://www.linkedin.com/in/vinikuhlmann"
            className="text-3xl text-slate-900 dark:text-white hover:text-slate-700 dark:hover:text-gray-300"
          >
            linkedin.com/in/vinikuhlmann
          </a>
        </div>

        <div className="flex flex-row items-center gap-4 h-fit">
          <span className="bg-white text-black">
            <FontAwesomeIcon icon={faGithub} className="h-12 w-12" />
          </span>
          <a
            href="https://github.com/vinikuhlmann"
            className="text-3xl text-slate-900 dark:text-white hover:text-slate-700 dark:hover:text-gray-300"
          >
            github.com/vinikuhlmann
          </a>
        </div>

        <div className="flex flex-row items-center gap-4 h-fit">
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="h-12 w-12 text-[#25D366]"
          />
          <a
            href="https://wa.me/5511973152766"
            className="text-3xl text-slate-900 dark:text-white hover:text-slate-700 dark:hover:text-gray-300"
          >
            +55 11 97315-2766
          </a>
        </div>

        <div className="flex flex-row items-center gap-4 h-fit">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="h-12 w-12 text-black dark:text-white"
          />
          <a
            href="mailto:vinikuhlmann@gmail.com"
            className="text-3xl text-slate-900 dark:text-white hover:text-slate-700 dark:hover:text-gray-300"
          >
            vinikuhlmann@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
