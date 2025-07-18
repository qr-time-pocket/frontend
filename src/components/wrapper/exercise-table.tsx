import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export type Exercise = {
  id: string;
  name: string;
  place: string;
  price: number;
  startDate: Date;
  // 아직 모름
  status: "active" | "inactive";
};

// make dummy data
const dummyData: Exercise[] = [
  {
    id: "1",
    name: "운동1",
    place: "장소1",
    price: 10000,
    startDate: new Date(),
    status: "active",
  },
  {
    id: "2",
    name: "운동2",
    place: "장소2",
    price: 20000,
    startDate: new Date(),
    status: "inactive",
  },
];

export const exerciseColumns: ColumnDef<Exercise>[] = [
  {
    header: "운동명",
    accessorKey: "name",
  },
  {
    header: "장소",
    accessorKey: "place",
  },
  {
    header: "가격",
    accessorKey: "price",
  },
  {
    header: "시작시간",
    accessorKey: "startDate",
  },
  {
    header: "상태",
    accessorKey: "status",
  },
];

export default function ExerciseTable() {
  const table = useReactTable({
    data: dummyData,
    columns: exerciseColumns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={exerciseColumns.length}
                className="h-24 text-center"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
