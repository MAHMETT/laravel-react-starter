export type ENV_APP = 'local' | 'production' | 'testing' | 'staging';
export interface EnvConfig {
    // App Configuration
    APP_NAME: string;
    APP_SECOND_NAME: string;
    APP_ENV: ENV_APP;
    APP_KEY: string;
    APP_DEBUG: boolean;
    APP_URL: string;

    // Localization
    APP_LOCALE: string;
    APP_FALLBACK_LOCALE: string;
    APP_FAKER_LOCALE: string;

    // Maintenance
    APP_MAINTENANCE_DRIVER: string;
    APP_MAINTENANCE_STORE?: string;

    // Server Configuration
    PHP_CLI_SERVER_WORKERS: number;
    BCRYPT_ROUNDS: number;

    // Logging
    LOG_CHANNEL: string;
    LOG_STACK: string;
    LOG_DEPRECATIONS_CHANNEL: string | null;
    LOG_LEVEL: string;

    // Database Configuration
    DB_CONNECTION: string;
    DB_HOST: string;
    DB_PORT: number;
    DB_DATABASE: string;
    DB_USERNAME: string;
    DB_PASSWORD: string;

    // Session Configuration
    SESSION_DRIVER: string;
    SESSION_LIFETIME: number;
    SESSION_ENCRYPT: boolean;
    SESSION_PATH: string;
    SESSION_DOMAIN: string | null;

    // Other Configuration
    BROADCAST_CONNECTION: string;
    FILESYSTEM_DISK: string;
    QUEUE_CONNECTION: string;
    CACHE_STORE: string;
    CACHE_PREFIX?: string;
    MEMCACHED_HOST: string;

    // Redis Configuration
    REDIS_CLIENT: string;
    REDIS_HOST: string;
    REDIS_PASSWORD: string | null;
    REDIS_PORT: number;

    // Mail Configuration
    MAIL_MAILER: string;
    MAIL_SCHEME: string | null;
    MAIL_HOST: string;
    MAIL_PORT: number;
    MAIL_USERNAME: string | null;
    MAIL_PASSWORD: string | null;
    MAIL_FROM_ADDRESS: string;
    MAIL_FROM_NAME: string;

    // AWS Configuration
    AWS_ACCESS_KEY_ID: string;
    AWS_SECRET_ACCESS_KEY: string;
    AWS_DEFAULT_REGION: string;
    AWS_BUCKET: string;
    AWS_USE_PATH_STYLE_ENDPOINT: boolean;

    // Vite Configuration
    VITE_APP_NAME: string;
}
