import React from 'react';

const Service = (props) => {
    const {icon,title, description} = props.service;
    return (
        <div>
            <h1 className="fs-8 d-flex d-flex justify-content-evenly mr-5 pr-5 text-warning">{icon}</h1>
            <h2 className='text-dark'>{title}</h2>
            <p className='text-dark'>{description}</p>
        </div>
    );
};

export default Service;