"use client";
const useAppTable = <T>({
  data,
  PAGE_SIZE = 5,
  page,
}: {
  data?: T[];
  PAGE_SIZE?: number;
  page: number;
}) => {
  const totalItems = data?.length || 0;
  const totalPages = Math.ceil(totalItems / PAGE_SIZE);

  const startItem = (page - 1) * PAGE_SIZE;
  const endItem = Math.min(page * PAGE_SIZE, totalItems);
  const tableData = data?.slice(startItem, endItem);

  return { tableData, totalPages, startItem, endItem, totalItems };
};

export default useAppTable;
