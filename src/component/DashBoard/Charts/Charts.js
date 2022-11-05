import React from 'react'
import Linechart from './Linechart';
import Barchart from "./Barchart"
import Piecharts from './Piecharts';
import Composed from './Composed';


export default function Charts() {
    return (
        <div className='grid grid-cols-2 gap-7'>
            <div> <Linechart /></div>
            <div> <Barchart /></div>
            <div> <Piecharts /></div>
            <div> <Composed /></div>
        </div>
    )
}

