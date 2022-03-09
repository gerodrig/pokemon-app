import { FC } from 'react';
import { Grid, Card } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface FavoritePokemonsProps {
    id: number;
}

export const FavoritePokemonCard: FC<FavoritePokemonsProps> = ({ id }) => {

    const router = useRouter();

    const onFavoriteClicked = () => {
        router.push(`/pokemon/${id}`);
    };

    return (
        <Grid xs={6} sm={3} md={2} xl={1} onClick={onFavoriteClicked}>
            <Card hoverable clickable css={{ padding: 10 }}>
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    alt={`Pokemon ${id}`}
                    width={'100%'}
                    height={140}
                />
            </Card>
        </Grid>
    );
};
