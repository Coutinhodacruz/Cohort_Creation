import { FaUserCircle } from "react-icons/fa";


const AvatarDropdown = () => {
  return (
    <div className="flex flex-row w-20 h-8    ">
    <FaUserCircle className="w-20 h-8" />
    <select className="w-20 h-7">
        <option>Onowomano</option>
        <option>Uchenna</option>
        <option>Ikechukwu</option>
    </select>
    </div>
  )
}
export default AvatarDropdown;