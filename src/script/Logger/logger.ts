import * as winston from 'winston';

class Logger {
    private logger: winston.Logger;
    private static instance: Logger;

    // Singleton instance
    private constructor() {
        this.logger = winston.createLogger({
            level: 'info',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.printf(({timestamp, level, message}) => {
                    return `${timestamp} [${level}]: ${message}`;
                })
            ),

            transports: [
                new winston.transports.File({ filename: 'combined.log' }),
                new winston.transports.File({filename: 'logs/error.log', level: 'error'})
            ]
        });

        if( process.env.NODE_ENV !== 'production') {
            this.logger.add(new winston.transports.Console({
                format: winston.format.simple(),
            }));
        }
    };

    public static getInstance(): Logger {
        if(!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public info(message: string) {
        this.logger.info(message);
    }

    public error(message: string) {
        this.logger.error(message);
    }

    public warn(message: string) {
        this.logger.warn(message);
    }
}

const logger = Logger.getInstance();
export default logger;