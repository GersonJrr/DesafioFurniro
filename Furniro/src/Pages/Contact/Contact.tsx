import HeaderMenu from "../../Components/HeaderMenu/HeaderMenu";
import Footer from "../../Components/Footer/Footer";
import CardSection from "../../Components/CardSection";
import SectionInform from "../Shop/Components/SectionInform";



const Contact = () => {
  return (
    <>
      <HeaderMenu/> 
      <CardSection title="Contact" caminho="Contact" />

      <SectionInform/> 
      <Footer/>
     
    </>
  );
};

export default Contact;
