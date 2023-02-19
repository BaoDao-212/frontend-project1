import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AddDonHangChoUserInput = {
  codeVoucher?: InputMaybe<Scalars['String']>;
  diaChi: Scalars['String'];
  hinhThucMua: HinhThucMua;
  sanPham: Array<Order>;
  soDienThoai: Scalars['Float'];
  trangThaiDonHang: TrangThaiDonHang;
};

export type AddDonHangInput = {
  PhiShip: Scalars['Float'];
  codeVoucher?: InputMaybe<Scalars['String']>;
  diaChi: Scalars['String'];
  hinhThucMua: HinhThucMua;
  sanPham: Array<Order>;
  trangThaiDonHang: TrangThaiDonHang;
};

export type AddDonHangOutput = {
  __typename?: 'AddDonHangOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export type AddMaGiamGiaInput = {
  codeVoucher: Scalars['String'];
  endDate: Scalars['DateTime'];
  minAmount: Scalars['Float'];
  startDate: Scalars['DateTime'];
  typeDiscount: TypeDiscount;
  voucherAmount: Scalars['Float'];
};

export type AddMaGiamGiaOutput = {
  __typename?: 'AddMaGiamGiaOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export type AddNhanVienInput = {
  MailLienHe: Scalars['String'];
  caLamViec: CaLamViec;
  canCuocCongDan?: InputMaybe<Scalars['String']>;
  chiNhanh: Scalars['String'];
  gioiTinh: Scalars['String'];
  luong: Scalars['Float'];
  ngayBatDauLam?: InputMaybe<Scalars['DateTime']>;
  soDienThoai: Scalars['String'];
  ten: Scalars['String'];
};

export type AddNhanVienOutput = {
  __typename?: 'AddNhanVienOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export type AddSanPhamInput = {
  avatar?: InputMaybe<StoredFileInputType>;
  loaiSanPham: LoaiSanPham;
  moTaSanPham?: InputMaybe<Scalars['String']>;
  soTien?: InputMaybe<Scalars['Float']>;
  ten: Scalars['String'];
};

export type AddSanPhamOutput = {
  __typename?: 'AddSanPhamOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export type AddUserInput = {
  avatar?: InputMaybe<StoredFileInputType>;
  ghiChu?: InputMaybe<Scalars['String']>;
  gioiTinh: Scalars['String'];
  maGiamGia?: InputMaybe<Array<MaGiamGiaInputType>>;
  soDienThoai?: InputMaybe<Scalars['String']>;
  ten: Scalars['String'];
};

export type AddUserOutput = {
  __typename?: 'AddUserOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export enum CaLamViec {
  Chieu = 'Chieu',
  Sang = 'Sang',
  Toi = 'Toi'
}

export type ChangePasswordInput = {
  matKhauCu: Scalars['String'];
  matKhauMoi: Scalars['String'];
  matKhauMoiLapLai: Scalars['String'];
};

export type ChangePasswordOutput = {
  __typename?: 'ChangePasswordOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export type CustomError = {
  __typename?: 'CustomError';
  mainReason: Scalars['String'];
  message: Scalars['String'];
};

export type DonHang = {
  __typename?: 'DonHang';
  createdAt: Scalars['DateTime'];
  ghiChu?: Maybe<Scalars['String']>;
  hinhThucMua: HinhThucMua;
  id: Scalars['ID'];
  maGiamGia?: Maybe<MaGiamGia>;
  ngayMua?: Maybe<Scalars['DateTime']>;
  nguoiMua: User;
  sanPham: Array<SanPham>;
  soluong: Array<Scalars['Float']>;
  tongTienPhaiTra: Scalars['Float'];
  trangThaiDonHang: TrangThaiDonHang;
  updatedAt: Scalars['DateTime'];
};

export type EditDonHangInput = {
  donHangId: Scalars['Float'];
};

export type EditDonHangOutput = {
  __typename?: 'EditDonHangOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export type EditNhanVienInput = {
  MailLienHe?: InputMaybe<Scalars['String']>;
  caLamViec?: InputMaybe<CaLamViec>;
  canCuocCongDan?: InputMaybe<Scalars['String']>;
  chiNhanh?: InputMaybe<Scalars['String']>;
  luong?: InputMaybe<Scalars['Float']>;
};

export type EditNhanVienOutput = {
  __typename?: 'EditNhanVienOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export type EditSanPhamInput = {
  avatar?: InputMaybe<StoredFileInputType>;
  loaiSanPham?: InputMaybe<LoaiSanPham>;
  moTaSanPham?: InputMaybe<Scalars['String']>;
  sanPhamId: Scalars['ID'];
  soTien?: InputMaybe<Scalars['Float']>;
  ten?: InputMaybe<Scalars['String']>;
  trangThai?: InputMaybe<TrangThai>;
};

export type EditSanPhamOutput = {
  __typename?: 'EditSanPhamOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export type EditUserInput = {
  avatar?: InputMaybe<StoredFileInputType>;
  daDangKi?: InputMaybe<Scalars['Boolean']>;
  ghiChu?: InputMaybe<Scalars['String']>;
  gioiTinh?: InputMaybe<Scalars['String']>;
  nguoiCanEditId: Scalars['ID'];
  soDienThoai?: InputMaybe<Scalars['String']>;
  ten?: InputMaybe<Scalars['String']>;
};

export type EditUserOutput = {
  __typename?: 'EditUserOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export enum HinhThucMua {
  MangVe = 'MangVe',
  NgoiTaiQuan = 'NgoiTaiQuan'
}

export enum LoaiSanPham {
  DoNgot = 'DoNgot',
  NuocUong = 'NuocUong'
}

