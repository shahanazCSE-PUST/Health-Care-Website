import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner1.jpg';
import banner2 from '../../../images/banner2.jpg';
import banner3 from '../../../images/banner3.jpg';
import banner4 from '../../../images/banner4.jpg';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>A well equiped cutting edge</h3>
                        <p>Happy to see you healthy</p>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>High quality and Appropriate and Accessable Medical care</h3>
                        <p>Happy to see you healthy</p>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>The art of Our Medical service to amuses the patient.</h3>
                        <p>Happy to see you healthy</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        <h3>the trusted and friendly medical professionals.</h3>
                        <p>Happy to see you healthy</p>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;