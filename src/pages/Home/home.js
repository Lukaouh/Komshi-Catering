import "../Home/home.css";
import Header from "../../components/headers/Header";
import { DATA } from "../../components/headers/DATA";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function Home() {
  const { hash } = useLocation();
  console.log(hash);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return (
    <>
      <Header />
      <section id="partnership" style={{ marginTop: "1000px" }}>
        ტრაპეზარიას არომატული, ჯანსაღი, მრავალფეროვანი კერძები პირდაპირ ჩვენი
        სამზარეულოდან თქვენს მაგიდაზე მოხვდება. დანაყრდით და  „ითამაშეთ“ რჩეული
        გემოებით, ყველანაირი რისკის გარეშე. მაღალი სტანდარტების, სწრაფი
        მომსახურებისა და სანდოობის შენარჩუნება ჩვენი მთავარი
        პრიორიტეტია.ტრაპეზარიას არომატული, ჯანსაღი, მრავალფეროვანი კერძები
        პირდაპირ ჩვენი სამზარეულოდან თქვენს მაგიდაზე მოხვდება. დანაყრდით და 
        „ითამაშეთ“ რჩეული გემოებით, ყველანაირი რისკის გარეშე. მაღალი
        სტანდარტების, სწრაფი მომსახურებისა და სანდოობის შენარჩუნება ჩვენი
        მთავარი პრიორიტეტია. ტრაპეზარიას არომატული,ჯანსაღი, მრავალფეროვანი
        კერძები პირდაპირ ჩვენი სამზარეულოდან თქვენს მაგიდაზე მოხვდება. დანაყრდით
        და  „ითამაშეთ“ რჩეული გემოებით, ყველანაირი რისკის გარეშე. მაღალი
        სტანდარტების, სწრაფი მომსახურებისა და სანდოობის შენარჩუნება ჩვენი
        მთავარი პრიორიტეტია.
      </section>
    </>
  );
}
export default Home;