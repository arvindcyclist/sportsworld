import React from 'react'
import RunNav from '../NavLinkComponent/RunNav'
import {Carousel} from 'react-bootstrap'
import HimalyanRun from '../assets/run_images/himalyanrun.jpg'
import NatureRun from '../assets/run_images/naturerun.jpg'
import StepRun from '../assets/run_images/steprun.jpg'


function Running(){
    return(
        <div>
        <h2>
            RUNNING
        </h2>
        <RunNav></RunNav>
        <div>
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={HimalyanRun}
                        alt="Himalyan Run"
                    />
                    <Carousel.Caption>
                        <p>Running in himalyan</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={NatureRun}
                        alt="Nature run"
                    />

                    <Carousel.Caption>
                        <p>Running in nature's beauty</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={StepRun}
                        alt="step run"
                    />

                    <Carousel.Caption>
                        <p>step up</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            </div>
        </div>
    )
}

export default Running