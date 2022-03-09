import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';
import { useEffect, useState } from 'react';
import localFavorites from '../../utils/localFavorites';
import { FavoritePokemons } from '../../components/pokemon';

const FavoritesPage = () => {
    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemons(localFavorites.getFavorites());
    }, []);

    return (
        <Layout title="Favorites - Pokemons">
            {favoritePokemons.length === 0 ? (
                <NoFavorites />
            ) : (
                <FavoritePokemons pokemons={favoritePokemons} />
            )}
        </Layout>
    );
};

export default FavoritesPage;
