import { FaGithub, FaGoogle } from "react-icons/fa";


const RightSidebar = () => {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold ">Login With</h2>
           <div className="flex flex-col gap-3">
              <button className="btn text-blue-400  border-blue-400"><FaGoogle className="text-blue-400" />Login With Google</button>
              <button className="btn  border-black "> <FaGithub />Login With Github</button>
           </div>
        </div>
    );
};

export default RightSidebar;