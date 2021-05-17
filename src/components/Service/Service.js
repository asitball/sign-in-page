import React from 'react';

const Service = (props) => {
    const {icon,title, description} = props.service;
    return (
        <div>
            <h1 className="fs-8 d-flex d-flex justify-content-evenly mr-5 pr-5">{icon}</h1>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Service;