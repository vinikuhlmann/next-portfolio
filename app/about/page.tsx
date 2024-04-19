import Image from "next/image";
import SectionTitle from "@/components/sectionTitle";
import Link from "next/link";

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
        <p className="text-xl text-slate-900 dark:text-white">
          Hello! My name is Vinicius Silva Fernandes Kuhlmann, and I'm a Software Developer and Data scientist and from São Paulo, Brazil.
          <br></br>
          Challenges are my passion, as I'm always looking for new ways to improve my skills and knowledge. Share your ideas with me, and let's build something amazing together!
        </p>
      </div>
    </section>
  );
}

type JobItemProps = {
  jobTitle?: string;
  company?: string;
  date: string;
  companyDescription?: string;
  bulletPoints: string[];
  imgSrc: string;
  imgAlt: string;
};

function JobItem({
  jobTitle,
  company,
  date,
  companyDescription,
  bulletPoints: tasks,
  imgSrc,
  imgAlt,
}: JobItemProps) {
  // replace ' in tasks with &apos; to avoid breaking the HTML
  tasks = tasks.map((task) => task.replace(/'/g, "&apos;"));
  let at = jobTitle != undefined && company != undefined ? " at " : "";
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
        <ul className="ml-4 list-disc text-lg text-slate-900 dark:text-white text-left">
          {tasks.map((task, index) => (
            <li key={index} className="text-xl">
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Freelancer() {
  return (
    <JobItem
      jobTitle="Self-employed Software Dev"
      date="01/2022 - Present"
      bulletPoints={[
        "Web development with React, Next.js, and Tailwind CSS.",
        "ETL Pipelines and task automations in Python.",
        "PostgreSQL database management.",
        "Data analysis and visualization in Python.",
      ]}
      imgSrc="/img/freelance.jpg"
      imgAlt="Desk with a laptop and a coffee cup"
    />
  );
}

function Embraer() {
  return (
    <JobItem
      jobTitle="Software Dev Internship"
      company="Embraer"
      date="03/2023 - 12/2023"
      companyDescription="Brazil's largest aerospace company and the world's third largest."
      bulletPoints={[
        "Working alongside a large, English-speaking multidisciplinary team.",
        "ETL Pipelines and task automations in Power Automate.",
        "Data analysis and visualization in Power BI.",
        "User interfaces in Power Apps.",
        "Web scraping in Python.",
      ]}
      imgSrc="/img/embraer.jpg"
      imgAlt="Embraer logo"
    />
  );
}

function CPXDigital() {
  return (
    <JobItem
      jobTitle="Software Dev Internship"
      company="CPX Digital"
      date="02/2023 - 02/2023"
      companyDescription="A consulting firm for startup fundraising."
      bulletPoints={[
        "Web scraping in Python to gather data from potential customers.",
        "Data processing in Python.",
      ]}
      imgSrc="/img/cpx.jpg"
      imgAlt="CPX Digital logo"
    />
  );
}


function USP() {
  return (
    <JobItem
      company="University of São Paulo"
      date="03/2019 - 12/2022"
      bulletPoints={[
        "Bachelors degree in Computer Science, with a focus on data science and software engineering.",
        "Certificates of special studies in Software Engineering, Data Science and Advanced Programming Techniques.",
      ]}
      imgSrc="/img/usp.jpg"
      imgAlt="University of São Paulo logo"
    />
  );
}

function WorkExperience() {
  return (
    <section id="workexperience" className="my-12 p-6">
      <SectionTitle text="Work Experience" />
      <Freelancer />
      <Embraer />
      <CPXDigital />
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="my-12 p-6">
      <SectionTitle text="Education" />
      <USP />
    </section>
  );
}

type CertificateProps = {
  title: string;
  issuer: string;
  file: string;
};

function Certificate({ title, issuer, file }: CertificateProps) {
  return (
    <Link
      href={file}
      target="_blank"
    >
      <div className="my-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <div className="flex justify-between">
          <h3 className="text-lg text-slate-900 dark:text-white float-left">
            <strong>{title}</strong>
          </h3>
          <h3 className="text-lg text-slate-900 dark:text-white float-right">
            {issuer}
          </h3>
        </div>
      </div>
    </Link>
  );
}

function Certificates() {
  return (
    <section id="certificates" className="my-12 p-6">
      <SectionTitle text="Certificates" />
      <Certificate
        title="Software Engineering"
        issuer="University of São Paulo"
        file="/certificates/Software Engineering.pdf"
      />
      <Certificate
        title="Data Science"
        issuer="University of São Paulo"
        file="/certificates/Data Science.pdf"
      />
      <Certificate
        title="Advanced Programming Techniques"
        issuer="University of São Paulo"
        file="/certificates/Advanced Programming Techniques.pdf"
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
