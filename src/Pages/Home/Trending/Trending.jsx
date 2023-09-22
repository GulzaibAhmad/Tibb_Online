import React from 'react';
import './Trending.css'; // Make sure to have the corresponding CSS file
import Image1 from '../../../assets/item1.jpg';
import Image2 from '../../../assets/item2.png';
import Image3 from '../../../assets/item3.png';
import Image4 from '../../../assets/item4.png';
import Image5 from '../../../assets/item5.png';
import Image6 from '../../../assets/item6.png';

const products = [
  {
    id: 1,
    image: Image1,
    title: 'Akarkara عقر قرحا',
    price: '$19.9',
  },
  {
    id: 2,
    image: Image2,
    title: 'Salab Misri ثعلب مصری',
    price: '$29.99',
  },
  {
    id: 3,
    image: Image3,
    title: 'Salab panja ثعلب پنجہ',
    price: '$24.99',
  },
  {
    id: 4,
    image: Image4,
    title: 'Zafran (Saffron) زعفران',
    price: '$14.99',
  },
  {
    id: 5,
    image: Image5,
    title: 'Sand fish ( Raig Mahi) ریگ ماہی',
    price: '$39.99',
  },
  {
    id: 6,
    image: Image6,
    title: 'Para (Mercury) پارہ',
    price: '$49.99',
  },
];

const Trending = () => {
  return (
    <div className="trending-container">
      <h2>Trending Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
