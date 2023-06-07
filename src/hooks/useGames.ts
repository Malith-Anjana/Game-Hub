import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: [{ platform: Platform }];
  metacritic: number;
} //data type   {id:1, name:'test', background_image:'www.image.com',parent_platforms:[{platform:{id, name:'pc', slug:'pc'}}]}

const useGames = () => useData<Game>('/games') ;

export default useGames;
