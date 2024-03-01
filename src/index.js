// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// const firstShoe = {
//   description:
//     "Clean and supreme, the AJ3 returns. Pairing a smooth Ivory base with Grey Mist suede overlays and translucent accents on the heel tab and sole, this crafted edition ups the texture. It has dual branding on the heel and double Jumpman logos on the tongue—because twice the Jumpman is twice as nice.",
//   name: 'Air Jordan 3 Retro Craft "Ivory"',
//   img: "./images/shoe-1.png",
// };
// const secondShoe = {
//
// };

// function CardList() {
//   return (
//     <section className="cardList">
//       <Card
//         img={firstShoe.img}
//         name={firstShoe.name}
//         description={firstShoe.description}
//       />
//       <Card
//         img={secondShoe.img}
//         name={secondShoe.name}
//         description={secondShoe.description}
//       />
//     </section>
//   );
// }

// const Card = (props) => {
//   console.log(props);
//   <section className="product">
//     <img src={props.img} alt={props.name} />
//     <h2 className="product__title">{props.name}</h2>
//     <p>{props.description}</p>
//     {console.log(props)}
//   </section>;
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<CardList />);
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const shoes = [
  {
    description:
      'The Air Jordan 3 Retro Craft "Ivory" combines timeless style with modern craftsmanship. Featuring a sleek Ivory base, Grey Mist suede overlays, and translucent accents, it offers a refined aesthetic.',
    name: 'Air Jordan 3 Retro Craft "Ivory"',
    img: "./images/first.png",
    price: "$250",
    id: 1,
  },
  {
    description:
      'Air Jordan 13 Retro "Blue Grey" combines timeless style with modern craftsmanship. Featuring a sleek Ivory base, Grey Mist suede overlays, and translucent accents, it offers a refined aesthetic.',
    name: 'Air Jordan 13 Retro "Blue Grey"',
    img: "./images/first.png",
    price: "$200",
    id: 2,
  },
  {
    description:
      "Nike Dunk Low Retro Premium combines timeless style with modern craftsmanship. Featuring a sleek Ivory base, Grey Mist suede overlays, and translucent accents, it offers a refined aesthetic.",
    name: "Nike Dunk Low Retro Premium",
    img: "./images/first.png",
    price: "$125",
    id: 3,
  },
];

function CardList() {
  return (
    <section className="cardList">
      {shoes.map((card) => {
        console.log(card);
        return <Card {...card} key={card.id} />;
      })}
    </section>
  );
}

const Card = (props) => {
  const { img, name, description, price } = props;
  return (
    <section className="product">
      <img className="product__image" src={img} alt={name} />
      <h2 className="product__title">{name}</h2>
      <p>{description}</p>
      <span className="product__price ">{price}</span>
      <button className="product__btn btn">BUY NOW</button>
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<CardList />);
