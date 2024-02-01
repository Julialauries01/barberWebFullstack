import { db } from "@/app/lib/prisma";
import BarbershopInfo from "./_components/barbershop-info";

interface BarbershopDetailsPageProps{
   params: {
      id?: string
   }
}

const BarbershopDetailPage = async ({params}: BarbershopDetailsPageProps) => {
  
  if(!params.id){
return null;
  }

   const barbershop = await db.barbershop.findUnique({
   where: {
      id: params.id,
   },
  });

  if (!barbershop){
   return null;
  }
  
   return <BarbershopInfo  barbershop={barbershop}/>;

}
 
export default BarbershopDetailPage;