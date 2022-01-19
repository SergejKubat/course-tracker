import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Container } from 'react-bootstrap';

import CourseItemList from 'components/Course/List';
import AuthorItemList from 'components/Author/List';
import Spinner from 'components/Spinner';

import Logo from 'assets/img/logo.png';

const HomePage = () => {
    const [popularCourses, setPopularCourses] = useState();
    const [latestCourses, setLatestCourses] = useState();
    const [popularAuthors, setPopularAuthors] = useState();

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/courses/popular')
            .then((response) => {
                setPopularCourses(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        axios
            .get('http://localhost:5000/api/courses/latest')
            .then((response) => {
                setLatestCourses(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        axios
            .get('http://localhost:5000/api/users?roleId=2')
            .then((response) => {
                setPopularAuthors(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <main style={{ marginTop: '10vh' }}>
            <Container>
                <h1>Welcome! Learn from our courses</h1>
                <p className="mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut alias necessitatibus quibusdam vitae eligendi excepturi
                    provident non consequatur amet laudantium officia, cumque ullam ad iusto nulla corporis! Eligendi, tenetur saepe.
                </p>
                <img src={Logo} alt="Logo" style={{ display: 'block', margin: '1rem auto' }} />
                {popularCourses ? (
                    <CourseItemList
                        heading="Popular Courses"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, rem?"
                        courses={popularCourses}
                    />
                ) : (
                    <Spinner />
                )}
                {latestCourses ? (
                    <CourseItemList
                        heading="Latest Courses"
                        description="Quo inventore tenetur autem possimus reiciendis quibusdam ipsa porro dignissimos maxime quod corporis."
                        courses={latestCourses}
                    />
                ) : (
                    <Spinner />
                )}
                {popularAuthors ? (
                    <AuthorItemList
                        heading="Popular Authors"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquam ratione laborum vitae id provident?"
                        authors={popularAuthors}
                    />
                ) : (
                    <Spinner />
                )}
            </Container>
        </main>
    );
};

export default HomePage;
