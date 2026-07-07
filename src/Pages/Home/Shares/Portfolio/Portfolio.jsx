import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { IoIosArrowRoundForward } from 'react-icons/io'

const Portfolio = () => {
  return (
    <div className='bg-[#9A918C] px-4 py-12'>
      <div className='flex items-center'>
          <h1 className='text-2xl montenegrin'>Projects</h1>
          <IoIosArrowRoundForward style={{ height: '30px', width: '100px' }} />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 mt-3'>
          <Card size="sm" className="mx-auto w-full max-w-sm">
            <img src="https://i.ibb.co.com/WvyF2fsF/2.png" alt="" />
          </Card>

          {/* 2nd  */}

          <Card size="sm" className="mx-auto w-full max-w-sm">
            <img src="https://i.ibb.co.com/bjCqgH1v/3.png" alt="" />
          </Card>

          {/* 3rd  */}

          <Card size="sm" className="mx-auto w-full max-w-sm">
            <img src="https://i.ibb.co.com/zWs7xTRv/1.png" alt="" />
          </Card>

        </div>
    </div>
  )
}

export default Portfolio