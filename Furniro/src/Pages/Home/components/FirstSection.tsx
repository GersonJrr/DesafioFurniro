import bgHome from "../../../assets/bgHome.png"
import Buttonbege from "./ButtonBege"

export default function FirstSection() {
   
    return (
        <div className="w-full flex justify-center items-center font-poppins">
   
            <img src={bgHome} alt="Banner" className="w-full h-[100vh] object-cover" />

            <div className="absolute w-[80%] sm:w-[643px] h-[443px] rounded-[10px] text-left bg-bege pt-6 pl-[41px] space-y-[16px] right-[15%] sm:right-[100px]">
                <p className="text-preto pt-[40px]">New Arrival</p>                
                <h1 className="text-begeButton text-2xl sm:text-4xl lg:text-6xl font-bold">Discover Our <br /> New Collection</h1>
                <p className="text-sm sm:text-lg lg:text-xl ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br/>elit tellus, luctus nec ullamcorper mattis.</p>

                <Buttonbege />
            </div>

        </div>
    )
}
