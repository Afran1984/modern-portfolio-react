import React,{useState, useEffect } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import axios from 'axios';

const Service = () => {
    const [service, setService] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('service.json')
        .then(res => {
            const data = res.data;
            setService(data);
            setLoading(false);
        })
        .catch(err => {
            console.error('error fetching service data:', err);
            setLoading(false);
        })
    },[]);

    console.log(service);
  return (
    <div className='bg-gray-300 px-4 py-12 montenegrin'>
        <div className='flex items-center mt-10'>
            <h1 className='text-2xl montenegrin'>Service</h1>
            <IoIosArrowRoundForward style={{ height: '30px', width: '100px' }} />
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 mt-3 mt-10'>
        { service.map((items, index) => 
            <Card size="sm" className="mx-auto w-full max-w-sm montenegrin">
                <img src={items.icon} alt={items.title} className="h-40 w-40 object-cover" />
                <CardHeader  className='text-6xl'>
                    <CardTitle>{items.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <a className='text-blue-600' href="">Learn More..</a>
                </CardContent>
            </Card>
        )}
        </div>
    </div>
  )
}

export default Service