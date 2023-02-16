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
  LoaiSanPham,
  StoredFileInputType,
  TrangThai,
  useEditSanPhamMutation,
  useSanPhamDetailsQuery,
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

type EditSanPhamInputForm = {
  ten: string;
  motaSanPham: string;
  loaiSanPham: LoaiSanPham;
  trangthai: TrangThai;
  soTien: number;
};

const UpdateSanPhamInputSchema = yup.object().shape({
  ten: yup.string(),
  soTien: yup.number(),
});
type Props = {};
const EditSanPham: FC<Props> = () => {
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
  } = useForm<EditSanPhamInputForm>({
    mode: "onBlur",
    resolver: yupResolver(UpdateSanPhamInputSchema),
  });
  const { data, loading: getSanPhamLoading } = useSanPhamDetailsQuery({
    variables: {
      input: {
        SanPhamId: params.id!,
      },
    },
    onCompleted(data) {
      const { xemThongTinSanPham } = data;
      if (xemThongTinSanPham.error) {
        toast.error(xemThongTinSanPham.error.message);
        return;
      }
      const SanPham = data.xemThongTinSanPham.sanpham;
      if (!SanPham) {
        toast.error("Không tìm thấy sản phẩm");
        return;
      }
      reset({
        motaSanPham: SanPham.moTaSanPham || undefined,
        ten: SanPham.ten,
        soTien: SanPham.soTien!,
        loaiSanPham: SanPham.loaiSanPham,
        trangthai: SanPham.trangthai!,
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
  const [editSanPham] = useEditSanPhamMutation();
  const submitHandler = async () => {
    const oldFilePath = SanPham?.avatar?.filePath;
    let sendImage: StoredFileInputType | undefined;
    try {
      setLoadingMain(true);
      if (image) {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("storagePath", "bao/sp/avatars");
        console.log(image);
        const res = await axios.post(SERVER_URL + "/upload/file", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        // console.log(res);
        sendImage = res.data["fileReference"];
      }
      const { loaiSanPham, motaSanPham, soTien, ten, trangthai } = getValues();
      await editSanPham({
        variables: {
          input: {
            loaiSanPham,
            soTien,
            ten,
            trangThai: trangthai,
            moTaSanPham: motaSanPham,
            avatar: sendImage || undefined,
            sanPhamId: params.id!,
          },
        },
        onCompleted(data) {
          const { editSanPham } = data;
          if (editSanPham.error) {
            toast.error(editSanPham.error.message);
            throw new Error();
          }
          toast.success("Cập nhật thành công");
        },
        onError(err) {
          console.log(err);
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
  const SanPham = data?.xemThongTinSanPham.sanpham;
  return (
    <Fragment>
      {getSanPhamLoading && <Loading />}
      {SanPham && !getSanPhamLoading && (
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="space-y-8 pl-12 pr-16 pt-12 pb-16 "
        >
          <div className="space-y-8 sm:space-y-5">
            <div className="flex flex-col">
              <h3 className="leading-6 font-semibold text-indigo-600 text-2xl mb-8">
                Cập nhật sản phẩm
              </h3>
              <div className="space-y-4">
                <label
                  htmlFor="cover-photo"
                  className="block text-lg text-indigo-700 font-bold"
                >
                  Ảnh
                </label>
                <div className="w-60 mx-auto mb-4">
                  <div className="w-full">
                    <div className="max-w-lg w-full flex justify-center p-4 border-2 border-gray-300 border-dashed rounded-md ">
                      <div className="text-center flex flex-col space-y-3 items-center">
                        <div className="flex flex-wrap w-full items-center justify-center">
                          {SanPham.avatar?.filePath && !image && (
                            <img
                              className="object-center bg-center mt-1 ml-1 w-52 h-60"
                              src={SanPham.avatar.fileUrl}
                            />
                          )}
                          {image && (
                            <img
                              className="object-center bg-center mt-1 ml-1 w-52 h-60"
                              src={URL.createObjectURL(image)}
                            />
                          )}
                        </div>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 items-center"
                          >
                            <span>Tải ảnh lên</span>
                            <input
                              onChange={(e) => {
                                if (e.target.files) setImage(e.target.files[0]);
                              }}
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                              multiple
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className="text-indigo-700 font-bold text-lg mb-4">
                  Thông tin cơ bản
                </h1>
                <div className="pl-4 grid grid-cols-2 gap-x-8 gap-y-4">
                  <div className="col-span-1">
                    <FormInput
                      id="ten"
                      registerReturn={register("ten")}
                      labelText="Tên sản phẩm (*)"
                      errorMessage={errors.ten?.message}
                      type={"text"}
                    />
                  </div>
                  <div className="col-span-1">
                    <FormInput
                      id="soTien"
                      registerReturn={register("soTien")}
                      labelText="Giá bán (*)"
                      errorMessage={errors.soTien?.message}
                      type={"text"}
                    />
                  </div>

                  <div className="col-span-1">
                    <SelectInput2
                      id="trangthai"
                      registerReturn={register("trangthai")}
                      labelText="Trạng thái(*)"
                      errorMessage={errors.trangthai?.message}
                      showedValues={Object.keys(TrangThai)}
                      values={Object.values(TrangThai)}
                    />
                  </div>
                  <div className="col-span-1">
                    <SelectInput2
                      id="loaiSanPham"
                      registerReturn={register("loaiSanPham")}
                      labelText="Loại sản phẩm(*)"
                      errorMessage={errors.loaiSanPham?.message}
                      showedValues={Object.keys(LoaiSanPham)}
                      values={Object.values(LoaiSanPham)}
                    />
                  </div>
                  <div className="col-span-1">
                    <FormInput
                      id="motaSanPham"
                      registerReturn={register("motaSanPham")}
                      labelText="Mô tả sản phẩm (*)"
                      errorMessage={errors.motaSanPham?.message}
                      type={"text"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-5 flex justify-end space-x-3">
            <button
              onClick={() => navigate("/manager/sp")}
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
export default EditSanPham;
