import Image from "next/image";
import Link from "next/link";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface portafolioBoxProps {
    data: {
        id: number,
        title: string,
        image: string,
        urlGithub: string,
        urlDemo: string,
        stats: { name: string, value: number }[];
    };
}

const PortafolioBox = (props: portafolioBoxProps) => {
    const { data } = props;
    const { id, title, image, urlGithub, urlDemo, stats } = data;
    
    return (    
        <div className="p-8 border border-teal-50 rounded-xl">
            <h3 className="mb-4 text-xl font-semibold">{title}</h3>
            
            {/* Gráfico de barras */}
            <div className="w-full h-40 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={stats}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#14B8A6" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="flex gap-5 mt-5">
                <Link href={urlGithub} className="text-blue-500 hover:underline">GitHub</Link>
                <Link href={urlDemo} className="text-green-500 hover:underline">Demo</Link>
            </div>
        </div>
    );
}

export default PortafolioBox;
