'use client';

import React from 'react';
import TournamentCard from '@/components/TournamentCard';
import { tournaments, xaxalele } from '../../data/data';
import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';
import Image from 'next/image';

export default function TournamentsPage() {
    const { language } = useLanguage();
    const [xaxaleleClickCount, setXaxaleleClickCount] = useState(0);

    // If user clicks the xaxalele box 7 times, direct them to a secret page (different url)
    const handleBoxXaxaleleClick = () => {
        const newClickCount = xaxaleleClickCount + 1;
        setXaxaleleClickCount(newClickCount);

        if (newClickCount >= 7) {
            window.location.href = 'https://xaxalele.vercel.app/';
        }
    }

    return (
        <>
            <style jsx>{`
                @import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&display=swap");

                @keyframes glitch-animation-1 {
                    0% { clip: rect(42px, 350px, 86px, 30px); }
                    5% { clip: rect(12px, 350px, 59px, 30px); }
                    10% { clip: rect(105px, 350px, 23px, 30px); }
                    15% { clip: rect(68px, 350px, 111px, 30px); }
                    20% { clip: rect(134px, 350px, 47px, 30px); }
                    25% { clip: rect(92px, 350px, 78px, 30px); }
                    30% { clip: rect(15px, 350px, 126px, 30px); }
                    35% { clip: rect(99px, 350px, 34px, 30px); }
                    40% { clip: rect(56px, 350px, 143px, 30px); }
                    45% { clip: rect(71px, 350px, 18px, 30px); }
                    50% { clip: rect(123px, 350px, 62px, 30px); }
                    55% { clip: rect(38px, 350px, 95px, 30px); }
                    60% { clip: rect(87px, 350px, 51px, 30px); }
                    65% { clip: rect(29px, 350px, 108px, 30px); }
                    70% { clip: rect(112px, 350px, 73px, 30px); }
                    75% { clip: rect(64px, 350px, 139px, 30px); }
                    80% { clip: rect(19px, 350px, 91px, 30px); }
                    85% { clip: rect(146px, 350px, 27px, 30px); }
                    90% { clip: rect(81px, 350px, 115px, 30px); }
                    95% { clip: rect(45px, 350px, 102px, 30px); }
                    100% { clip: rect(118px, 350px, 35px, 30px); }
                }

                @keyframes glitch-animation-2 {
                    0% { clip: rect(129px, 350px, 44px, 30px); }
                    5% { clip: rect(76px, 350px, 133px, 30px); }
                    10% { clip: rect(21px, 350px, 98px, 30px); }
                    15% { clip: rect(54px, 350px, 67px, 30px); }
                    20% { clip: rect(141px, 350px, 11px, 30px); }
                    25% { clip: rect(89px, 350px, 125px, 30px); }
                    30% { clip: rect(32px, 350px, 79px, 30px); }
                    35% { clip: rect(107px, 350px, 58px, 30px); }
                    40% { clip: rect(63px, 350px, 144px, 30px); }
                    45% { clip: rect(96px, 350px, 25px, 30px); }
                    50% { clip: rect(48px, 350px, 117px, 30px); }
                    55% { clip: rect(135px, 350px, 39px, 30px); }
                    60% { clip: rect(74px, 350px, 103px, 30px); }
                    65% { clip: rect(17px, 350px, 88px, 30px); }
                    70% { clip: rect(121px, 350px, 52px, 30px); }
                    75% { clip: rect(61px, 350px, 137px, 30px); }
                    80% { clip: rect(28px, 350px, 94px, 30px); }
                    85% { clip: rect(109px, 350px, 46px, 30px); }
                    90% { clip: rect(83px, 350px, 128px, 30px); }
                    95% { clip: rect(36px, 350px, 71px, 30px); }
                    100% { clip: rect(114px, 350px, 55px, 30px); }
                }

                .glitch-text {
                    position: relative;
                    display: inline-block;
                }

                .glitch-text::before,
                .glitch-text::after {
                    content: 'COMING SOON';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: transparent;
                }

                .glitch-text::before {
                    left: 3px;
                    text-shadow: -3px 0 red, -6px 0 red;
                    animation: glitch-animation-1 2s infinite linear alternate-reverse;
                    color: transparent;
                    background: linear-gradient(90deg, red 0%, transparent 100%);
                    background-clip: text;
                    -webkit-background-clip: text;
                }

                .glitch-text::after {
                    left: -3px;
                    text-shadow: 3px 0 cyan, 6px 0 cyan;
                    animation: glitch-animation-2 2s infinite linear alternate-reverse;
                    color: transparent;
                    background: linear-gradient(90deg, transparent 0%, cyan 100%);
                    background-clip: text;
                    -webkit-background-clip: text;
                }
            `}</style>
            <main style={{
                margin: '0',
                padding: 'clamp(80px, 15vw, 120px) clamp(15px, 4vw, 40px) clamp(40px, 8vw, 60px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '100vh',
                width: '100%',
                position: 'relative',
                overflowX: 'hidden',
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: '1000px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'clamp(15px, 3vw, 25px)',
                }}>
                    {tournaments.map((tournament) => (
                        <TournamentCard
                            key={tournament.id}
                            id={tournament.id}
                            title={tournament.title}
                            description={language === 'vi' ? tournament.shortDescriptionVi : tournament.shortDescription}
                            imageUrl={tournament.mainImage}
                        />
                    ))}

                    {/* Xaxalele thingy*/}
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'clamp(20px, 5vw, 32px)' }}>
                        <div
                            className="xaxalele-box"
                            onClick={handleBoxXaxaleleClick}
                            role="button"
                            tabIndex={0}
                            style={{
                                width: '100%',
                                maxWidth: '950px',
                                height: 'clamp(100px, 20vw, 160px)',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                position: 'relative',
                            }}
                        >
                            <Image
                                src={xaxalele.boxGlitch}
                                alt="Xaxalele Box"
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 950px) 100vw, 950px"
                            />
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                pointerEvents: 'none',
                            }}>
                                <span className="glitch-text" style={{
                                    color: 'white',
                                    fontSize: 'clamp(1.2rem, 4vw, 2rem)',
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    textShadow: '0 0 10px rgba(255,0,0,0.5), 0 0 20px rgba(0,255,255,0.5), 0 2px 10px rgba(0,0,0,0.7)',
                                    pointerEvents: 'none',
                                    fontFamily: 'Cinzel, serif',
                                    letterSpacing: '0.15em',
                                }}>
                                    COMING SOON
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}