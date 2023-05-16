import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import FavoritesClient from "./FavoritesClient";
import getFavoriteListings from "../actions/getFavoriteListings";


const Favoriteage = async() => {

    const listings = await getFavoriteListings();
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
          <ClientOnly>
            <EmptyState title="Unauthorized" subtitle="Please login" />
          </ClientOnly>
        );
      }

      if (listings.length === 0) {
        return (
          <ClientOnly>
            <EmptyState
              title="No Favorite found"
              subtitle="Look like you have no favorite on your properties."
            />
          </ClientOnly>
        );
      }


  return (
    <ClientOnly>
        <FavoritesClient
          listings={listings}
          currentUser={currentUser}
        />
    </ClientOnly>
  )
}

export default Favoriteage