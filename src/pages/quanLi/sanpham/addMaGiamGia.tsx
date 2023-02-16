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
import {
  TypeDiscount,
  useThemMaGiamGiaMutation,
} from "../../../graphql/generated/schema";
import { getApolloErrorMessage } from "../../../utils/getApolloErrorMessage";

type AddVoucherInputForm = {
  codeVoucher: string;
  minAmount: number;
  voucherAmount: number;
  startDate: Date;
  endDate: Date;
  typeDiscount: TypeDiscount;
};
const AddVoucherInputSchema = yup.object().shape({
  codeVoucher: yup.string().required("Cần điền thông tin"),
  minAmount: yup.number().required("Cần điền thông tin"),
  voucherAmount: yup.number().required("Cần điền thông tin"),
  startDate: yup.date().required("Cần điền thông tin"),
  endDate: yup.date().required("Cần điền thông tin"),
});
type Props = {};
const AddVoucher: FC<Props> = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState<File[]>();
  const [loadingMain, setLoadingMain] = useState(false);
  const {
    register,
    formState: { errors },
    getValues,
    reset,
    handleSubmit,
  } = useForm<AddVoucherInputForm>({
    mode: "onBlur",
    resolver: yupResolver(AddVoucherInputSchema),
  });

  const [AddVoucher] = useThemMaGiamGiaMutation();
  const submitHandler = async () => {
    try {
      const {
        codeVoucher,
        endDate,
        minAmount,
        startDate,
        typeDiscount,
        voucherAmount,
      } = getValues();
      await AddVoucher({
        variables: {
          input: {
            codeVoucher,
            endDate,
            minAmount: +minAmount,
            startDate,
            typeDiscount,
            voucherAmount: +voucherAmount,
          },
        },
        onCompleted(data) {
          const { addMaGiamGia } = data;
          if (addMaGiamGia.error) {
            toast.error(addMaGiamGia.error.message);
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
            Thêm mã giảm giá
          </h3>
          <div className="space-y-4">
            <h1 className="text-indigo-700 font-bold text-lg mb-4">
              Thông tin cơ bản
            </h1>
            <div className="pl-4 grid grid-cols-2 gap-x-8 gap-y-4">
              <div className="col-span-1">
                <FormInput
                  id="codeVoucher"
                  registerReturn={register("codeVoucher")}
                  labelText="Mã giảm giá (*)"
                  errorMessage={errors.codeVoucher?.message}
                  type={"text"}
                />
              </div>

              <div className="col-span-1">
                <SelectInput2
                  id="typeDiscount"
                  registerReturn={register("typeDiscount")}
                  labelText="Loại mã giảm giá(*)"
                  errorMessage={errors.typeDiscount?.message}
                  showedValues={Object.keys(TypeDiscount)}
                  values={Object.values(TypeDiscount)}
                />
              </div>
              <div className="col-span-1">
                <FormInput
                  id="minAmount"
                  registerReturn={register("minAmount")}
                  labelText="Đơn tối thiểu từ(*)"
                  errorMessage={errors.minAmount?.message}
                  type={"number"}
                />
              </div>
              <div className="col-span-1">
                <FormInput
                  id="voucherAmount"
                  registerReturn={register("voucherAmount")}
                  labelText="Voucher(*)"
                  errorMessage={errors.voucherAmount?.message}
                  type={"number"}
                />
              </div>
              <div className="col-span-1">
                <FormInput
                  id="startDate"
                  registerReturn={register("startDate")}
                  labelText="Ngày bắt đầu"
                  errorMessage={errors.startDate?.message}
                  type={"date"}
                />
              </div>
              <div className="col-span-1">
                <FormInput
                  id="endDate"
                  registerReturn={register("endDate")}
                  labelText="Ngày hết hiệu lực"
                  errorMessage={errors.endDate?.message}
                  type={"date"}
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
        <LoadingButton
          loading={loadingMain}
          text="Thêm voucher"
          className="w-fit"
        />
      </div>
    </form>
  );
};
export default AddVoucher;
