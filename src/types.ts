type ResInfo = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

type LocationResponse = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Array<string>;
  url: string;
  created: string;
};

type Character = {
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
  episode: Array<string>;
  url: string;
  created: string;
};

type CharactersResponse = Array<Character>;

type APIResponse = {
  info: ResInfo;
  results: CharactersResponse;
};
