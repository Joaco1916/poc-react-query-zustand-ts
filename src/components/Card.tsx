import { Repository } from "../hooks/types"
import useFavoritesReposStore from "../store/favoriteRepos";

type CardProps = {
    repository: Repository
    isFavorite: boolean
}

function Card( { repository, isFavorite }: CardProps) {

    const addFavoriteRepo  = useFavoritesReposStore( state => state.addFavoriteRepo );
    const removeFavoriteRepo  = useFavoritesReposStore( state => state.removeFavoriteRepo );

    const toggleFavorite = () => {
        if(isFavorite) {
            removeFavoriteRepo(repository.id)
        } else {
            addFavoriteRepo(repository.id)
        }
    }

    return (
        <div>
            <h3>{repository.name}</h3>
            <p>{repository.language}</p>
            <button 
                onClick={toggleFavorite}
            >
                {
                    isFavorite ? 'Dislike' : 'Like'
                }
            </button>
        </div>
    )
}

export default Card