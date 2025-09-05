import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa"; 


const IconsContact = () => {
  return (
    <div className="flex flex-col items-end px-5 gap-1">
        <a href="#">
            <SiGmail className="text-red-500 hover:bg-accent transition duration-300 p-2 rounded-md" size={45}/>
        </a> 
        <a href="#">
            <FaLinkedin className="text-blue-500 hover:bg-accent transition duration-300 p-2 rounded-md" size={45}/>
        </a> 
          <a href="#">
            <FaGithub className="text-white hover:bg-accent transition duration-300 p-2 rounded-md" size={45}/>
        </a> 
    </div>
  )
}

export default IconsContact