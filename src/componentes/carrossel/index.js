import './style.css';    
    import React, { useState } from 'react';
    import {
      Carousel,
      CarouselItem,
      CarouselControl,
      CarouselIndicators,
      CarouselCaption,
    } from 'reactstrap';
    
    const items = [
      { 
        src: 'https://images.convertbox.com/users/1369/b64de8539e8ab9f19a2b254284f09b0c.png',
        altText: 'Slide 1',
        caption: <p className='bolo'>Os melhores salgados da região</p>,
        key: 1,
        className:'container-lg',
      },
      {
        src: 'https://www.saudevitalidade.com/wp-content/uploads/2021/02/Conheca-o-Appao-%E2%80%93-aplicativo-de-entrega-de-pao-em-casa-2.png',
        altText: 'Slide 2',
        caption: <p className='bolo'>Que não te falte um sorriso no rosto e um pão quentinho na mão todas as manhãs</p>,
        key: 2,
        className:'container-lg',
      },
      {
        src: 'https://tradicionalbolosetortas.com.br/wp-content/uploads/2018/12/bolos-de-festa-03.png',
        altText: 'Slide 3',
        caption: <p className='bolo'>Confeitar é só um jeitinho diferente de amar.</p>,
        key: 3,
        className:'container-lg',
      },
    ];
    
    function Example(args) {
      const [activeIndex, setActiveIndex] = useState(0);
      const [animating, setAnimating] = useState(false);
    
      const next = () => {
        
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
      };
    
      const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
      };
    
      const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
      };
    
      const slides = items.map((item) => {
        return (
          
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
            <img src={item.src} className={item.className} alt={item.altText} />
            <CarouselCaption
              captionText={item.caption}
              captionHeader={item.caption}
            />
          </CarouselItem>
        );
      });
    
      return (
        <div className=' car m-5 '>
        <Carousel    
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          {...args}
        >
                    
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
        </div>
      );
    }

export default Example;