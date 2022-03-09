import { NextPage, GetStaticProps } from 'next';

import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonList } from '../components/pokemon';
import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface IndexPageProps {
    pokemons: SmallPokemon[];
}

//Title list of pokemons
const HomePage: NextPage<IndexPageProps> = ({ pokemons }) => {
    return (
        <Layout title={'List of pokemons'}>
            <PokemonList pokemons={pokemons} />
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { data } = await pokeApi.get<PokemonListResponse>(
        '/pokemon?limit=151'
    );

    //create new pokemon array that includes url and id
    const pokemons: SmallPokemon[] = data.results.map(
        (pokemon: SmallPokemon, index) => {
            return {
                ...pokemon,
                id: index + 1,
                img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                    index + 1
                }.svg`,
            };
        }
    );

    return {
        props: {
            pokemons,
        },
    };
};

export default HomePage;
