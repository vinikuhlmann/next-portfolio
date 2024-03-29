import Image from "next/image";

type JobItemProps = {
  jobTitle: string;
  company: string;
  date: string;
  companyDescription: string;
  tasks: string[];
};

function JobItem({
  jobTitle,
  company,
  date,
  companyDescription,
  tasks,
}: JobItemProps) {
  // replace ' in tasks with &apos; to avoid breaking the HTML
  tasks = tasks.map((task) => task.replace(/'/g, "&apos;"));
  return (
    <div className="mt-12 flex flex-col items-center gap-8 sm:flex-row sm:items-start">
      <div className="relative size-40 shrink-0">
        <Image
          fill
          src={`/img/${company}.jpg`}
          alt="Profile picture"
          className="rounded-lg"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div>
        <h3 className="mb-5 text-center text-3xl text-slate-900 sm:mb-2 sm:text-left dark:text-white">
          {jobTitle}
          {jobTitle.length > 0 ? " at " : ""}
          <span className="font-semibold">{company}</span>
        </h3>
        <p className="text-lg text-slate-900 dark:text-white">{date}</p>
        <p className="text-lg italic text-slate-900 dark:text-white">
          {companyDescription}
        </p>
        <ul className="ml-4 list-disc text-lg text-slate-900 dark:text-white">
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

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl">
      <section id="aboutme" className="mb-12 p-6 sm:mt-10">
        <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 sm:text-5xl dark:text-white">
          About me
        </h2>
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
            Hello! My name is Vinicius S. F. Kuhlmann. I&apos;m a data scientist
            and web developer from São Paulo, Brazil. I have a Computer Science
            bachelor&apos;s degree from the University of São Paulo, as well as
            certificates for special studies in Data Science and Software
            Engineering. I also have two years of internship experience and have
            worked on many side projects.
          </p>
        </div>
      </section>

      <hr className="mx-auto bg-black dark:bg-white" />

      <section id="workexperience" className="my-12 p-6">
        <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 sm:text-5xl dark:text-white">
          Work experience
        </h2>

        <JobItem
          jobTitle="Intern Data Analyst"
          company="Embraer"
          date="03/2023 - 12/2023"
          companyDescription="Brazil's largest aerospace company and the world's third largest."
          tasks={[
            "Development of apps and automations in Power Platform and Python, like a production line inventory control app that updates the database through barcode scans, or a web scraper that collects data from a company platform.",
            "Creation and maintenance of dashboards in Power BI that allowed management to monitor the production line, reducing the time to identify and solve problems.",
            "Migrating data from Excel sheets, Sharepoint lists and a SAP ERP bank to an Oracle database, making all data handling much, much easier.",
          ]}
        />

        <JobItem
          jobTitle="Intern Programmer"
          company="CPX Digital"
          date="02/2023 - 02/2023"
          companyDescription="A consulting firm that supports fundraising for startups."
          tasks={[
            "Development of web scraping scripts in Selenium to collect data from potential customers. This eliminated the need for manual data collection and saved the company hours of daily work.",
            "Development of Python scripts that cross the potential customers network with the partners network. This allowed the company to select the best candidates for warm intros, increasing conversion.",
          ]}
        />
      </section>

      <hr className="mx-auto bg-black dark:bg-white" />

      <section id="education" className="my-12 p-6">
        <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 sm:text-5xl dark:text-white">
          Education
        </h2>

        <JobItem
          jobTitle=""
          company="University of São Paulo"
          date="03/2019 - 12/2023"
          companyDescription="The best university in Latin America and one of the best in the world according to QS World."
          tasks={[
            "Bachelor's degree in Computer Science",
            "Special studies in Data Science and Software Engineering",
          ]}
        />
      </section>
    </main>
  );
}
