// Represents a minimal representation of a resource.
// The detailed representation of the referenced resource
// can be retrieved by making a request to the referenced URL.
export interface ApiReference {
  index: string; // Resource index for shorthand searching.
  name: string; // Name of the referenced resource.
  url: string; // URL of the referenced resource.
}
