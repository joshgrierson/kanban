export type CommonFields = "updatedAt" | "createdAt" | "id";

export type InsertType<T> = Omit<T, CommonFields>;

export type QueryPagination = {
  pageSize: number;
  cursor?: string;
};
