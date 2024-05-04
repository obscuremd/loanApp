import { Button } from '@material-tailwind/react'
import React from 'react'

const SemiFooter = ({setActive}) => {
  return (
    <div className='flex flex-col items-center text-center py-[4%] gap-6'>
        <p className='text-3xl md:text-6xl font-bold'>Don't let financial constraints hold you back!</p>
        <p className='md:text-2xl'>Apply for an installment loan now and get the cash you need to stay on top of your finances.</p>

        <Button onClick={()=>setActive(1)} variant="gradient" color="blue" className="flex items-center gap-3 md:text-xl">
            Apply Now
        </Button>
    </div>
  )
}

export default SemiFooter