import {
  CakeIcon,
  CurrencyEuroIcon,
  UserCircleIcon,
  XCircleIcon,
  XIcon,
} from "@heroicons/react/outline";
import { BanIcon } from "@heroicons/react/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import { cloneDeep, isNumber } from "lodash";
import { FC, isValidElement, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { number } from "yup/lib/locale";
import { FormInput2 } from "../../../components/form/FormInput2";
import LoadingButton from "../../../components/form/LoadingButton";
import SelectInput from "../../../components/form/SelectInput";
import TextSearchInput from "../../../components/form/TextSearchInput";
import PaginationNav from "../../../components/PaginationNav";
import {
  HinhThucMua,
  LoaiSanPham,
  SanPhamFragmentFragment,
  TrangThaiDonHang,
  TypeDiscount,
  useDanhSachSanPhamLazyQuery,
  useDanhSachVoucherChoUserLazyQuery,
  useDanhSachVoucherLazyQuery,
  useThemDonHangChoUserMutation,
  VoucherFragmentFragment,
} from "../../../graphql/generated/schema";
import { loadingWhite } from "../../../images";
import { getApolloErrorMessage } from "../../../utils/getApolloErrorMessage";

type ByState = {
  tenSanPham?: string;
};
type Props = {
  setSanPham: (sanPham: SanPhamFragmentFragment) => void;
  setVoucher: (voucher: VoucherFragmentFragment) => void;
};
const SanPhamData: FC<Props> = ({ setSanPham }) => {
  const [getSanPham, { data: sanPhamData, loading }] =
    useDanhSachSanPhamLazyQuery({
      onCompleted(data) {
        const { xemDanhSachSanPham } = data;
        if (xemDanhSachSanPham.error) {
          toast.error(xemDanhSachSanPham.error.message);
          return;
        }
      },
      onError(err) {
        const msg = getApolloErrorMessage(err);
        if (msg) {
          toast.error(msg);
          return;
        }
        toast.error("Lôi xảy ra, thử lại sau");
      },
    });
  const [byState, setByState] = useState<ByState>({
    tenSanPham: undefined,
  });
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    let { tenSanPham } = byState;
    getSanPham({
      variables: {
        input: {
          tenSanPham,
          paginationInput: {
            page,
            resultsPerPage: 8,
          },
        },
      },
    });
  }, [byState, page]);
  const SanPhams = sanPhamData?.xemDanhSachSanPham.sanPhams || [];
  return (
    <div className="flex flex-col space-y-3 w-full">
      <TextSearchInput
        labelText="Tên sản phẩm"
        setText={(v) => setByState((pre) => ({ ...pre, tenSanPham: v }))}
      />
      <div className="flex md:flex-row flex-wrap justify-start gap-6 ">
        {loading && (
          <img className="w-32 h-32 mx-auto" src={loadingWhite}></img>
        )}
        {SanPhams.length > 0 &&
          SanPhams.map(
            ({ soTien, ten, avatar, loaiSanPham, moTaSanPham }, i) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    setSanPham(SanPhams[i]);
                    // setCanShowResults(true);
                  }}
                >
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
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
      </div>
      <PaginationNav
        currentPage={page}
        setCurrentPage={setPage}
        totalPage={
          sanPhamData?.xemDanhSachSanPham.paginationOutput?.totalPages!
        }
      />
    </div>
  );
};
const SearchVoucherInputs: FC<Props> = ({ setVoucher }) => {
  const [getUsers, { loading }] = useDanhSachVoucherChoUserLazyQuery();
  const [results, setResults] = useState<VoucherFragmentFragment[]>([]);
  const [canShowResults, setCanShowResults] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // @ts-ignore
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        // setCanShowResults(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref]);
  useEffect(() => {
    const timer = setTimeout(() => {
      getUsers({
        onCompleted: (data) => {
          const { xemDanhSachMaGiamGiaChoUser } = data;
          setResults(Object(xemDanhSachMaGiamGiaChoUser.maGiamGias) || []);
          setCanShowResults(true);
        },
        onError: (error) => {
          const msg = getApolloErrorMessage(error);
          if (msg) {
            toast.error(msg);
            return;
          }
          toast.error("Lỗi xảy ra, vui lòng thử lại sau");
        },
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex flex-col grid-rows-2 space-y-3 mx-1 mb-2 p-3 ">
      <div className="flex flex-col space-y-2 relative">
        <label htmlFor="" className="text-gray-700 font-medium sm:text-sm">
          Mã giảm giá
        </label>
        <div ref={ref}>
          <div className="absolute top-full left-0 w-full flex flex-col space-y-1 rounded-md shadow-md bg-gray-200 z-10 ">
            {canShowResults &&
              results.length > 0 &&
              results.map(
                (
                  { codeVoucher, minAmount, voucherAmount, typeDiscount },
                  i
                ) => {
                  return (
                    <div
                      key={i}
                      onClick={() => {
                        setVoucher(results[i]);
                        setCanShowResults(false);
                      }}
                      className="p-2 w-40 bg-white border border-indigo-500 rounded-md m-1 cursor-pointer hover:bg-indigo-500 text-gray-700 font-medium sm:text-sm"
                    >
                      <h1>Mã giảm giá: {codeVoucher}</h1>
                      <h1>
                        Giảm {voucherAmount}(VNĐ) cho đơn tối thiểu: {minAmount}
                        (VNĐ)
                      </h1>
                      <h1>
                        Loại:{" "}
                        {typeDiscount == TypeDiscount.FreeShip
                          ? "Free ship"
                          : "Giảm giá sản phẩm"}
                      </h1>
                    </div>
                  );
                }
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ThemDonHangChoUser: FC = () => {
  const navigate = useNavigate();
  const [sanPhams, setSanPham] = useState<
    { sanPham: SanPhamFragmentFragment; soluong: number | null }[]
  >([]);
  const [voucher, setVoucher] = useState<VoucherFragmentFragment>();
  const {
    register,
    formState: { errors },
    getValues,
    reset,
    handleSubmit,
  } = useForm<{
    diaChi: string;
    soDienThoai: string;
    hinhThucMua: HinhThucMua;
  }>({
    mode: "onBlur",
  });
  var tongtien = 0;
  sanPhams.forEach((sp) => {
    tongtien += sp.sanPham.soTien! * sp.soluong! || 0;
  });
  if (tongtien >= voucher?.minAmount!) {
    tongtien -= voucher?.voucherAmount!;
  }
  const [ThemDonHangChoUser, { loading }] = useThemDonHangChoUserMutation();

  const submitHandler = async () => {
    if (!sanPhams) {
      toast.error("Đơn hàng không hợp lệ vui lòng thêm sản phẩm");
      return;
    }
    ThemDonHangChoUser({
      variables: {
        input: {
          sanPham: sanPhams.map((tv) => ({
            sanPhamId: tv.sanPham.id,
            numberSanPham: tv.soluong!,
          })),
          diaChi: getValues("diaChi") || "",
          soDienThoai: +getValues("soDienThoai") | 0,
          hinhThucMua: getValues("hinhThucMua"),
          codeVoucher: voucher?.codeVoucher! || undefined,
          trangThaiDonHang: TrangThaiDonHang.ChoPheDuyet,
        },
      },
      onCompleted: (data) => {
        if (data.addDonHangChoUser.ok) {
          toast.success("Đơn hàng đang chờ phê duyệt");
          setSanPham([]);
          setVoucher(undefined);
          reset();
          return;
        }
        const msg = data.addDonHangChoUser.error?.message;
        if (msg) {
          toast.error(msg);
          return;
        }
      },
      onError: (error) => {
        const msg = getApolloErrorMessage(error);
        if (msg) {
          toast.error(msg);
          return;
        }
        toast.error("Lỗi xảy ra, vui lòng thử lại sau");
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="space-y-8 pl-12 pr-16 pt-12 pb-16 "
    >
      <div className="flex flex-col col-span-1">
        <h3 className="leading-6 font-extrabold text-gray-900 text-3xl mb-8">
          Mua hàng
        </h3>
        <div className="grid grid-rows-2 gap-x-6 ">
          <div className=" rounded-md shadow-md p-3 col-span-1 space-y-4 relative ">
            <SanPhamData
              setSanPham={(sanPham: SanPhamFragmentFragment) =>
                setSanPham((pre) => {
                  const temp = cloneDeep(pre);
                  const alreadyAdded = temp.some(
                    (sp) => sp.sanPham.id === sanPham.id
                  );
                  if (alreadyAdded) {
                    toast.info("Sản phẩm đã được thêm");
                    return temp;
                  }
                  temp.push({
                    sanPham: sanPham,
                    soluong: 1,
                  });
                  return temp;
                })
              }
              setVoucher={function (Voucher: VoucherFragmentFragment): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
          <div className="py-10">
            <h1 className="text-2xl font-bold">Giỏ hàng</h1>
            {sanPhams && sanPhams.length > 0 && (
              <div className=" p-2 bg-white m-1  border-indigo-500 rounded-md border">
                {sanPhams.map(
                  (
                    { sanPham: { ten, avatar, soTien, loaiSanPham }, soluong },
                    i
                  ) => {
                    return (
                      <div
                        key={i}
                        className="flex flex-col  bg-white m-1 relative"
                      >
                        <div className="absolute top-2 right-1 w-fit h-fit bg-red-500 rounded-full flex cursor-pointer">
                          <XIcon
                            onClick={() => {
                              setSanPham((pre) => {
                                const temp = cloneDeep(pre);
                                temp.splice(i, 1);
                                return temp;
                              });
                            }}
                            className="w-3 h-3  text-white cursor-pointer"
                          />
                        </div>
                        <div className="flex bg-white rounded-xl overflow-hidden  border group cursor-pointer">
                          <div className="flex">
                            {avatar && (
                              <img
                                className="w-24 h-24 object-center"
                                src={avatar.fileUrl}
                                alt="image"
                              />
                            )}
                            {!avatar && loaiSanPham == LoaiSanPham.DoNgot && (
                              <CakeIcon className="w-24 h-24 object-center" />
                            )}
                            {!avatar && loaiSanPham == LoaiSanPham.NuocUong && (
                              <BanIcon className="w-24 h-24 object-center" />
                            )}
                          </div>
                          <div className="flex flex-col justify-center ml-4">
                            <h1>Sản phẩm: {ten}</h1>
                            <h1>
                              Giá:{" "}
                              {(soTien ? soTien : 0) * (!soluong ? 0 : soluong)}
                              (VNĐ)
                            </h1>
                            <div className="flex  space-x-3">
                              <label className="w-fit">Số lượng:</label>
                              <select
                                className="appearance-none block h-8 px-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-medium w-fit"
                                onChange={(e) => {
                                  setSanPham((pre) => {
                                    const temp = cloneDeep(pre);
                                    // @ts-ignore
                                    temp[i].soluong = e.target.value;
                                    return temp;
                                  });
                                }}
                                value={sanPhams[i].soluong || 1}
                              >
                                {Object.entries([
                                  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
                                ]).map((v) => {
                                  return (
                                    <option key={v[0]} value={v[0]}>
                                      {v[1]}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            )}
            <div className="rounded-md shadow-md p-3 col-span-1 h-fit flex flex-col space-y-4 text-gray-800 font-semibold sm:text-sm">
              <div className="flex flex-row">
                <SearchVoucherInputs
                  setVoucher={(voucher: VoucherFragmentFragment) =>
                    setVoucher(voucher)
                  }
                  setSanPham={function (sp: SanPhamFragmentFragment): void {
                    throw new Error("Function not implemented.");
                  }}
                />
                {voucher && (
                  <div className="flex flex-row w-full p-2 bg-white m-1 relative border-indigo-500 rounded-md border text-gray-700 font-medium sm:text-sm">
                    <CurrencyEuroIcon className="w-24 h-24 object-center" />
                    <div className="absolute top-2 right-1 w-fit h-fit bg-red-500 rounded-full flex items-center justify-center cursor-pointer ">
                      <XIcon
                        onClick={() => {
                          setVoucher(undefined);
                        }}
                        className="w-3 h-3 text-white cursor-pointer"
                      />
                    </div>
                    <div className="flex-col p-4">
                      <h1>Mã giảm giá: {voucher.codeVoucher}</h1>
                      <h1>
                        Giảm {voucher.voucherAmount}(VNĐ) cho đơn tối thiểu:{" "}
                        {voucher.minAmount}
                        (VNĐ)
                      </h1>
                      <h1>
                        Loại:{" "}
                        {voucher.typeDiscount == TypeDiscount.FreeShip
                          ? "Giảm giá vận chuyển"
                          : "Giảm giá sản phẩm"}
                      </h1>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <h1 className="space-x-6 text-xl">
                  <span>Tổng hóa đơn (chưa bao gồm vận chuyển nếu có):</span>{" "}
                  <span>{tongtien}(VNĐ)</span>
                </h1>
                <div className="px-1">
                  <FormInput2
                    id="soDienThoai"
                    labelText="Số điện thoại liên hệ"
                    type="text"
                  />
                </div>
                <div className="px-1">
                  <FormInput2 id="diaChi" labelText="Địa chỉ" type="text" />
                </div>
                <div className="px-1">
                  <SelectInput
                    id="hinhThucMua"
                    registerReturn={register("hinhThucMua")}
                    labelText="Hình thức mua(*)"
                    errorMessage={errors.hinhThucMua?.message}
                    showedValues={Object.keys(HinhThucMua)}
                    values={Object.values(HinhThucMua)}
                  />
                </div>
              </div>
            </div>
            <div className="pt-5 flex justify-end space-x-3">
              <button
                onClick={() => navigate("/")}
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Huỷ
              </button>
              <LoadingButton
                loading={loading}
                text="Mua hàng"
                className="w-fit"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default ThemDonHangChoUser;
