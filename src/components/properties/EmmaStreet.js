import React, { Component } from 'react';
import Slide from './Slide';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';

class Property extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [
        '../../assets/EmmaStreet/EmmaStreet00001.webp',
        '../../assets/EmmaStreet/EmmaStreet00002.webp',
        '../../assets/EmmaStreet/EmmaStreet00003.webp',
        '../../assets/EmmaStreet/EmmaStreet00004.webp',
        '../../assets/EmmaStreet/EmmaStreet00005.webp',
        '../../assets/EmmaStreet/EmmaStreet00006.webp',
        '../../assets/EmmaStreet/EmmaStreet00007.webp',
        '../../assets/EmmaStreet/EmmaStreet00008.webp',
        '../../assets/EmmaStreet/EmmaStreet00009.webp',
        '../../assets/EmmaStreet/EmmaStreet00010.webp',
      ],
      currentValue: 0,
      translateValue: 0
    }
  }

  goToPrevSlide = () => {
    if(this.state.currentIndex === 0)
      return;
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  }

  goToNextSlide = () => {
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
     return document.querySelector('.slide').clientWidth
  }

  render() {
    return (      
      <div className="property">
       <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
            {
              this.state.images.map((image, i) => (
                <Slide key={i} image={image} />
              ))
            }
        </div>

        <LeftArrow
         goToPrevSlide={this.goToPrevSlide}
        />

        <RightArrow
         goToNextSlide={this.goToNextSlide}
        />
      </div>
    );
  }
}
export default Property;
