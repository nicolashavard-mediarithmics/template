import { env, required, int, bool } from "@mediarithmics-ps/utils";
import { Iconfig } from "./Interfaces";
import * as dotenv from "dotenv";
import * as path from 'path';

if (process.env.ENV_FILE) {
    dotenv.config({ path: path.resolve(process.cwd(), './config', `./${process.env.ENV_FILE}`) });
} else {
    console.error('missing $ENV_FILE env variable');
    process.exit();
}

export const config: Iconfig = {
    STRING: env(required)("STRING"),
    NUMBER: env(int, required)("NUMBER"),
    BOOLEAN: env(bool, required)("BOOLEAN"),
    LOG_LEVEL: env(required)("LOG_LEVEL")
}