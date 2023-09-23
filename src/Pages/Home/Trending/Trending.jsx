import Image1 from '../../../assets/item1.jpg';
import Image2 from '../../../assets/item2.png';
import Image3 from '../../../assets/item3.png';
import Image4 from '../../../assets/item4.png';
import Image5 from '../../../assets/item5.png';
import './trending.css'

const products = [
  {
    id: 1,
    image: Image1,
    title: 'Akarkara (Irani)',
    urdu: 'عقر قرحا',
    price: 'Rs. 1000 (50g)',
  },
  {
    id: 2,
    image: Image2,
    title: 'Salab Misri',
    urdu: 'ثعلب مصری',
    price: 'Rs. 700 (10g)',
  },
  {
    id: 3,
    image: Image3,
    title: 'Salab panja',
    urdu: 'ثعلب پنجہ',
    price: 'Rs. 600 (10g)',
  },
  {
    id: 4,
    image: Image4,
    title: 'Zafran (Irani)',
    urdu: 'زعفران',
    price: 'Rs. 7500 (10g)',
  },
  {
    id: 5,
    image: Image5,
    title: 'Sand fish',
    urdu: 'ریگ ماہی',
    price: 'Rs. 1500 (10g)',
  },
];

const Trending = () => {
  return (
    <div className="trending-container">
      <h2>Top <span className='heading_span'>Trending</span> Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title} <span className='title_span'>{product.urdu}</span></h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
