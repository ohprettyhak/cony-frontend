export interface Link {
  url: string;
  title: string;
  description: string;
  image: string;
}

export interface Card {
  iconImage?: string;
  title: string;
  contents: string;
  links: Link[];
  cardColor: string;
  cardColorAccent: string;
}
