import React from "react";
import {
  Cpu,
  Code,
  Database,
  Server,
  Cloud,
  Shield,
  Layout,
  Terminal,
  GitBranch,
  Package,
} from "lucide-react";
import { Image } from "antd";

const Technologies = () => {
  const technologies = [
    {
      name: "C",
      icon: Code,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
      name: "C++",
      icon: Code,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "Python",
      icon: Code,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "TypeScript",
      icon: Cpu,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "JavaScript",
      icon: Code,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: Code,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "React Native",
      icon: Code,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: Layout,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Ant Design",
      icon: Code,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: Code,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Vue.js",
      icon: Code,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
      name: "Node.js",
      icon: Server,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express",
      icon: Terminal,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "NestJS",
      icon: Server,
      logo: "https://images.seeklogo.com/logo-png/34/1/nestjs-logo-png_seeklogo-341269.png",
    },
    {
      name: "Django",
      icon: Server,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
    {
      name: "Flask",
      icon: Server,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    },
    {
      name: "FastAPI",
      icon: Server,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    },
    {
      name: "PHP",
      icon: Server,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "MongoDB",
      icon: Database,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: Database,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "MySQL",
      icon: Database,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "SQL",
      icon: Database,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "AWS",
      icon: Cloud,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      name: "Docker",
      icon: Shield,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Git",
      icon: GitBranch,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "NPM",
      icon: Package,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    },
    {
      name: "Jira",
      icon: Package,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    },
    {
      name: "Azure DevOps",
      icon: Cloud,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-6 w-full max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-3">
        <div className="relative inline-block">
          <div className="relative">
            <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Tech Stack
            </h2>
          </div>
        </div>
      </div>

      {/* Technologies Grid */}
      <div className="w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2 sm:gap-4 md:gap-5 lg:gap-4 justify-center">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white/10 hover:bg-white/20 transition-all duration-300 cursor-pointer p-2 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl text-center group"
            >
              <div className="relative mb-2 sm:mb-2">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={50}
                  height={50}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold leading-tight">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
