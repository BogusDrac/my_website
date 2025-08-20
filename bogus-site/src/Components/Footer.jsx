import { Twitter, Linkedin, Github} from "lucide-react";

const Footer = () => {
  return (
    <div className="flex bg-gray-800 justify-center gap-10 p-10">
    <a 
      href="https://twitter.com/@bogusDrc" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Twitter"
      className="text-white hover:text-red-600 hover:scale-110 text-xl"
    >
      <Twitter />
    </a>
    <a 
      href="https://linkedin.com/in/itumeleng-matlala-082681186" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="text-white hover:text-red-600 hover:scale-110 transition-all text-xl"
    >
      <Linkedin />
    </a>
    <a 
      href="https://github.com/BogusDrac/Bogusdrac.git" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="text-white hover:text-red-600 hover:scale-110 transition-all text-xl"
    >
      <Github />
    </a>
  </div>
  );
}

export default Footer;
