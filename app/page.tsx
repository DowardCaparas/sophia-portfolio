import Image from "next/image";
import Link from "next/link";
import { certificates, expertise, imesAccomplishments } from "./constants";

export default function Home() {
  const navLinks = [
    { label: "About", id: "#about" },
    { label: "Experience", id: "#experience" },
    { label: "Certificates", id: "#certificates" },
  ];

  return (
    <div className="overflow-hidden">
      <nav className="h-16 bg-blue-900 nav_padding flex justify-between items-center fixed w-full">
        <span className="text-white text-xl font-bold">SJDG</span>
        <ul className="max-md:hidden">
          {navLinks.map((link) => (
            <Link href={link.id} key={link.id} className="text-white ml-6">
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
      <section
        className="flex justify-between max-md:flex-col-reverse gap-10 items-center mt-36
       mb-16 container_padding"
      >
        <div className="inline-grid gap-2 max-md:text-center">
          <div className="flex flex-col gap-1 mb-4">
            <span className="text-4xl font-bold">Sophia Joyce Garcia</span>
            <span className="font-medium text-xl">
              Associate Software Engineer
            </span>
            <span>Pacakge App Dev</span>
          </div>
          <p className="lg:w-[70%]">
            I graduated as Magna Cum Laude with the degree of Bachlor of Science
            in Information Technology at Cavite State University - Naic Campus.
            I'm Currently an Associate Software Engineer at Accenture in the
            Philippines Manila.
          </p>
          <Link
            href="https://www.linkedin.com/in/sophia-joyce-garcia-56ba442a4/"
            className="bg-blue-600 p-3 text-white rounded-lg font-semibold text-center mt-4 md:w-[50%]
            cursor-pointer hover:bg-blue-700 active:bg-blue-800 duration-150 ease-in transition-colors
            flex gap-2 items-center justify-center"
          >
            <Image
              src="/linkedin.svg"
              alt="Linkedin icon"
              width={18}
              height={18}
              className="object-contain"
            />
            <span> LinkedIn</span>
          </Link>
        </div>
        <Image
          src="/sopi.jpg"
          alt="Sophia Joyce Garcia"
          width={380}
          height={380}
          className="rounded-full object-contain border-8 border-blue-500 p-2"
        />
      </section>

      {/* About section */}
      <section
        id="about"
        className="sections bg-gray-100 container_padding py-16 flex flex-col gap-6"
      >
        <span className="text-xl font-bold">ABOUT</span>
        <p>
          Strong technology professional with a Bachelor of Science (B.S.)
          focused in Information Technology from Cavite State University &#8209;
          Naic Campus, graduated with Latin honors (Magna Cum Laude).
          Experienced as Information Technology Intern at P.IMES Corp. in
          Cavite. Currently an Associate Software Engineer at Accenture in
          Manila and part of the Oracle ERP Cloud Capability Platform and AIST
          Japan Project.
        </p>
        <span className="font-medium text-2xl">Expertise</span>
        <div>
          {expertise.map((item, index) => (
            <div key={item.title + index} className="flex flex-col gap-2">
              <span className="font-semibold">{item.title}</span>
              <ul className="mb-8">
                {item.skills.map((skill, index) => (
                  <li key={skill + index} className="list-disc ml-6">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Experience section */}
      <section
        id="experience"
        className="sections container_padding py-16 flex flex-col"
      >
        <span className="text-xl font-bold mb-6">Experience</span>

        <div className="flex flex-col">
          <span className="font-semibold text-2xl">
            Accenture &#8209; Manila (July 2024 &#8209; Present)
          </span>
          <span>Associate Software Engineer</span>
          <div className="mt-4">
            <span className="font-semibold">
              Oracle ERP Cloud Capability (August 2024 &#8209; September 2024)
            </span>
            <p>
              Capability Management &#8209; Enables ERP Cloud capability growth
              and skills building for the Philippines Delivery Center and draws
              synergy across multiple delivery centers to ensure ERP Solutions
              are implemented by the best Accenture resources.
            </p>
          </div>
          <div className="mt-4">
            <div className="inline-grid font-semibold">
              <span>
                Oracle E&I-GM-ERP-AIST-SI - JAPAN MIN OF ECONOMY TRADE&INDUSTRY
              </span>
              <span>(September 2024 &#8209; May 2025)</span>
              <span>App Dev</span>
            </div>
            <ul>
              <li className="list-disc ml-6">
                Worked with Reports and Analytics
              </li>
              <li className="list-disc ml-6">SQL code defect fix</li>
              <li className="list-disc ml-6">
                Data extraction and documentation
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-10" />

        <div className="flex flex-col mt-10">
          <span className="font-semibold text-2xl">
            P. IMES Corp. (October 2023 &#8209; December 2023)
          </span>
          <span>Information Technology Intern</span>
          <ul className="mt-4">
            {imesAccomplishments.map((item) => (
              <li key={item} className="list-disc ml-6">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div></div>
      </section>
      {/* Certificates section */}
      <section
        id="certificates"
        className="sections bg-gray-100 container_padding py-16"
      >
        <span className="text-xl font-bold">Certificates</span>
        <div className="flex flex-col gap-20 mt-8">
        {certificates.map((certificate) => (
          <div key={certificate.title} className="text-center">
            <Image
              src={certificate.imgURL}
              alt={certificate.title}
              width={600}
              height={600}
              className="object-contain mx-auto mb-2"
            />
            <span className="text-xl">{certificate.title}</span>
          </div>
        ))}
        </div>
      </section>
      <footer className="bg-blue-900 p-2 text-white text-center text-sm">
        &copy; 2025 Sophia Joyce Garcia
      </footer>
    </div>
  );
}
