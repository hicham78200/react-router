import React from 'react'
import Header from '../layouts/Header'

export function NewArrivals() {
    return <>
        <Header
            title={'Nouvelles collections'}
            subtitle={'Toutes nos collections'}
        />
        <div className="container py-3">
            <h1 className='text-center'>Listes de toutes nos collections</h1>
        </div>
    </>
}