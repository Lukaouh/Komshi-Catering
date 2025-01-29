import birthdayImg from "../../assets/img/birthday.png";
import corporation from "../../assets/img/corporation.png";
import inventar from "../../assets/img/inventar.png";

import catering from "../../assets/img/cateringSrvc.png";
export const ServiceTexts = [
  {
    name_ka: "სერვისები",
    name_en: "Services",
    paragraph_name_ka:
      " კომში  გთავაზობთ გემრიელ თავგადასავლებს ხარისხიანი  მომსახურებით",
    paragraph_name_en:
      "Komshi offers delicious experiences with high-quality service.",
  },
];

export const DataService = [
  {
    name_ka: "დაბადების დღე",
    name_en: "Birthday parties",
    image: birthdayImg,
    active: true,
    id: 1,
  },
  {
    name_ka: "კორპორატიული ღონისძიებები",
    name_en: "Corporate events",
    image: corporation,
    active: false,
    id: 2,
  },
  {
    name_ka: "იქირავე ინვენტარი",
    name_en: "Equipment rental",
    image: inventar,
    active: false,
    id: 3,
  },

  {
    name_ka: "საოფისე კვება",
    name_en: "Office catering",
    image: catering,
    active: false,
    id: 4,
  },
];
