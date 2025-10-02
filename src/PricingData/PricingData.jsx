import React, { use } from 'react';
import PricingCard from '../component/PricingCard/PricingCard';
import DaisyPricingCard from '../component/DaisyPricingCard/DaisyPricingCard';

const PricingData = ({pricingPromise}) => {
    const pricingOption = use(pricingPromise);
    console.log(pricingOption);
    return (
        <div>
            <h2 className='px-10 mx-auto items-center my-5 text-3xl font-bold'>Get Your Member Shap Plan</h2>
            <div className='grid lg:grid-cols-3 gap-10 md:grid-cols-2'>
                {/* {
                    pricingOption.map(pricing => <PricingCard key={pricing.id} pricing = {pricing}></PricingCard>)
                } */}
                {
                    pricingOption.map(pricing => <DaisyPricingCard 
                        key={pricing.id}
                        pricing = {pricing}></DaisyPricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingData;