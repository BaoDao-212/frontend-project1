import { removeArgumentsFromDocument } from "@apollo/client/utilities";
import { BanIcon, CakeIcon } from "@heroicons/react/outline";
import { cloneDeep } from "lodash";
import { FC, Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { number } from "yup";
import {
  LoaiSanPham,
  useThongKeQuery,
} from "../../../graphql/generated/schema";
import { getApolloErrorMessage } from "../../../utils/getApolloErrorMessage";

const InfoField: FC<{
  title: string;
  value?: string;
  gray?: boolean;
}> = ({ title, value, gray }) => {
  const color = gray ? "bg-gray-80" : "bg-white";
  return (
    <div
      className={
        "px-4 py-[0.85rem] sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 " + color
      }
    >
      <dt className="text-sm font-medium text-gray-500">{title}</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
        {value}
      </dd>
    </div>
  );
};
type Props = {};

const ThongKe: FC<Props> = (props: Props) => {
  const navigate = useNavigate();
  const { data: thongKeData, loading } = useThongKeQuery({
    onCompleted(data) {
      const { ThongKeChoQuanLy } = data;
      if (ThongKeChoQuanLy.error) {
        if (ThongKeChoQuanLy.error) {
          toast.error(ThongKeChoQuanLy.error.message);
          return;
        }
      }
    },
    onError(err) {
      const msg = getApolloErrorMessage(err);
      if (msg) {
        toast.error(msg);
        return;
      }
      toast.error("Lỗi xảy ra, thử lại sau ");
    },
  });
  const soNguoiDangKi = thongKeData?.ThongKeChoQuanLy?.soNguoiDangKi;
  useEffect(() => {
    if (!soNguoiDangKi) return;
  }, [number]);
  const soDonHangThangNay = thongKeData?.ThongKeChoQuanLy?.soDonHangThangNay;
  useEffect(() => {
    if (!soDonHangThangNay) return;
  }, [number]);
  const soNhanVien = thongKeData?.ThongKeChoQuanLy?.soNhanVien;
  useEffect(() => {
    if (!soNhanVien) return;
  }, [number]);
  const soSanPham = thongKeData?.ThongKeChoQuanLy?.soSanPham;
  useEffect(() => {
    if (!soSanPham) return;
  }, [number]);
  const doanhThuTrongThang = thongKeData?.ThongKeChoQuanLy?.doanhThuTrongThang;
  useEffect(() => {
    if (!doanhThuTrongThang) return;
  }, [number]);
  const tienLuongCuaTatCaNhanVien =
    thongKeData?.ThongKeChoQuanLy?.tienLuongCuaTatCaNhanVien;
  useEffect(() => {
    if (!tienLuongCuaTatCaNhanVien) return;
  }, [number]);
  const sanPhams = thongKeData?.ThongKeChoQuanLy?.sanPhamBanChay;
  useEffect(() => {
    if (!sanPhams) return;
  }, []);

  return (
    <Fragment>
      <div className="  overflow-hidden bg-white py-4 pr-10 ">
        <div>
          <h1 className="text-3xl font-bold leading-6 text-indigo-700 mb-6 pb-6 border-b border-gray-300">
            Danh sách các sản phẩm bán chạy nhất
          </h1>
          <div className="flex md:flex-row flex-wrap justify-center gap-6 ">
            {sanPhams &&
              sanPhams.length > 0 &&
              sanPhams.map(
                ({ soTien, ten, avatar, loaiSanPham, moTaSanPham }, i) => {
                  return (
                    <div className="bg-white shadow-md w-52 overflow-hidden rounded-xl bg-white border rounded-md cursor-pointer">
                      <div className="relative">
                        <div className="flex">
                          {avatar && (
                            <img
                              className="h-56 w-full object-center"
                              src={avatar.fileUrl}
                              alt="image"
                            />
                          )}
                          {!avatar && loaiSanPham == LoaiSanPham.DoNgot && (
                            <CakeIcon className="h-56  object-center" />
                          )}
                          {!avatar && loaiSanPham == LoaiSanPham.NuocUong && (
                            <BanIcon className="h-56  object-center" />
                          )}
                        </div>
                        <div className=" hover:bg-indigo-200 hover:text-white">
                          <h1 className="text-lg capitalize font-semibold text-center">
                            {ten}
                          </h1>
                          <h1 className="text-lg text-red-600 font-semibold text-center">
                            {soTien}
                            (VNĐ)
                          </h1>
                          <h1 className="bg-purple-200 text-purple-900 uppercase text-center font-semibold text-sm py-1 px-2 w-full rounded inline-block items-center">
                            {loaiSanPham == LoaiSanPham.DoNgot
                              ? "Đồ ngọt"
                              : "Nước uống"}
                          </h1>
                          <button
                            onClick={() => {
                              navigate(`/manager/sp/detail/${sanPhams[i].id}`);
                            }}
                            className="items-center font-semibold text-indigo-500 cursor-pointer hover:text-indigo-700 p-1 hover:bg-indigo-300 text-center rounded transition w-full"
                          >
                            Chi tiết
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
          </div>
        </div>
        <div className="pl-4 py-5 sm:px-6 mt-2  w-full">
          <h3 className="text-3xl font-bold leading-6 text-indigo-700 mb-6 pb-6 border-b border-gray-300">
            Quản lí thông tin chung
          </h3>
        </div>
        <div className="pl-6">
          <div className="col-span-8 shadow-md rounded-sm">
            {[
              ["Số người đã đăng ký tài khoản:", soNguoiDangKi],
              ["Số đơn hàng tháng này", soDonHangThangNay],
              ["Số người nhân viên", soNhanVien],
              ["Tổng doanh thu trong tháng này", doanhThuTrongThang],
              ["Tiền lương của tất cả nhân viên", tienLuongCuaTatCaNhanVien],
              ["Số sản phẩm đang bán hiện tại", soSanPham],
            ].map(([title, value], i) => {
              let gray = true;
              if (i % 2 == 0) gray = false;
              return (
                <InfoField
                  key={i}
                  title={title?.toString() || ""}
                  gray={gray}
                  value={value?.toString()}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ThongKe;
