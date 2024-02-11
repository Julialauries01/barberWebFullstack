'use client';

import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Service } from "@prisma/client";
import { signIn } from "next-auth/react";
import Image from "next/image";

interface ServiceItemProps {
   service: Service;
   isAuthenticated: boolean;

}

const ServiceItem = ({service, isAuthenticated}: ServiceItemProps) => {

   const handleBookingClick = () => {
      if (!isAuthenticated) {

         console.log('clicou aqui')
         return signIn('google');
      }
   };

   return (
       <Card>
      <CardContent className="p-3">
<div className="flex gap-4 items-center w-full">
   <div className="relative h-[110px] w-[110px]">
   <Image className="rounded-lg" src={service.imageUrl} fill style={{objectFit: 'contain'}} alt={service.name}/>
   </div>

<div className="flex flex-col w-full">
   <h2 className="font-bold ">{service.name}</h2>
   <p className="text-sm">{service.description}</p>

   <div className="flex items-center justify-between mt-3"> 
   <p className="text-primary font-bold">
      {Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
   }).format(Number(service.price))}</p>

   <Button variant="secondary" onClick={handleBookingClick}>
      Reservar
   </Button>
   
   </div>
</div>
</div>
      </CardContent>
   </Card>
      
    );
}
 
export default ServiceItem;