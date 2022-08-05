import React from "react";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
    <details>
    <summary></summary>
        <nav class="menu">
        <a href="#link">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}>
                {curElem}
              </button>
            );
          })}
        </a>
      </nav>
      </details>
    </>
  );
};

export default Navbar;