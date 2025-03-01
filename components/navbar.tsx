'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

import { itemsNavbar } from "@/data";
import MotionTransition from "./transition-component";




const Navbar = () => {
    const router = usePathname()
    return (
        <MotionTransition position="right" className="fixed z-40 flex flex-com items-center justify-center w-full mt-auto h-max bottom-10">
            <nav>
                <div className="flex itmes-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
                {itemsNavbar.map((item) => (
                    <div key={item.id}
                    className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-blue-500 ${router === item.link && 'bg-blue-500'}`}>

                    <Link href={item.link}>{item.icon}</Link>
                        </div>
                ) )}
                </div>
            </nav>
        </MotionTransition>
    );
}

export default Navbar;