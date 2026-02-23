import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
const MyReservation = () => {
    const reservations = [
        {
            id: 1,
            Host_name: 'John Doe',
            property_name: 'Property Name',
            image: 'https://images.unsplash.com/photo-1472228283686-42356d789f66?q=80&w=1200&auto=format&fit=crop',
            date: '2026-01-01',
            price: 100,
            description: 'This is a description of the reservation for the property',
        },
        {
            id: 2,
            name: 'Jane Doe',
            property_name: 'Property Name',
            image: 'https://images.unsplash.com/photo-1472228283686-42356d789f66?q=80&w=1200&auto=format&fit=crop',
            date: '2026-01-02',
            price: 100,
            description: 'This is a description of the reservation for the property',
        },
        {
            id: 3,
            Host_name: 'Jim Doe',
            property_name: 'Property Name',
            image: 'https://images.unsplash.com/photo-1472228283686-42356d789f66?q=80&w=1200&auto=format&fit=crop',
            date: '2026-01-03',
            price: 100,
            description: 'This is a description of the reservation for the property',
        },
        {
            id: 4,
            Host_name: 'Jill Doe',
            property_name: 'Property Name',
            image: 'https://images.unsplash.com/photo-1472228283686-42356d789f66?q=80&w=1200&auto=format&fit=crop',
            date: '2026-01-04',
            price: 100,
            description: 'This is a description of the reservation for the property',
        },
    ]
    
  return (
    <div className='mx-auto w-full max-w-6xl px-4 my-9 py-9 sm:px-6 text-black '>
        <h1 className='text-2xl font-bold'>My Reservations</h1>
        <div >
            <h2 className='text-xl font-bold'>These are your upcoming Reservations</h2>
            <div className='grid grid-cols-1 '>
                    {reservations.map((reservation) => (
                        <div key={reservation.id} className='border border-zinc-200 rounded-2xl p-4 overflow-hidden shadow-sm transition hover:-translate-y-1 hover:shadow-md w-full'>
                             <div className='flex flex-row gap-2'>
                                <div><Link href={`/properties/${reservation.id}`}><Image src={reservation.image} alt={reservation.property_name} width={500} height={500} className='rounded-2xl object-cover overflow-hidden'/></Link></div>
                                <div className='flex flex-col gap-2 items-start justify-end'>
                                <h3 className='text-lg font-bold'>{reservation.property_name}</h3>
                                <p className='text-sm text-zinc-500'>{reservation.Host_name}</p>
                                <p className='text-sm text-zinc-500'>{reservation.date}</p>
                                <p className='text-sm text-zinc-500'>{reservation.price}</p>
                                <p className='text-sm text-zinc-500'>{reservation.description}</p>
                                <Button variant="outline" size="sm" className=' hover:bg-red-500 hover:text-white border-red-500'>Cancel Reservation</Button>
                            </div>
                             </div>
                           
                        </div>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default MyReservation