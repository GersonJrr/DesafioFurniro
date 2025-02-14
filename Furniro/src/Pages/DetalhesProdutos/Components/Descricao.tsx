const Descricao = () => {
    return (
        <div className="w-full h-[744px] bg-branco font-poppins space-y-20">
            <div className="flex justify-center space-x-32 mt-[60px]">
                <h1 className="text-preto text-[24px] font-medium leading-normal">Description</h1>
                <h2 className="text-font-descr text-[24px] font-normal leading-normal">Additional Information</h2>
            </div>

            <div className="w-[1026px] mx-auto mt-6 space-y-6">
                <p className="text-font-descr text-justify text-[16px] font-normal leading-normal">
                    Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker 
                    takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                </p>
                <p className="text-font-descr text-justify text-[16px] font-normal leading-normal">
                    Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting 
                    the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with 
                    a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate 
                    and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while 
                    the guitar-influenced leather strap enables easy and stylish travel.
                </p>
                <div className="flex space-x-10">
                    <div className="w-[605px] h-[348px] bg-bg-inform rounded-[10px]">
                        <img src="https://mybucketttimage.s3.us-east-2.amazonaws.com/sofa.png" alt="" />
                    </div>
                    <div className="w-[605px] h-[348px] bg-bg-inform rounded-[10px]">
                     <img src="https://mybucketttimage.s3.us-east-2.amazonaws.com/sofa.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Descricao;
