'use client';

import React from 'react';
import { PageProvider } from '@/context/PageContext';
import NavigationBar from '@/components/NavigationBar';
import PageContainer from '@/components/PageContainer';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export default function MainApp() {
    return (
        <PageProvider>
            <div
                className={poppins.className}
                style={{
                    minHeight: '100vh',
                    width: '100vw',
                    margin: 0,
                    padding: 0,
                    overflowX: 'hidden',
                    backgroundImage: 'url("/placeholders/Background.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
            >
                <NavigationBar />
                <PageContainer />
            </div>
        </PageProvider>
    );
}