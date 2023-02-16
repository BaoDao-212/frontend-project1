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
  LoaiSanPham,
  StoredFileInputType,
  useThemSanPhamMutation,
} from "../../../graphql/generated/schema";
import { getApolloErrorMessage } from "../../../utils/getApolloErrorMessage";

type AddSanPhamInputForm = {
  ten: string;
  loaiSanPham: LoaiSanPham;
  soTien: number;
  moTaSanPham: string;
};

const AddSanPhamInputSchema = yup.object().shape({
  ten: yup.string().required("Cần điền thông tin"),
  moTaSanPham: yup.string().required("Cần điền thông tin"),
  soTien: yup.number().required("Cần điền thông tin"),
});
type Props = {};
const AddSanPham: FC<Props> = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState<File[]>();
  const [loadingMain, setLoadingMain] = useState(false);
  const {
    register,
    formState: { errors },
    getValues,
    reset,
    handleSubmit,
  } = useForm<AddSanPhamInputForm>({
    mode: "onBlur",
    resolver: yupResolver(AddSanPhamInputSchema),
  });

  const [AddSanPham] = useThemSanPhamMutation();
  const submitHandler = async () => {
    let sendImage: StoredFileInputType | null = null;
    try {
      setLoadingMain(true);
      const formData = new FormData();
      if (images && images.length > 0) {
        images.forEach((f) => formData.append("file", f));
        formData.append("storagePath", "bao/sp/avatars");
        const res = await axios.post(SERVER_URL + "/upload/file", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        sendImage = res.data["fileReference"];
      }
      const { loaiSanPham, moTaSanPham, soTien, ten } = getValues();
      await AddSanPham({
        variables: {
          input: {
            loaiSanPham,
            ten,
            moTaSanPham,
            soTien: +soTien,
            avatar: sendImage,
          },
        },
        onCompleted(data) {
          const { addSanPham } = data;
          if (addSanPham.error) {
            toast.error(addSanPham.error.message);
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
            Thêm nhân khẩu
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
                      {images?.map((i, b) => (
                        <img
                          key={b}
                          className="object-center bg-center mt-1 ml-1 w-52 h-60"
                          src={URL.createObjectURL(i)}
                        />
                      ))}
                    </div>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 items-center"
                      >
                        <span>Tải ảnh lên</span>
                        <input
                          onChange={(e) => {
                            if (e.target.files) setImages([...e.target.files]);
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
                  id="soTien"
                  registerReturn={register("soTien")}
                  labelText="Số tiền"
                  errorMessage={errors.soTien?.message}
                  type={"number"}
                />
              </div>

              <div className="col-span-1">
                <FormInput
                  id="moTaSanPham"
                  registerReturn={register("moTaSanPham")}
                  labelText="Mô tả sản phẩm"
                  errorMessage={errors.moTaSanPham?.message}
                  type={"text"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 flex justify-end space-x-3">
        <button
          onClick={() => navigate("/manager/")}
          type="button"
          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Huỷ
        </button>
        {/* <button onClick={handleSubmit(submitHandler)}>Thêm</button> */}
        <LoadingButton
          loading={loadingMain}
          text="Thêm sản phẩm"
          className="w-fit"
        />
      </div>
    </form>
  );
};
export default AddSanPham;
