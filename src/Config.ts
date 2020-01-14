import { env, required, int, bool } from "@mediarithmics-ps/utils";
import { Iconfig } from "./Interfaces";
import * as dotenv from "dotenv";

dotenv.config({ path: "./config/.env" });

export const config: Iconfig = {
    STRING: env(required)("STRING"),
    NUMBER: env(int, required)("NUMBER"),
    BOOLEAN: env(bool, required)("BOOLEAN"),
    LOG_LEVEL: env(required)("LOG_LEVEL")
}