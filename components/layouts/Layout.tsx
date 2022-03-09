import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

interface LayoutProps {
    title?: string;
}

const origin = typeof window !== 'undefined' ? window.location.origin : '';

export const Layout: FC<LayoutProps> = ({ children, title }) => {

    return (
        <>
            <Head>
                <title>{title || 'PokemonApp'}</title>
                <meta name="author" content="Gerardo Rodriguez" />
                <meta
                    name="description"
                    content="Information about the pokemon"
                />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />
                <meta
                    property="og:title"
                    content={`Information about ${title}`}
                />
                <meta
                    property="og:description"
                    content={`This is the page about ${title}`}
                />
                <meta
                    property="og:image"
                    content={`${origin}/img/banner.png`}
                />
            </Head>

            <Navbar />
            <main
                style={{
                    padding: '0x 20px',
                }}>
                {children}
            </main>
        </>
    );
};
