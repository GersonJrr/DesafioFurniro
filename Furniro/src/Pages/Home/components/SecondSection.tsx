export default function SecondSection() {
   
    return (
        <div className="w-full h-[685px] pt-[50px] flex justify-center items-center">
           <div className="flex flex-col  items-center text-center space-y-[46px]">
                <div className="flex flex-col items-center ">
                    <h1 className="text-font-preto-home text-[32px] font-bold leading-normal">Browse The Range</h1>
                    <p className="text-font-cinza-home text-center text-[20px] text-base font-normal leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div className="flex space-x-8 ">
                    <div className="flex flex-col items-center space-y-5">
                    <img src="https://mybucketttimage.s3.us-east-2.amazonaws.com/dining.png" alt="foto produto" />
                    <span className="text-font-preto-home text-[24px] font-semibold">Dining</span>
                    </div>
                    <div className="flex flex-col items-center space-y-5">
                    <img src="https://mybucketttimage.s3.us-east-2.amazonaws.com/living.png" alt="foto produto" />
                    <span className="text-font-preto-home text-[24px] font-semibold">Living</span>
                    </div>
                    <div className="flex flex-col items-center space-y-5">
                    <img src="https://mybucketttimage.s3.us-east-2.amazonaws.com/bedroom.png" alt="foto produto" />
                    <span className="text-font-preto-home text-[24px] font-semibold">Bedroom</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