export type LoginInput = {
  matKhau: Scalars['String'];
  soDienThoai?: InputMaybe<Scalars['String']>;
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  accessToken?: Maybe<Scalars['String']>;
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export type MaGiamGia = {
  __typename?: 'MaGiamGia';
  codeVoucher: Scalars['String'];
  createdAt: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  id: Scalars['ID'];
  minAmount: Scalars['Float'];
  startDate: Scalars['DateTime'];
  typeDiscount: TypeDiscount;
  updatedAt: Scalars['DateTime'];
  user: User;
  voucherAmount: Scalars['Float'];
};

export type MaGiamGiaInputType = {
  codeVoucher: Scalars['String'];
  endDate: Scalars['DateTime'];
  minAmount: Scalars['Float'];
  startDate: Scalars['DateTime'];
  typeDiscount: TypeDiscount;
  user: UserInputType;
  voucherAmount: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addDonHang: AddDonHangOutput;
  addDonHangChoUser: AddDonHangOutput;
  addMaGiamGia: AddMaGiamGiaOutput;
  addNhanVien: AddNhanVienOutput;
  addSanPham: AddSanPhamOutput;
  addUser: AddUserOutput;
  changePassword: ChangePasswordOutput;
  editDonHang: EditDonHangOutput;
  editNhanVien: EditNhanVienOutput;
  editSanPham: EditSanPhamOutput;
  editUser: EditUserOutput;
  registerUser: RegisterUserOutput;
};


export type MutationAddDonHangArgs = {
  input: AddDonHangInput;
};


export type MutationAddDonHangChoUserArgs = {
  input: AddDonHangChoUserInput;
};


export type MutationAddMaGiamGiaArgs = {
  input: AddMaGiamGiaInput;
};


export type MutationAddNhanVienArgs = {
  input: AddNhanVienInput;
};


export type MutationAddSanPhamArgs = {
  input: AddSanPhamInput;
};


export type MutationAddUserArgs = {
  input: AddUserInput;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationEditDonHangArgs = {
  input: EditDonHangInput;
};


export type MutationEditNhanVienArgs = {
  input: EditNhanVienInput;
};


export type MutationEditSanPhamArgs = {
  input: EditSanPhamInput;
};


export type MutationEditUserArgs = {
  input: EditUserInput;
};


export type MutationRegisterUserArgs = {
  input: RegisterUserInput;
};

export type NewAccessTokenInput = {
  accessToken: Scalars['String'];
};

export type NewAccessTokenOutput = {
  __typename?: 'NewAccessTokenOutput';
  accessToken?: Maybe<Scalars['String']>;
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export type NhanVien = {
  __typename?: 'NhanVien';
  MailLienHe: Scalars['String'];
  caLamViec: CaLamViec;
  canCuocCongDan?: Maybe<Scalars['String']>;
  chiNhanh: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  luong: Scalars['Float'];
  ngayBatDauLam?: Maybe<Scalars['DateTime']>;
  nhanVien: User;
  updatedAt: Scalars['DateTime'];
};

export type Order = {
  numberSanPham: Scalars['Float'];
  sanPhamId: Scalars['ID'];
};

export type PaginationInput = {
  page?: InputMaybe<Scalars['Int']>;
  resultsPerPage?: InputMaybe<Scalars['Int']>;
};

export type PaginationOutput = {
  __typename?: 'PaginationOutput';
  totalPages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  ThongKeChoQuanLy: ThongKeOuput;
  login: LoginOutput;
  newAccessToken: NewAccessTokenOutput;
  xemDanhSachDonHang: XemDanhSachDonHangOutput;
  xemDanhSachMaGiamGia: XemDanhSachMaGiamGiaOutput;
  xemDanhSachMaGiamGiaChoUser: XemDanhSachMaGiamGiaOutput;
  xemDanhSachNguoiDung: XemDanhSachNguoiDungOutput;
  xemDanhSachNhanVien: XemDanhSachNhanVienOutput;
  xemDanhSachSanPham: XemDanhSachSanPhamOutput;
  xemThongTinDonHangChoQuanLi: XemThongTinDonHangChoQuanLiOutput;
  xemThongTinMaGiamGiaChoQuanLi: XemThongTinMaGiamGiaOutput;
  xemThongTinNguoiDung: XemThongTinNguoiDungOutput;
  xemThongTinNguoiDungChoQuanLi: XemThongTinNguoiDungOutput;
  xemThongTinNhanVien: XemThongTinNhanVienOutput;
  xemThongTinNhanVienChoQuanLi: XemThongTinNhanVienOutput;
  xemThongTinSanPham: XemThongTinSanPhamOutput;
};


export type QueryLoginArgs = {
  input: LoginInput;
};


export type QueryNewAccessTokenArgs = {
  input: NewAccessTokenInput;
};


export type QueryXemDanhSachDonHangArgs = {
  input: XemDanhSachDonHangInput;
};


export type QueryXemDanhSachMaGiamGiaArgs = {
  input: XemDanhSachMaGiamGiaInput;
};


export type QueryXemDanhSachNguoiDungArgs = {
  input: XemDanhSachNguoiDungInput;
};


export type QueryXemDanhSachNhanVienArgs = {
  input: XemDanhSachNhanVienInput;
};


export type QueryXemDanhSachSanPhamArgs = {
  input: XemDanhSachSanPhamInput;
};


export type QueryXemThongTinDonHangChoQuanLiArgs = {
  input: XemThongTinDonHangChoQuanLiInput;
};


export type QueryXemThongTinMaGiamGiaChoQuanLiArgs = {
  input: XemThongTinMaGiamGiaChoQuanLiInput;
};


export type QueryXemThongTinNguoiDungChoQuanLiArgs = {
  input: XemThongTinNguoiDungChoQuanLiInput;
};


export type QueryXemThongTinNhanVienChoQuanLiArgs = {
  input: XemThongTinNhanVienChoQuanLiInput;
};


export type QueryXemThongTinSanPhamArgs = {
  input: XemThongTinSanPhamInput;
};

export type RegisterUserInput = {
  maGiamGia?: InputMaybe<Array<MaGiamGiaInputType>>;
  matKhau?: InputMaybe<Scalars['String']>;
  matKhauLapLai: Scalars['String'];
  soDienThoai?: InputMaybe<Scalars['String']>;
  ten: Scalars['String'];
};

export type RegisterUserOutput = {
  __typename?: 'RegisterUserOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export type SanPham = {
  __typename?: 'SanPham';
  avatar?: Maybe<StoredFile>;
  createdAt: Scalars['DateTime'];
  donHang: Array<DonHang>;
  ghiChu?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  loaiSanPham: LoaiSanPham;
  moTaSanPham?: Maybe<Scalars['String']>;
  ngayTao: Scalars['DateTime'];
  soTien?: Maybe<Scalars['Float']>;
  ten: Scalars['String'];
  trangThai: TrangThai;
  updatedAt: Scalars['DateTime'];
};

export type StoredFile = {
  __typename?: 'StoredFile';
  filePath: Scalars['String'];
  fileUrl: Scalars['String'];
};

export type StoredFileInputType = {
  filePath: Scalars['String'];
  fileUrl: Scalars['String'];
};

export type ThongKeOuput = {
  __typename?: 'ThongKeOuput';
  doanhThuTrongThang?: Maybe<Scalars['Float']>;
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
  sanPhamBanChay?: Maybe<Array<SanPham>>;
  soDonHangThangNay?: Maybe<Scalars['Float']>;
  soNguoiDangKi?: Maybe<Scalars['Float']>;
  soNhanVien?: Maybe<Scalars['Float']>;
  soSanPham?: Maybe<Scalars['Float']>;
  tienLuongCuaTatCaNhanVien?: Maybe<Scalars['Float']>;
};

export enum TrangThai {
  DangBan = 'DangBan',
  NgungBan = 'NgungBan'
}

export enum TrangThaiDonHang {
  ChoPheDuyet = 'ChoPheDuyet',
  Oke = 'Oke'
}

export enum TypeDiscount {
  FreeShip = 'FreeShip',
  ProductDiscount = 'ProductDiscount'
}

export type User = {
  __typename?: 'User';
  avatar?: Maybe<StoredFile>;
  createdAt: Scalars['DateTime'];
  daDangKi: Scalars['Boolean'];
  ghiChu?: Maybe<Scalars['String']>;
  gioiTinh: Scalars['String'];
  id: Scalars['ID'];
  maGiamGia?: Maybe<Array<MaGiamGia>>;
  matKhau?: Maybe<Scalars['String']>;
  soDienThoai?: Maybe<Scalars['String']>;
  ten: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  vaiTroNguoiDung: VaitroNguoiDung;
};

export type UserInputType = {
  avatar?: InputMaybe<StoredFileInputType>;
  daDangKi: Scalars['Boolean'];
  ghiChu?: InputMaybe<Scalars['String']>;
  gioiTinh: Scalars['String'];
  maGiamGia?: InputMaybe<Array<MaGiamGiaInputType>>;
  matKhau?: InputMaybe<Scalars['String']>;
  soDienThoai?: InputMaybe<Scalars['String']>;
  ten: Scalars['String'];
  vaiTroNguoiDung: VaitroNguoiDung;
};

export enum VaitroNguoiDung {
  Admin = 'Admin',
  KhachHang = 'KhachHang',
  NhanVien = 'NhanVien',
  QuanLy = 'QuanLy'
}

export type XemDanhSachDonHangInput = {
  paginationInput: PaginationInput;
};

export type XemDanhSachDonHangOutput = {
  __typename?: 'XemDanhSachDonHangOutput';
  DonHangs?: Maybe<Array<DonHang>>;
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
  paginationOutput?: Maybe<PaginationOutput>;
};

export type XemDanhSachMaGiamGiaInput = {
  codeVoucher?: InputMaybe<Scalars['String']>;
  paginationInput: PaginationInput;
};

export type XemDanhSachMaGiamGiaOutput = {
  __typename?: 'XemDanhSachMaGiamGiaOutput';
  error?: Maybe<CustomError>;
  maGiamGias?: Maybe<Array<MaGiamGia>>;
  ok: Scalars['Boolean'];
  paginationOutput?: Maybe<PaginationOutput>;
};

export type XemDanhSachNguoiDungInput = {
  hoTen?: InputMaybe<Scalars['String']>;
  paginationInput: PaginationInput;
  soDienThoai?: InputMaybe<Scalars['String']>;
};

export type XemDanhSachNguoiDungOutput = {
  __typename?: 'XemDanhSachNguoiDungOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
  paginationOutput?: Maybe<PaginationOutput>;
  users?: Maybe<Array<User>>;
};

export type XemDanhSachNhanVienInput = {
  canCuocCongDan?: InputMaybe<Scalars['String']>;
  paginationInput: PaginationInput;
  soDienThoai?: InputMaybe<Scalars['String']>;
};

export type XemDanhSachNhanVienOutput = {
  __typename?: 'XemDanhSachNhanVienOutput';
  error?: Maybe<CustomError>;
  nhanViens?: Maybe<Array<NhanVien>>;
  ok: Scalars['Boolean'];
  paginationOutput?: Maybe<PaginationOutput>;
};

export type XemDanhSachSanPhamInput = {
  paginationInput: PaginationInput;
  tenSanPham?: InputMaybe<Scalars['String']>;
};

export type XemDanhSachSanPhamOutput = {
  __typename?: 'XemDanhSachSanPhamOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
  paginationOutput?: Maybe<PaginationOutput>;
  sanPhams?: Maybe<Array<SanPham>>;
};

export type XemThongTinDonHangChoQuanLiInput = {
  DonHangId: Scalars['ID'];
};

export type XemThongTinDonHangChoQuanLiOutput = {
  __typename?: 'XemThongTinDonHangChoQuanLiOutput';
  DonHang?: Maybe<DonHang>;
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export type XemThongTinMaGiamGiaChoQuanLiInput = {
  maGiamGiaId: Scalars['ID'];
};

export type XemThongTinMaGiamGiaOutput = {
  __typename?: 'XemThongTinMaGiamGiaOutput';
  error?: Maybe<CustomError>;
  maGiamGia?: Maybe<MaGiamGia>;
  ok: Scalars['Boolean'];
};

export type XemThongTinNguoiDungChoQuanLiInput = {
  userId: Scalars['ID'];
};

export type XemThongTinNguoiDungOutput = {
  __typename?: 'XemThongTinNguoiDungOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
  soLuongDonHang: Scalars['Float'];
  tongTienDaMua: Scalars['Float'];
  user?: Maybe<User>;
};

export type XemThongTinNhanVienChoQuanLiInput = {
  NhanVienId: Scalars['ID'];
};

export type XemThongTinNhanVienOutput = {
  __typename?: 'XemThongTinNhanVienOutput';
  error?: Maybe<CustomError>;
  nhanVien?: Maybe<NhanVien>;
  ok: Scalars['Boolean'];
};

export type XemThongTinSanPhamInput = {
  SanPhamId: Scalars['ID'];
};

export type XemThongTinSanPhamOutput = {
  __typename?: 'XemThongTinSanPhamOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
  sanpham?: Maybe<SanPham>;
};

export type DonHangFragmentFragment = { __typename?: 'DonHang', id: string, hinhThucMua: HinhThucMua, createdAt: any, updatedAt: any, ngayMua?: any | null, tongTienPhaiTra: number, ghiChu?: string | null, trangThaiDonHang: TrangThaiDonHang, nguoiMua: { __typename?: 'User', id: string, gioiTinh: string, soDienThoai?: string | null, vaiTroNguoiDung: VaitroNguoiDung, ten: string, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null, maGiamGia?: Array<{ __typename?: 'MaGiamGia', id: string, codeVoucher: string, minAmount: number, voucherAmount: number, startDate: any, endDate: any, typeDiscount: TypeDiscount }> | null }, sanPham: Array<{ __typename?: 'SanPham', id: string, ten: string, loaiSanPham: LoaiSanPham, ngayTao: any, soTien?: number | null, moTaSanPham?: string | null, ghiChu?: string | null, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null }>, maGiamGia?: { __typename?: 'MaGiamGia', id: string, codeVoucher: string, minAmount: number, voucherAmount: number, startDate: any, endDate: any, typeDiscount: TypeDiscount } | null };

export type NhanVienFragmentFragment = { __typename?: 'NhanVien', id: string, luong: number, chiNhanh: string, ngayBatDauLam?: any | null, MailLienHe: string, canCuocCongDan?: string | null, caLamViec: CaLamViec };

export type SanPhamFragmentFragment = { __typename?: 'SanPham', id: string, ten: string, loaiSanPham: LoaiSanPham, ngayTao: any, soTien?: number | null, moTaSanPham?: string | null, ghiChu?: string | null, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null };

export type UserFragmentFragment = { __typename?: 'User', id: string, gioiTinh: string, soDienThoai?: string | null, vaiTroNguoiDung: VaitroNguoiDung, ten: string, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null, maGiamGia?: Array<{ __typename?: 'MaGiamGia', id: string, codeVoucher: string, minAmount: number, voucherAmount: number, startDate: any, endDate: any, typeDiscount: TypeDiscount }> | null };

export type VoucherFragmentFragment = { __typename?: 'MaGiamGia', id: string, codeVoucher: string, minAmount: number, voucherAmount: number, startDate: any, endDate: any, typeDiscount: TypeDiscount };

export type ThemDonHangMutationVariables = Exact<{
  input: AddDonHangInput;
}>;


export type ThemDonHangMutation = { __typename?: 'Mutation', addDonHang: { __typename?: 'AddDonHangOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null } };

export type ThemDonHangChoUserMutationVariables = Exact<{
  input: AddDonHangChoUserInput;
}>;


export type ThemDonHangChoUserMutation = { __typename?: 'Mutation', addDonHangChoUser: { __typename?: 'AddDonHangOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null } };

export type ThemMaGiamGiaMutationVariables = Exact<{
  input: AddMaGiamGiaInput;
}>;


export type ThemMaGiamGiaMutation = { __typename?: 'Mutation', addMaGiamGia: { __typename?: 'AddMaGiamGiaOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null } };

export type ThemNhanVienMutationVariables = Exact<{
  input: AddNhanVienInput;
}>;


export type ThemNhanVienMutation = { __typename?: 'Mutation', addNhanVien: { __typename?: 'AddNhanVienOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null } };

export type ThemSanPhamMutationVariables = Exact<{
  input: AddSanPhamInput;
}>;


export type ThemSanPhamMutation = { __typename?: 'Mutation', addSanPham: { __typename?: 'AddSanPhamOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null } };

export type AddUserMutationVariables = Exact<{
  input: AddUserInput;
}>;


export type AddUserMutation = { __typename?: 'Mutation', addUser: { __typename?: 'AddUserOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null } };

export type ChangePasswordMutationVariables = Exact<{
  input: ChangePasswordInput;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'ChangePasswordOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null } };

export type EditDonHangMutationVariables = Exact<{
  input: EditDonHangInput;
}>;


export type EditDonHangMutation = { __typename?: 'Mutation', editDonHang: { __typename?: 'EditDonHangOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null } };

export type EditNhanVienMutationVariables = Exact<{
  input: EditNhanVienInput;
}>;


export type EditNhanVienMutation = { __typename?: 'Mutation', editNhanVien: { __typename?: 'EditNhanVienOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null } };

export type EditSanPhamMutationVariables = Exact<{
  input: EditSanPhamInput;
}>;


export type EditSanPhamMutation = { __typename?: 'Mutation', editSanPham: { __typename?: 'EditSanPhamOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null } };

export type EditUserMutationVariables = Exact<{
  input: EditUserInput;
}>;


export type EditUserMutation = { __typename?: 'Mutation', editUser: { __typename?: 'EditUserOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null } };

export type SanPhamDetailsQueryVariables = Exact<{
  input: XemThongTinSanPhamInput;
}>;


export type SanPhamDetailsQuery = { __typename?: 'Query', xemThongTinSanPham: { __typename?: 'XemThongTinSanPhamOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null, sanpham?: { __typename?: 'SanPham', id: string, ten: string, loaiSanPham: LoaiSanPham, ngayTao: any, soTien?: number | null, moTaSanPham?: string | null, ghiChu?: string | null, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null } | null } };

export type DanhSachNguoiDungQueryVariables = Exact<{
  input: XemDanhSachNguoiDungInput;
}>;


export type DanhSachNguoiDungQuery = { __typename?: 'Query', xemDanhSachNguoiDung: { __typename?: 'XemDanhSachNguoiDungOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null, paginationOutput?: { __typename?: 'PaginationOutput', totalPages?: number | null, totalResults?: number | null } | null, users?: Array<{ __typename?: 'User', id: string, gioiTinh: string, soDienThoai?: string | null, vaiTroNguoiDung: VaitroNguoiDung, ten: string, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null, maGiamGia?: Array<{ __typename?: 'MaGiamGia', id: string, codeVoucher: string, minAmount: number, voucherAmount: number, startDate: any, endDate: any, typeDiscount: TypeDiscount }> | null }> | null } };

export type DanhSachVoucherChoUserQueryVariables = Exact<{ [key: string]: never; }>;


export type DanhSachVoucherChoUserQuery = { __typename?: 'Query', xemDanhSachMaGiamGiaChoUser: { __typename?: 'XemDanhSachMaGiamGiaOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null, maGiamGias?: Array<{ __typename?: 'MaGiamGia', id: string, codeVoucher: string, minAmount: number, voucherAmount: number, startDate: any, endDate: any, typeDiscount: TypeDiscount }> | null } };

export type DonHangDetailsQueryVariables = Exact<{
  input: XemThongTinDonHangChoQuanLiInput;
}>;


export type DonHangDetailsQuery = { __typename?: 'Query', xemThongTinDonHangChoQuanLi: { __typename?: 'XemThongTinDonHangChoQuanLiOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null, DonHang?: { __typename?: 'DonHang', id: string, hinhThucMua: HinhThucMua, createdAt: any, updatedAt: any, ngayMua?: any | null, tongTienPhaiTra: number, ghiChu?: string | null, trangThaiDonHang: TrangThaiDonHang, nguoiMua: { __typename?: 'User', id: string, gioiTinh: string, soDienThoai?: string | null, vaiTroNguoiDung: VaitroNguoiDung, ten: string, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null, maGiamGia?: Array<{ __typename?: 'MaGiamGia', id: string, codeVoucher: string, minAmount: number, voucherAmount: number, startDate: any, endDate: any, typeDiscount: TypeDiscount }> | null }, sanPham: Array<{ __typename?: 'SanPham', id: string, ten: string, loaiSanPham: LoaiSanPham, ngayTao: any, soTien?: number | null, moTaSanPham?: string | null, ghiChu?: string | null, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null }>, maGiamGia?: { __typename?: 'MaGiamGia', id: string, codeVoucher: string, minAmount: number, voucherAmount: number, startDate: any, endDate: any, typeDiscount: TypeDiscount } | null } | null } };

export type LoginQueryVariables = Exact<{
  input: LoginInput;
}>;


export type LoginQuery = { __typename?: 'Query', login: { __typename?: 'LoginOutput', ok: boolean, accessToken?: string | null, error?: { __typename?: 'CustomError', message: string, mainReason: string } | null } };

export type NhanVienDetailsQueryVariables = Exact<{
  input: XemThongTinNhanVienChoQuanLiInput;
}>;


export type NhanVienDetailsQuery = { __typename?: 'Query', xemThongTinNhanVienChoQuanLi: { __typename?: 'XemThongTinNhanVienOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null, nhanVien?: { __typename?: 'NhanVien', id: string, luong: number, chiNhanh: string, ngayBatDauLam?: any | null, MailLienHe: string, canCuocCongDan?: string | null, caLamViec: CaLamViec } | null } };

export type RegisterMutationVariables = Exact<{
  input: RegisterUserInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'RegisterUserOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null } };

export type ThongKeQueryVariables = Exact<{ [key: string]: never; }>;


export type ThongKeQuery = { __typename?: 'Query', ThongKeChoQuanLy: { __typename?: 'ThongKeOuput', ok: boolean, soNguoiDangKi?: number | null, soDonHangThangNay?: number | null, soNhanVien?: number | null, soSanPham?: number | null, doanhThuTrongThang?: number | null, tienLuongCuaTatCaNhanVien?: number | null, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null, sanPhamBanChay?: Array<{ __typename?: 'SanPham', id: string, ten: string, loaiSanPham: LoaiSanPham, ngayTao: any, soTien?: number | null, moTaSanPham?: string | null, ghiChu?: string | null, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null }> | null } };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', xemThongTinNguoiDung: { __typename?: 'XemThongTinNguoiDungOutput', ok: boolean, error?: { __typename?: 'CustomError', message: string, mainReason: string } | null, user?: { __typename?: 'User', id: string, gioiTinh: string, soDienThoai?: string | null, vaiTroNguoiDung: VaitroNguoiDung, ten: string, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null, maGiamGia?: Array<{ __typename?: 'MaGiamGia', id: string, codeVoucher: string, minAmount: number, voucherAmount: number, startDate: any, endDate: any, typeDiscount: TypeDiscount }> | null } | null } };

export type UserDetailsQueryVariables = Exact<{
  input: XemThongTinNguoiDungChoQuanLiInput;
}>;


export type UserDetailsQuery = { __typename?: 'Query', xemThongTinNguoiDungChoQuanLi: { __typename?: 'XemThongTinNguoiDungOutput', ok: boolean, tongTienDaMua: number, soLuongDonHang: number, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null, user?: { __typename?: 'User', id: string, gioiTinh: string, soDienThoai?: string | null, vaiTroNguoiDung: VaitroNguoiDung, ten: string, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null, maGiamGia?: Array<{ __typename?: 'MaGiamGia', id: string, codeVoucher: string, minAmount: number, voucherAmount: number, startDate: any, endDate: any, typeDiscount: TypeDiscount }> | null } | null } };

export type DanhSachDonHangQueryVariables = Exact<{
  input: XemDanhSachDonHangInput;
}>;


export type DanhSachDonHangQuery = { __typename?: 'Query', xemDanhSachDonHang: { __typename?: 'XemDanhSachDonHangOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null, DonHangs?: Array<{ __typename?: 'DonHang', id: string, hinhThucMua: HinhThucMua, createdAt: any, updatedAt: any, ngayMua?: any | null, tongTienPhaiTra: number, ghiChu?: string | null, trangThaiDonHang: TrangThaiDonHang, nguoiMua: { __typename?: 'User', id: string, gioiTinh: string, soDienThoai?: string | null, vaiTroNguoiDung: VaitroNguoiDung, ten: string, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null, maGiamGia?: Array<{ __typename?: 'MaGiamGia', id: string, codeVoucher: string, minAmount: number, voucherAmount: number, startDate: any, endDate: any, typeDiscount: TypeDiscount }> | null }, sanPham: Array<{ __typename?: 'SanPham', id: string, ten: string, loaiSanPham: LoaiSanPham, ngayTao: any, soTien?: number | null, moTaSanPham?: string | null, ghiChu?: string | null, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null }>, maGiamGia?: { __typename?: 'MaGiamGia', id: string, codeVoucher: string, minAmount: number, voucherAmount: number, startDate: any, endDate: any, typeDiscount: TypeDiscount } | null }> | null, paginationOutput?: { __typename?: 'PaginationOutput', totalPages?: number | null, totalResults?: number | null } | null } };

export type DanhSachNhanVienQueryVariables = Exact<{
  input: XemDanhSachNhanVienInput;
}>;


export type DanhSachNhanVienQuery = { __typename?: 'Query', xemDanhSachNhanVien: { __typename?: 'XemDanhSachNhanVienOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null, nhanViens?: Array<{ __typename?: 'NhanVien', id: string, luong: number, chiNhanh: string, ngayBatDauLam?: any | null, MailLienHe: string, canCuocCongDan?: string | null, caLamViec: CaLamViec }> | null, paginationOutput?: { __typename?: 'PaginationOutput', totalPages?: number | null, totalResults?: number | null } | null } };

export type DanhSachSanPhamQueryVariables = Exact<{
  input: XemDanhSachSanPhamInput;
}>;


export type DanhSachSanPhamQuery = { __typename?: 'Query', xemDanhSachSanPham: { __typename?: 'XemDanhSachSanPhamOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null, sanPhams?: Array<{ __typename?: 'SanPham', id: string, ten: string, loaiSanPham: LoaiSanPham, ngayTao: any, soTien?: number | null, moTaSanPham?: string | null, ghiChu?: string | null, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null }> | null, paginationOutput?: { __typename?: 'PaginationOutput', totalPages?: number | null, totalResults?: number | null } | null } };

export type DanhSachVoucherQueryVariables = Exact<{
  input: XemDanhSachMaGiamGiaInput;
}>;


export type DanhSachVoucherQuery = { __typename?: 'Query', xemDanhSachMaGiamGia: { __typename?: 'XemDanhSachMaGiamGiaOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null, maGiamGias?: Array<{ __typename?: 'MaGiamGia', id: string, codeVoucher: string, minAmount: number, voucherAmount: number, startDate: any, endDate: any, typeDiscount: TypeDiscount }> | null } };

export const VoucherFragmentFragmentDoc = gql`
    fragment VoucherFragment on MaGiamGia {
  id
  codeVoucher
  minAmount
  voucherAmount
  startDate
  endDate
  typeDiscount
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  gioiTinh
  avatar {
    fileUrl
    filePath
  }
  soDienThoai
  vaiTroNguoiDung
  ten
  maGiamGia {
    ...VoucherFragment
  }
}
    ${VoucherFragmentFragmentDoc}`;
export const SanPhamFragmentFragmentDoc = gql`
    fragment SanPhamFragment on SanPham {
  id
  avatar {
    fileUrl
    filePath
  }
  ten
  loaiSanPham
  ngayTao
  soTien
  moTaSanPham
  ghiChu
}
    `;
export const DonHangFragmentFragmentDoc = gql`
    fragment DonHangFragment on DonHang {
  id
  nguoiMua {
    ...UserFragment
  }
  hinhThucMua
  createdAt
  updatedAt
  sanPham {
    ...SanPhamFragment
  }
  maGiamGia {
    ...VoucherFragment
  }
  ngayMua
  tongTienPhaiTra
  ghiChu
  trangThaiDonHang
}
    ${UserFragmentFragmentDoc}
${SanPhamFragmentFragmentDoc}
${VoucherFragmentFragmentDoc}`;
export const NhanVienFragmentFragmentDoc = gql`
    fragment NhanVienFragment on NhanVien {
  id
  luong
  chiNhanh
  ngayBatDauLam
  MailLienHe
  canCuocCongDan
  caLamViec
}
    `;
export const ThemDonHangDocument = gql`
    mutation ThemDonHang($input: AddDonHangInput!) {
  addDonHang(input: $input) {
    ok
    error {
      mainReason
      message
    }
  }
}
    `;
export type ThemDonHangMutationFn = Apollo.MutationFunction<ThemDonHangMutation, ThemDonHangMutationVariables>;

/**
 * __useThemDonHangMutation__
 *
 * To run a mutation, you first call `useThemDonHangMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useThemDonHangMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [themDonHangMutation, { data, loading, error }] = useThemDonHangMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useThemDonHangMutation(baseOptions?: Apollo.MutationHookOptions<ThemDonHangMutation, ThemDonHangMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ThemDonHangMutation, ThemDonHangMutationVariables>(ThemDonHangDocument, options);
      }
export type ThemDonHangMutationHookResult = ReturnType<typeof useThemDonHangMutation>;
export type ThemDonHangMutationResult = Apollo.MutationResult<ThemDonHangMutation>;
export type ThemDonHangMutationOptions = Apollo.BaseMutationOptions<ThemDonHangMutation, ThemDonHangMutationVariables>;
export const ThemDonHangChoUserDocument = gql`
    mutation ThemDonHangChoUser($input: AddDonHangChoUserInput!) {
  addDonHangChoUser(input: $input) {
    ok
    error {
      mainReason
      message
    }
  }
}
    `;
export type ThemDonHangChoUserMutationFn = Apollo.MutationFunction<ThemDonHangChoUserMutation, ThemDonHangChoUserMutationVariables>;

/**
 * __useThemDonHangChoUserMutation__
 *
 * To run a mutation, you first call `useThemDonHangChoUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useThemDonHangChoUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [themDonHangChoUserMutation, { data, loading, error }] = useThemDonHangChoUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useThemDonHangChoUserMutation(baseOptions?: Apollo.MutationHookOptions<ThemDonHangChoUserMutation, ThemDonHangChoUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ThemDonHangChoUserMutation, ThemDonHangChoUserMutationVariables>(ThemDonHangChoUserDocument, options);
      }
export type ThemDonHangChoUserMutationHookResult = ReturnType<typeof useThemDonHangChoUserMutation>;
export type ThemDonHangChoUserMutationResult = Apollo.MutationResult<ThemDonHangChoUserMutation>;
export type ThemDonHangChoUserMutationOptions = Apollo.BaseMutationOptions<ThemDonHangChoUserMutation, ThemDonHangChoUserMutationVariables>;
export const ThemMaGiamGiaDocument = gql`
    mutation ThemMaGiamGia($input: AddMaGiamGiaInput!) {
  addMaGiamGia(input: $input) {
    ok
    error {
      mainReason
      message
    }
  }
}
    `;
export type ThemMaGiamGiaMutationFn = Apollo.MutationFunction<ThemMaGiamGiaMutation, ThemMaGiamGiaMutationVariables>;

/**
 * __useThemMaGiamGiaMutation__
 *
 * To run a mutation, you first call `useThemMaGiamGiaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useThemMaGiamGiaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [themMaGiamGiaMutation, { data, loading, error }] = useThemMaGiamGiaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useThemMaGiamGiaMutation(baseOptions?: Apollo.MutationHookOptions<ThemMaGiamGiaMutation, ThemMaGiamGiaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ThemMaGiamGiaMutation, ThemMaGiamGiaMutationVariables>(ThemMaGiamGiaDocument, options);
      }
export type ThemMaGiamGiaMutationHookResult = ReturnType<typeof useThemMaGiamGiaMutation>;
export type ThemMaGiamGiaMutationResult = Apollo.MutationResult<ThemMaGiamGiaMutation>;
export type ThemMaGiamGiaMutationOptions = Apollo.BaseMutationOptions<ThemMaGiamGiaMutation, ThemMaGiamGiaMutationVariables>;
export const ThemNhanVienDocument = gql`
    mutation ThemNhanVien($input: AddNhanVienInput!) {
  addNhanVien(input: $input) {
    ok
    error {
      mainReason
      message
    }
  }
}
    `;
export type ThemNhanVienMutationFn = Apollo.MutationFunction<ThemNhanVienMutation, ThemNhanVienMutationVariables>;

/**
 * __useThemNhanVienMutation__
 *
 * To run a mutation, you first call `useThemNhanVienMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useThemNhanVienMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [themNhanVienMutation, { data, loading, error }] = useThemNhanVienMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useThemNhanVienMutation(baseOptions?: Apollo.MutationHookOptions<ThemNhanVienMutation, ThemNhanVienMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ThemNhanVienMutation, ThemNhanVienMutationVariables>(ThemNhanVienDocument, options);
      }
export type ThemNhanVienMutationHookResult = ReturnType<typeof useThemNhanVienMutation>;
export type ThemNhanVienMutationResult = Apollo.MutationResult<ThemNhanVienMutation>;
export type ThemNhanVienMutationOptions = Apollo.BaseMutationOptions<ThemNhanVienMutation, ThemNhanVienMutationVariables>;
export const ThemSanPhamDocument = gql`
    mutation ThemSanPham($input: AddSanPhamInput!) {
  addSanPham(input: $input) {
    ok
    error {
      mainReason
      message
    }
  }
}
    `;
export type ThemSanPhamMutationFn = Apollo.MutationFunction<ThemSanPhamMutation, ThemSanPhamMutationVariables>;

/**
 * __useThemSanPhamMutation__
 *
 * To run a mutation, you first call `useThemSanPhamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useThemSanPhamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [themSanPhamMutation, { data, loading, error }] = useThemSanPhamMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useThemSanPhamMutation(baseOptions?: Apollo.MutationHookOptions<ThemSanPhamMutation, ThemSanPhamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ThemSanPhamMutation, ThemSanPhamMutationVariables>(ThemSanPhamDocument, options);
      }
export type ThemSanPhamMutationHookResult = ReturnType<typeof useThemSanPhamMutation>;
export type ThemSanPhamMutationResult = Apollo.MutationResult<ThemSanPhamMutation>;
export type ThemSanPhamMutationOptions = Apollo.BaseMutationOptions<ThemSanPhamMutation, ThemSanPhamMutationVariables>;
export const AddUserDocument = gql`
    mutation addUser($input: AddUserInput!) {
  addUser(input: $input) {
    ok
    error {
      mainReason
      message
    }
  }
}
    `;
export type AddUserMutationFn = Apollo.MutationFunction<AddUserMutation, AddUserMutationVariables>;

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddUserMutation(baseOptions?: Apollo.MutationHookOptions<AddUserMutation, AddUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(AddUserDocument, options);
      }
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = Apollo.BaseMutationOptions<AddUserMutation, AddUserMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($input: ChangePasswordInput!) {
  changePassword(input: $input) {
    ok
    error {
      mainReason
      message
    }
  }
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const EditDonHangDocument = gql`
    mutation EditDonHang($input: EditDonHangInput!) {
  editDonHang(input: $input) {
    ok
    error {
      mainReason
      message
    }
  }
}
    `;
export type EditDonHangMutationFn = Apollo.MutationFunction<EditDonHangMutation, EditDonHangMutationVariables>;

/**
 * __useEditDonHangMutation__
 *
 * To run a mutation, you first call `useEditDonHangMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditDonHangMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editDonHangMutation, { data, loading, error }] = useEditDonHangMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditDonHangMutation(baseOptions?: Apollo.MutationHookOptions<EditDonHangMutation, EditDonHangMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditDonHangMutation, EditDonHangMutationVariables>(EditDonHangDocument, options);
      }
export type EditDonHangMutationHookResult = ReturnType<typeof useEditDonHangMutation>;
export type EditDonHangMutationResult = Apollo.MutationResult<EditDonHangMutation>;
export type EditDonHangMutationOptions = Apollo.BaseMutationOptions<EditDonHangMutation, EditDonHangMutationVariables>;
export const EditNhanVienDocument = gql`
    mutation EditNhanVien($input: EditNhanVienInput!) {
  editNhanVien(input: $input) {
    ok
    error {
      mainReason
      message
    }
  }
}
    `;
export type EditNhanVienMutationFn = Apollo.MutationFunction<EditNhanVienMutation, EditNhanVienMutationVariables>;

/**
 * __useEditNhanVienMutation__
 *
 * To run a mutation, you first call `useEditNhanVienMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditNhanVienMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editNhanVienMutation, { data, loading, error }] = useEditNhanVienMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditNhanVienMutation(baseOptions?: Apollo.MutationHookOptions<EditNhanVienMutation, EditNhanVienMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditNhanVienMutation, EditNhanVienMutationVariables>(EditNhanVienDocument, options);
      }
export type EditNhanVienMutationHookResult = ReturnType<typeof useEditNhanVienMutation>;
export type EditNhanVienMutationResult = Apollo.MutationResult<EditNhanVienMutation>;
export type EditNhanVienMutationOptions = Apollo.BaseMutationOptions<EditNhanVienMutation, EditNhanVienMutationVariables>;
export const EditSanPhamDocument = gql`
    mutation EditSanPham($input: EditSanPhamInput!) {
  editSanPham(input: $input) {
    ok
    error {
      mainReason
      message
    }
  }
}
    `;
export type EditSanPhamMutationFn = Apollo.MutationFunction<EditSanPhamMutation, EditSanPhamMutationVariables>;

/**
 * __useEditSanPhamMutation__
 *
 * To run a mutation, you first call `useEditSanPhamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditSanPhamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editSanPhamMutation, { data, loading, error }] = useEditSanPhamMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditSanPhamMutation(baseOptions?: Apollo.MutationHookOptions<EditSanPhamMutation, EditSanPhamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditSanPhamMutation, EditSanPhamMutationVariables>(EditSanPhamDocument, options);
      }
export type EditSanPhamMutationHookResult = ReturnType<typeof useEditSanPhamMutation>;
export type EditSanPhamMutationResult = Apollo.MutationResult<EditSanPhamMutation>;
export type EditSanPhamMutationOptions = Apollo.BaseMutationOptions<EditSanPhamMutation, EditSanPhamMutationVariables>;
export const EditUserDocument = gql`
    mutation EditUser($input: EditUserInput!) {
  editUser(input: $input) {
    ok
    error {
      mainReason
      message
    }
  }
}
    `;
export type EditUserMutationFn = Apollo.MutationFunction<EditUserMutation, EditUserMutationVariables>;

/**
 * __useEditUserMutation__
 *
 * To run a mutation, you first call `useEditUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editUserMutation, { data, loading, error }] = useEditUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditUserMutation(baseOptions?: Apollo.MutationHookOptions<EditUserMutation, EditUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditUserMutation, EditUserMutationVariables>(EditUserDocument, options);
      }
export type EditUserMutationHookResult = ReturnType<typeof useEditUserMutation>;
export type EditUserMutationResult = Apollo.MutationResult<EditUserMutation>;
export type EditUserMutationOptions = Apollo.BaseMutationOptions<EditUserMutation, EditUserMutationVariables>;
export const SanPhamDetailsDocument = gql`
    query SanPhamDetails($input: XemThongTinSanPhamInput!) {
  xemThongTinSanPham(input: $input) {
    ok
    error {
      mainReason
      message
    }
    sanpham {
      ...SanPhamFragment
    }
  }
}
    ${SanPhamFragmentFragmentDoc}`;

/**
 * __useSanPhamDetailsQuery__
 *
 * To run a query within a React component, call `useSanPhamDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSanPhamDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSanPhamDetailsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSanPhamDetailsQuery(baseOptions: Apollo.QueryHookOptions<SanPhamDetailsQuery, SanPhamDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SanPhamDetailsQuery, SanPhamDetailsQueryVariables>(SanPhamDetailsDocument, options);
      }
export function useSanPhamDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SanPhamDetailsQuery, SanPhamDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SanPhamDetailsQuery, SanPhamDetailsQueryVariables>(SanPhamDetailsDocument, options);
        }
export type SanPhamDetailsQueryHookResult = ReturnType<typeof useSanPhamDetailsQuery>;
export type SanPhamDetailsLazyQueryHookResult = ReturnType<typeof useSanPhamDetailsLazyQuery>;
export type SanPhamDetailsQueryResult = Apollo.QueryResult<SanPhamDetailsQuery, SanPhamDetailsQueryVariables>;
export const DanhSachNguoiDungDocument = gql`
    query DanhSachNguoiDung($input: XemDanhSachNguoiDungInput!) {
  xemDanhSachNguoiDung(input: $input) {
    ok
    error {
      mainReason
      message
    }
    paginationOutput {
      totalPages
      totalResults
    }
    users {
      ...UserFragment
    }
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useDanhSachNguoiDungQuery__
 *
 * To run a query within a React component, call `useDanhSachNguoiDungQuery` and pass it any options that fit your needs.
 * When your component renders, `useDanhSachNguoiDungQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDanhSachNguoiDungQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDanhSachNguoiDungQuery(baseOptions: Apollo.QueryHookOptions<DanhSachNguoiDungQuery, DanhSachNguoiDungQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DanhSachNguoiDungQuery, DanhSachNguoiDungQueryVariables>(DanhSachNguoiDungDocument, options);
      }
export function useDanhSachNguoiDungLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DanhSachNguoiDungQuery, DanhSachNguoiDungQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DanhSachNguoiDungQuery, DanhSachNguoiDungQueryVariables>(DanhSachNguoiDungDocument, options);
        }
export type DanhSachNguoiDungQueryHookResult = ReturnType<typeof useDanhSachNguoiDungQuery>;
export type DanhSachNguoiDungLazyQueryHookResult = ReturnType<typeof useDanhSachNguoiDungLazyQuery>;
export type DanhSachNguoiDungQueryResult = Apollo.QueryResult<DanhSachNguoiDungQuery, DanhSachNguoiDungQueryVariables>;
export const DanhSachVoucherChoUserDocument = gql`
    query DanhSachVoucherChoUser {
  xemDanhSachMaGiamGiaChoUser {
    ok
    error {
      mainReason
      message
    }
    maGiamGias {
      ...VoucherFragment
    }
  }
}
    ${VoucherFragmentFragmentDoc}`;

/**
 * __useDanhSachVoucherChoUserQuery__
 *
 * To run a query within a React component, call `useDanhSachVoucherChoUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useDanhSachVoucherChoUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDanhSachVoucherChoUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useDanhSachVoucherChoUserQuery(baseOptions?: Apollo.QueryHookOptions<DanhSachVoucherChoUserQuery, DanhSachVoucherChoUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DanhSachVoucherChoUserQuery, DanhSachVoucherChoUserQueryVariables>(DanhSachVoucherChoUserDocument, options);
      }
export function useDanhSachVoucherChoUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DanhSachVoucherChoUserQuery, DanhSachVoucherChoUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DanhSachVoucherChoUserQuery, DanhSachVoucherChoUserQueryVariables>(DanhSachVoucherChoUserDocument, options);
        }
export type DanhSachVoucherChoUserQueryHookResult = ReturnType<typeof useDanhSachVoucherChoUserQuery>;
export type DanhSachVoucherChoUserLazyQueryHookResult = ReturnType<typeof useDanhSachVoucherChoUserLazyQuery>;
export type DanhSachVoucherChoUserQueryResult = Apollo.QueryResult<DanhSachVoucherChoUserQuery, DanhSachVoucherChoUserQueryVariables>;
export const DonHangDetailsDocument = gql`
    query DonHangDetails($input: XemThongTinDonHangChoQuanLiInput!) {
  xemThongTinDonHangChoQuanLi(input: $input) {
    ok
    error {
      mainReason
      message
    }
    DonHang {
      ...DonHangFragment
    }
  }
}
    ${DonHangFragmentFragmentDoc}`;

/**
 * __useDonHangDetailsQuery__
 *
 * To run a query within a React component, call `useDonHangDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDonHangDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDonHangDetailsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDonHangDetailsQuery(baseOptions: Apollo.QueryHookOptions<DonHangDetailsQuery, DonHangDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DonHangDetailsQuery, DonHangDetailsQueryVariables>(DonHangDetailsDocument, options);
      }
export function useDonHangDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DonHangDetailsQuery, DonHangDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DonHangDetailsQuery, DonHangDetailsQueryVariables>(DonHangDetailsDocument, options);
        }
export type DonHangDetailsQueryHookResult = ReturnType<typeof useDonHangDetailsQuery>;
export type DonHangDetailsLazyQueryHookResult = ReturnType<typeof useDonHangDetailsLazyQuery>;
export type DonHangDetailsQueryResult = Apollo.QueryResult<DonHangDetailsQuery, DonHangDetailsQueryVariables>;
export const LoginDocument = gql`
    query Login($input: LoginInput!) {
  login(input: $input) {
    ok
    error {
      message
      mainReason
    }
    accessToken
  }
}
    `;

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginQuery(baseOptions: Apollo.QueryHookOptions<LoginQuery, LoginQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
      }
export function useLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
        }
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginQueryResult = Apollo.QueryResult<LoginQuery, LoginQueryVariables>;
export const NhanVienDetailsDocument = gql`
    query NhanVienDetails($input: XemThongTinNhanVienChoQuanLiInput!) {
  xemThongTinNhanVienChoQuanLi(input: $input) {
    ok
    error {
      mainReason
      message
    }
    nhanVien {
      ...NhanVienFragment
    }
  }
}
    ${NhanVienFragmentFragmentDoc}`;

/**
 * __useNhanVienDetailsQuery__
 *
 * To run a query within a React component, call `useNhanVienDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNhanVienDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNhanVienDetailsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useNhanVienDetailsQuery(baseOptions: Apollo.QueryHookOptions<NhanVienDetailsQuery, NhanVienDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NhanVienDetailsQuery, NhanVienDetailsQueryVariables>(NhanVienDetailsDocument, options);
      }
export function useNhanVienDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NhanVienDetailsQuery, NhanVienDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NhanVienDetailsQuery, NhanVienDetailsQueryVariables>(NhanVienDetailsDocument, options);
        }
export type NhanVienDetailsQueryHookResult = ReturnType<typeof useNhanVienDetailsQuery>;
export type NhanVienDetailsLazyQueryHookResult = ReturnType<typeof useNhanVienDetailsLazyQuery>;
export type NhanVienDetailsQueryResult = Apollo.QueryResult<NhanVienDetailsQuery, NhanVienDetailsQueryVariables>;
export const RegisterDocument = gql`
    mutation Register($input: RegisterUserInput!) {
  registerUser(input: $input) {
    ok
    error {
      mainReason
      message
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const ThongKeDocument = gql`
    query ThongKe {
  ThongKeChoQuanLy {
    ok
    error {
      mainReason
      message
    }
    soNguoiDangKi
    soDonHangThangNay
    soNhanVien
    soSanPham
    doanhThuTrongThang
    sanPhamBanChay {
      ...SanPhamFragment
    }
    tienLuongCuaTatCaNhanVien
  }
}
    ${SanPhamFragmentFragmentDoc}`;

/**
 * __useThongKeQuery__
 *
 * To run a query within a React component, call `useThongKeQuery` and pass it any options that fit your needs.
 * When your component renders, `useThongKeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useThongKeQuery({
 *   variables: {
 *   },
 * });
 */
export function useThongKeQuery(baseOptions?: Apollo.QueryHookOptions<ThongKeQuery, ThongKeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ThongKeQuery, ThongKeQueryVariables>(ThongKeDocument, options);
      }
export function useThongKeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ThongKeQuery, ThongKeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ThongKeQuery, ThongKeQueryVariables>(ThongKeDocument, options);
        }
export type ThongKeQueryHookResult = ReturnType<typeof useThongKeQuery>;
export type ThongKeLazyQueryHookResult = ReturnType<typeof useThongKeLazyQuery>;
export type ThongKeQueryResult = Apollo.QueryResult<ThongKeQuery, ThongKeQueryVariables>;
export const UserDocument = gql`
    query User {
  xemThongTinNguoiDung {
    ok
    error {
      message
      mainReason
    }
    user {
      ...UserFragment
    }
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UserDetailsDocument = gql`
    query UserDetails($input: XemThongTinNguoiDungChoQuanLiInput!) {
  xemThongTinNguoiDungChoQuanLi(input: $input) {
    ok
    error {
      mainReason
      message
    }
    user {
      ...UserFragment
    }
    tongTienDaMua
    soLuongDonHang
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useUserDetailsQuery__
 *
 * To run a query within a React component, call `useUserDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserDetailsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserDetailsQuery(baseOptions: Apollo.QueryHookOptions<UserDetailsQuery, UserDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserDetailsQuery, UserDetailsQueryVariables>(UserDetailsDocument, options);
      }
export function useUserDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserDetailsQuery, UserDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserDetailsQuery, UserDetailsQueryVariables>(UserDetailsDocument, options);
        }
export type UserDetailsQueryHookResult = ReturnType<typeof useUserDetailsQuery>;
export type UserDetailsLazyQueryHookResult = ReturnType<typeof useUserDetailsLazyQuery>;
export type UserDetailsQueryResult = Apollo.QueryResult<UserDetailsQuery, UserDetailsQueryVariables>;
export const DanhSachDonHangDocument = gql`
    query DanhSachDonHang($input: XemDanhSachDonHangInput!) {
  xemDanhSachDonHang(input: $input) {
    ok
    error {
      mainReason
      message
    }
    DonHangs {
      ...DonHangFragment
    }
    paginationOutput {
      totalPages
      totalResults
    }
  }
}
    ${DonHangFragmentFragmentDoc}`;

/**
 * __useDanhSachDonHangQuery__
 *
 * To run a query within a React component, call `useDanhSachDonHangQuery` and pass it any options that fit your needs.
 * When your component renders, `useDanhSachDonHangQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDanhSachDonHangQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDanhSachDonHangQuery(baseOptions: Apollo.QueryHookOptions<DanhSachDonHangQuery, DanhSachDonHangQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DanhSachDonHangQuery, DanhSachDonHangQueryVariables>(DanhSachDonHangDocument, options);
      }
export function useDanhSachDonHangLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DanhSachDonHangQuery, DanhSachDonHangQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DanhSachDonHangQuery, DanhSachDonHangQueryVariables>(DanhSachDonHangDocument, options);
        }
export type DanhSachDonHangQueryHookResult = ReturnType<typeof useDanhSachDonHangQuery>;
export type DanhSachDonHangLazyQueryHookResult = ReturnType<typeof useDanhSachDonHangLazyQuery>;
export type DanhSachDonHangQueryResult = Apollo.QueryResult<DanhSachDonHangQuery, DanhSachDonHangQueryVariables>;
export const DanhSachNhanVienDocument = gql`
    query DanhSachNhanVien($input: XemDanhSachNhanVienInput!) {
  xemDanhSachNhanVien(input: $input) {
    ok
    error {
      mainReason
      message
    }
    nhanViens {
      ...NhanVienFragment
    }
    paginationOutput {
      totalPages
      totalResults
    }
  }
}
    ${NhanVienFragmentFragmentDoc}`;

/**
 * __useDanhSachNhanVienQuery__
 *
 * To run a query within a React component, call `useDanhSachNhanVienQuery` and pass it any options that fit your needs.
 * When your component renders, `useDanhSachNhanVienQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDanhSachNhanVienQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDanhSachNhanVienQuery(baseOptions: Apollo.QueryHookOptions<DanhSachNhanVienQuery, DanhSachNhanVienQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DanhSachNhanVienQuery, DanhSachNhanVienQueryVariables>(DanhSachNhanVienDocument, options);
      }
export function useDanhSachNhanVienLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DanhSachNhanVienQuery, DanhSachNhanVienQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DanhSachNhanVienQuery, DanhSachNhanVienQueryVariables>(DanhSachNhanVienDocument, options);
        }
export type DanhSachNhanVienQueryHookResult = ReturnType<typeof useDanhSachNhanVienQuery>;
export type DanhSachNhanVienLazyQueryHookResult = ReturnType<typeof useDanhSachNhanVienLazyQuery>;
export type DanhSachNhanVienQueryResult = Apollo.QueryResult<DanhSachNhanVienQuery, DanhSachNhanVienQueryVariables>;
export const DanhSachSanPhamDocument = gql`
    query DanhSachSanPham($input: XemDanhSachSanPhamInput!) {
  xemDanhSachSanPham(input: $input) {
    ok
    error {
      mainReason
      message
    }
    sanPhams {
      ...SanPhamFragment
    }
    paginationOutput {
      totalPages
      totalResults
    }
  }
}
    ${SanPhamFragmentFragmentDoc}`;

/**
 * __useDanhSachSanPhamQuery__
 *
 * To run a query within a React component, call `useDanhSachSanPhamQuery` and pass it any options that fit your needs.
 * When your component renders, `useDanhSachSanPhamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDanhSachSanPhamQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDanhSachSanPhamQuery(baseOptions: Apollo.QueryHookOptions<DanhSachSanPhamQuery, DanhSachSanPhamQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DanhSachSanPhamQuery, DanhSachSanPhamQueryVariables>(DanhSachSanPhamDocument, options);
      }
export function useDanhSachSanPhamLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DanhSachSanPhamQuery, DanhSachSanPhamQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DanhSachSanPhamQuery, DanhSachSanPhamQueryVariables>(DanhSachSanPhamDocument, options);
        }
export type DanhSachSanPhamQueryHookResult = ReturnType<typeof useDanhSachSanPhamQuery>;
export type DanhSachSanPhamLazyQueryHookResult = ReturnType<typeof useDanhSachSanPhamLazyQuery>;
export type DanhSachSanPhamQueryResult = Apollo.QueryResult<DanhSachSanPhamQuery, DanhSachSanPhamQueryVariables>;
export const DanhSachVoucherDocument = gql`
    query DanhSachVoucher($input: XemDanhSachMaGiamGiaInput!) {
  xemDanhSachMaGiamGia(input: $input) {
    ok
    error {
      mainReason
      message
    }
    maGiamGias {
      ...VoucherFragment
    }
  }
}
    ${VoucherFragmentFragmentDoc}`;

/**
 * __useDanhSachVoucherQuery__
 *
 * To run a query within a React component, call `useDanhSachVoucherQuery` and pass it any options that fit your needs.
 * When your component renders, `useDanhSachVoucherQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDanhSachVoucherQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDanhSachVoucherQuery(baseOptions: Apollo.QueryHookOptions<DanhSachVoucherQuery, DanhSachVoucherQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DanhSachVoucherQuery, DanhSachVoucherQueryVariables>(DanhSachVoucherDocument, options);
      }
export function useDanhSachVoucherLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DanhSachVoucherQuery, DanhSachVoucherQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DanhSachVoucherQuery, DanhSachVoucherQueryVariables>(DanhSachVoucherDocument, options);
        }
export type DanhSachVoucherQueryHookResult = ReturnType<typeof useDanhSachVoucherQuery>;
export type DanhSachVoucherLazyQueryHookResult = ReturnType<typeof useDanhSachVoucherLazyQuery>;
export type DanhSachVoucherQueryResult = Apollo.QueryResult<DanhSachVoucherQuery, DanhSachVoucherQueryVariables>;