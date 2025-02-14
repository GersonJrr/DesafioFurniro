import HeaderMenu from "../../Components/HeaderMenu/HeaderMenu";
import Footer from "../../Components/Footer/Footer";
import FirstSection from "../Home/components/FirstSection";
import SecondSection from "../Home/components/SecondSection";
import Carrossel from "./components/Carrosel/Carrossel";
import Furniture from "./components/Furniture";
import ListaProdutos from "../Shop/Components/ListaProdutos";



const Home = () => {
  return (
    <>
      <HeaderMenu/> 
      <FirstSection/>
      <SecondSection/>
      <div className="flex flex-col items-center pt-[50px] mb-[30px]">
        <h1 className="text-font-preto-home text-[40px] font-bold leading-normal">Our Products</h1>
      </div>
      
      <div className="pt-[50px]"> 
      <ListaProdutos produtosPorPagina={4} mostrarMais={true}/>
      <Carrossel/>
      </div>
      <Furniture/>
      <div className="w-full h-[1px] bg-cinza mx-auto mb-[1px]"></div>
      <Footer/>
     
    </>
  );
};

export default Home;
