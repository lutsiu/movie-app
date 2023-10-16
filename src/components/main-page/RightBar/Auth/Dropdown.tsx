import { FaPencilAlt, FaSignOutAlt } from "react-icons/fa";
import styles from '../style.module.scss';
export default function Dropdown() {
  return (
    <div className={`${styles.dropdown} absolute pointer-events-none top-[4.7rem] flex flex-col bg-slate-800 opacity-0 p-[1rem] left-[3rem] rounded-lg duration-500`}>
      <div className="flex gap-[2rem] items-center hover:underline cursor-pointer">
        <FaPencilAlt  className="w-[2rem] h-[2rem]" />
        <span className="text-2xl">Manage profile data</span>
      </div>
      <div className="flex gap-[2rem] items-center mt-[1.4rem] hover:underline cursor-pointer">
        <FaSignOutAlt className="w-[2rem] h-[2rem]" />
        <span className="text-2xl">Sign out</span>
      </div>
    </div>
  );
}
