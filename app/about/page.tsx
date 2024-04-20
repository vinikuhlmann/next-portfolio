'use client';
import { Certificate } from "./certificate";
import { CvItem } from "./cvItem";
import { SectionTitle } from "@/components/sectionTitle";
import Image from "next/image";

function Introduction() {
  return (
    <section id="introduction" className="mb-12 p-6 sm:mt-10">
      <SectionTitle text="Introduction" />
      <div className="flex flex-col items-center gap-5 sm:flex-row">
        <div className="relative size-40 shrink-0">
          <Image
            fill
            src="/img/profile.jpg"
            alt="Profile picture"
            className="rounded-full"
            style={{ objectFit: "cover" }}
          />
        </div>
        <span>
          <p className="text-xl text-slate-900 dark:text-white mb-2">
            Hello! My name is Vinicius Silva Fernandes Kuhlmann, and I&apos;m a Software Developer and Data scientist from São Paulo, Brazil.
            <br></br>
            Challenges are my passion, as I&apos;m always looking for new ways to improve my skills and knowledge. Share your ideas with me, and let&apos;s build something amazing together!
          </p>
          <p className="text-gray-600 dark:text-gray-400">*This site is responsive! Try resizing your browser window or viewing it on your phone.</p>
        </span>
      </div>
    </section>
  );
}

function WorkExperience() {
  return (
    <section id="workexperience" className="my-12 p-6">
      <SectionTitle text="Work Experience" />
      <CvItem
        jobTitle="Self-employed Software Developer"
        date="01/2022 - Present"
        bulletPoints={[
          "Fullstack development Next.js and Streamlit.",
          "Programming ETL Pipelines and task automations in Python.",
          "Designing and mantaining PostgreSQL databases",
          "Data analysis and visualization.",
        ]}
        imgSrc="/img/freelance.jpg"
        imgAlt="Desk with a laptop and a coffee cup"
      />
      <CvItem
        jobTitle="Software Development Internship"
        company="Embraer"
        date="03/2023 - 12/2023"
        description="Brazil&apos;s largest aerospace company and the world&apos;s third largest."
        bulletPoints={[
          "Working alongside a large, English-speaking multidisciplinary team.",
          "Building ETL Pipelines and task automation in Power Automate.",
          "Visualizing data in Power BI.",
          "Designing apps in Power Apps.",
          "Developing Python web scrapers.",
        ]}
        imgSrc="/img/embraer.jpg"
        imgAlt="Embraer logo"
      />
      <CvItem
        jobTitle="Software Development Internship"
        company="CPX Digital"
        date="02/2023 - 02/2023"
        description="A consulting firm for startup fundraising."
        bulletPoints={[
          "Developing web scraping and data processing scripts in Python",
        ]}
        imgSrc="/img/cpx.jpg"
        imgAlt="CPX Digital logo"
      />
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="my-12 p-6">
      <SectionTitle text="Education" />
      <CvItem
        company="University of São Paulo"
        date="03/2019 - 12/2022"
        text={"Bachelor\'s degree in Computer Science."}
        imgSrc="/img/usp.jpg"
        imgAlt="University of São Paulo logo"
      />
    </section>
  );
}

function Certificates() {
  return (
    <section id="certificates" className="my-12 p-6">
      <SectionTitle text="Certificates" />
      <p>(Click on the certificates to view them)</p>
      <Certificate
        title="Software Engineering"
        issuer="University of São Paulo"
        date="02/2024"
        href="/certificates/Software Engineering.pdf"
      />
      <Certificate
        title="Data Science"
        issuer="University of São Paulo"
        date="02/2024"
        href="/certificates/Data Science.pdf"
      />
      <Certificate
        title="Advanced Programming Techniques"
        issuer="University of São Paulo"
        date="02/2024"
        href="/certificates/Advanced Programming Techniques.pdf"
      />
      <Certificate
        title="Business Agility: How to Expand Scrum"
        issuer="LinkedIn"
        date="10/2023"
        href="https://www.linkedin.com/learning/certificates/c57d4e724e0cf0ed17128c1aea31210fda66496b41ed7754cc558d8508f242d8"
      />
      <Certificate
        title="Scrum: Antipatterns in Framework Implementation"
        issuer="LinkedIn"
        date="10/2023"
        href="https://www.linkedin.com/learning/certificates/92ed292f4c3a9a6623d9f6e52755afdb9418014c8671ba3dc37daa980da18506"
      />
      <Certificate
        title="Web Apps with Firebase"
        issuer="Google"
        date="10/2023"
        href="https://developers.google.com/profile/u/vinikuhlmann"
      />
      <Certificate
        title="Advanced SQL"
        issuer="Kaggle"
        date="01/2023"
        href="https://www.kaggle.com/learn/certification/vinikuhlmann/advanced-sql"
      />
      <Certificate
        title="Data Visualization"
        issuer="Kaggle"
        date="01/2023"
        href="https://www.kaggle.com/learn/certification/vinikuhlmann/data-visualization"
      />
      <Certificate
        title="Intermediate Machine Learning"
        issuer="Kaggle"
        date="10/2022"
        href="https://www.kaggle.com/learn/certification/vinikuhlmann/intermediate-machine-learning"
      />
    </section>
  )
}

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl">
      <Introduction />
      <WorkExperience />
      <Education />
      <Certificates />
    </main>
  );
}
