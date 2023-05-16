import prisma from "@/app/libs/prismadb";
import { useState } from "react";

// export interface IListingsParams{
//     userId?:string;
//     guestCount?:number;
//     roomCount?:number;
//     bathroomCount?:number;
//     startDate?:string;
//     endDate?:string;
//     locationValue?:string;
//     category?:string;
// }

const PRODUCTOS=[
    {
    id :"1",
  title:"Zapatos",
  description :"Zapatos de corredor",
  imageSrc: ["product1.jpg","product2.jpg"],
  createAt:"23/23/2300",
  category :"Ropa",
  isService: false,
  price:23,
  },
  {
    id :"2",
  title:"Zapatos",
  description :"Zapatos de corredor",
  imageSrc:  ["product2.jpg","product3.jpg"],
  createAt:"23/23/2300",
  category :"Ropa",
  isService: false,
  price:23,
  },{
    id :"3",
  title:"Zapatos",
  description :"Zapatos de corredor",
  imageSrc:  ["product4.jpg"],
  createAt:"23/23/2300",
  category :"Ropa",
  isService: false,
  price:23,
  },{
    id :"4",
  title:"Zapatos",
  description :"Zapatos de corredor",
  imageSrc:  ["product5.jpg","product6.jpg"],
  createAt:"23/23/2300",
  category :"Ropa",
  isService: false,
  price:23,
  },{
    id :"5",
  title:"Zapatos",
  description :"Zapatos de corredor",
  imageSrc:  ["product7.jpg"],
  createAt:"23/23/2300",
  category :"Ropa",
  isService: false,
  price:23,
  },{
    id :"6",
  title:"Zapatos",
  description :"Zapatos de corredor",
  imageSrc: ["product8.jpg"],
  createAt:"23/23/2300",
  category :"Ropa",
  isService: false,
  price:23,
  },{
    id :"7",
  title:"Zapatos",
  description :"Zapatos de corredor",
  imageSrc: ["product9.jpg"],
  createAt:"23/23/2300",
  category :"Ropa",
  isService: false,
  price:23,
  },{
    id :"8",
  title:"Zapatos",
  description :"Zapatos de corredor",
  imageSrc:["product7.jpg","product5.jpg"],
  createAt:"23/23/2300",
  category :"Ropa",
  isService: false,
  price:23,
  },{
    id :"9",
  title:"Producto 9",
  description :"Zapatos de corredor",
  imageSrc: ["product3.jpg","product5.jpg"],
  createAt:"23/23/2300",
  category :"Ropa",
  isService: false,
  price:23,
  },{
    id :"10",
  title:"Producto 10",
  description :"Zapatos de corredor",
  imageSrc: ["product6.jpg","product2.jpg"],
  createAt:"23/23/2300",
  category :"Ropa",
  isService: false,
  price:23,
  },
  ];

export default async function getProducts(
    // params:IListingsParams
){
    try {
        // const {userId,guestCount,roomCount,bathroomCount,startDate,endDate,
        //     locationValue,category} = params;

        // let query:any ={};

        // if(userId){
        //     query.userId=userId;
        // }

        // if(category){
        //     query.category=category;
        // }

        // if(roomCount){
        //     query.roomCount={
        //         gte: +roomCount
        //     };
        // }

        // if(guestCount){
        //     query.guestCount={
        //         gte: +guestCount
        //     };
        // }

        // if(bathroomCount){
        //     query.bathroomCount={
        //         gte: +bathroomCount
        //     };
        // }

        // if(locationValue){
        //     query.locationValue=locationValue;
        // }

        // if(startDate && endDate){
        //     query.NOT={
        //         reservations:{
        //             some:{
        //                 OR:[
        //                     {
        //                     endDate:{gte:startDate},
        //                     startDate:{lte:startDate},
        //                 },    {
        //                     startDate:{lte:endDate},
        //                     endDate:{gte:endDate},
        //                 }
        //             ]
        //             }
        //         }
        //     }
        // }



        // const listings = await prisma.listing.findMany({
        //     where:query,
        //     orderBy:{
        //         createAt:'desc',
        //     }
        // });

        // const safeListings = listings.map((listing)=>({
        //     ...listing,
        //     createAt: listing.createAt.toISOString(),
        // }))

        // return safeListings;
        // const [products, setProducts] = useState(PRODUCTOS);
        return PRODUCTOS;
    } catch (error:any) {
        throw new Error("error al conectar con la base de datos");
    }
}