export default function SectionInform() {
    return (
        <div className="flex flex-wrap justify-between items-center w-full h-auto px-5 sm:px-10 lg:px-20 py-[100px] bg-bg-inform font-poppins">
            <div className="flex items-center w-full sm:w-auto mb-6 sm:mb-0">
                <img src="https://mybucketttimage.s3.us-east-2.amazonaws.com/trofeu.svg" alt="trofeu" />
                <div className="ml-4">
                    <h1 className="text-preto-inform text-[25px] font-semibold leading-[37.5px]">High Quality</h1>
                    <p className="text-cinza-descricao text-[20px] font-medium leading-[150%] md:text-[18px] sm:text-[16px]">crafted from top materials</p>
                </div>
            </div>
            <div className="flex items-center w-full sm:w-auto mb-6 sm:mb-0">
                <img src="https://mybucketttimage.s3.us-east-2.amazonaws.com/verificado.svg" alt="verificado" />
                <div className="ml-4">
                    <h1 className="text-preto-inform text-[25px] font-semibold leading-[37.5px]">Warranty Protection</h1>
                    <p className="text-cinza-descricao text-[20px] font-medium leading-[150%] md:text-[18px] sm:text-[16px]">Over 2 years</p>
                </div>
            </div>
            <div className="flex items-center w-full sm:w-auto mb-6 sm:mb-0">
                <img src="https://mybucketttimage.s3.us-east-2.amazonaws.com/entrega.svg" alt="entrega" />
                <div className="ml-4">
                    <h1 className="text-preto-inform text-[25px] font-semibold leading-[37.5px]">Free Shipping</h1>
                    <p className="text-cinza-descricao text-[20px] font-medium leading-[150%] md:text-[18px] sm:text-[16px]">Order over 150 $</p>
                </div>
            </div>
            <div className="flex items-center w-full sm:w-auto">
                <img src="https://mybucketttimage.s3.us-east-2.amazonaws.com/support.svg" alt="suporte" />
                <div className="ml-4">
                    <h1 className="text-preto-inform text-[25px] font-semibold leading-[37.5px]">24 / 7 Support</h1>
                    <p className="text-cinza-descricao text-[20px] font-medium leading-[150%] md:text-[18px] sm:text-[16px]">Dedicated support</p>
                </div>
            </div>
        </div>
    );
}
