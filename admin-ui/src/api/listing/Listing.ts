import { JsonValue } from "type-fest";
import { User } from "../user/User";
import { Trip } from "../trip/Trip";
import { Wishlist } from "../wishlist/Wishlist";

export type Listing = {
  createdAt: Date;
  description: string;
  id: string;
  locationData: JsonValue;
  locationType: string;
  mapData: JsonValue;
  photos?: User;
  placeAmeneties: JsonValue;
  placeSpace: JsonValue;
  placeType: string;
  price: number;
  title: string;
  trips?: Array<Trip>;
  updatedAt: Date;
  wishlists?: Array<Wishlist>;
};