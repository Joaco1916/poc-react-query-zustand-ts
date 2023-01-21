import { create } from "zustand";
import { persist } from 'zustand/middleware' 

type FavoriteReposState = {
    favoriteReposIds: number[]
    addFavoriteRepo: (id: number) => void
    removeFavoriteRepo: (id: number) => void
};

//El persist es para que se guarde en el local storage
const useFavoritesReposStore = create(persist<FavoriteReposState>(
    (set) => ({
        favoriteReposIds: [],
        addFavoriteRepo: (id: number) => {
            set((state) => ({
                favoriteReposIds: [...state.favoriteReposIds, id]
            }));
        },
        removeFavoriteRepo: (id: number) => {
            set((state) => ({
                favoriteReposIds: state.favoriteReposIds.filter((repoId) => repoId !== id)
            }));
        }
    }), {
        name: 'favorite-repos',
    }
));

/*
const useFavoritesReposStore = create<FavoriteReposState>(
    (set) => ({
        favoriteReposIds: [],
        addFavoriteRepo: (id: number) => {
            set((state) => ({
                favoriteReposIds: [...state.favoriteReposIds, id]
            }));
        },
        removeFavoriteRepo: (id: number) => {
            set((state) => ({
                favoriteReposIds: state.favoriteReposIds.filter((repoId) => repoId !== id)
            }));
        }
    })
);
*/

export default useFavoritesReposStore;