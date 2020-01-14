import { config } from "./Config";

function displayEnv() {
    console.log(`${config.STRING} : ${typeof config.STRING}`);
    console.log(`${config.NUMBER} : ${typeof config.NUMBER}`);
    console.log(`${config.BOOLEAN} : ${typeof config.BOOLEAN}`);
};

displayEnv();