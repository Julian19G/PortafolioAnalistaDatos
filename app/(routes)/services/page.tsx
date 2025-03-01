
import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <div>
            <TransitionPage />
            <div className="grid items-center justify-center h-screen w-full gap-6 md:grid-cols-2 md:px-20">

                <div className="ml-80 w-full mt-20 md:mt-0">
<h1 className="text-2xl leading-light text-center md:text-left md:text-4xl md:mb-5">
Mis  {" "}
<span className="font-bold text-blue-500">
servicios.
</span>
</h1>
<p className="mb-3 md:mb-5 text-gray-300">
Ofrezco mis servicios como desarrollador full stack, especializado en la creación de soluciones tecnológicas innovadoras y la optimización de procesos. Con formación en inteligencia artificial a través de un bootcamp especializado, me enfoco en resolver problemas complejos mediante métodos creativos y eficientes, ayudando a las empresas a mejorar su productividad y alcanzar sus objetivos.
Mi experiencia abarca el desarrollo de aplicaciones web robustas, la integración de herramientas de inteligencia artificial para la automatización de tareas, y la implementación de soluciones que impulsan la competitividad y el crecimiento. Me apasiona transformar desafíos en oportunidades, utilizando tecnologías modernas como Laravel, Vue.js, PHP y más, para ofrecer resultados de alto impacto.
</p>
<button className="px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-500/65">Contacta conmigo</button>
                </div>
                
            </div>

            <div>
            <SliderServices />        
            </div>

        </div>
    );
}

export default ServicesPage;