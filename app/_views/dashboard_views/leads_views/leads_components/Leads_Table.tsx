"use client";
import App_Table from "@/app/_components/dash_ui/App_Table";
import { lead_columns } from "../leads_data/lead_col";
import { leads } from "../leads_data";
import useAppTable from "@/app/_hooks/useAppTable";
import { Lead } from "../leads_types";
import App_Paginate from "@/app/_components/dash_ui/App_Paginate";
import App_Text from "@/app/_components/app_ui/App_Text";
import { useState } from "react";

const Leads_Table = () => {
  const [page, setPage] = useState(1);
  const { tableData, totalPages, startItem, endItem, totalItems } =
    useAppTable<Lead>({
      data: leads,
      page,
      PAGE_SIZE: 10,
    });
  return (
    <>
      <div className="bg-primary p-3 rounded-lg mt-6">
        <div className="flex items-center gap-3">
          <div className="bg-primary-subtle w-6 h-6 grid place-items-center rounded-full">
            <App_Text variant="badge" className="text-primary">
              2
            </App_Text>
          </div>
          <App_Text className="text-white">leads selected</App_Text>
          <div className="flex gap-3 items-center">
            <App_Text>|</App_Text>
            <App_Text
              variant="badge"
              className="text-primary-subtle text-sm cursor-pointer underline"
            >
              Deselect All
            </App_Text>
          </div>
        </div>
      </div>
      <App_Table
        style=""
        rowStyle="odd:bg-white even:bg-sec-bg py-6"
        columns={lead_columns}
        data={tableData!}
      />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-[#ede8e2]">
        <App_Text variant="badge" className="shrink-0 flex-1">
          Showing {startItem + 1} to {endItem} of {totalItems} products
        </App_Text>
        <App_Paginate
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          paginateStyle="mt-4 mb-4"
        />
      </div>
    </>
  );
};

export default Leads_Table;
