import React from 'react';

const Welcome = () => {
    const welcome = 'https://i.ibb.co/zhzW4Cw/welcame.jpg';

    return (
        <div className='text-center'>
        <img width='100%' className='img-fluid' src={welcome} alt="" />
    </div>
    );
};

export default Welcome;