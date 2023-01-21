import Card from "./components/Card";
import { useFetchRepositories } from "./hooks/useRepos";
import useFavoritesReposStore from "./store/favoriteRepos";

function App() {
  const { data, isLoading, error } = useFetchRepositories('joaco1916');
  const { favoriteReposIds } = useFavoritesReposStore();

  if(isLoading) return <div>Loading...</div>

  return (
    <div>
      <h1>POC - React-query & Zustand - TS</h1>
      <div>
        {data?.map((repo) => (
          <Card 
            repository={repo} 
            key={repo.id}
            isFavorite={favoriteReposIds.includes(repo.id)} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;