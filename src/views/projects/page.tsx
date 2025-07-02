import { Github, ExternalLink } from "lucide-react";
import { Row, Col, Card, Tag, Image } from "antd";
import Sarab from "assets/images/sarab.png";
import Racid from "assets/images/racid.png";
import Jazaro from "assets/images/jazaro.png";
import SundayCode from "assets/images/sunday.png";
import BreachPlus from "assets/images/Breach+.png";
import SmartDealer from "assets/images/smartdealer.png";
import CropsInsurance from "assets/images/cropsinsurance.png";

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
        "An advanced AI content generation platform that helps businesses create high-quality, SEO-optimized content. Features include automated blog writing, social media content generation, and content optimization tools.",
      technologies: ["React", "Nodejs", "TypeScript", "MongoDB"],
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
      live: "https://sundaycode.tech",
      image: SundayCode,
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
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          My Projects
        </h2>
      </div>
      <div className="w-full max-w-7xl">
        <Row gutter={[10, 10]}>
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
                className="flex flex-col h-full bg-transparent rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-200 shadow-lg"
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
                      <span className="text-lg font-semibold text-gray-100">{project.title}</span>
                    }
                    description={
                      <>
                        <p className="text-gray-400 text-xs line-clamp-3 mb-2">{project.description}</p>
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
