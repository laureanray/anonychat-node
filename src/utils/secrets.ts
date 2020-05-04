import dotenv from "dotenv";
import fs from "fs";

if (fs.existsSync(".env")) {
    dotenv.config({ path: ".env" });
}

export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === "production"; // Anything else is treated as 'dev'
