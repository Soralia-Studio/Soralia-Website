'use client';

import { useParams } from 'next/navigation';
import { LanguageProvider } from '@/context/LanguageContext';
import NavigationBar from '@/components/NavigationBar';
import SocialMediaButtons from '@/components/SocialMediaButtons';
import TournamentDetailPage from '@/components/pages/TournamentDetailPage';

/**
 * Tournament Detail Route
 * 
 * Displays individual tournament details
 * Accessible at /tournaments/[id]
 */
export default function TournamentDetail() {
    const params = useParams();
    const tournamentId = params.id as string;
    
    return (
        <LanguageProvider>
            <div style={{
                minHeight: '100vh',
                backgroundImage: 'url("/placeholders/Background.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'scroll',
                position: 'relative',
            }}>
                <NavigationBar />
                <TournamentDetailPage tournamentId={tournamentId} />
                <SocialMediaButtons variant="bottom-bar" />
            </div>
        </LanguageProvider>
    );
}
