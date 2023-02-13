import {
  CakeIcon,
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
import { FormInput } from "../../components/form/FormInput";
import { FormInput2 } from "../../components/form/FormInput2";
import LoadingButton from "../../components/form/LoadingButton";
import SelectInput from "../../components/form/SelectInput";
import SelectInput2 from "../../components/form/SelectInput2";
import {
  HinhThucMua,
  LoaiSanPham,
  SanPhamFragmentFragment,
  TypeDiscount,
  useDanhSachSanPhamLazyQuery,
  useDanhSachVoucherLazyQuery,
  useThemDonHangMutation,
  VoucherFragmentFragment,
} from "../../graphql/generated/schema";
import { loadingWhite } from "../../images";
import { getApolloErrorMessage } from "../../utils/getApolloErrorMessage";

type Props = {
  setSanPham: (sanPham: SanPhamFragmentFragment) => void;
  setVoucher: (voucher: VoucherFragmentFragment) => void;
};
const SearchSanPhamInputs: FC<Props> = ({ setSanPham }) => {
  const [tenSanPham, setTenSanPham] = useState<string>("");
  const [getUsers, { loading }] = useDanhSachSanPhamLazyQuery();
  const [results, setResults] = useState<SanPhamFragmentFragment[]>([]);
  const [canShowResults, setCanShowResults] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // @ts-ignore
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setCanShowResults(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref]);
  useEffect(() => {
    setCanShowResults(true);
    const timer = setTimeout(() => {
      getUsers({
        variables: {
          input: {
            tenSanPham,
            paginationInput: {
              page: 1,
              resultsPerPage: 10,
            },
          },
        },
        onCompleted: (data) => {
          setResults(data.xemDanhSachSanPham.sanPhams || []);
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
  }, [tenSanPham]);
  return (
    <div className="flex flex-col grid-rows-2 space-y-3 mx-1 mb-2 p-3 rounded border border-indigo-500">
      <div className="flex flex-col space-y-2 relative">
        <div ref={ref}>
          <input
            className="appearance-none block w-full h-8 px-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            type="text"
            value={tenSanPham}
            onChange={(e) => setTenSanPham(e.target.value)}
            onFocus={() => setCanShowResults(true)}
          />
          <div className="absolute top-full left-0 w-full flex flex-col space-y-1 rounded-md shadow-md bg-gray-200 z-10">
            {loading && (
              <img className="w-32 h-32 mx-auto" src={loadingWhite}></img>
            )}
            {canShowResults && results.length === 0 && !loading && (
              <h1 className="text-center py-4 bg-white">
                Nhập đúng tên sản phẩm để tìm
              </h1>
            )}
            {canShowResults &&
              results.length > 0 &&
              results.map(
                ({ soTien, ten, avatar, loaiSanPham, moTaSanPham }, i) => {
                  return (
                    <div
                      key={i}
                      onClick={() => {
                        setSanPham(results[i]);
                        // setCanShowResults(true);
                        setTenSanPham("");
                      }}
                      className="p-2 bg-white border border-indigo-500 rounded-md m-1 cursor-pointer hover:bg-indigo-500 hover:text-white"
                    >
                      <div className="flex flex-row space-x-10">
                        <div className="flex">
                          {avatar && (
                            <img
                              className="w-20 h-20"
                              src={avatar.fileUrl}
                              alt="image"
                            />
                          )}
                          {!avatar && loaiSanPham == LoaiSanPham.DoNgot && (
                            <CakeIcon className="w-20 h-20 object-center" />
                          )}
                          {!avatar && loaiSanPham == LoaiSanPham.NuocUong && (
                            <BanIcon className="w-20 h-20 object-center" />
                          )}
                        </div>
                        <div className="px-3.5 flex flex flex-col">
                          <h1>Sản phẩm: {ten}</h1>
                          <h1>
                            Giá: {soTien}
                            (VNĐ)
                          </h1>
                          <h1>
                            Loại sản phẩm:{" "}
                            {loaiSanPham == LoaiSanPham.DoNgot
                              ? "Đồ ngọt"
                              : "Nước uống"}
                          </h1>
                          <h1>Mô tả sản phẩm: {moTaSanPham}</h1>
                        </div>
                      </div>
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

const SearchVoucherInputs: FC<Props> = ({ setVoucher }) => {
  const [CodeVoucher, setCodeVoucher] = useState<string>("");
  const [getUsers, { loading }] = useDanhSachVoucherLazyQuery();
  const [results, setResults] = useState<VoucherFragmentFragment[]>([]);
  const [canShowResults, setCanShowResults] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // @ts-ignore
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setCanShowResults(false);
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
        variables: {
          input: {
            codeVoucher: CodeVoucher,
            paginationInput: {
              page: 1,
              resultsPerPage: 10,
            },
          },
        },
        onCompleted: (data) => {
          const { xemDanhSachMaGiamGia } = data;
          setResults(Object(xemDanhSachMaGiamGia.maGiamGias) || []);
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
  }, [CodeVoucher]);

  return (
    <div className="flex flex-col grid-rows-2 space-y-3 mx-1 mb-2 p-3 ">
      <div className="flex flex-col space-y-2 relative">
        <label htmlFor="" className="text-gray-700 font-medium sm:text-sm">
          Mã giảm giá
        </label>
        <div ref={ref}>
          <input
            className="appearance-none block w-30 h-8 px-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            type="text"
            value={CodeVoucher}
            onChange={(e) => setCodeVoucher(e.target.value)}
            onFocus={() => setCanShowResults(true)}
          />
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
                        setCodeVoucher("");
                      }}
                      className="p-2 bg-white border border-indigo-500 rounded-md m-1 cursor-pointer hover:bg-indigo-500 text-gray-700 font-medium sm:text-sm"
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

const ThemDonHang: FC = () => {
  const navigate = useNavigate();
  const [sanPhams, setSanPham] = useState<
    { sanPham: SanPhamFragmentFragment; soluong: number | null }[]
  >([]);
  const [voucher, setVoucher] = useState<VoucherFragmentFragment>();
  const [ThemDonHang, { loading }] = useThemDonHangMutation();
  const {
    register,
    formState: { errors },
    getValues,
    reset,
    handleSubmit,
  } = useForm<{
    diaChi: string;
    phiShip: number;
    hinhThucMua: HinhThucMua;
  }>({
    mode: "onBlur",
  });
  const submitHandler = async () => {
    if (!sanPhams) {
      toast.error("Đơn hàng không hợp lệ vui lòng thêm sản phẩm");
      return;
    }
    ThemDonHang({
      variables: {
        input: {
          sanPham: sanPhams.map((tv) => ({
            sanPhamId: tv.sanPham.id,
            numberSanPham: tv.soluong!,
          })),
          diaChi: getValues("diaChi"),
          PhiShip: +getValues("phiShip"),
          hinhThucMua: getValues("hinhThucMua"),
          codeVoucher: voucher?.codeVoucher! || undefined,
        },
      },
      onCompleted: (data) => {
        if (data.addDonHang.ok) {
          toast.success("Đơn hàng khởi tạo thành công");
          setSanPham([]);
          setVoucher(undefined);
          reset();
          return;
        }
        const msg = data.addDonHang.error?.message;
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
        <h3 className="leading-6 font-semibold text-gray-900 text-3xl mb-8">
          Đặt hàng
        </h3>
        <div className="grid grid-cols-2 gap-x-6">
          <div className="rounded-md shadow-md p-3 col-span-1 h-fit flex flex-col space-y-4">
            <h1 className="text-xl mb-2 font-semibold text-black-700">
              Tra cứu sản phẩm
            </h1>
            <SearchSanPhamInputs
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
          <div className="rounded-md shadow-md p-3 col-span-1 h-fit flex flex-col space-y-4 text-gray-800 font-semibold sm:text-sm">
            {sanPhams && sanPhams.length > 0 && (
              <div className="flex flex-col p-2 bg-white m-1 relative border-indigo-500 rounded-md border">
                {sanPhams.map(
                  (
                    { sanPham: { ten, avatar, soTien, loaiSanPham }, soluong },
                    i
                  ) => {
                    return (
                      <div
                        key={i}
                        className="flex flex-col p-2 bg-white m-1 relative"
                      >
                        <div className="absolute top-2 right-1 w-fit h-fit bg-red-500 rounded-full flex items-center justify-center cursor-pointer">
                          <XIcon
                            onClick={() => {
                              setSanPham((pre) => {
                                const temp = cloneDeep(pre);
                                temp.splice(i, 1);
                                return temp;
                              });
                            }}
                            className="w-3 h-3 text-white cursor-pointer"
                          />
                        </div>
                        <div className="flex flex-row space-x-10">
                          <div className="flex">
                            {avatar && (
                              <img
                                className="w-40 h-40"
                                src={avatar.fileUrl}
                                alt="image"
                              />
                            )}
                            {!avatar && loaiSanPham == LoaiSanPham.DoNgot && (
                              <CakeIcon className="w-40 h-40 object-center" />
                            )}
                            {!avatar && loaiSanPham == LoaiSanPham.NuocUong && (
                              <BanIcon className="w-40 h-40 object-center" />
                            )}
                          </div>
                          <div className="px-3.5 flex flex flex-col space-y-2">
                            <h1>Sản phẩm: {ten}</h1>
                            <h1>
                              Giá:{" "}
                              {(soTien ? soTien : 0) * (!soluong ? 0 : soluong)}
                              (VNĐ)
                            </h1>
                            <h1>
                              Loại sản phẩm:{" "}
                              {loaiSanPham == LoaiSanPham.DoNgot
                                ? "Đồ ngọt"
                                : "Nước uống"}
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
                                  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
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
                <div className="flex flex-col p-2 bg-white m-1 relative border-indigo-500 rounded-md border text-gray-700 font-medium sm:text-sm">
                  <div className="absolute top-2 right-1 w-fit h-fit bg-red-500 rounded-full flex items-center justify-center cursor-pointer ">
                    <XIcon
                      onClick={() => {
                        setVoucher(undefined);
                      }}
                      className="w-3 h-3 text-white cursor-pointer"
                    />
                  </div>
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
              )}
            </div>
            <div className="flex flex-col">
              <div className="px-1">
                <FormInput2
                  id="phiShip"
                  labelText="Phí ship"
                  registerReturn={register("phiShip", { required: true })}
                  type="text"
                />
              </div>
              <div className="px-1">
                <FormInput2
                  id="diaChi"
                  labelText="Địa chỉ"
                  registerReturn={register("diaChi", { required: true })}
                  type="text"
                />
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
        </div>
        <div className="pt-5 flex justify-end space-x-3">
          <button
            onClick={() => navigate("/account/show")}
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Huỷ
          </button>
          <LoadingButton
            loading={loading}
            text="Tạo đơn hàng"
            className="w-fit"
          />
        </div>
      </div>
    </form>
  );
};
export default ThemDonHang;
