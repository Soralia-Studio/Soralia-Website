'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { cafe } from '@/data/data';
import { useLanguage } from '@/context/LanguageContext';
import MessageOfTheDay from '@/script/messageOfTheDay';

/**
 * HomePage Component
 * 
 * Main landing page with logo, title, and content sections.
 * Logo is always visible - splash overlay handles the reveal animation.
 */
export default function HomePage() {
    const contentRef = useRef<HTMLDivElement>(null);
    const { language } = useLanguage();

    const [message, setMessage] = React.useState<string>('');

    React.useEffect(() => {
        setMessage(MessageOfTheDay.getMessage());
    }, []);

    const aboutText = {
        en: "Soralia Studio, formerly known as Area 57 Studio, was founded by Hidr0 as a creative collective shaped by a deep commitment to rhythm games, event production, and community-building. What began as an experimental studio under the Area 57 banner gradually matured through hands-on experience, competitive events, and close collaboration with local players.\n\nOver time, the leadership of Area 57 expressed a strategic desire for the studio to separate and operate as an independent unit—leaner, more focused, and free to pursue its own creative direction. Aligning with that vision, Hidr0 made the pivotal decision to rebrand the studio as Soralia Studio, marking a clean break and a bold recalibration of purpose. From that moment, Soralia became a standalone operation with its own identity, values, and execution model.\n\nThe name Soralia was carefully chosen to reflect both atmosphere and ambition. Etymologically inspired by concepts of the sky, light, and elevation, Soralia conveys a sense of calm above turbulence—a place where creativity can exist beyond noise and constraint. It symbolizes aspiration without arrogance, softness paired with structure, and growth protected by intention.\n\nThis philosophy is carried through the studio’s visual identity. The umbrella logo represents shelter, direction, and collective strength. In an environment often shaped by pressure, competition, and uncertainty, the umbrella stands as a promise: Soralia Studio exists to protect ideas, people, and passion. Beneath it, creators and players alike can focus, perform, and move forward together. The surrounding night sky, clouds, moon, and flowing wind reinforce this metaphor—suggesting movement through challenge with quiet confidence and composure.\n\nToday, Soralia Studio’s strategic focus is firmly centered on ChuniMai tournaments. The studio aims to build a sustainable and recognizable competitive ecosystem, with a long-term vision of hosting more frequent and higher-quality ChuniMai events in District 7. This area is seen not just as a location, but as a growth hub—accessible, community-driven, and full of potential to become a rhythm-game landmark.\n\nSoralia Studio is no longer just an evolution of Area 57—it is a deliberate repositioning. Independent in structure, focused in mission, and human at its core, the studio continues to move forward with one clear goal: to create a safe, professional, and inspiring space where the ChuniMai community can gather, compete, and thrive.",
        vi: "Soralia Studio, trước đây mang tên Area 57 Studio, được Hidr0 thành lập như một tập thể sáng tạo với niềm đam mê rhythm game, tổ chức sự kiện và xây dựng cộng đồng. Từ những ngày đầu thử nghiệm dưới cái tên Area 57, studio dần trưởng thành qua từng giải đấu, từng sự kiện, và sự gắn kết chặt chẽ với cộng đồng game thủ địa phương.\n\nTheo thời gian, ban lãnh đạo Area 57 đã bày tỏ mong muốn để studio tách ra hoạt động độc lập—gọn nhẹ hơn, tập trung hơn, và tự do theo đuổi định hướng sáng tạo riêng. Phù hợp với tầm nhìn đó, Hidr0 quyết định đổi tên thành Soralia Studio, đánh dấu sự tách biệt hoàn toàn và tái định vị mục tiêu. Từ đó, Soralia trở thành một đơn vị độc lập với bản sắc, giá trị và phương thức hoạt động riêng biệt.\n\nCái tên Soralia được chọn lựa kỹ càng để phản ánh cả không khí lẫn khát vọng. Lấy cảm hứng từ khái niệm bầu trời, ánh sáng và sự vươn lên, Soralia mang đến cảm giác bình yên giữa hỗn loạn—nơi sáng tạo có thể tồn tại vượt qua ồn ào và ràng buộc. Đó là biểu tượng cho khát vọng không kiêu ngạo, sự mềm mại kết hợp cấu trúc, và sự phát triển được bảo vệ bởi định hướng rõ ràng.\n\nTriết lý này được thể hiện qua nhận diện thương hiệu. Logo chiếc dù tượng trưng cho sự che chở, định hướng và sức mạnh tập thể. Trong môi trường đầy áp lực, cạnh tranh và bất ổn, chiếc dù là lời hứa: Soralia Studio tồn tại để bảo vệ ý tưởng, con người và đam mê. Dưới đó, cả người sáng tạo lẫn game thủ đều có thể tập trung, thể hiện và tiến bước cùng nhau. Bầu trời đêm, mây, mặt trăng và gió chảy xung quanh củng cố ẩn dụ này—gợi lên hình ảnh vượt qua thử thách với sự tự tin và bình tĩnh.\n\nHiện tại, Soralia Studio tập trung chiến lược vào các giải đấu ChuniMai. Mục tiêu là xây dựng hệ sinh thái thi đấu bền vững và uy tín, với tầm nhìn dài hạn tổ chức các giải ChuniMai thường xuyên và chất lượng cao hơn tại Quận 7. Khu vực này không chỉ là địa điểm, mà còn là trung tâm phát triển—dễ tiếp cận, hướng đến cộng đồng, đầy tiềm năng trở thành địa danh rhythm game.\n\nSoralia Studio không còn là sự tiến hóa của Area 57—đây là một sự tái định vị có chủ đích. Độc lập về cấu trúc, rõ ràng về sứ mệnh, và con người là cốt lõi, studio tiếp tục tiến về phía trước với một mục tiêu: tạo ra không gian an toàn, chuyên nghiệp và đầy cảm hứng, nơi cộng đồng ChuniMai có thể tụ họp, thi đấu và phát triển."
    };

    const scrollToContent = () => {
        if (contentRef.current) {
            contentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main style={{
            margin: '0',
            padding: '0',
            width: '100%',
            textAlign: 'center',
            position: 'relative',
            overflowY: 'auto',
            overflowX: 'hidden',
            height: '100vh',
        }}>
            {/* First section - Logo and Text */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                padding: '20px',
                paddingBottom: '40px',
            }}>
                {/* Logo - always visible (splash handles reveal) */}
                <div style={{
                    marginBottom: '20px',
                    width: '100%',
                    maxWidth: '450px',
                    aspectRatio: '1/1',
                    position: 'relative',
                }}>
                    <Image
                        src="/placeholders/soraalia.png"
                        alt="Soralia Studio Logo"
                        fill
                        style={{
                            filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.6))',
                            objectFit: 'contain',
                        }}
                    />
                </div>

                <h1 style={{
                    fontSize: 'clamp(1.5rem, 5vw, 2.8rem)',
                    fontWeight: 600,
                    color: 'white',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                    marginBottom: '40px',
                    marginTop: '10px',
                    padding: '0 20px',
                    maxWidth: '90%',
                }}>
                    {message}
                </h1>

                {/* Down arrow icon with animation and click handler */}
                <div
                    onClick={scrollToContent}
                    style={{
                        cursor: 'pointer',
                        opacity: 0.7,
                        animation: 'bounce 2s infinite',
                        transition: 'opacity 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
                >
                    <svg style={{ width: 'clamp(50px, 10vw, 70px)', height: 'clamp(50px, 10vw, 70px)' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7 14L12 19L17 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                    </svg>
                </div>
            </div>

            <style jsx>{`
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {
                        transform: translateY(0);
                    }
                    40% {
                        transform: translateY(-10px);
                    }
                    60% {
                        transform: translateY(-5px);
                    }
                }
            `}</style>

            {/* Second section - About Soralia Studio */}
            <div
                ref={contentRef}
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'clamp(30px, 8vw, 60px) clamp(20px, 5vw, 40px)',
                }}
            >
                <h2 style={{
                    fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                    fontWeight: 700,
                    marginBottom: '40px',
                    textAlign: 'center',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                }}>
                    {language === 'vi' ? 'Về Soralia Studio' : 'About Soralia Studio'}
                </h2>

                <div style={{
                    maxWidth: '900px',
                    width: '100%',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                    lineHeight: '1.8',
                    textAlign: 'justify',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(10px)',
                    padding: 'clamp(30px, 4vw, 40px)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    fontFamily: language === 'vi' ? 'Inter, sans-serif' : 'var(--font-poppins), sans-serif',
                }}>
                    <p style={{
                        whiteSpace: 'pre-line',
                        margin: 0,
                    }}>
                        {aboutText[language]}
                    </p>
                </div>
            </div>
        </main>
    );
}