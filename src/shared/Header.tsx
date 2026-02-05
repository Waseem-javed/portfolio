import { Link } from "react-router-dom";
import { Linkedin, Github, Facebook } from "lucide-react";

export const Navbar = () => {
  const socialLinks = [
    {
      to: "https://linkedin.com/in/waseem-javed",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      to: "https://github.com/waseem-javed",
      icon: Github,
      label: "GitHub",
    },
    {
      to: "https://medium.com/@waseem-javed",
      icon: "medium",
      label: "Medium",
    },
    {
      to: "https://facebook.com/@meeesaw",
      icon: Facebook,
      label: "Facebook",
    },
  ];

  return (
    <header className="">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link to="/">
            <p className="text-light">
              <strong className="font-bold transition-colors text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                Waseem
              </strong>
              &nbsp;<span className="text-white">Javed</span>
            </p>
          </Link>
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400"
              >
                {link.icon === "medium" ? (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42C22.49 5.58 24 8.46 24 12z" />
                  </svg>
                ) : (
                  <link.icon className="w-5 h-5" />
                )}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
