import React, { Component } from 'react'

import RoadNav from '../component/RoadNav'
import { Carousel } from 'react-bootstrap'
import RoadSprint from '../assets/road_images/roadsprint.jpg'
import RoadParked from '../assets/road_images/roadparked.jpg'
import BreakAway from '../assets/road_images/breakaway.jpg'



function Road() {

    return (
        <div>
            <h2>
                ROAD
        </h2>
            <RoadNav></RoadNav>

            <div>
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={RoadSprint}
                        alt="Sprinting"
                    />
                    <Carousel.Caption>
                        <p>Sonu is Sprinting</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={RoadParked}
                        alt="Parked bike"
                    />

                    <Carousel.Caption>
                        <p>Classical parked bike</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={BreakAway}
                        alt="Break away"
                    />

                    <Carousel.Caption>
                        <p>Bawa is on breakaway.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            </div>
            
        </div>

    )
}

export default Road