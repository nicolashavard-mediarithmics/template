import { config } from "./Config";
import { logger } from "./services/Logger";

(async () => {
    console.log(`${config.STRING} : ${typeof config.STRING}`);
    console.log(`${config.NUMBER} : ${typeof config.NUMBER}`);
    console.log(`${config.BOOLEAN} : ${typeof config.BOOLEAN}`);
    logger.error("error");
    logger.warn("warn")
    logger.info("info");
    logger.verbose("verbose");
    logger.debug("debug");
    logger.silly("silly")
})();