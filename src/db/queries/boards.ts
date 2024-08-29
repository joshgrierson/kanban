import { Prisma } from "@prisma/client";
import { dbClient } from "@db/dbClient";
import { withCursorPagination } from "@db/utils";
import DBError from "@db/error";

export async function getAllBoards({ cursor }: { cursor?: number }) {
  return dbClient.board
    .findMany(
      withCursorPagination<Prisma.BoardFindManyArgs>(
        {
          orderBy: {
            id: "asc",
          },
        },
        cursor,
      ),
    )
    .catch((error) => new DBError(error, "QueryAllBoards"));
}
