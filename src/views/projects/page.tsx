import { Github, ExternalLink } from "lucide-react";
import { Row, Col, Card, Tag, Image } from "antd";
import Sarab from "assets/images/sarab.png";
import Racid from "assets/images/racid.png";
import Jazaro from "assets/images/jazaro.png";
import Buland from "assets/images/buland.png";
import SundayCode from "assets/images/sunday.png";
import BreachPlus from "assets/images/Breach+.png";
import SmartDealer from "assets/images/smartdealer.png";
import CropsInsurance from "assets/images/cropsinsurance.png";
import {ReactComponent as CircleSvg} from 'assets/svg/circle.svg'

const { Meta } = Card;

const Projects = () => {
  const projects = [
    {
      title: "Breach+ (Breach and Attack Simulation)",
      description:
        "A comprehensive Breach and Attack Simulation (BAS) platform that helps organizations proactively test their security defenses. Features include automated attack simulations, vulnerability assessments, and detailed security reports.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "typescript",
        "electron",
        "python",
      ],
      github: true,
      live: "https://apt.cytomate.net",
      image: BreachPlus,
    },
    {
      title: "Sarab - Deception Product",
      description:
        "Sarab our internal deception technology, sets up a network of decoys that mimic your company's actual assets, effectively misleading attackers and safeguarding critical data.",
      technologies: ["React", "Nodejs", "TypeScript", "MongoDB", "Proxmox", "Elastic"],
      github: "https://github.com/waseem-javed",
      live: "https://cytomate.net/project/sarab",
      image: Sarab,
    },
    {
      title: "Racid - (Attack Surface Managment)",
      description:
        "An advanced Attack Surface Management (ASM) platform that helps organizations identify, monitor, and reduce their digital attack surface. Features include automated asset discovery, vulnerability scanning, risk assessment, and continuous monitoring of external-facing assets.",
      technologies: ["React", "Node.js", "TypeScript", "MongoDB", "Python"],
      github: true,
      live: "https://cytomate.net/project/racid",
      image: Racid,
    },
    {
      title: "SmartDealer",
      description:
        "SmartDealer's AI tools help retailers manage sales, boost profits, and turn customer data into credit scores for loans and insurance.",
      technologies: ["React", "Node.js", "TypeScript", "MongoDB"],
      github: true,
      live: "https://smartdealer.pk",
      image: SmartDealer,
    },
    {
      title: "Crops Insurance",
      description:
        "Crops Insurance is a leading insurance company that provides innovative solutions in crop insurance, risk management, and digital transformation for agricultural sector.",
      technologies: ["React", "Node.js", "TypeScript", "MongoDB"],
      github: true,
      live: "https://cropinsurance.tech/",
      image: CropsInsurance,
    },
    {
      title: "SundayCode AI",
      description:
        "SundayCode AI is my entrepreneurial venture focused on creating intelligent, impactful software products. We specialize in AI-powered solutions, custom software development, and digital transformation services for businesses.",
      technologies: [
        "React",
        "Node.js",
        "TypeScript",
        "MongoDB",
        "Python",
        "AI/ML",
        "OpenAI",
        "TensorFlow",
      ],
      github: true,
      live: "https://buland.tech",
      image: SundayCode,
    },
    {
      title: "Buland Academy",
      description:
        "Buland Academy is a skills-focused learning platform dedicated to teaching practical, in-demand digital skills. The academy empowers students to gain hands-on experience in technology, business, and career-oriented fields through expert-led courses.",
      technologies: [
        "React",
        "Node.js",
        "TypeScript"
      ],
      github: true,
      live: "https://buland.pk",
      image: Buland,
    },
    {
      title: "Jazaro - AI Fixer Platform",
      description:
        "Jazaro is an AI-powered platform connecting users with skilled repair professionals for any kind of fix - from plumbing and electrical work to appliance repair and home maintenance.",
      technologies: [
        "React",
        "Node.js",
        "TypeScript",
        "MongoDB",
        "Python",
        "AI/ML",
        "TensorFlow",
        "Socket.io",
      ],
      github: true,
      live: "https://jazaro.ai",
      image: Jazaro,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-6">
      <div className="relative mb-5">
            <div className="flex items-center justify-center">
              <div className="relative h-40 w-40 overflow-hidden">
                <div className="absolute inset-0 h-40 w-40" style={{ clipPath: 'inset(0 0 50% 0)' }}>
                  <CircleSvg className="h-40 w-40 animate-spin-slow" style={{ transformOrigin: '50% 50%' }} />
                </div>
              </div>
            </div>
            <h2
              className="text-3xl -mt-20 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold relative z-10"
              style={{
                WebkitTextStroke: '0.5px var(--stroke-color)',
                color: 'transparent',
              }}
            >
              My Projects
            </h2>
          </div>
      <div className="w-full max-w-7xl">
        <Row gutter={[10, 10]} justify={'center'}>
          {projects.map((project, index) => (
            <Col
              key={index}
              xs={24}
              sm={24}
              md={12}
              lg={6}
              xl={8}
              className="flex"
            >
              <Card
                hoverable
                className="flex flex-col h-full bg-transparent rounded-2xl backdrop-blur-sm dark:border-white/10 border-gray-200 dark:hover:border-white/30 hover:border-gray-400 border transition-all duration-200 shadow-lg"
                cover={
                  <Image
                    src={project.image}
                    alt={project.title}
                    title={project.title}
                    className="object-cover rounded-t-lg overflow-hidden aspect-square transition-transform duration-500"
                    loading="lazy"
                  />
                }
                bodyStyle={{ display: "flex", flexDirection: "column", height: "100%", background: "transparent", padding: 16 }}
              >
                <div className="flex flex-col flex-1 h-full">
                  <Meta
                    title={
                      <span className="text-lg font-semibold dark:text-gray-100 text-gray-800">{project.title}</span>
                    }
                    description={
                      <>
                        <p className="dark:text-gray-400 text-gray-500 text-xs line-clamp-3 mb-2">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Tag
                              key={techIndex}
                              color="blue"
                              style={{
                                background: "linear-gradient(90deg, #3b82f6 10%, #a21caf 90%)",
                                color: "#fff",
                                border: "none",
                                fontSize: "11px",
                                padding: "1px 8px",
                                borderRadius: "9999px",
                              }}
                            >
                              {tech}
                            </Tag>
                          ))}
                        </div>
                      </>
                    }
                  />
                  {/* Action buttons always at the bottom */}
                  <div className="mt-auto flex gap-2 pt-2">
                    {project.github && typeof project.github === "string" ? (
                      <a
                        key="github"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded-full bg-transparent hover:bg-white/10 transition-colors"
                      >
                        <Github className="w-4 h-4 text-white" />
                      </a>
                    ) : project.github === true ? (
                      <span
                        key="github-disabled"
                        className="p-1 rounded-full bg-transparent cursor-not-allowed opacity-50"
                      >
                        <Github className="w-4 h-4 text-white" />
                      </span>
                    ) : null}
                    <a
                      key="live"
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded-full bg-transparent hover:bg-white/10 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Projects;
