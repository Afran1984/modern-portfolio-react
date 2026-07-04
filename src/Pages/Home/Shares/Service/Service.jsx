import React from 'react'
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

const Service = () => {
  return (
    <div className='bg-gray-300 px-4 py-12'>
        <div className='flex items-center'>
            <h1 className='text-2xl'>Service</h1>
            <IoIosArrowRoundForward style={{ height: '30px', width: '100px' }} />
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 mt-3'>
        {/* 1st  */}
            <Card size="sm" className="mx-auto w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Small Card</CardTitle>
                    <CardDescription>
                    This card uses the small size variant.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>
                    The card component supports a size prop that can be set to
                    &quot;sm&quot; for a more compact appearance.
                    </p>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                    Action
                    </Button>
                </CardFooter>
            </Card>

            {/* 1st  */}
            <Card size="sm" className="mx-auto w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Small Card</CardTitle>
                    <CardDescription>
                    This card uses the small size variant.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>
                    The card component supports a size prop that can be set to
                    &quot;sm&quot; for a more compact appearance.
                    </p>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                    Action
                    </Button>
                </CardFooter>
            </Card>

            {/* 2nd  */}
            <Card size="sm" className="mx-auto w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Small Card</CardTitle>
                    <CardDescription>
                    This card uses the small size variant.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>
                    The card component supports a size prop that can be set to
                    &quot;sm&quot; for a more compact appearance.
                    </p>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                    Action
                    </Button>
                </CardFooter>
            </Card>

            {/* 3rd  */}
            <Card size="sm" className="mx-auto w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Small Card</CardTitle>
                    <CardDescription>
                    This card uses the small size variant.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>
                    The card component supports a size prop that can be set to
                    &quot;sm&quot; for a more compact appearance.
                    </p>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                    Action
                    </Button>
                </CardFooter>
            </Card>
        </div>
    </div>
  )
}

export default Service