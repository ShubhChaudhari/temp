import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Product from "../product/Product";
import { Products } from "../services/services";
import { Container, Grid } from "@mui/material";

const Home = () => {
  const [itemList, setItemList] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const productList = async () => {
    try {
      const responce = await Products();
      setItemList(responce.data);
      console.log("responce", responce);
    } catch (error) {}
  };

  useEffect(() => {
    productList();
  }, []);
console.log('cartItems', cartItems)
  return (
    <>
      <Navbar />
      {/* <div className="flex flex-row mt-16">
        { itemList && itemList.map((item)=>(
          <Product />
        ))

        }
        
      </div> */}
      <Container maxWidth="xl">
      <Grid container spacing={2} sx={{marginTop:"20px"}}>
        {itemList.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Product
              image={"product.image"}
              title={product.name}
              price={product.price}
              setCartItems={setCartItems}
              product={product}
              description={product.description}
              sx={{ margin: 'auto' }}
            />
          </Grid>
        ))}
      </Grid>

      </Container>
    </>
  );
};

export default Home;
