import HeaderMenu from "../../Components/HeaderMenu/HeaderMenu";
import Footer from "../../Components/Footer/Footer";
import CardSection from "../../Components/CardSection";
import Filter from "./Components/Filter";
import SectionInform from "./Components/SectionInform";
import ListaProdutos from "./Components/ListaProdutos";

const ShopPage = () => {
  return (
    <>
      <HeaderMenu />
      <CardSection title="Shop" caminho="Shop" />
      <Filter />
      <div className="mb-16"></div>
      <ListaProdutos produtosPorPagina={16} mostrarMais={false}/>
      <div className="mb-24"></div>
      <SectionInform/> 

      <Footer />
    </>
  );
};

export default ShopPage;

