"use server"

import { db } from "@/app/lib/prisma";

interface SaveBookingParams{
   barbershopId: string;
   serviceID: string;
   userId: string;
   date: Date;
}

export const saveBooking = async (params: SaveBookingParams) => {
   await db.booking.create({
      data: {
         serviceID: params.serviceID,
         userId: params.userId,
         date: params.date,
         barbershopID: params.barbershopId,
      },
   });

};