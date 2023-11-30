import cx from 'clsx';
import { useState } from 'react';

import styles from './Carousel.module.scss';

type TSlide = {
  id: number;
  img: string;
  buttonPlayLabel: string;
  genre: string;
  subInfo: string;
};

type TCarouselProps = {
  slides: TSlide[];
};

function Carousel({ slides }: Readonly<TCarouselProps>) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className={styles.wrapper}>
      <ul className={styles['gallery-list']}>
        {slides.map((slide) => {
          return (
            <li key={slide.id} className={styles['gallery-item']}>
              <a href='#' style={{ backgroundImage: `url(${slide.img})` }}>
                <div className={styles['gallery-item__content']}>
                  <div className={styles['gallery-item__button-play']}>
                    <span>Stream now</span>
                  </div>
                  <p className={styles['gallery-item__description']}>
                    <span className={styles['gallery-item__description-genre']}>
                      {slide.genre}
                    </span>
                    <span className={styles['gallery-item__description-dot']} />
                    {slide.subInfo}
                  </p>
                </div>
              </a>
            </li>
          );
        })}
      </ul>

      <ul className={styles['paddle-navigation']}>
        <li className={styles['paddle-navigation-previous']}></li>
        <li className={styles['paddle-navigation-next']}></li>
      </ul>

      <ul className={styles['dot-navigation-list']}>
        <li className={styles['dot-navigation-item']}></li>
        <li className={styles['dot-navigation-item']}></li>
        <li className={styles['dot-navigation-item']}></li>
        <li className={styles['dot-navigation-item']}></li>
        <li className={styles['dot-navigation-item']}></li>
        <li className={styles['dot-navigation-item']}></li>
        <li className={styles['dot-navigation-item']}></li>
        <li className={styles['dot-navigation-item']}></li>
      </ul>

      <button className={styles['button-play']}></button>
    </div>
  );
}

export default Carousel;
