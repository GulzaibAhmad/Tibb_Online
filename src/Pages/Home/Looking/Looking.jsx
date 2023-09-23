import Image1 from '../../../assets/Articles.png';
import Image2 from '../../../assets/Products.png';
import Image3 from '../../../assets/Nuskha.png';
import Image4 from '../../../assets/Female.png';
import Image5 from '../../../assets/Male.png';
import './looking.css'

const lookings = [
  {
    id: 1,
    image: Image1,
    title: 'Articles'
  },
  {
    id: 2,
    image: Image2,
    title: 'Products'
  },
  {
    id: 3,
    image: Image3,
    title: 'Nuskha Jaat'
  },
  {
    id: 4,
    image: Image4,
    title: "Women's Health"
  },
  {
    id: 5,
    image: Image5,
    title: "Men's Health"
  },
];

const Trending = () => {
  return (
    <div className="looking-container">
      <h2>I'm <span className='heading_span'>Looking</span> for</h2>
      <div className="looking-list">
        {lookings.map((looking) => (
          <div className="looking" key={looking.id}>
            <img src={looking.image} alt={looking.title} />
            <h3>{looking.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
