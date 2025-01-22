import Header from "../../components/headers/Header";
import SecondHeader from "../../components/secondHeader/secondHeader";
import { DATA } from "../../components/headers/DATA";
import Footer from "../../components/Footer/footer";

function Lunch() {
  return (
    <>
      <Header />
      <SecondHeader name={DATA[2]?.title} />
      <Footer />
      <div></div>
    </>
  );
}

export default Lunch;
