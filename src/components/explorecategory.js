// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/ExploreCategory.css";

// const categories = [
//   { name: "Laptop", description: "Business Laptops", image: "/laptop.png" },
//   { name: "Desktop", description: "High-end Desktops", image: "/desktop.png" },
//   { name: "iPhone", description: "Get your iPhone", image: "/iphone.png" },
//   { name: "Tablet", description: "Best tablets", image: "/tablet.png" }
// ];

// function ExploreCategory() {
//   const navigate = useNavigate();

//   return (
//     <section className="explore-category">
//       <h2>Explore Category</h2>
//       <div className="category-slider">
//         {categories.map((category, index) => (
//           <div key={index} className="category-card" onClick={() => navigate("/products")}>
//             <img src={categories.image} alt={category.name} />
//             <h3>{categories.name}</h3>
//             <p>{categories.description}</p>
//             <a href="/products">Explore more</a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default ExploreCategory;




import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ExploreCategory.css";

import laptopImg from "../assets/laptop.jpg";
import desktopImg from "../assets/desktop.jpg";
import iphoneImg from "../assets/iphone.jpg";
import tabletImg from "../assets/tablet.jpg";

const categories = [
  { name: "Laptop", description: "Business Laptops", image: laptopImg },
  { name: "Desktop", description: "High-end Desktops", image: desktopImg },
  { name: "iPhone", description: "Get your iPhone", image: iphoneImg },
  { name: "Tablet", description: "Best tablets", image: tabletImg }
];

function ExploreCategory() {
  const navigate = useNavigate();

  return (
    <section className="explore-category">
      <h2>Explore Category</h2>
      <div className="category-slider">
        {categories.map((category, index) => (
          <div key={index} className="category-card" onClick={() => navigate("/products")}>
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <a href="/products">Explore more</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExploreCategory;
