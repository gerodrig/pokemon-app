import { Container, Image, Text } from "@nextui-org/react"

export const NoFavorites = () => {

    const randomPokemon = ():number => {
        return Math.floor(Math.random() * 649) + 1;
    }

    return (
        <Container
        css={{
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100vh - 100px)',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
        }}>
        <Text h3 css={{ textAlign: 'center' }}>
            {`We don't have any Favorites  :,(`}
        </Text>
        <Image
            alt="no Image"
            css={{ opacity: '0.3' }}
            height={250}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${randomPokemon()}.svg`}
            width={250}
        />
    </Container>
    )
}
