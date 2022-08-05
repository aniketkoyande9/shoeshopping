import React, { useState }  from 'react'
import "./Style.css"
import ProductCard from './ProductCard'
import Product from './productApi'
import Navbar from './NavBar'

const uniqueList = [
  ...new Set(
    Product.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

console.log(uniqueList);

    const Home = () => {
      const [menuData, setMenuData] = useState(Product);
      const [menuList, setMenuList] = useState(uniqueList);

      const filterItem = (category) => {
        if (category === "All") {
          setMenuData(Product);
          return;
        }
    
        const updatedList = Product.filter((curElem) => {
          return curElem.category === category;
        });
    
        setMenuData(updatedList);
      };

      return (
        <>
        <Navbar filterItem={filterItem} menuList={menuList} />
    <ProductCard menuData={menuData} />
    </>
  );
};

export default Home