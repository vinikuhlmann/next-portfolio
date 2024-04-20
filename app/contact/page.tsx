'use client';
import { SectionTitle } from "@/components/sectionTitle";
import {
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Contact } from "./contact";


export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl">
      <section id="contact" className="mb-12 p-6 sm:mt-10">
        <SectionTitle text="My Contact Info" />

        <div className="m-auto flex h-fit w-fit flex-col items-start gap-4 p-2">
          <Contact icon={faLinkedin} text="/in/vinikuhlmann" href="https://www.linkedin.com/in/vinikuhlmann" prefetch={true} />
          <Contact icon={faEnvelope} text="vinikuhlmann@gmail.com" href="mailto:vinikuhlmann@gmail.com" />
          {/* <Contact icon={faGithub} text="vinikuhlmann" href="https://github.com/vinikuhlmann" /> */}
          <Contact icon={faWhatsapp} text="+55 11 97315-2766" href="https://wa.me/5511973152766" />
        </div>
      </section>
    </main>
  );
}
