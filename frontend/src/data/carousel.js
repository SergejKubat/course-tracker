const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 7,
        slidesToSlide: 7
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4,
        partialVisibilityGutter: 30
    },
    laptop: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 3,
        partialVisibilityGutter: 40
    },
    tablet: {
        breakpoint: { max: 768, min: 480 },
        items: 2,
        slidesToSlide: 2,
        partialVisibilityGutter: 45
    },
    mobile: {
        breakpoint: { max: 480, min: 0 },
        items: 1,
        partialVisibilityGutter: 90
    }
};

export { responsive };
