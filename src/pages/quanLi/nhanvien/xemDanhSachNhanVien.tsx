import { UserCircleIcon } from "@heroicons/react/outline";
import { Fragment, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTable } from "react-table";
import { toast } from "react-toastify";
import TextSearchInput from "../../../components/form/TextSearchInput";
import Loading from "../../../components/Loading";
import {
  CaLamViec,
  useDanhSachNhanVienLazyQuery,
} from "../../../graphql/generated/schema";
import { getApolloErrorMessage } from "../../../utils/getApolloErrorMessage";

type ByState = {
  canCuocCongDan?: string;
  soDienThoai?: string;
};

type Props = {};
const DanhSachNhanVien = (props: Props) => {
  const navigate = useNavigate();
  const [getNhanViens, { data: spData, loading }] =
    useDanhSachNhanVienLazyQuery({
      onCompleted(data) {
        const { xemDanhSachNhanVien } = data;
        if (xemDanhSachNhanVien.error) {
          toast.error(xemDanhSachNhanVien.error.message);
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
  const [byState, setByState] = useState<ByState>({
    canCuocCongDan: undefined,
    soDienThoai: undefined,
  });
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    let { canCuocCongDan, soDienThoai } = byState;
    getNhanViens({
      variables: {
        input: {
          canCuocCongDan,
          soDienThoai,
          paginationInput: {
            page,
            resultsPerPage: 16,
          },
        },
      },
    });
  }, [byState, page]);
  const NhanViens = spData?.xemDanhSachNhanVien.nhanViens;
  const columns = useMemo(() => {
    return [
      {
        Header: "Liên hệ",
        // @ts-ignore
        accessor: (row) => {
          return row["MailLienHe"];
        },
      },
      {
        Header: "Chi nhánh",
        // @ts-ignore
        accessor: (row) => {
          return row["chiNhanh"];
        },
      },
      {
        Header: "Ca làm việc",
        // @ts-ignore
        accessor: (row) => {
          return row["caLamViec"] == CaLamViec.Chieu
            ? "Chiều"
            : row["caLamViec"] == CaLamViec.Toi
            ? "Tối"
            : "Sáng";
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
                  navigate(`/manager/nv/detail/${data["id"]}`);
                }}
                className="font-semibold text-indigo-500 cursor-pointer hover:text-indigo-700 p-1 hover:bg-indigo-300 text-left rounded transition w-fit"
              >
                Chi tiết
              </button>
              <button
                onClick={() => {
                  navigate(`/manager/nv/edit/${data["id"]}`);
                }}
                className="font-semibold text-indigo-500 cursor-pointer hover:text-indigo-700 p-1 hover:bg-indigo-300 text-left rounded transition w-fit"
              >
                Cập nhật
              </button>
            </div>
          );
        },
      },
    ];
  }, []);
  const data = useMemo(() => NhanViens || [], [NhanViens]);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ data, columns });
  console.log(spData);
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
          <div className="mt-4 sm:mt-0 sm:ml-16 flex space-x-3">
            <TextSearchInput
              labelText="Căn cước công dân"
              setText={(v) =>
                setByState((pre) => ({ ...pre, canCuocCongDan: v }))
              }
            />
            <TextSearchInput
              labelText="Số điện thoại"
              setText={(v) => setByState((pre) => ({ ...pre, soDienThoai: v }))}
            />
            <button
              onClick={() => navigate("/manager/nv/add")}
              className=" w-fit h-fit flex my-auto justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Thêm mới
            </button>
          </div>
        </div>
        {loading && <Loading />}
        {!loading && spData && (
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

export default DanhSachNhanVien;
