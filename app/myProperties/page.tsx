import { Button } from '@/components/ui/button'
import Image from 'next/image'

const MyProperties = () => {
    const properties = [
        {
            id: 1,
            property_name: 'Property Name',
            image: 'https://images.unsplash.com/photo-1472228283686-42356d789f66?q=80&w=1200&auto=format&fit=crop',
            price: 100,
            description: 'This is a description of the property',
        },
        {
            id: 2,
            property_name: 'Property Name',
            image: 'https://images.unsplash.com/photo-1472228283686-42356d789f66?q=80&w=1200&auto=format&fit=crop',
            price: 100,
            description: 'This is a description of the property',
        },
        {
            id: 3,
            property_name: 'Property Name',
            image: 'https://images.unsplash.com/photo-1472228283686-42356d789f66?q=80&w=1200&auto=format&fit=crop',
            price: 100,
            description: 'This is a description of the property',
        },
        {
            id: 4,
            property_name: 'Property Name',
            image: 'https://images.unsplash.com/photo-1472228283686-42356d789f66?q=80&w=1200&auto=format&fit=crop',
            price: 100,
            description: 'This is a description of the property',
        },
        {
            id: 5,
            property_name: 'Property Name',
            image: 'https://images.unsplash.com/photo-1472228283686-42356d789f66?q=80&w=1200&auto=format&fit=crop',
            price: 100,
            description: 'This is a description of the property',
        },
    ]
  return (
    <div className='mx-auto w-full max-w-6xl px-4 my-9 py-9 sm:px-6 text-black '>
        <h1 className='text-2xl font-bold'>My Properties</h1>
        <div className='grid grid-cols-1 '>
            {properties.map((property) => (
                <div key={property.id} className='border border-zinc-200 rounded-2xl p-4 overflow-hidden shadow-sm transition hover:-translate-y-1 hover:shadow-md w-full'>
                    <div className='flex flex-row gap-2'>
                        <div><Image src={property.image} alt={property.property_name} width={500} height={500} className='rounded-2xl object-cover overflow-hidden'/></div>
                        <div className='flex flex-col gap-2 items-start justify-end'>
                            <h3 className='text-lg font-bold'>{property.property_name}</h3>
                            <p className='text-sm text-zinc-500'>{property.price}</p>
                            <p className='text-sm text-zinc-500'>{property.description}</p>
                            <Button variant="outline" size="sm" className=' hover:bg-red-500 hover:text-white border-red-500'>Delete Property</Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  

)
}

export default MyProperties