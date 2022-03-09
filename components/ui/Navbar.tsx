import { Spacer, Text, Link } from '@nextui-org/react';
import Image from 'next/image';
import NextLink from 'next/link';

export const Navbar = () => {
    const yellow = '#FFDE00';
    const red = '#FF0000';

    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'start',
                padding: '0x 20px',
                backgroundColor: red,
            }}>
            <NextLink href="/" passHref>
                <Link>
                    <Image
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/572.png"
                        alt="app icon"
                        width={70}
                        height={70}
                    />
                </Link>
            </NextLink>

            <NextLink href="/" passHref>
                <Link>
                    <Text color={yellow} h2>
                        P
                    </Text>
                    <Text color={yellow} h3>
                        okémon
                    </Text>
                </Link>
            </NextLink>
            <Spacer css={{ flex: 1 }} />

            <NextLink href="/favorites" passHref>
                <Link>
                    <Text color="white" css={{ paddingRight: '15px' }}>
                        Favorites
                    </Text>
                </Link>
            </NextLink>
        </div>
    );
};
