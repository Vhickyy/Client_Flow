"use client";

import {
  ColumnDef,
  columnFilteringFeature,
  createFilteredRowModel,
  createPaginatedRowModel,
  createSortedRowModel,
  filterFn_includesString,
  globalFilteringFeature,
  RowData,
  rowPaginationFeature,
  rowSortingFeature,
  sortFn_alphanumeric,
  sortFn_text,
  tableFeatures,
  useTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const features = tableFeatures({
  // rowSortingFeature,
  // rowPaginationFeature,
  // columnFilteringFeature,
  // globalFilteringFeature,
  // sortedRowModel: createSortedRowModel(),
  // paginatedRowModel: createPaginatedRowModel(),
  // filteredRowModel: createFilteredRowModel(),
  // sortFns: {
  //   alphanumeric: sortFn_alphanumeric,
  //   text: sortFn_text,
  // },
  // filterFns: {
  //   includesString: filterFn_includesString,
  // },
});

//

export type AppFeatures = typeof features;

export type AppColumnDef<TData extends RowData> = ColumnDef<AppFeatures, TData>;

// ─────────────────────────────────────────────
// PROPS
// ─────────────────────────────────────────────
export interface AppTableProps<TData extends RowData> {
  columns: AppColumnDef<TData>[];
  data: TData[];
  style?: string;
  rowStyle?: string;
  onRowClick?: (row: TData) => void;
  emptyMessage?: string;
}

const App_Table = <TData extends RowData>({
  columns,
  data,
  style,
  rowStyle,
  onRowClick,
  emptyMessage = "No results.",
}: AppTableProps<TData>) => {
  const table = useTable(
    {
      debugTable: true,
      features,
      columns,
      data,
      // globalFilterFn: "includesString",
    },
    (state) => state,
  );

  return (
    <div className={cn("mt-4 border-0", style)}>
      <Table className="border-separate border-spacing-0 bg-sec-bg rounded-t-xl">
        <TableHeader className="[&_tr]:border-0 bg-sec-bg">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="border-0">
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder ? null : (
                    <span className="text-xs font-semibold uppercase tracking-wide text-black">
                      <table.FlexRender header={header} />
                    </span>
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                className={cn("", rowStyle, onRowClick && "cursor-pointer")}
                onClick={() => onRowClick?.(row.original)}
              >
                {row.getAllCells().map((cell) => (
                  <TableCell key={cell.id} className="text-xs py-3">
                    <table.FlexRender cell={cell} />
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default App_Table;
