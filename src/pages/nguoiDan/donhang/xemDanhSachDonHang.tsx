import { UserCircleIcon } from "@heroicons/react/outline";
import { Fragment, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTable } from "react-table";
import { toast } from "react-toastify";
import { FormInput } from "../../../components/form/FormInput";
import Loading from "../../../components/Loading";
import {
  TrangThaiDonHang,
  useDanhSachDonHangLazyQuery,
  useEditDonHangMutation,
} from "../../../graphql/generated/schema";
import { getApolloErrorMessage } from "../../../utils/getApolloErrorMessage";

type ByState = {
  ngayMua?: Date;
};
type Props = {};
const DanhSachDonHangChoUser = (props: Props) => {
  const navigate = useNavigate();
  const [getDonHangs, { data: dhData, loading }] = useDanhSachDonHangLazyQuery({
    onCompleted(data) {
      const { xemDanhSachDonHang } = data;
      console.log(xemDanhSachDonHang);
      if (xemDanhSachDonHang.error) {
        toast.error(xemDanhSachDonHang.error.message);
        return;
      }
    },
    onError(err) {
      const msg = getApolloErrorMessage(err);
      if (msg) {
        toast.error(msg);
        return;
      }
      toast.error("Lỗi xảy ra, thử lại sau");
    },
  });

  const [editDonHang] = useEditDonHangMutation();
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    getDonHangs({
      variables: {
        input: {
          paginationInput: {
            page: 1,
            resultsPerPage: 16,
          },
        },
      },
    });
  }, []);

  const donHangs = dhData?.xemDanhSachDonHang.DonHangs;
  const columns = useMemo(() => {
    return [
      {
        Header: "Mã đơn",
        // @ts-ignore
        accessor: (row) => row["id"],
      },
      {
        Header: "Tổng hóa đơn",
        // @ts-ignore
        accessor: (row) => {
          return row["tongTienPhaiTra"];
        },
      },
      {
        Header: "Trạng thái",
        // @ts-ignore
        accessor: (row) => {
          return row["trangThaiDonHang"] == TrangThaiDonHang.Oke
            ? "Oke"
            : "Đang chờ phê duyệt";
        },
      },
      {
        Header: "Hành động",
        //@ts-ignore
        accessor: (row) => row,
        // @ts-ignore
        Cell: (row) => {
          const data = row["row"]["original"];
          return (
            <div className="space-x-2">
              <button
                onClick={() => {
                  navigate(`/donhang/details/${data["id"]}`);
                }}
                className="font-semibold text-indigo-500 cursor-pointer hover:text-indigo-700 p-1 hover:bg-indigo-300 text-left rounded transition w-fit"
              >
                Chi tiết
              </button>
            </div>
          );
        },
      },
    ];
  }, []);
  const data = useMemo(() => donHangs || [], [donHangs]);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ data, columns });
  return (
    <Fragment>
      <main className="flex-1 mb-8">
        {/* Page title & actions */}
        <div className="border-b border-gray-200 mt-4 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="flex-1 min-w-0">
            <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
              Quản lí sản phẩm
            </h1>
          </div>
        </div>
        {loading && <Loading />}
        {!loading && dhData && (
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5">
                  <table
                    {...getTableProps()}
                    className="min-w-full divide-y divide-gray-300"
                  >
                    <thead className="bg-gray-50">
                      {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map((column) => (
                            <th
                              className="py-3.5 px-2 text-left text-sm font-semibold text-gray-900"
                              {...column.getHeaderProps()}
                            >
                              {column.render("Header")}
                            </th>
                          ))}
                        </tr>
                      ))}
                    </thead>
                    <tbody
                      {...getTableBodyProps()}
                      className="divide-y divide-gray-200 bg-white"
                    >
                      {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                          <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                              return (
                                <td
                                  className="whitespace-nowrap py-[0.5rem] px-2 text-sm font-medium text-gray-600"
                                  {...cell.getCellProps()}
                                >
                                  {cell.render("Cell")}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </Fragment>
  );
};

export default DanhSachDonHangChoUser;
