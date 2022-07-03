import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default class CarouselCustom extends Component {
    render() {
        return (
            <div>
              <h2>title</h2>
              <Carousel>
                  <div>
                      <img src="/1.png" alt="image1"/>
                      <p className="legend">Image 1</p>
  
                  </div>
                  <div>
                      <img src="/2.png" alt="image2" />
                      <p className="legend">Image 2</p>
  
                  </div>
                  <div>
                      <img src="/3.png" alt="image3"/>
                      <p className="legend">Image 3</p>
  
                  </div>
                  <div>
                      <img src="/4.png" alt="image4"/>
                      <p className="legend">Image 4</p>
  
                  </div>
                  <div>
                      <img src="/5.png" alt="image5"/>
                      <p className="legend">Image 5</p>
                  </div>
                  <div>
                      <img src="/6.png" alt="image6"/>
                      <p className="legend">Image 6</p>
                  </div>
                  <div>
                      <img src="/7.png" alt="image7"/>
                      <p className="legend">Image 7</p>
                  </div>
                  <div>
                      <img src="/8.png" alt="image8"/>
                      <p className="legend">Image 8</p>
                  </div>
                  <div>
                      <img src="/9.png" alt="image9"/>
                      <p className="legend">Image 9</p>
                  </div>
                  <div>
                      <img src="/10.png" alt="image10"/>
                      <p className="legend">Image 10</p>
                  </div>
                  <div>
                      <img src="/11.png" alt="image11"/>
                      <p className="legend">Image 11</p>
                  </div>

              </Carousel>
            </div>
        );
    }
};