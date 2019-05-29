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
    src: 'https://photos.zillowstatic.com/cc_ft_1536/ISuk7070zpttd61000000000.webp',
    // src: '../../assets/EmmaStreet/EmmaStreet00001.webp',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://photos.zillowstatic.com/cc_ft_1536/IS6ajn81lduzt61000000000.webp',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://photos.zillowstatic.com/cc_ft_1536/ISukrbxrxea0971000000000.webp',
    // src: '../../assets/EmmaStreet/EmmaStreet00003.webp',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: 'https://photos.zillowstatic.com/cc_ft_1536/ISa17zvw3retz51000000000.webp',
    // src: '../../assets/EmmaStreet/EmmaStreet00004.webp',
    altText: 'Slide 4',
    caption: 'Slide 4'
  },
  {
    src: 'https://photos.zillowstatic.com/cc_ft_1536/ISmepzelt623971000000000.webp',
    // src: '../../assets/EmmaStreet/EmmaStreet00005.webp',
    altText: 'Slide 5',
    caption: 'Slide 5'
  },
  {
    src: 'https://photos.zillowstatic.com/cc_ft_1536/IS2v4ndqzi6wz51000000000.webp',
    // src: '../../assets/EmmaStreet/EmmaStreet00006.webp',
    altText: 'Slide 6',
    caption: 'Slide 6'
  },
  {
    src: 'https://photos.zillowstatic.com/cc_ft_1536/ISe8nnwepyt5971000000000.webp',
    // src: '../../assets/EmmaStreet/EmmaStreet00007.webp',
    altText: 'Slide 7',
    caption: 'Slide 7'
  },
  {
    src: 'https://photos.zillowstatic.com/cc_ft_1536/ISuo2bvjvayyz51000000000.webp',
    // src: '../../assets/EmmaStreet/EmmaStreet00008.webp',
    altText: 'Slide 8',
    caption: 'Slide 8'
  },
  {
    src: 'https://photos.zillowstatic.com/cc_ft_1536/IS62lbe8lql8971000000000.webp',
    // src: '../../assets/EmmaStreet/EmmaStreet00009.webp',
    altText: 'Slide 9',
    caption: 'Slide 9'
  },
  {
    src: 'https://photos.zillowstatic.com/cc_ft_1536/ISecymu6nuh4061000000000.webp',
    // src: '../../assets/EmmaStreet/EmmaStreet00010.webp',
    altText: 'Slide 10',
    caption: 'Slide 10'
  },
]

class EmmaStreet extends React.Component {
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
              Emma Street
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

export default EmmaStreet