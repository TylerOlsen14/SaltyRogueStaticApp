import React, { Component } from 'react';
import {
  Card,
  CardTitle,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap'
import './propertyStyle.css'

const items = [
  {
    src: 'https://photos.zillowstatic.com/p_f/ISijensahjo2ph1000000000.jpg',
    // src: '../../assets/LaurelStreet/LaurelStreet00001.webp',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://photos.zillowstatic.com/p_f/IS27azrx8388ph1000000000.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://photos.zillowstatic.com/p_f/ISybza81oy2mph1000000000.jpg',
    // src: '../../assets/LaurelStreet/LaurelStreet00003.webp',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: 'https://photos.zillowstatic.com/p_f/ISizum7ofimrph1000000000.jpg',
    // src: '../../assets/LaurelStreet/LaurelStreet00004.webp',
    altText: 'Slide 4',
    caption: 'Slide 4'
  },
  {
    src: 'https://photos.zillowstatic.com/p_f/ISugomo43uxzph1000000000.jpg',
    // src: '../../assets/LaurelStreet/LaurelStreet00005.webp',
    altText: 'Slide 5',
    caption: 'Slide 5'
  },
  {
    src: 'https://photos.zillowstatic.com/p_f/ISmama6yylp2qh1000000000.jpg',
    // src: '../../assets/LaurelStreet/LaurelStreet00006.webp',
    altText: 'Slide 6',
    caption: 'Slide 6'
  },
  {
    src: 'https://photos.zillowstatic.com/p_f/IS6yhm5lq598qh1000000000.jpg',
    // src: '../../assets/LaurelStreet/LaurelStreet00007.webp',
    altText: 'Slide 7',
    caption: 'Slide 7'
  },
  {
    src: 'https://photos.zillowstatic.com/p_f/ISqldy48ipsdqh1000000000.jpg',
    // src: '../../assets/LaurelStreet/LaurelStreet00008.webp',
    altText: 'Slide 8',
    caption: 'Slide 8'
  },
  {
    src: 'https://photos.zillowstatic.com/p_f/ISa99a4v99cjqh1000000000.jpg',
    // src: '../../assets/LaurelStreet/LaurelStreet00009.webp',
    altText: 'Slide 9',
    caption: 'Slide 9'
  },
  {
    src: 'https://photos.zillowstatic.com/p_f/ISuw4m3i1tvoqh1000000000.jpg',
    // src: '../../assets/LaurelStreet/LaurelStreet00010.webp',
    altText: 'Slide 10',
    caption: 'Slide 10'
  },
]

class LaurelStreet extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0};
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }
  onExited() {
    this.animating = false;
  }
  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 :this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }
  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }
  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((image) => {
      return (
        <CarouselItem
        onExiting={this.onExiting}
        onExited={this.onExited}
        key={image.src}
        >
          <img className="CarouselImage" src={image.src} alt={image.altText} />
          <CarouselCaption className="CarouselCaption" captionText={image.caption} captionHeader={image.caption} />
        </CarouselItem>
      )
    })

    return (
      <div>
        <Card className="card">
          <CardTitle className="title">
            <p>
              Laurel Street
            </p>
          </CardTitle>
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            prevous={this.previous}
            className="Carousel carousel-fade"
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
        </Card>
      </div>
    );
  }
}

export default LaurelStreet