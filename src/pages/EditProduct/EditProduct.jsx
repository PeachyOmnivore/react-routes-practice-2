/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function EditProductPage(props) {

  const [productToUpdate, setProductToUpdate] = useState(null);
  const location = useLocation()
  console.log({ productToUpdate });

  useEffect(() => {
    if (location.state) {
      const { product } = location.state;
      setProductToUpdate(product);
    }
  }, [location]);


  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setProductToUpdate({ ...productToUpdate, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  if (!productToUpdate) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Product Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={productToUpdate.name}
      />
      <button type="submit">Edit</button>
    </form>
  );
}

export default EditProductPage;
