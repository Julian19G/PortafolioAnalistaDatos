import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";
import Avatar from "@/components/avatar";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import { Circle } from "lucide-react";
import CircleImage from "@/components/circle-image";


const PageAboutMe = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <h1 className="text-2xl leading-light text-center md:text-left md:text-5xl md:mt-10"> Toda mi {' '}
                    <span className="font-bold text-blue-500">trayectoria profesional</span>
                </h1>
                <CounterServices />
                <TimeLine />
            </ContainerPage>
        </>
    );
}

export default PageAboutMe;