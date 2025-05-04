import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-4'>
            <button className='btn btn-secondary px-6 rounded-none'>Latest</button>
            <Marquee pauseOnHover={true}>
                <p className=''>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur consequatur non repellat earum quisquam asperiore
                </p>
            </Marquee>
        </div>
    );
};

export default LatestNews;