import {Listing, Reservation, User, Product} from "@prisma/client";

export type SafeListing= Omit<
Listing,
"createAt"
>&{
   createAt:string; 
}

export type SafeProduct= Omit<
Product,
"createdAt"
>&{
   createdAt:string; 
}

export type SafeReservation= Omit<
Reservation,
"createAt"|"startDate"|"endDate"|"listing"
>&{
    createAt:string;
    startDate:string;
    endDate:string;
    listing:SafeListing;

}

export type SafeUser= Omit<
User,
"createAt"|"updateAt"|"emailVerified"
>&{
    createAt:string;
    updateAt:string;
    emailVerified:string|null;

}