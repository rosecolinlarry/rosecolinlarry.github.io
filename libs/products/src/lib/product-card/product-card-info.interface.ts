export interface ProductCardInfo {
  title: string; // Title of the product
  imageSrc: string; // Product image (required) // TODO Make placeholder and/or spinner
  averageStars: number; // Average stars on the product // TODO Make service to calculate this
  totalReviews: number; // Total number of reviewers
  sellerName: string; // Name of the store
  listPrice: number; // Price it is selling for
  verified?: boolean; // If the store is verified
  freeShipping?: boolean; // If item has free shipping
  onSale?: boolean; // Is the item on sale?
  sellingPrice?: number; // Price if on sale
  remainingSaleHours?: number; // Remaining time in hours // TODO make datetime pipe
  isFavorite?: boolean; // If the user has already favorited the item
  isSponsored?: boolean; // If product is sponsored
  isTopPick?: boolean; // If product should get featued/top pick
}
