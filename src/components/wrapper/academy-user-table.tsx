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

type DayOfWeek = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";

interface Student {
  id: string;
  name: string;
  phoneNumber: string;
  lessonDays: DayOfWeek[];
}

export const students: Student[] = [
  {
    id: "1",
    name: "John Doe",
    phoneNumber: "010-1234-5678",
    lessonDays: ["MON", "WED", "FRI"],
  },
  {
    id: "2",
    name: "Jane Smith",
    phoneNumber: "010-1234-5679",
    lessonDays: ["TUE", "THU", "SAT"],
  },
  {
    id: "3",
    name: "Jim Beam",
    phoneNumber: "010-1234-5680",
    lessonDays: ["MON", "WED", "FRI"],
  },
  {
    id: "4",
    name: "Jill Johnson",
    phoneNumber: "010-1234-5681",
    lessonDays: ["TUE", "THU", "SAT"],
  },
];

export const columns: ColumnDef<Student>[] = [
  {
    accessorKey: "id",
    header: "회원번호",
  },
  {
    accessorKey: "name",
    header: "이름",
  },
  {
    accessorKey: "phoneNumber",
    header: "연락처",
  },
  {
    accessorKey: "lessonDays",
    header: "레슨 요일",
  },
];
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function AcademyUserTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
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
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
