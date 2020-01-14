import * as winston from "winston"
import { config } from "../Config"

export const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.splat(),
                winston.format.colorize(),
                winston.format.simple()
            )
        })
    ],
    level: config.LOG_LEVEL,
})