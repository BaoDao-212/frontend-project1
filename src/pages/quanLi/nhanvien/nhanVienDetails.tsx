import { BanIcon } from "@heroicons/react/outline";
import { FC, Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../../components/Loading";
import { useNhanVienDetailsQuery } from "../../../graphql/generated/schema";
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
const NhanVienDetails: FC<Props> = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data, loading } = useNhanVienDetailsQuery({
    variables: {
      input: {
        NhanVienId: params.id!,
      },
    },
    onCompleted(data) {
      const { xemThongTinNhanVienChoQuanLi } = data;
      if (xemThongTinNhanVienChoQuanLi.error) {
        toast.error(xemThongTinNhanVienChoQuanLi.error.message);
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
  const NhanVien = data?.xemThongTinNhanVienChoQuanLi.nhanVien;

  return (
    <Fragment>
      {loading && <Loading />}
      {!loading && NhanVien && (
        <div className="overflow-hidden bg-white py-4 pr-10">
          <div className="pl-4 py-5 sm:px-6 mt-2 ">
            <h3 className="text-3xl font-bold leading-6 text-indigo-700 mb-6 pb-6 border-b border-gray-300">
              Thông tin nhân viên
            </h3>
          </div>
          <div className="grid grid-cols-12 pl-6">
            <div className="col-span-8 shadow-md rounded-sm">
              {[
                ["Căn cước công dân", NhanVien.canCuocCongDan],
                ["Lương ", NhanVien.luong, "(VNĐ)"],
                ["Ca làm việc", NhanVien.caLamViec, "(VNĐ)"],
                ["Email liên hệ ", NhanVien.MailLienHe, "(VNĐ)"],
                ["Ngày bắt đầu làm", NhanVien.ngayBatDauLam],
                ["Chi nhánh", NhanVien.chiNhanh],
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
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => navigate("/manager/nv")}
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
export default NhanVienDetails;
