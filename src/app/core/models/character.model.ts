export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
    isFavorite?: boolean;
    
  }
  
  export interface CharacterDetails {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: { name: string };
    location: { name: string };
    image: string;
    url: string;
    created: string;
  }
  