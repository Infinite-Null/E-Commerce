import React from 'react';
import { Steps } from 'antd';
const MultiStep = ({step}) => (
    <>
        <Steps
            style={{
                margin:"20px",
            }}
            progressDot
            current={step}
            items={[
                {
                    title: 'Your Cart',
                    description: 'Details of items in your cart.',
                },
                {
                    title: 'Address Details',
                    description: 'Fill the shipment address.',
                },
                {
                    title: 'Payment Info',
                    description: 'Fill the payment info.',
                },
            ]}
        />
    </>
);
export default MultiStep;