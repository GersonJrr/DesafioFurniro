import { Link } from "react-router-dom";
import bgSection from "../assets/bgSection.png";
import seta from "../assets/seta.svg";

interface SectionProps {
    title: string;
    caminho: string;
}

export default function SectionShop({ title, caminho }: SectionProps) {
    return (
        <Link to="/detalhes" className="text-preto font-medium">
            <div className="w-full h-[316px] flex-shrink-0 overflow-hidden relative font-poppins">
                <img src={bgSection} alt="Imagem" className="w-full h-full object-cover" />
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-poppins text-[48px] font-medium leading-normal">
                    {title}
                </h1>
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
                    <Link to="/" className="text-preto font-medium">
                        Home
                    </Link>
                    <img src={seta} alt="seta" />
                    <a className="text-preto font-light">{caminho}</a>
                </div>
            </div>
           
        </Link>
    );
}
