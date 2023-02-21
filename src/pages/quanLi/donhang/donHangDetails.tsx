import { BanIcon, CakeIcon } from "@heroicons/react/outline";
import { FC, Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../../components/Loading";
import { LoaiSanPham, TrangThaiDonHang, useDonHangDetailsQuery } from "../../../graphql/generated/schema";
import { getApolloErrorMessage } from "../../../utils/getApolloErrorMessage";

const InfoField: FC<{
  title: string;
  value?: string | null;
  gray?: boolean;
}> = ({ title, value, gray }) => {
  const color = gray ? "bg-gray-50" : "bg-white";
  return (
    <div
      className={
        "px-4 py-[0.85rem] sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 " + color
      }
    >
      <dt className="text-sm font-medium text-gray-500">{title}</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
        {value || "Không có thông tin"}
      </dd>
    </div>
  );
};

type Props = {};
const DonHangDetails2: FC<Props> = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { data, loading } = useDonHangDetailsQuery({
    variables: {
      input: {
        DonHangId: params.id!,
      },
    },
    onCompleted(data) {
      const { xemThongTinDonHangChoQuanLi } = data;
      if (xemThongTinDonHangChoQuanLi.error) {
        toast.error(xemThongTinDonHangChoQuanLi.error.message);
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
  const DonHang = data?.xemThongTinDonHangChoQuanLi.DonHang;
  console.log(DonHang?.soluong[1]);

  return (
    <Fragment>
      {loading && <Loading />}
      {!loading && DonHang && (
        <div className="overflow-hidden bg-white py-4 pr-10">
          <div className="pl-4 py-5 sm:px-6 mt-2 ">
            <h3 className="text-3xl font-bold leading-6 text-indigo-700 mb-6 pb-6 border-b border-gray-300">
              Thông tin sản phẩm
            </h3>
          </div>
          <div className=" flex flex-col  pl-6">
            <div className="col-span-8 shadow-md rounded-sm">
              {[
                ["Tổng tiền", DonHang.tongTienPhaiTra],
                ["Người mua", DonHang.nguoiMua.ten],
                ["Thông tin đơn hàng", DonHang.ghiChu],
                [
                  "Trạng thái đơn hàng",
                  DonHang.trangThaiDonHang == TrangThaiDonHang.Oke
                    ? "Oke"
                    : "Đang chờ phê duyệt",
                ],
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
            <div className="flex flex-row space-x-3 py-5">
              {DonHang.sanPham.length > 0 &&
                DonHang.sanPham.map(
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
                            <h1 className="text-lg text-green-600 font-semibold text-center">
                              {" "}
                              Số lượng: {DonHang?.soluong[i]}
                            </h1>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => navigate("/manager/donhang/show")}
              className="px-5 py-2 bg-indigo-600 rounded text-white font-semibold hover:bg-indigo-700"
            >
              Trở về
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default DonHangDetails2;
