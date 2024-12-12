import { SquarePower } from "lucide-react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="bg-black w-full h-full overflow-hidden">
      <div className="flex justify-center overflow-hidden">
        <Link
            to="/home"
            className="text-4xl">
            <SquarePower className="text-white hover:text-red-500 hover:scale-110 h-screen select-none transition-transform animate-pulse" width={160}/>
        </Link>
      </div>
    </div>
  );
}

export default Start;
