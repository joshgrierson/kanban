import { QUERY_PAGE_SIZE } from "@/constants";
import DBError from "./error";
import { logger } from "@/logger";

export function withCursorPagination<T>(
  query: T,
  cursor?: number,
  pageSize: number = QUERY_PAGE_SIZE,
) {
  return {
    take: pageSize,
    skip: cursor ? 1 : 0,
    cursor: {
      id: cursor,
    },
    ...query,
  } as T;
}

export async function query<T>(promisableQuery: Promise<T>) {
  try {
    const result = await promisableQuery;
    return result;
  } catch (error) {
    logger.error(error as DBError);
  }
}
