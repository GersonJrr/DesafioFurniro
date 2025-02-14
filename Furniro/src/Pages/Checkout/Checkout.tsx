import HeaderMenu from "../../Components/HeaderMenu/HeaderMenu";
import Footer from "../../Components/Footer/Footer";
import SectionInform from "../Shop/Components/SectionInform";
import CardSection from "../../Components/CardSection";
import Billing from "./Billing";


const Checkout = () => {
  return (
    <>
      <HeaderMenu/> 
      <CardSection title="Checkout" caminho="Checkout" />
      <Billing/> 
      <SectionInform/> 
      <Footer/>
     
    </>
  );
};

export default Checkout;
