import Footer from "../../Components/Footer/Footer";
import HeaderMenu from "../../Components/HeaderMenu/HeaderMenu";
import ListaProdutos from "../Shop/Components/ListaProdutos";
import Caminho from "./Components/caminho";
import Descricao from "./Components/Descricao";
import SectionDetalhes from "./Components/SectionDetalhes";




const DetalhesPage = () => {
  return (
    <>
    <HeaderMenu/> 
    <Caminho/>
    <SectionDetalhes/>
    <div className="w-full h-[1px] bg-cinza mx-auto mb-[1px]"></div>
    <Descricao/> 
    <div className="w-full h-[1px] bg-cinza mx-auto mb-[1px]"></div>
    <div className="flex flex-col items-center pt-[50px] mb-[30px] font-poppins">
      <h1 className="text-font-preto-home text-[36px] font-medium leading-normal">Related Products</h1>
    </div>
    <ListaProdutos produtosPorPagina={4} mostrarMais={true}/>
    <div className="w-full h-[1px] bg-cinza mx-auto mb-[1px]"></div>
    <Footer/> 
      
     
    </>
  );
};

export default DetalhesPage;
