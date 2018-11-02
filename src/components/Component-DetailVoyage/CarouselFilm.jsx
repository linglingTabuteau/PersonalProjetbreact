import React, {Component} from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    
  } from 'reactstrap';
  import './CarouselFilm.css';
  
  // const items = [
  //   {
  //     src: 'http://www.voyagez-malin.net/wp-content/uploads/2018/04/Venise-Le-grand-canal-1920x500-1920x500.jpg',
  //     altText: 'Le grand Canal de Venise'
  //   },
  //   {
  //     src: 'http://www.toulouse.aeroport.fr/sites/default/files/venise_destination_header_1.jpg',
  //     altText: 'Les gondoles de Venise'
  //   },
  //   {
  //     src: 'https://www.aubergesdejeunesse.com/city_images/Italy/venice.jpg',
  //     altText: 'Le quartier San Marco Venise'
  //   }
  // ];
  
  class CarouselFilm extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        activeIndex: 0,
        promo: []
      };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
    }
  
    componentDidMount(){
      fetch('http://92.175.11.66:3001/api/quests/movies/')
      .then(res => res.json())
        .then(data =>
          this.setState({
            promo: data,
          }))
    }

    onExiting() {
      this.animating = true;
    }
  
    onExited() {
      this.animating = false;
    }
  
    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === this.state.promo.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? this.state.promo.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }
    
    render() {
      const { activeIndex } = this.state;
  
      const slides = this.state.promo.map((photo) => {
        return (
          <CarouselItem
            className='centerphoto'
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={photo.id}
          >
            <img className="sizeimage" src={photo.poster} alt={photo.name} />
            <CarouselCaption captionHeader={photo.name} />
          </CarouselItem>
     
        );
      });
  
      return (
        <div className='wrappCarousel'>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={this.state.promo} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
        </div>
      );
    }
  }
export default CarouselFilm;