// pages/index.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import styles from '../styles/Home.module.css';
// Import Poppins font
import { Poppins } from 'next/font/google';

// Initialize the Poppins font with specific weights
const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const Home: NextPage = () => {
    const contentRef = useRef<HTMLDivElement>(null);

    // Function to handle arrow click and smooth scroll to content
    const handleArrowClick = () => {
        if (contentRef.current) {
            contentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Add the fade-in effect when the component mounts
    useEffect(() => {
        const logoElement = document.querySelector(`.${styles.logo}`);
        if (logoElement) {
            logoElement.classList.add(styles.fadeIn);
        }
        // Title and arrow animations are handled directly in CSS
    }, []);

    return (
        <div className={`${styles.container} ${poppins.className}`}>
            <Head>
                <title>Random Text Here</title>
                <meta name="description" content="A simple webpage with animated logo and arrow" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            </Head>

            {/* Navigation bar */}
            <nav className={styles.nav}>
                <ul>
                    <li className={styles.activeLink}><a href="/">HOME</a></li>
                    <li><a href="/tournaments">TOURNAMENTS</a></li>
                    <li><a href="/staff">STAFF</a></li>
                </ul>
            </nav>

            {/* Main content section with logo, text, and arrow */}
            <main className={styles.main}>
                {/* Logo container with actual image */}
                <div className={styles.logo}>
                    <Image
                        src="/placeholders/soraalia.png"
                        alt="Soralia Logo"
                        width={500}
                        height={500}
                        priority
                        className={styles.responsiveLogo}
                    />
                </div>

                {/* Random text */}
                <h1 className={styles.title}>Random Text Here</h1>

                {/* Down arrow with continuous animation */}
                <div className={styles.arrow} onClick={handleArrowClick}>▼</div>
            </main>

            {/* Lorem ipsum content section */}
            <section ref={contentRef} className={styles.content}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget dolor quis. Suspendisse sit amet euismod quam. Donec venenatis
                    eiusmod fermentum. Duis incididunt, consequat leo, nec dignissim tortor vehicula sed. Sed et cliquet massa. Aenean finibus aliquyam.
                    eros, viverra tincidunt purus semper a. Vivamus scelerisque ipsum eu augue viverra molestie. Etiam nec ultrices sem. Donec eget turpis
                    faucibus mauris auctor interdum nec at dolor. Duis posuere vel magna ut rutrum. Proin dapibus dui vitae nibh molestie ac fringilla
                    dolor molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc ut mollis mi. Duis ac dui
                    sed augue pulvinar aliquet ac vel eros. Pellentesque felis ligula, placerat et elit amet, consequat maximus ante. Nam vehicula
                    vulputate eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget dolor quis. Suspendisse sit amet euismod quam.
                    Donec venenatis eiusmod fermentum. Duis tincidunt, consequat leo, nec dignissim tortor vehicula sed. Sed et cliquet massa. Aenean
                    finibus aliquam eros, viverra tincidunt purus semper a. Vivamus scelerisque ipsum eu augue viverra molestie. Etiam nec ultrices sem.
                    Donec eget turpis faucibus mauris auctor interdum nec at dolor. Duis posuere vel magna ut rutrum. Proin dapibus dui vitae nibh
                    molestie ac fringilla dolor molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc
                    ut mattis mi. Duis ac dui sed augue pulvinar aliquet ac vel eros. Pellentesque felis ligula, placerat et elit amet, consequat maximus
                    amet. Nam vehicula vulputate eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget dolor quis. Suspendisse sit
                    amet euismod quam. Donec venenatis eiusmod fermentum. Duis tincidunt, consequat leo, nec dignissim tortor vehicula sed. Sed et
                    aliquet massa. Aenean finibus aliquam eros, viverra tincidunt purus semper a. Vivamus scelerisque ipsum eu augue viverra molestie.
                    Etiam nec ultrices sem. Donec eget turpis faucibus mauris auctor interdum nec at dolor. Duis posuere vel magna ut rutrum. Proin
                    dapibus dui vitae nibh molestie ac fringilla dolor molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                    inceptos himenaeos. Nunc ut mattis mi. Duis ac dui sed augue pulvinar aliquet ac vel eros. Pellentesque felis ligula,
                    placerat et elit sit amet, consequat maximus ante. Nam vehicula vulputate eleifend.
                </p>
            </section>
        </div>
    );
};

export default Home;
