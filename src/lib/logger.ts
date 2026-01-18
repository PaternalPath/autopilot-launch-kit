/**
 * Simple structured logger
 *
 * Provides consistent logging across the application with support for
 * structured data. Uses console methods under the hood but adds
 * timestamps and context.
 *
 * Usage:
 *   import { logger } from "@/lib/logger";
 *   logger.info("User signed in", { userId: "123" });
 */

type LogLevel = "debug" | "info" | "warn" | "error";

interface LogContext {
  [key: string]: unknown;
}

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  context?: LogContext;
}

/**
 * Determine if we should log at this level
 *
 * In production, we skip debug logs.
 * In test, we skip all logs unless LOG_LEVEL is set.
 */
function shouldLog(level: LogLevel): boolean {
  const envLevel = process.env.LOG_LEVEL?.toLowerCase();
  const nodeEnv = process.env.NODE_ENV;

  // In test, only log if explicitly enabled
  if (nodeEnv === "test" && !envLevel) {
    return false;
  }

  // Log level hierarchy
  const levels: LogLevel[] = ["debug", "info", "warn", "error"];
  const minLevel = (envLevel as LogLevel) || (nodeEnv === "production" ? "info" : "debug");
  const minIndex = levels.indexOf(minLevel);
  const currentIndex = levels.indexOf(level);

  return currentIndex >= minIndex;
}

/**
 * Format a log entry for output
 */
function formatEntry(entry: LogEntry): string {
  const { timestamp, level, message, context } = entry;
  const prefix = `[${timestamp}] ${level.toUpperCase()}:`;

  if (context && Object.keys(context).length > 0) {
    return `${prefix} ${message} ${JSON.stringify(context)}`;
  }

  return `${prefix} ${message}`;
}

/**
 * Create a log entry
 */
function createEntry(level: LogLevel, message: string, context?: LogContext): LogEntry {
  return {
    timestamp: new Date().toISOString(),
    level,
    message,
    context,
  };
}

/**
 * Log function implementation
 */
function log(level: LogLevel, message: string, context?: LogContext): void {
  if (!shouldLog(level)) {
    return;
  }

  const entry = createEntry(level, message, context);
  const formatted = formatEntry(entry);

  switch (level) {
    case "debug":
      console.debug(formatted);
      break;
    case "info":
      console.info(formatted);
      break;
    case "warn":
      console.warn(formatted);
      break;
    case "error":
      console.error(formatted);
      break;
  }
}

/**
 * Logger instance
 *
 * Use this throughout the application for consistent logging.
 */
export const logger = {
  /**
   * Debug level - verbose information for debugging
   * Not shown in production
   */
  debug: (message: string, context?: LogContext) => log("debug", message, context),

  /**
   * Info level - general information about app operation
   */
  info: (message: string, context?: LogContext) => log("info", message, context),

  /**
   * Warn level - something unexpected but not critical
   */
  warn: (message: string, context?: LogContext) => log("warn", message, context),

  /**
   * Error level - something went wrong
   */
  error: (message: string, context?: LogContext) => log("error", message, context),

  /**
   * Create a child logger with default context
   *
   * Usage:
   *   const userLogger = logger.child({ userId: "123" });
   *   userLogger.info("Action performed"); // includes userId
   */
  child: (defaultContext: LogContext) => ({
    debug: (message: string, context?: LogContext) =>
      log("debug", message, { ...defaultContext, ...context }),
    info: (message: string, context?: LogContext) =>
      log("info", message, { ...defaultContext, ...context }),
    warn: (message: string, context?: LogContext) =>
      log("warn", message, { ...defaultContext, ...context }),
    error: (message: string, context?: LogContext) =>
      log("error", message, { ...defaultContext, ...context }),
  }),
} as const;

/**
 * Type for the logger
 */
export type Logger = typeof logger;
