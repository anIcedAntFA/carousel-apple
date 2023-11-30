import './App.css';
import Carousel from './components/Carousel';

const slides = [
  {
    id: 1,
    img: 'https://is1-ssl.mzstatic.com/image/thumb/FVXovQ_qyfe9iwKjx4dRxA/1378x774.jpg',
    buttonPlayLabel: 'Preview now',
    genre: 'Drama',
    subInfo: 'In theaters now',
  },
  {
    id: 2,
    img: 'https://is1-ssl.mzstatic.com/image/thumb/mZsXfk4apSIl3Q5QZqztiQ/1378x774.jpg',
    buttonPlayLabel: 'Stream now',
    genre: 'Adventure',
    subInfo: 'Some secrets cannot be contained',
  },
  {
    id: 3,
    img: 'https://is1-ssl.mzstatic.com/image/thumb/q8QlFpnNct0G9kpRmyMyNw/1378x774.jpg',
    buttonPlayLabel: 'Stream now',
    genre: 'Drama',
    subInfo: 'A new gold rush begins',
  },
  {
    id: 4,
    img: 'https://is1-ssl.mzstatic.com/image/thumb/-RJ9s2YmRAo0GqNUf3GNlg/1378x774.jpg',
    buttonPlayLabel: 'Stream now',
    genre: 'Thriller',
    subInfo: 'New season',
  },
  {
    id: 5,
    img: 'https://is1-ssl.mzstatic.com/image/thumb/zI2CDCT1wdz22rTE-yIAww/1378x774.jpg',
    buttonPlayLabel: 'Stream now',
    genre: 'Holiday',
    subInfo: 'A star-studded Christmas spectacular.',
  },
  {
    id: 6,
    img: 'https://is1-ssl.mzstatic.com/image/thumb/R_l1v_QVLik6NRU2FL9yrw/1378x774.jpg',
    buttonPlayLabel: 'Stream now',
    genre: 'Drama',
    subInfo: 'Life rarely follows a formula.',
  },
  {
    id: 7,
    img: 'https://is1-ssl.mzstatic.com/image/thumb/a_voEGGOjHGvUUhwrbStXQ/1378x774.jpg',
    buttonPlayLabel: 'Stream now',
    genre: 'Comedy',
    subInfo: 'A new musical comedy based on a holiday classic.',
  },
  {
    id: 8,
    img: 'https://is1-ssl.mzstatic.com/image/thumb/IZLh7W9XMi2iYTPqqFwRYg/1378x774.jpg',
    buttonPlayLabel: 'Stream now',
    genre: 'Holiday',
    subInfo: 'Happiness is the holidays!',
  },
];

function App() {
  return <Carousel slides={slides} />;
}

export default App;
