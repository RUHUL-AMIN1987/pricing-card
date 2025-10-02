import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {
    const {name, price, description, features} = pricing;
    return (
        <div className='border bg-blue-300 rounded-2xl p-10 flex flex-col'>
            <div>
                {/* Card Heading  */}
                <h1 className='text-5xl'>{name}</h1>
                <h4 className='text-3xl'>{price}</h4>
            </div>
            <div className='bg-fuchsia-400 rounded-2xl mt-10 p-5 text-white flex-1'>
                <p>{description}</p>
                <div className='mt-4'>
                    {features.map((feature, index) => (<PricingFeatures 
                        key={index} 
                        feature={feature}/> ))}
                </div>
            </div>
            <button className="btn w-full rounded-2xl mt-2">Subscribe Now</button>
        </div>
    );
};

export default PricingCard;