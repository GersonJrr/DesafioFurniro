
import { Link } from "react-router-dom";



export default function Footer() {

  return (

    <footer className="w-full h-[490px] lg:px-20 bg-branco font-poppins ">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 space-y-[48px] ">

        <div className="mt-[46px] lg:space-y-[46px] sm:space-y-[20px] ">
          <p className="text-preto  text-[24px] font-bold leading-normal">Funiro.</p>
          <p className="text-[#9F9F9F] text-[16px] font-normal leading-normal w-[285px]">
          400 University Drive <br />Suite 200 Coral Gables,<br /> FL 33134 USA</p>
          
          <div className="flex ">
            <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://mybucketttimage.s3.us-east-2.amazonaws.com/logoFacebook.svg" alt="logo facebook" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://mybucketttimage.s3.us-east-2.amazonaws.com/logoInstagram.svg" alt="logo instagram" />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://mybucketttimage.s3.us-east-2.amazonaws.com/logoTwitter.svg"alt="logo twitter" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://mybucketttimage.s3.us-east-2.amazonaws.com/logoLinkedin.svg" alt="logo linkedin" />
            </a>
          </div>
          
        </div>

        <div className="flex flex-col lg:space-y-[46px] sm:space-y-[20px] ">
          <p className="text-cinza-letras
            text-[16px] font-medium leading-normal">
            Links</p>
           <Link to="/">
            Home
           </Link>
           <Link to="/Shop">
              Shop
           </Link>
           <Link to="/">
              About
           </Link>
           <Link to="/Contact">
              Contact
           </Link>
  
        </div>
          
        <div className="flex flex-col lg:space-y-[46px] sm:space-y-[20px] ">
          <p className="text-cinza-letras text-[16px] font-medium leading-normal">Help</p>
          <a href="">Payment Options</a>
          <a href="">Returns</a>
          <a href="">Privacy Policies</a>
        </div>

        <div className="lg:space-y-[46px] sm:space-y-[20px] ">
        <p className="text-cinza-letras text-[16px] font-medium leading-normal">Newsletter</p>
        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input 
            type="text" 
            placeholder="Enter Your Email Address"
            className="w-[170px] h-[25px] border-b border-preto bg-branco focus:outline-none focus:ring-0 text-[14px] leading-normal"
          />
          <button className="border-b border-preto ">Subscribe</button>
        </div>
      </div>

          
      </div>

      <div className="w-full h-[1px] bg-cinza mx-auto mb-[35px] mt-[35px]"></div>  
      <p className="text-preto text-[16px] font-normal leading-normal ">2023 furino. All rights reverved</p>
           
    </footer>


    )
}