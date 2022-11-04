import React from 'react';

export default function SingleData({ planet, setPlanet }) {
    const { name, orderFromSun, surfaceTemperatureC } = planet;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold text-secondary">{name}</h2>
                <p><small>Order FromSun: {orderFromSun}</small></p>
                <p><small>Surface TemperatureC: {surfaceTemperatureC.min}</small></p>
                <p><small>Surface TemperatureC: {surfaceTemperatureC.max}</small></p>
                <p><small>Surface TemperatureC: {surfaceTemperatureC.mean}</small></p>
            </div>
        </div>
    )
}



