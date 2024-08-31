import { benefits } from '@/mock'
import React from 'react'
import BenefitItem from './BenefitItem'

export default function BenefitsList() {
    return (
        <div className='benefits'>
            {benefits.map((benefit, index) => <BenefitItem key={index} {...benefit} />)}
        </div>
    )
}