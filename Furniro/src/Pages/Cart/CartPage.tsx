import HeaderMenu from "../../Components/HeaderMenu/HeaderMenu";
import Footer from "../../Components/Footer/Footer";
import CardSection from "../../Components/CardSection"
import SectionInform from "../Shop/Components/SectionInform";
import CartTotal from "./Components/CartTotal";


const CartPage = () => {
  return (
    <>
      <HeaderMenu/> 
      <CardSection title="Cart" caminho="Cart" />
      <CartTotal/> 
      <SectionInform/> 
      <Footer/>
     
    </>
  );
};

export default CartPage;
