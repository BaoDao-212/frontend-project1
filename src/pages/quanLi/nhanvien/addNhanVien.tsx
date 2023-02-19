import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { FormInput } from "../../../components/form/FormInput";
import LoadingButton from "../../../components/form/LoadingButton";
import SelectInput2 from "../../../components/form/SelectInput2";
import { SERVER_URL } from "../../../config";
import {
  CaLamViec,
  StoredFileInputType,
  useThemNhanVienMutation,
} from "../../../graphql/generated/schema";
import { getApolloErrorMessage } from "../../../utils/getApolloErrorMessage";

type AddNhanVienInputForm = {
  chiNhanh: string;
  gioiTinh: string;
  ten: string;
  soDienThoai: string;
  ngayBatDauLamViec: Date;
  canCuocCongDan: string;
  MailLienHe: string;
  caLamViec: CaLamViec;
  luong: number;
};

const AddNhanVienInputSchema = yup.object().shape({
  luong: yup.number(),
  ngayBatDauLamViec: yup.date(),
  chiNhanh: yup.string().required("Cần điền thông tin"),
  gioiTinh: yup.string().required("Cần điền thông tin"),
  ten: yup.string().required("Cần điền thông tin"),
  soDienThoai: yup.string().required("Cần điền thông tin"),
  canCuocCongDan: yup.string().required("Cần điền thông tin"),
  MailLienHe: yup.string().required("Cần điền thông tin"),
});
type Props = {};
const AddNhanVien: FC<Props> = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState<File[]>();
  const [loadingMain, setLoadingMain] = useState(false);
  const {
    register,
    formState: { errors },
    getValues,
    reset,
    handleSubmit,
  } = useForm<AddNhanVienInputForm>({
    mode: "onBlur",
    resolver: yupResolver(AddNhanVienInputSchema),
  });

  const [addNhanVien] = useThemNhanVienMutation();
  const submitHandler = async () => {
    try {
      await addNhanVien({
        variables: {
          input: {
            caLamViec: getValues("caLamViec"),
            gioiTinh: getValues("gioiTinh"),
            chiNhanh: getValues("chiNhanh"),
            ten: getValues("ten"),
            soDienThoai: getValues("soDienThoai"),
            luong: +getValues("luong"),
            MailLienHe: getValues("MailLienHe"),
            canCuocCongDan: getValues("canCuocCongDan"),
            ngayBatDauLam: getValues("ngayBatDauLamViec"),
          },
        },
        onCompleted(data) {
          const { addNhanVien } = data;
          if (addNhanVien.error) {
            toast.error(addNhanVien.error.message);
            throw new Error();
          }
          reset();
          setImages(undefined);
          toast.success("Thêm thành công");
        },
        onError(err) {
          const msg = getApolloErrorMessage(err);
          if (msg) toast.error(msg);
          else toast.error("Lỗi xảy ra, thử lại sau");
          throw new Error();
        },
      });
    } catch (err) {
    } finally {
      setLoadingMain(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="space-y-8 pl-12 pr-16 pt-12 pb-16 "
    >
      <div className="space-y-8 sm:space-y-5">
        <div className="flex flex-col">
          <h3 className="leading-6 font-semibold text-gray-900 text-2xl mb-8">
            Thêm nhân viên
          </h3>
          <div className="space-y-4">
            <h1 className="text-indigo-700 font-bold text-lg mb-4">
              Thông tin cơ bản
            </h1>
            <div className="pl-4 grid grid-cols-2 gap-x-8 gap-y-4">
              <div className="col-span-1">
                <FormInput
                  id="chiNhanh"
                  registerReturn={register("chiNhanh")}
                  labelText="Chi nhánh (*)"
                  errorMessage={errors.chiNhanh?.message}
                  type={"text"}
                />
              </div>
              <div className="col-span-1">
                <FormInput
                  id="ten"
                  registerReturn={register("ten")}
                  labelText="Họ tên (*)"
                  errorMessage={errors.ten?.message}
                  type={"text"}
                />
              </div>
              <div className="col-span-1">
                <FormInput
                  id="soDienThoai"
                  registerReturn={register("soDienThoai")}
                  labelText="Số điện thoại(*)"
                  errorMessage={errors.soDienThoai?.message}
                  type={"text"}
                />
              </div>

              <div className="col-span-1">
                <FormInput
                  id="MailLienHe"
                  registerReturn={register("MailLienHe")}
                  labelText="Liên hệ (*)"
                  errorMessage={errors.MailLienHe?.message}
                  type={"email"}
                />
              </div>
              <div className="col-span-1">
                <FormInput
                  id="canCuocCongDan"
                  registerReturn={register("canCuocCongDan")}
                  labelText="Căn cước công dân"
                  errorMessage={errors.canCuocCongDan?.message}
                  type={"text"}
                />
              </div>
              <div className="col-span-1">
                <FormInput
                  id="luong"
                  registerReturn={register("luong")}
                  labelText="Lương cơ bản"
                  errorMessage={errors.luong?.message}
                  type={"number"}
                />
              </div>
              <div className="col-span-1">
                <SelectInput2
                  id="gioiTinh"
                  registerReturn={register("gioiTinh")}
                  labelText="Giới tính(*)"
                  errorMessage={errors.gioiTinh?.message}
                  showedValues={["Nam", "Nu"]}
                  values={["Nam", "Nu"]}
                />
              </div>
              <div className="col-span-1">
                <SelectInput2
                  id="caLamViec"
                  registerReturn={register("caLamViec")}
                  labelText="Ca làm việc(*)"
                  errorMessage={errors.caLamViec?.message}
                  showedValues={Object.keys(CaLamViec)}
                  values={Object.values(CaLamViec)}
                />
              </div>
              <div className="col-span-1">
                <FormInput
                  id="ngayBatDauLamViec"
                  registerReturn={register("ngayBatDauLamViec")}
                  labelText="Ngày vào"
                  errorMessage={errors.ngayBatDauLamViec?.message}
                  type={"date"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 flex justify-end space-x-3">
        <button
          onClick={() => navigate("/manager/nv")}
          type="button"
          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Huỷ
        </button>
        {/* <button onClick={handleSubmit(submitHandler)}>Thêm</button> */}
        <LoadingButton
          loading={loadingMain}
          text="Thêm người"
          className="w-fit"
        />
      </div>
    </form>
  );
};
export default AddNhanVien;
