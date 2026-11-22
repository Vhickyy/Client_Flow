"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { salesPerformance } from "../overview_data";
import { PerformancePoint } from "../overview_types";
import App_Text from "@/app/_components/app_ui/App_Text";
// Adjust to wherever dashboard-data.ts lives:

// Each key must match a field in the data ({ period, won, lost }).
// `color` becomes the CSS variable --color-won / --color-lost inside the chart.
const chartConfig = {
  won: { label: "Deals won", color: "var(--chart-1)" },
  lost: { label: "Deals lost", color: "var(--chart-2)" },
} satisfies ChartConfig;

// 1100000 -> "₦1.1M", 280000 -> "₦280K"
const formatNairaShort = (value: number) =>
  value >= 1_000_000
    ? `₦${(value / 1_000_000).toFixed(1)}M`
    : `₦${Math.round(value / 1_000)}K`;

interface SalesChartProps {
  data?: PerformancePoint[];
  className?: string;
}

const Overview_Sales_Chart = ({
  data = salesPerformance.data,
  className,
}: SalesChartProps) => {
  return (
    <div className="bg-white p-6 grid gap-6 flex-1 rounded-xl">
      <div>
        <App_Text variant="sectionTitle" className="font-semibold">
          Sales Performance
        </App_Text>
        <App_Text variant="pageSub" className="max-w-sm">
          Revenue (₦) and deals won vs lost across business name.
        </App_Text>
      </div>
      <ChartContainer
        config={chartConfig}
        className={className ?? "h-[240px] w-full"}
      >
        <BarChart data={data} barGap={4}>
          <CartesianGrid vertical={false} />

          <XAxis
            dataKey="period"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            width={48}
            tickFormatter={formatNairaShort}
          />

          <ChartTooltip
            cursor={{ fillOpacity: 0.06 }}
            content={
              <ChartTooltipContent
                className="bg-primary text-white"
                formatter={(value, name) => (
                  <div className="flex w-full items-center justify-between gap-4">
                    <span className="text-white">
                      {chartConfig[name as keyof typeof chartConfig]?.label}
                    </span>
                    <span className="font-medium tabular-nums text-white">
                      {formatNairaShort(Number(value))}
                    </span>
                  </div>
                )}
              />
            }
          />
          <ChartLegend content={<ChartLegendContent />} />

          <Bar
            dataKey="won"
            fill="#1b2d24"
            radius={[4, 4, 4, 4]}
            maxBarSize={28}
          />
          <Bar
            dataKey="lost"
            fill="#96472C"
            radius={[4, 4, 4, 4]}
            maxBarSize={28}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default Overview_Sales_Chart;
