import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import CourseItem from './Item';

import { responsive } from 'data/carousel';

const CourseItemList = ({ heading, description }) => {
    return (
        <section className="section">
            <h2 className="text-center">{heading}</h2>
            <p className="mt-4 mb-5 text-center">{description}</p>
            <Carousel
                responsive={responsive}
                partialVisible={true}
                removeArrowOnDeviceType={['tablet', 'mobile']}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-right">
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
            </Carousel>
        </section>
    );
};

export default CourseItemList;
