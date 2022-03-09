import { FC } from 'react';
import { Grid } from '@nextui-org/react';
import { FavoritePokemonCard } from '.';

interface FavoritePokemonsProps {
    pokemons: number[];
}

export const FavoritePokemons: FC<FavoritePokemonsProps> = ({pokemons}) => {
    return (
        <Grid.Container gap={2} direction="row" justify="flex-start">
            {pokemons.map((id: number) => (
                <FavoritePokemonCard key={id} id={id} />
            ))}
        </Grid.Container>
    );
};
