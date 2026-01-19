import * as fs from 'fs';
import * as path from 'path';
import logger from './Logger/logger';

class GalleryGenerator {
    private static baseDir: string = path.join(process.cwd(), 'public');

    private constructor() {

    };

    private static shuffle(array: string[]): string[] {
        const result = [...array];
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }
        return result;
    }

    public static generateGallery() {
        const galleryOutput : Record<string, string[]> = {};
        const zoomOutput : Record<string, string[]> = {};

        logger.info('Starting gallery generation...');

        for (const tournament of fs.readdirSync(this.baseDir + '/tournaments')) {
            const galleryDir = path.join(this.baseDir, 'tournaments', tournament, 'gallery');
            const zoomDir = path.join(this.baseDir, 'tournaments', tournament, 'zoom');

            logger.info(`Processing tournament: ${tournament}`);

            if (!fs.existsSync(galleryDir)) {
                logger.warn(`Gallery directory does not exist for tournament: ${tournament}`);
                continue;
            }

            const images = fs.readdirSync(galleryDir)
                .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
                .sort()
            
            const shuffle = this.shuffle(images).slice(0, 20);

            
            galleryOutput[tournament] = shuffle.map(file => `/tournaments/${tournament}/gallery/${file}`);

            zoomOutput[tournament] = shuffle.map(file => {
                const zoomImagePath = path.join(zoomDir, file);

                return fs.existsSync(zoomImagePath)
                    ? `/tournaments/${tournament}/zoom/${file}`
                    : `/tournaments/${tournament}/gallery/${file}`;
            });

            logger.info(`Found ${images.length} images for tournament: ${tournament}`);
        }

        logger.info('Gallery generation completed.');
        fs.writeFileSync(
            path.join(process.cwd(), 'src/data/galleryImages.json'),
            JSON.stringify(galleryOutput, null, 2)
        );
        fs.writeFileSync(
            path.join(process.cwd(), 'src/data/zoomImages.json'),
            JSON.stringify(zoomOutput, null, 2)
        );
    };
}

GalleryGenerator.generateGallery();