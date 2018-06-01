import React from "react";
import Slider from "react-slick";

export class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div id="sliderContent">
          
          <img src="https://www.goodfreephotos.com/cache/united-states/connecticut/other-connecticut/voting-machine-in-new-london-connecticut.jpg" class="center"/>
        <h6>Wrzesień 2016</h6>
        
        <h6>Sophia ei nec, wisi persequeris reformidans qui ea. Eam congue maluisset disputationi an, ne viris veniam partiendo quo. </h6>
        </div>
        <div>
        <img src="https://www.goodfreephotos.com/cache/united-states/nevada/las-vegas/inside-the-hoover-dam-in-nevada.jpg"/>
          <h6>Luty 2016</h6>
               <h6>Wisi persequeris reformidans qui ea. Eam congue maluisset disputationi an, ne viris veniam partiendo quo. </h6>
        </div>
        <div>
        <img src="https://www.goodfreephotos.com/cache/united-states/wisconsin/other-wisconsin/industrial-machinery-processing-plant.jpg"/>
         <h6>Lipiec 2016</h6>
              <h6>Reformidans qui ea. Eam congue maluisset disputationi an, ne viris veniam partiendo quo. </h6>
        </div>
   
      </Slider>
   
    );
  }
}