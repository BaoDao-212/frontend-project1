import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { omitBy } from "lodash";
import { FC, Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { FormInput } from "../../../components/form/FormInput";
import LoadingButton from "../../../components/form/LoadingButton";
import SelectInput2 from "../../../components/form/SelectInput2";
import Loading from "../../../components/Loading";
import { SERVER_URL } from "../../../config";
import {
  CaLamViec,
  useEditNhanVienMutation,
  useNhanVienDetailsQuery,
} from "../../../graphql/generated/schema";
import { getApolloErrorMessage } from "../../../utils/getApolloErrorMessage";

const FixField: FC<{
  labelText: string;
  value?: string | null;
}> = ({ labelText, value }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 text-start">
        {labelText}
      </label>
      <div className="mt-1">
        <input
          disabled
          value={value || "Không có thông tin"}
          className="appearance-none block w-full h-11 px-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-100"
        />
      </div>
    </div>
  );
};

type EditNhanVienInputForm = {
  chiNhanh: string;
  MailLienHe: string;
  canCuocCongDan: string;
  caLamViec: CaLamViec;
  luong: number;
};

const UpdateNhanVienInputSchema = yup.object().shape({
  luong: yup.number(),
  MailLienHe: yup.string(),
  chiNhanh: yup.string(),
});
type Props = {};
const EditNhanVien: FC<Props> = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [image, setImage] = useState<File>();
  const [loadingMain, setLoadingMain] = useState(false);
  const {
    register,
    formState: { errors },
    getValues,
    reset,
    handleSubmit,
  } = useForm<EditNhanVienInputForm>({
    mode: "onBlur",
    resolver: yupResolver(UpdateNhanVienInputSchema),
  });
  const { data, loading: getNhanVienLoading } = useNhanVienDetailsQuery({
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
      const NhanVien = data.xemThongTinNhanVienChoQuanLi.nhanVien;
      if (!NhanVien) {
        toast.error("Không tìm thấy người dùng");
        return;
      }
      reset({
        chiNhanh: NhanVien.chiNhanh || undefined,
        MailLienHe: NhanVien.MailLienHe,
        canCuocCongDan: NhanVien.canCuocCongDan || undefined,
        caLamViec: NhanVien.caLamViec,
        luong: NhanVien.luong || undefined,
      });
    },
    onError(err) {
      const message = getApolloErrorMessage(err);
      if (message) {
        toast.error(message);
        return;
      }
      toast.error("Lỗi xảy ra, thử lại sau");
    },
  });
  const [editNhanVien] = useEditNhanVienMutation();
  const submitHandler = async () => {
    try {
      setLoadingMain(true);
      await editNhanVien({
        variables: {
          input: {
            MailLienHe: getValues("MailLienHe"),
            caLamViec: getValues("caLamViec"),
            luong: +getValues("luong"),
            chiNhanh: getValues("chiNhanh"),
          },
        },
        onCompleted(data) {
          const { editNhanVien } = data;
          if (editNhanVien.error) {
            toast.error(editNhanVien.error.message);
            throw new Error();
          }
          toast.success("Cập nhật thành công");
        },
        onError(err) {
          // console.log(err);
          const msg = getApolloErrorMessage(err);
          if (msg) toast.error(msg);
          else toast.error("Lỗi xảy ra, thử lại sau");
          throw err;
        },
      });
    } catch (err) {
      toast.error("Lỗi xảy ra, thử lại sau");
    } finally {
      setLoadingMain(false);
    }
  };
  const NhanVien = data?.xemThongTinNhanVienChoQuanLi.nhanVien;
  return (
    <Fragment>
      {getNhanVienLoading && <Loading />}
      {NhanVien && !getNhanVienLoading && (
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="space-y-8 pl-12 pr-16 pt-12 pb-16 "
        >
          <div className="space-y-8 sm:space-y-5">
            <div className="flex flex-col">
              <h3 className="leading-6 font-semibold text-indigo-600 text-2xl mb-8">
                Cập nhật thông tin nhân viên
              </h3>
              <div className="space-y-4">
                <h1 className="text-indigo-700 font-bold text-lg mb-4">
                  Thông tin cơ bản
                </h1>
                <div className="pl-4 grid grid-cols-2 gap-x-8 gap-y-4">
                  <div className="col-span-1">
                    <FormInput
                      id="canCuocCongDan"
                      registerReturn={register("canCuocCongDan")}
                      labelText="Căn cước công dân (*)"
                      errorMessage={errors.canCuocCongDan?.message}
                      type={"text"}
                    />
                  </div>
                  <div className="col-span-1">
                    <FormInput
                      id="MailLienHe"
                      registerReturn={register("MailLienHe")}
                      labelText="Email liên hệ (*)"
                      errorMessage={errors.MailLienHe?.message}
                      type={"email"}
                    />
                  </div>
                  <div className="col-span-1">
                    <FormInput
                      id="chiNhanh"
                      registerReturn={register("chiNhanh")}
                      labelText="Chi nhánh"
                      errorMessage={errors.chiNhanh?.message}
                      type={"text"}
                    />
                  </div>
                  <div className="col-span-1">
                    <FormInput
                      id="luong"
                      registerReturn={register("luong")}
                      labelText="Lương cơ bản"
                      errorMessage={errors.luong?.message}
                      type={"text"}
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
            <LoadingButton
              loading={loadingMain}
              text="Cập nhật"
              className="w-fit"
            />
          </div>
        </form>
      )}
    </Fragment>
  );
};
export default EditNhanVien;
