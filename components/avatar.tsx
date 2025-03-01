"use client"
import Image from "next/image";
import MotionTransition from "./transition-component";

const Avatar = () => {
    return (
        <div>
            <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute">
                <Image src="/avatar-1.png" width={300} height={300}
                className="w-full h-full" alt="Avatar" />
            </MotionTransition>
            
        </div>
      
    );
}

export default Avatar;