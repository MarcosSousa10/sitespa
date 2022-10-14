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
        src: 'https://lh3.googleusercontent.com/p/AF1QipPfGfWZulz2QBLwGL1N3zwvAbdw63gScx7RzLlM=w1080-h608-p-no-v0',
        altText: 'Slide 1',
        caption: 'Slide 1',
        key: 1,
      },
      {
        src: 'https://giassi.vtexassets.com/arquivos/ids/507646/Pao-Hotel-Giassi-Kg-.png?v=637994834274800000',
        altText: 'Slide 2',
        caption: 'Slide 2',
        key: 2,
      },
      {
        src: 'https://paniere.com.br/wp-content/uploads/2014/05/case.png',
        altText: 'Slide 3',
        caption: 'Slide 3',
        key: 3,
        class:"asd"
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
            <img src={item.src} alt={item.altText} />
            <CarouselCaption
              captionText={item.caption}
              captionHeader={item.caption}
            />
          </CarouselItem>
        );
      });
    
      return (
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
      );
    }

export default Example;