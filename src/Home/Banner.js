import React from 'react';
import chair from '../assets/images/chair.png';
import Button from '../Shared/Button';
import bg from '../assets/images/bg.png';

const Banner = () => {
    return (
        <div style={{
            background: `url(${bg})`,
            position: 'center'
        }} class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <Button>get started</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;