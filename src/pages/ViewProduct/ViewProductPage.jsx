/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

function ViewProductPage(props) {
  const [product, setProduct] = useState(null);

  //Ask React for the location object
  const location = useLocation();

  //Use useEffect so that when the location changes
  //we update our product state with the product defined
  //by the link
  useEffect(() => {
    if (location.state) {
      //Get the product from the state object
      //from the location
      const { product } = location.state;
      setProduct(product);
    }
  }, [location]);

  console.log({ product, location });

  //When the component first renders, we won't
  //have the product yet
  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>£{product.price}</p>
      <p>{product.type}</p>
    </div>
  );
}

export default ViewProductPage;
