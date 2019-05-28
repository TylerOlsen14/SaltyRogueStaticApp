import React, { Component } from 'react';

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
  render() {
    return (
      <div className="property">

      </div>
    );
  }
}

export default Property;
