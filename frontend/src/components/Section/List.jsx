import React, { useState } from 'react';

import Collapsible from 'react-collapsible';
import { AiFillPlayCircle } from 'react-icons/ai';
import { BsFillCollectionFill } from 'react-icons/bs';
import { FaLock } from 'react-icons/fa';

const SectionList = ({ sections }) => {
    return (
        <div className="mt-5">
            <div className="course-data">
                <BsFillCollectionFill className="icon" />
                <span className="text">{sections.length} Sections</span>
            </div>
            <div className="course-data">
                <AiFillPlayCircle className="icon" />
                <span className="text">{sections.reduce((acc, section) => acc + section.lections.length, 0)} Lections</span>
            </div>
            {sections.map((section, index) => (
                <Collapsible key={section.id} trigger={section.name} open={index === 0}>
                    {section.lections.map((lection) => (
                        <div key={lection.id} className="course-lection">
                            {lection.public ? <AiFillPlayCircle className="icon" /> : <FaLock className="icon" />}
                            <span className="name">{lection.name}</span>
                        </div>
                    ))}
                </Collapsible>
            ))}
        </div>
    );
};

export default SectionList;
