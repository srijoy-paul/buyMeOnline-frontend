// import { AppBar, PaletteMode } from "@mui/material";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
// import NavigationBar from "../navigationbar/NavigationBar";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "http://localhost:3000/api/v1/products/get/all",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${Cookies.get("BearerToken")}`,
          },
        }
      );
      const responseData = await response.json();
      console.log(responseData.allProducts);
      setProducts(responseData.allProducts);
    })();
  }, []);
  return (
    <div style={{ border: "2px solid blue", marginTop: "15px" }}>
      {(() => {
        products.map((product) => {
          console.log(product);
        });
      })()}
    </div>
  );
}

export default Products;
