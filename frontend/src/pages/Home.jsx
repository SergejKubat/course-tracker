import React from 'react';

import { Container } from 'react-bootstrap';

import CourseItemList from 'components/Course/List';
import AuthorItemList from 'components/Author/List';

import Logo from 'assets/img/logo.png';

const HomePage = () => {
    return (
        <main style={{ marginTop: '10vh' }}>
            <Container>
                <h1>Welcome! Learn from our courses</h1>
                <p className="mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut alias necessitatibus quibusdam vitae eligendi excepturi
                    provident non consequatur amet laudantium officia, cumque ullam ad iusto nulla corporis! Eligendi, tenetur saepe.
                </p>
                <img src={Logo} alt="Logo" style={{ display: 'block', margin: '1rem auto' }} />
                <CourseItemList
                    heading="Popular Courses"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, rem?"
                />
                <CourseItemList
                    heading="Latest Courses"
                    description="Quo inventore tenetur autem possimus reiciendis quibusdam ipsa porro dignissimos maxime quod corporis."
                />
                <AuthorItemList
                    heading="Popular Authors"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquam ratione laborum vitae id provident?"
                />
            </Container>
        </main>
    );
};

export default HomePage;
