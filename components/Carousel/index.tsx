import React from 'react';
import Image from 'next/image';
import styles from '../../styles/components/Carousel.module.css'
import CarouselArrows from './CarouselArrows';
import homePhoto1 from '../../public/homePhoto1.jpg'

const Carousel: React.FC = () => {
  return (
    <div>
      <div className={styles.imageWrapper}>
        <Image 
          src={homePhoto1}
          alt="Example photography"
          layout="fill"
        />
      </div>
      <CarouselArrows />
    </div>
  )
}

export default Carousel