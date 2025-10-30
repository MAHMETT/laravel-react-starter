import { ENV_APP, EnvConfig } from '@/types/env';

// Fungsi untuk parsing nilai boolean dari string
const parseBoolean = (
    value: string | undefined,
    defaultValue = false,
): boolean => {
    if (value === undefined) return defaultValue;
    return value === 'true';
};

// Fungsi untuk parsing nilai number dari string
const parseNumber = (value: string | undefined, defaultValue = 0): number => {
    if (value === undefined) return defaultValue;
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? defaultValue : parsed;
};

// Fungsi untuk parsing nilai null dari string
const parseNullable = (value: string | undefined): string | null => {
    if (value === undefined || value === 'null') return null;
    return value;
};

// Fungsi untuk memvalidasi dan mengambil variabel environment dengan aman
export const getEnvVar = import.meta.env;

// Konfigurasi environment dengan validasi
const env: EnvConfig = {
    // App Configuration
    APP_NAME: import.meta.env.APP_NAME,
    APP_SECOND_NAME: 'Laravel',
    APP_ENV: getEnvVar.APP_ENV as ENV_APP,
    APP_KEY: getEnvVar.APP_KEY,
    APP_DEBUG: parseBoolean(getEnvVar.APP_DEBUG),
    APP_URL: getEnvVar.APP_URL,

    // Localization
    APP_LOCALE: getEnvVar.APP_LOCALE,
    APP_FALLBACK_LOCALE: getEnvVar.APP_FALLBACK_LOCALE,
    APP_FAKER_LOCALE: getEnvVar.APP_FAKER_LOCALE,

    // Maintenance
    APP_MAINTENANCE_DRIVER: getEnvVar.APP_MAINTENANCE_DRIVER,
    APP_MAINTENANCE_STORE: getEnvVar.APP_MAINTENANCE_STORE,

    // Server Configuration
    PHP_CLI_SERVER_WORKERS: parseNumber(getEnvVar.PHP_CLI_SERVER_WORKERS),
    BCRYPT_ROUNDS: parseNumber(getEnvVar.BCRYPT_ROUNDS),

    // Logging
    LOG_CHANNEL: getEnvVar.LOG_CHANNEL,
    LOG_STACK: getEnvVar.LOG_STACK,
    LOG_DEPRECATIONS_CHANNEL: parseNullable(getEnvVar.LOG_DEPRECATIONS_CHANNEL),
    LOG_LEVEL: getEnvVar.LOG_LEVEL,

    // Database Configuration
    DB_CONNECTION: getEnvVar.DB_CONNECTION,
    DB_HOST: getEnvVar.DB_HOST,
    DB_PORT: parseNumber(getEnvVar.DB_PORT),
    DB_DATABASE: getEnvVar.DB_DATABASE,
    DB_USERNAME: getEnvVar.DB_USERNAME,
    DB_PASSWORD: getEnvVar.DB_PASSWORD,

    // Session Configuration
    SESSION_DRIVER: getEnvVar.SESSION_DRIVER,
    SESSION_LIFETIME: parseNumber(getEnvVar.SESSION_LIFETIME),
    SESSION_ENCRYPT: parseBoolean(getEnvVar.SESSION_ENCRYPT),
    SESSION_PATH: getEnvVar.SESSION_PATH,
    SESSION_DOMAIN: parseNullable(getEnvVar.SESSION_DOMAIN),

    // Other Configuration
    BROADCAST_CONNECTION: getEnvVar.BROADCAST_CONNECTION,
    FILESYSTEM_DISK: getEnvVar.FILESYSTEM_DISK,
    QUEUE_CONNECTION: getEnvVar.QUEUE_CONNECTION,
    CACHE_STORE: getEnvVar.CACHE_STORE,
    CACHE_PREFIX: getEnvVar.CACHE_PREFIX,
    MEMCACHED_HOST: getEnvVar.MEMCACHED_HOST,

    // Redis Configuration
    REDIS_CLIENT: getEnvVar.REDIS_CLIENT,
    REDIS_HOST: getEnvVar.REDIS_HOST,
    REDIS_PASSWORD: parseNullable(getEnvVar.REDIS_PASSWORD),
    REDIS_PORT: parseNumber(getEnvVar.REDIS_PORT),

    // Mail Configuration
    MAIL_MAILER: getEnvVar.MAIL_MAILER,
    MAIL_SCHEME: parseNullable(getEnvVar.MAIL_SCHEME),
    MAIL_HOST: getEnvVar.MAIL_HOST,
    MAIL_PORT: parseNumber(getEnvVar.MAIL_PORT),
    MAIL_USERNAME: parseNullable(getEnvVar.MAIL_USERNAME),
    MAIL_PASSWORD: parseNullable(getEnvVar.MAIL_PASSWORD),
    MAIL_FROM_ADDRESS: getEnvVar.MAIL_FROM_ADDRESS,
    MAIL_FROM_NAME: getEnvVar.MAIL_FROM_NAME,

    // AWS Configuration
    AWS_ACCESS_KEY_ID: getEnvVar.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: getEnvVar.AWS_SECRET_ACCESS_KEY,
    AWS_DEFAULT_REGION: getEnvVar.AWS_DEFAULT_REGION,
    AWS_BUCKET: getEnvVar.AWS_BUCKET,
    AWS_USE_PATH_STYLE_ENDPOINT: parseBoolean(
        getEnvVar.AWS_USE_PATH_STYLE_ENDPOINT,
    ),

    // Vite Configuration
    VITE_APP_NAME: getEnvVar.VITE_APP_NAME,
};

export default env;

export { parseBoolean, parseNullable, parseNumber };
