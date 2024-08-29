import { IN_BROWSER } from "./constants";

function __log(message: string, severity: "error" | "info" | "warn" = "info") {
  console[severity](`{${new Date()}} ${message}`);
  // TODO: Push log to remote analytics/monitoring platform
}

function error(error: Error | string) {
  __log(error instanceof Error ? error.message : error);

  if (!IN_BROWSER) {
    // log stack trace on server
    console.error(error);
  }
}

function info(message: string) {
  __log(message);
}

function warn(message: string) {
  __log(message, "warn");
}

export const logger = {
  error,
  info,
  warn,
  __log,
};
