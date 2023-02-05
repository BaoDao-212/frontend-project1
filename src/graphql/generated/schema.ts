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

export type AddDongGopInput = {
  KhoanPhiId: Scalars['Float'];
  hoKhauId?: InputMaybe<Scalars['Float']>;
  nguoiTamTruId?: InputMaybe<Scalars['Float']>;
  soTienDongGop: Scalars['Float'];
};

export type AddDongGopOutput = {
  __typename?: 'AddDongGopOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export type AddKhoanPhiInput = {
  loaiPhi: LoaiPhi;
  ngayHetHan: Scalars['DateTime'];
  ngayPhatDong: Scalars['DateTime'];
  soTien?: InputMaybe<Scalars['Float']>;
  tenKhoanPhi: Scalars['String'];
  theoHoKhau: Scalars['Boolean'];
};

export type AddKhoanPhiOutput = {
  __typename?: 'AddKhoanPhiOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export type AddTamTruInput = {
  nguoiTamTruId: Scalars['ID'];
  noiTamTruHienTai: Scalars['String'];
};

export type AddTamTruOutput = {
  __typename?: 'AddTamTruOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export type AddTamVangInput = {
  diaChiNoiDen: Scalars['String'];
  lyDoTamVang: Scalars['String'];
  nguoiTamVangId: Scalars['ID'];
};

export type AddTamVangOutput = {
  __typename?: 'AddTamVangOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export type AddUserInput = {
  avatar?: InputMaybe<StoredFileInputType>;
  biDanh?: InputMaybe<Scalars['String']>;
  canCuocCongDan?: InputMaybe<Scalars['String']>;
  danToc: Scalars['String'];
  ghiChu?: InputMaybe<Scalars['String']>;
  gioiTinh: Scalars['String'];
  ngaySinh: Scalars['DateTime'];
  ngheNghiep?: InputMaybe<Scalars['String']>;
  noiLamViec?: InputMaybe<Scalars['String']>;
  noiSinh: Scalars['String'];
  noiThuongTruTruocDo?: InputMaybe<Scalars['String']>;
  queQuan: Scalars['String'];
  soDienThoai?: InputMaybe<Scalars['String']>;
  ten: Scalars['String'];
};

export type AddUserOutput = {
  __typename?: 'AddUserOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export type CapNhatHoKhauInput = {
  diaChiThuongTru: Scalars['String'];
  hoKhauId: Scalars['ID'];
  nguoiYeuCauId: Scalars['ID'];
  thanhVienMoi: Array<ThanhVien>;
};

export type CapNhatHoKhauOutput = {
  __typename?: 'CapNhatHoKhauOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

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

export type DongGop = {
  __typename?: 'DongGop';
  createdAt: Scalars['DateTime'];
  hoKhau?: Maybe<HoKhau>;
  id: Scalars['ID'];
  khoanPhi: KhoanPhi;
  ngayNop?: Maybe<Scalars['DateTime']>;
  nguoiTamTru?: Maybe<User>;
  soTienDongGop: Scalars['Float'];
  trangThai: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
};

export type EditDongGopInput = {
  dongGopId: Scalars['Float'];
  ngayNop: Scalars['DateTime'];
  soTienDongGop: Scalars['Float'];
};

export type EditDongGopOutput = {
  __typename?: 'EditDongGopOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export type EditUserInput = {
  avatar?: InputMaybe<StoredFileInputType>;
  biDanh?: InputMaybe<Scalars['String']>;
  danToc?: InputMaybe<Scalars['String']>;
  ghiChu?: InputMaybe<Scalars['String']>;
  gioiTinh?: InputMaybe<Scalars['String']>;
  ngayDangKiThuongTru?: InputMaybe<Scalars['DateTime']>;
  ngaySinh?: InputMaybe<Scalars['DateTime']>;
  ngheNghiep?: InputMaybe<Scalars['String']>;
  nguoiYeuCauId: Scalars['ID'];
  noiLamViec?: InputMaybe<Scalars['String']>;
  noiSinh?: InputMaybe<Scalars['String']>;
  noiThuongTruTruocDo?: InputMaybe<Scalars['String']>;
  queQuan?: InputMaybe<Scalars['String']>;
  soDienThoai?: InputMaybe<Scalars['String']>;
  ten?: InputMaybe<Scalars['String']>;
};

export type EditUserOutput = {
  __typename?: 'EditUserOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export type HetTamTruInput = {
  nguoiYeuCauId: Scalars['ID'];
};

export type HetTamTruOutput = {
  __typename?: 'HetTamTruOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export type HetTamVangInput = {
  nguoiYeuCauId: Scalars['ID'];
};

export type HetTamVangOutput = {
  __typename?: 'HetTamVangOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export type HoKhau = {
  __typename?: 'HoKhau';
  createdAt: Scalars['DateTime'];
  diaChiThuongTru: Scalars['String'];
  ghiChu?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lichSuHoKhau: Array<LichSuHoKhau>;
  soHoKhau: Scalars['String'];
  thanhVien: Array<User>;
  updatedAt: Scalars['DateTime'];
};

export type KhoanPhi = {
  __typename?: 'KhoanPhi';
  createdAt: Scalars['DateTime'];
  dongGop?: Maybe<Array<DongGop>>;
  ghiChu?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  loaiPhi: LoaiPhi;
  ngayHetHan: Scalars['DateTime'];
  ngayPhatDong: Scalars['DateTime'];
  soTien?: Maybe<Scalars['Float']>;
  tenKhoanPhi: Scalars['String'];
  theoHoKhau: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
};

export type LichSuHoKhau = {
  __typename?: 'LichSuHoKhau';
  createdAt: Scalars['DateTime'];
  ghiChu?: Maybe<Scalars['String']>;
  hanhDong: LoaiThayDoiHoKhau;
  hoKhau: HoKhau;
  id: Scalars['ID'];
  nguoiPheDuyet: User;
  nguoiYeuCau: User;
  thoiGian: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export enum LoaiPhi {
  BatBuoc = 'BatBuoc',
  UngHo = 'UngHo'
}

export enum LoaiThayDoiHoKhau {
  CapNhatHoKhau = 'CapNhatHoKhau',
  DangKyTamVang = 'DangKyTamVang',
  TachHoKhau = 'TachHoKhau',
  TaoMoiHoKhau = 'TaoMoiHoKhau',
  ThayDoiChuHo = 'ThayDoiChuHo',
  ThayDoiDiaChi = 'ThayDoiDiaChi',
  ThayDoiVaiTro = 'ThayDoiVaiTro',
  ThemThanhVien = 'ThemThanhVien',
  XoaHoKhau = 'XoaHoKhau',
  XoaNguoiKhoiHoKhau = 'XoaNguoiKhoiHoKhau',
  XoaThanhVien = 'XoaThanhVien'
}

export type LoginInput = {
  canCuocCongDan?: InputMaybe<Scalars['String']>;
  matKhau: Scalars['String'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  accessToken?: Maybe<Scalars['String']>;
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  EditDongGop: EditDongGopOutput;
  addDongGop: AddDongGopOutput;
  addKhoanPhi: AddKhoanPhiOutput;
  addTamTru: AddTamTruOutput;
  addTamVang: AddTamVangOutput;
  addUser: AddUserOutput;
  capNhatHoKhau: CapNhatHoKhauOutput;
  changePassword: ChangePasswordOutput;
  editUser: EditUserOutput;
  hetTamTru: HetTamTruOutput;
  hetTamVang: HetTamVangOutput;
  registerUser: RegisterUserOutput;
  suaThongTinTamTru: SuaThongTinTamTruOutput;
  suaThongTinTamVang: SuaThongTinTamVangOutput;
  tachHoKhau: TachHoKhauOutput;
  themHoKhau: ThemHoKhauOutput;
  themNguoiVaoHoKhau: ThemNguoiVaoHoKhauOutput;
  xoaNguoiKhoiHoKhau: XoaNguoiKhoiHoKhauOutput;
};


export type MutationEditDongGopArgs = {
  input: EditDongGopInput;
};


export type MutationAddDongGopArgs = {
  input: AddDongGopInput;
};


export type MutationAddKhoanPhiArgs = {
  input: AddKhoanPhiInput;
};


export type MutationAddTamTruArgs = {
  input: AddTamTruInput;
};


export type MutationAddTamVangArgs = {
  input: AddTamVangInput;
};


export type MutationAddUserArgs = {
  input: AddUserInput;
};


export type MutationCapNhatHoKhauArgs = {
  input: CapNhatHoKhauInput;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationEditUserArgs = {
  input: EditUserInput;
};


export type MutationHetTamTruArgs = {
  input: HetTamTruInput;
};


export type MutationHetTamVangArgs = {
  input: HetTamVangInput;
};


export type MutationRegisterUserArgs = {
  input: RegisterUserInput;
};


export type MutationSuaThongTinTamTruArgs = {
  input: SuaThongTinTamTruInput;
};


export type MutationSuaThongTinTamVangArgs = {
  input: SuaThongTinTamVangInput;
};


export type MutationTachHoKhauArgs = {
  input: TachHoKhauInput;
};


export type MutationThemHoKhauArgs = {
  input: ThemHoKhauInput;
};


export type MutationThemNguoiVaoHoKhauArgs = {
  input: ThemNguoiVaoHoKhauInput;
};


export type MutationXoaNguoiKhoiHoKhauArgs = {
  input: XoaNguoiKhoiHoKhauInput;
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
  XemDanhSachKhoanPhiChoNguoiQuanLi: XemDanhSachKhoanPhiChoNguoiQuanLiOutput;
  login: LoginOutput;
  newAccessToken: NewAccessTokenOutput;
  thongKeUser: ThongKeUserOuput;
  xemDanhSachDongGopChoNguoiDung: XemDanhSachDongGopChoNguoiDungOutput;
  xemDanhSachDongGopChoNguoiQuanLi: XemDanhSachDongGopChoNguoiQuanLiOutput;
  xemDanhSachHoKhau: XemDanhSachHoKhauOutput;
  xemDanhSachNguoiDung: XemDanhSachNguoiDungOutput;
  xemDanhSachTamTru: XemDanhSachTamTruOutput;
  xemDanhSachTamVang: XemDanhSachTamVangOutput;
  xemHoKhauChiTietChoNguoiDung: XemHoKhauChiTietChoQuanLiOutput;
  xemHoKhauChiTietChoQuanLi: XemHoKhauChiTietChoQuanLiOutput;
  xemKhoanPhiChiTietChoNguoiQuanLi: XemKhoanPhiChiTietChoQuanLiOutput;
  xemLichSuThayDoiNhanKhauChoNguoiDung: XemLichSuThayDoiNhanKhauOutput;
  xemLichSuThayDoiNhanKhauChoQuanLy: XemLichSuThayDoiNhanKhauOutput;
  xemThongTinNguoiDung: XemThongTinNguoiDungOutput;
  xemThongTinNguoiDungChoQuanLi: XemThongTinNguoiDungOutput;
  xemThongTinTamTru: XemThongTinTamTruOutput;
  xemThongTinTamVang: XemThongTinTamVangOutput;
};


export type QueryXemDanhSachKhoanPhiChoNguoiQuanLiArgs = {
  input: XemDanhSachKhoanPhiChoNguoiQuanLiInput;
};


export type QueryLoginArgs = {
  input: LoginInput;
};


export type QueryNewAccessTokenArgs = {
  input: NewAccessTokenInput;
};


export type QueryXemDanhSachDongGopChoNguoiQuanLiArgs = {
  input: XemDanhSachDongGopChoNguoiQuanLiInput;
};


export type QueryXemDanhSachHoKhauArgs = {
  input: XemDanhSachHoKhauInput;
};


export type QueryXemDanhSachNguoiDungArgs = {
  input: XemDanhSachNguoiDungInput;
};


export type QueryXemDanhSachTamTruArgs = {
  input: XemDanhSachTamTruInput;
};


export type QueryXemDanhSachTamVangArgs = {
  input: XemDanhSachTamVangInput;
};


export type QueryXemHoKhauChiTietChoQuanLiArgs = {
  input: XemHoKhauChiTietChoQuanLiInput;
};


export type QueryXemKhoanPhiChiTietChoNguoiQuanLiArgs = {
  input: XemKhoanPhiChiTietChoQuanLiInput;
};


export type QueryXemLichSuThayDoiNhanKhauChoQuanLyArgs = {
  input: XemLichSuThayDoiNhanKhauInput;
};


export type QueryXemThongTinNguoiDungChoQuanLiArgs = {
  input: XemThongTinNguoiDungChoQuanLiInput;
};

export type RegisterUserInput = {
  canCuocCongDan?: InputMaybe<Scalars['String']>;
  matKhau?: InputMaybe<Scalars['String']>;
  matKhauLapLai: Scalars['String'];
};

export type RegisterUserOutput = {
  __typename?: 'RegisterUserOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
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

export type SuaThongTinTamTruInput = {
  nguoiYeuCauId: Scalars['ID'];
  noiTamTruMoi: Scalars['String'];
};

export type SuaThongTinTamTruOutput = {
  __typename?: 'SuaThongTinTamTruOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export type SuaThongTinTamVangInput = {
  diaChiNoiDenMoi: Scalars['String'];
  lyDoTamVang: Scalars['String'];
  nguoiYeuCauId: Scalars['ID'];
};

export type SuaThongTinTamVangOutput = {
  __typename?: 'SuaThongTinTamVangOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export type TachHoKhauInput = {
  diaChiThuongTruMoi: Scalars['String'];
  hoKhauId: Scalars['ID'];
  nguoiYeuCauId: Scalars['ID'];
  thanhVienHoKhauMoi: Array<ThanhVien>;
};

export type TachHoKhauOutput = {
  __typename?: 'TachHoKhauOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export type TamTru = {
  __typename?: 'TamTru';
  createdAt: Scalars['DateTime'];
  ghiChu?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  ngayHetHanTamTru?: Maybe<Scalars['DateTime']>;
  ngayHetHieuLuc?: Maybe<Scalars['DateTime']>;
  nguoiPheDuyet: User;
  nguoiTamTru: User;
  noiTamTruHienTai?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type TamVang = {
  __typename?: 'TamVang';
  createdAt: Scalars['DateTime'];
  diaChiNoiDen?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lyDoTamVang?: Maybe<Scalars['String']>;
  ngayBatDauTamVang?: Maybe<Scalars['DateTime']>;
  ngayHetHieuLuc?: Maybe<Scalars['DateTime']>;
  nguoiPheDuyet: User;
  nguoiTamVang: User;
  updatedAt: Scalars['DateTime'];
};

export type ThanhVien = {
  id: Scalars['ID'];
  vaiTroThanhVien: VaiTroThanhVien;
};

export type ThemHoKhauInput = {
  diaChiThuongTru: Scalars['String'];
  nguoiYeuCauId: Scalars['ID'];
  thanhVien: Array<ThanhVien>;
};

export type ThemHoKhauOutput = {
  __typename?: 'ThemHoKhauOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export type ThemNguoiVaoHoKhauInput = {
  hoKhauId: Scalars['ID'];
  nguoiMoi: ThanhVien;
  nguoiYeuCauId: Scalars['ID'];
};

export type ThemNguoiVaoHoKhauOutput = {
  __typename?: 'ThemNguoiVaoHoKhauOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export type ThongKeUserOuput = {
  __typename?: 'ThongKeUserOuput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
  soHo?: Maybe<Scalars['Float']>;
  soNguoiDangKi?: Maybe<Scalars['Float']>;
  soNguoiDangKiTamTru?: Maybe<Scalars['Float']>;
  soNguoiDangKiTamVang?: Maybe<Scalars['Float']>;
  soNguoiDuoiLaoDong?: Maybe<Scalars['Float']>;
  soNguoiTrenLaoDong?: Maybe<Scalars['Float']>;
  soNguoiTrongLaoDong?: Maybe<Scalars['Float']>;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<StoredFile>;
  biDanh?: Maybe<Scalars['String']>;
  canCuocCongDan?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  daDangKi: Scalars['Boolean'];
  danToc: Scalars['String'];
  ghiChu?: Maybe<Scalars['String']>;
  gioiTinh: Scalars['String'];
  hoKhau?: Maybe<HoKhau>;
  id: Scalars['ID'];
  matKhau?: Maybe<Scalars['String']>;
  ngayDangKiThuongTru?: Maybe<Scalars['DateTime']>;
  ngaySinh: Scalars['DateTime'];
  ngheNghiep?: Maybe<Scalars['String']>;
  noiLamViec?: Maybe<Scalars['String']>;
  noiSinh: Scalars['String'];
  noiThuongTruTruocDo?: Maybe<Scalars['String']>;
  queQuan: Scalars['String'];
  soDienThoai?: Maybe<Scalars['String']>;
  tamTru?: Maybe<Scalars['String']>;
  ten: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  vaiTroNguoiDung: VaitroNguoiDung;
  vaiTroThanhVien?: Maybe<VaiTroThanhVien>;
};

export enum VaiTroThanhVien {
  Anh = 'Anh',
  Ba = 'Ba',
  Bo = 'Bo',
  Chat = 'Chat',
  Chau = 'Chau',
  Chi = 'Chi',
  Chong = 'Chong',
  ChuHo = 'ChuHo',
  Con = 'Con',
  ConNuoi = 'ConNuoi',
  Em = 'Em',
  Khac = 'Khac',
  Me = 'Me',
  Ong = 'Ong',
  Vo = 'Vo'
}

export enum VaitroNguoiDung {
  Admin = 'Admin',
  KeToan = 'KeToan',
  NguoiDan = 'NguoiDan',
  ToPho = 'ToPho',
  ToTruong = 'ToTruong'
}

export type XemDanhSachHoKhauInput = {
  paginationInput: PaginationInput;
  soHoKhau?: InputMaybe<Scalars['String']>;
};

export type XemDanhSachHoKhauOutput = {
  __typename?: 'XemDanhSachHoKhauOutput';
  error?: Maybe<CustomError>;
  hoKhau?: Maybe<Array<HoKhau>>;
  ok: Scalars['Boolean'];
  paginationOutput?: Maybe<PaginationOutput>;
};

export type XemDanhSachNguoiDungInput = {
  canCuocCongDan?: InputMaybe<Scalars['String']>;
  hoTen?: InputMaybe<Scalars['String']>;
  paginationInput: PaginationInput;
};

export type XemDanhSachNguoiDungOutput = {
  __typename?: 'XemDanhSachNguoiDungOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
  paginationOutput?: Maybe<PaginationOutput>;
  users?: Maybe<Array<User>>;
};

export type XemDanhSachTamTruInput = {
  canCuocCongDan?: InputMaybe<Scalars['String']>;
  paginationInput: PaginationInput;
};

export type XemDanhSachTamTruOutput = {
  __typename?: 'XemDanhSachTamTruOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
  paginationOutput?: Maybe<PaginationOutput>;
  tamTru?: Maybe<Array<TamTru>>;
};

export type XemDanhSachTamVangInput = {
  canCuocCongDan?: InputMaybe<Scalars['String']>;
  paginationInput: PaginationInput;
};

export type XemDanhSachTamVangOutput = {
  __typename?: 'XemDanhSachTamVangOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
  paginationOutput?: Maybe<PaginationOutput>;
  tamVang?: Maybe<Array<TamVang>>;
};

export type XemHoKhauChiTietChoQuanLiInput = {
  hoKhauId: Scalars['ID'];
};

export type XemHoKhauChiTietChoQuanLiOutput = {
  __typename?: 'XemHoKhauChiTietChoQuanLiOutput';
  error?: Maybe<CustomError>;
  hoKhau?: Maybe<HoKhau>;
  ok: Scalars['Boolean'];
};

export type XemKhoanPhiChiTietChoQuanLiInput = {
  khoanPhiId: Scalars['Float'];
};

export type XemKhoanPhiChiTietChoQuanLiOutput = {
  __typename?: 'XemKhoanPhiChiTietChoQuanLiOutput';
  donggop?: Maybe<Array<DongGop>>;
  error?: Maybe<CustomError>;
  khoanphi?: Maybe<KhoanPhi>;
  nChuaDong: Scalars['Float'];
  nDaDong: Scalars['Float'];
  ok: Scalars['Boolean'];
  tongtien: Scalars['Float'];
};

export type XemLichSuThayDoiNhanKhauInput = {
  hoKhauId: Scalars['ID'];
};

export type XemLichSuThayDoiNhanKhauOutput = {
  __typename?: 'XemLichSuThayDoiNhanKhauOutput';
  error?: Maybe<CustomError>;
  lichSuHoKhau?: Maybe<Array<LichSuHoKhau>>;
  ok: Scalars['Boolean'];
};

export type XemThongTinNguoiDungChoQuanLiInput = {
  userId: Scalars['ID'];
};

export type XemThongTinNguoiDungOutput = {
  __typename?: 'XemThongTinNguoiDungOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type XemThongTinTamTruOutput = {
  __typename?: 'XemThongTinTamTruOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
  tamTru?: Maybe<TamTru>;
};

export type XemThongTinTamVangOutput = {
  __typename?: 'XemThongTinTamVangOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
  tamVang?: Maybe<TamVang>;
};

export type XoaNguoiKhoiHoKhauInput = {
  hoKhauId: Scalars['ID'];
  nguoiCanXoaId: Scalars['ID'];
  nguoiYeuCauId: Scalars['ID'];
};

export type XoaNguoiKhoiHoKhauOutput = {
  __typename?: 'XoaNguoiKhoiHoKhauOutput';
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export type XemDanhSachDongGopChoNguoiDungOutput = {
  __typename?: 'xemDanhSachDongGopChoNguoiDungOutput';
  DongGop?: Maybe<Array<DongGop>>;
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
};

export type XemDanhSachDongGopChoNguoiQuanLiInput = {
  canCuocCongDan?: InputMaybe<Scalars['String']>;
  loaiPhi?: InputMaybe<LoaiPhi>;
  paginationInput: PaginationInput;
  sohoKhau?: InputMaybe<Scalars['Float']>;
  tenKhoanPhi?: InputMaybe<Scalars['String']>;
  trangThai?: InputMaybe<Scalars['Boolean']>;
};

export type XemDanhSachDongGopChoNguoiQuanLiOutput = {
  __typename?: 'xemDanhSachDongGopChoNguoiQuanLiOutput';
  DongGop?: Maybe<Array<DongGop>>;
  error?: Maybe<CustomError>;
  ok: Scalars['Boolean'];
  paginationOutput?: Maybe<PaginationOutput>;
};

export type XemDanhSachKhoanPhiChoNguoiQuanLiInput = {
  loaiPhi?: InputMaybe<LoaiPhi>;
  paginationInput: PaginationInput;
  tenKhoanPhi?: InputMaybe<Scalars['String']>;
  theoHoKhau?: InputMaybe<Scalars['Boolean']>;
};

export type XemDanhSachKhoanPhiChoNguoiQuanLiOutput = {
  __typename?: 'xemDanhSachKhoanPhiChoNguoiQuanLiOutput';
  error?: Maybe<CustomError>;
  khoanPhi?: Maybe<Array<KhoanPhi>>;
  ok: Scalars['Boolean'];
  paginationOutput?: Maybe<PaginationOutput>;
};

export type DongGopFragmentFragment = { __typename?: 'DongGop', id: string, trangThai: boolean, ngayNop?: any | null, soTienDongGop: number, nguoiTamTru?: { __typename?: 'User', id: string, canCuocCongDan?: string | null, ten: string } | null, hoKhau?: { __typename?: 'HoKhau', id: string, soHoKhau: string } | null, khoanPhi: { __typename?: 'KhoanPhi', id: string, tenKhoanPhi: string, ngayPhatDong: any, soTien?: number | null, ngayHetHan: any, theoHoKhau: boolean, loaiPhi: LoaiPhi } };

export type HoKhauFragmentFragment = { __typename?: 'HoKhau', id: string, soHoKhau: string, diaChiThuongTru: string, ghiChu?: string | null };

export type KhoanPhiFragmentFragment = { __typename?: 'KhoanPhi', id: string, tenKhoanPhi: string, ngayPhatDong: any, soTien?: number | null, ngayHetHan: any, theoHoKhau: boolean, loaiPhi: LoaiPhi };

export type TamTruFragmentFragment = { __typename?: 'TamTru', id: string, ghiChu?: string | null, ngayHetHanTamTru?: any | null, nguoiTamTru: { __typename?: 'User', id: string, gioiTinh: string, biDanh?: string | null, ngaySinh: any, noiSinh: string, queQuan: string, noiThuongTruTruocDo?: string | null, ngayDangKiThuongTru?: any | null, ngheNghiep?: string | null, noiLamViec?: string | null, danToc: string, ghiChu?: string | null, canCuocCongDan?: string | null, soDienThoai?: string | null, vaiTroNguoiDung: VaitroNguoiDung, vaiTroThanhVien?: VaiTroThanhVien | null, daDangKi: boolean, ten: string, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null } };

export type UserFragmentFragment = { __typename?: 'User', id: string, gioiTinh: string, biDanh?: string | null, ngaySinh: any, noiSinh: string, queQuan: string, noiThuongTruTruocDo?: string | null, ngayDangKiThuongTru?: any | null, ngheNghiep?: string | null, noiLamViec?: string | null, danToc: string, ghiChu?: string | null, canCuocCongDan?: string | null, soDienThoai?: string | null, vaiTroNguoiDung: VaitroNguoiDung, vaiTroThanhVien?: VaiTroThanhVien | null, daDangKi: boolean, ten: string, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null };

export type ThemDongGopMutationVariables = Exact<{
  input: AddDongGopInput;
}>;


export type ThemDongGopMutation = { __typename?: 'Mutation', addDongGop: { __typename?: 'AddDongGopOutput', ok: boolean, error?: { __typename?: 'CustomError', message: string, mainReason: string } | null } };

export type AddKhoanPhiMutationVariables = Exact<{
  input: AddKhoanPhiInput;
}>;


export type AddKhoanPhiMutation = { __typename?: 'Mutation', addKhoanPhi: { __typename?: 'AddKhoanPhiOutput', ok: boolean, error?: { __typename?: 'CustomError', message: string, mainReason: string } | null } };

export type AddTamTruMutationVariables = Exact<{
  input: AddTamTruInput;
}>;


export type AddTamTruMutation = { __typename?: 'Mutation', addTamTru: { __typename?: 'AddTamTruOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null } };

export type AddTamVangMutationVariables = Exact<{
  input: AddTamVangInput;
}>;


export type AddTamVangMutation = { __typename?: 'Mutation', addTamVang: { __typename?: 'AddTamVangOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null } };

export type AddUserMutationVariables = Exact<{
  input: AddUserInput;
}>;


export type AddUserMutation = { __typename?: 'Mutation', addUser: { __typename?: 'AddUserOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null } };

export type CapNhatHoKhauMutationVariables = Exact<{
  input: CapNhatHoKhauInput;
}>;


export type CapNhatHoKhauMutation = { __typename?: 'Mutation', capNhatHoKhau: { __typename?: 'CapNhatHoKhauOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null } };

export type ChangePasswordMutationVariables = Exact<{
  input: ChangePasswordInput;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'ChangePasswordOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null } };

export type EditUserMutationVariables = Exact<{
  input: EditUserInput;
}>;


export type EditUserMutation = { __typename?: 'Mutation', editUser: { __typename?: 'EditUserOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null } };

export type HetTamTruMutationVariables = Exact<{
  input: HetTamTruInput;
}>;


export type HetTamTruMutation = { __typename?: 'Mutation', hetTamTru: { __typename?: 'HetTamTruOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null } };

export type KetThucTamVangMutationVariables = Exact<{
  input: HetTamVangInput;
}>;


export type KetThucTamVangMutation = { __typename?: 'Mutation', hetTamVang: { __typename?: 'HetTamVangOutput', ok: boolean, error?: { __typename?: 'CustomError', message: string, mainReason: string } | null } };

export type SuaThongTinTamTruMutationVariables = Exact<{
  input: SuaThongTinTamTruInput;
}>;


export type SuaThongTinTamTruMutation = { __typename?: 'Mutation', suaThongTinTamTru: { __typename?: 'SuaThongTinTamTruOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null } };

export type SuaThongTinTamVangMutationVariables = Exact<{
  input: SuaThongTinTamVangInput;
}>;


export type SuaThongTinTamVangMutation = { __typename?: 'Mutation', suaThongTinTamVang: { __typename?: 'SuaThongTinTamVangOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null } };

export type TachHoKhauMutationVariables = Exact<{
  input: TachHoKhauInput;
}>;


export type TachHoKhauMutation = { __typename?: 'Mutation', tachHoKhau: { __typename?: 'TachHoKhauOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null } };

export type ThemHoKhauMutationVariables = Exact<{
  input: ThemHoKhauInput;
}>;


export type ThemHoKhauMutation = { __typename?: 'Mutation', themHoKhau: { __typename?: 'ThemHoKhauOutput', ok: boolean, error?: { __typename?: 'CustomError', message: string, mainReason: string } | null } };

export type DanhSachDongGopChoNguoiDungQueryVariables = Exact<{ [key: string]: never; }>;


export type DanhSachDongGopChoNguoiDungQuery = { __typename?: 'Query', xemDanhSachDongGopChoNguoiDung: { __typename?: 'xemDanhSachDongGopChoNguoiDungOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null, DongGop?: Array<{ __typename?: 'DongGop', id: string, trangThai: boolean, ngayNop?: any | null, soTienDongGop: number, nguoiTamTru?: { __typename?: 'User', id: string, canCuocCongDan?: string | null, ten: string } | null, hoKhau?: { __typename?: 'HoKhau', id: string, soHoKhau: string } | null, khoanPhi: { __typename?: 'KhoanPhi', id: string, tenKhoanPhi: string, ngayPhatDong: any, soTien?: number | null, ngayHetHan: any, theoHoKhau: boolean, loaiPhi: LoaiPhi } }> | null } };

export type XemDanhSachTamTruQueryVariables = Exact<{
  input: XemDanhSachTamTruInput;
}>;


export type XemDanhSachTamTruQuery = { __typename?: 'Query', xemDanhSachTamTru: { __typename?: 'XemDanhSachTamTruOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null, paginationOutput?: { __typename?: 'PaginationOutput', totalPages?: number | null, totalResults?: number | null } | null, tamTru?: Array<{ __typename?: 'TamTru', id: string, createdAt: any, updatedAt: any, noiTamTruHienTai?: string | null, nguoiTamTru: { __typename?: 'User', id: string, gioiTinh: string, biDanh?: string | null, ngaySinh: any, noiSinh: string, queQuan: string, noiThuongTruTruocDo?: string | null, ngayDangKiThuongTru?: any | null, ngheNghiep?: string | null, noiLamViec?: string | null, danToc: string, ghiChu?: string | null, canCuocCongDan?: string | null, soDienThoai?: string | null, vaiTroNguoiDung: VaitroNguoiDung, vaiTroThanhVien?: VaiTroThanhVien | null, daDangKi: boolean, ten: string, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null } }> | null } };

export type HoKhauDetailQueryVariables = Exact<{
  input: XemHoKhauChiTietChoQuanLiInput;
}>;


export type HoKhauDetailQuery = { __typename?: 'Query', xemHoKhauChiTietChoQuanLi: { __typename?: 'XemHoKhauChiTietChoQuanLiOutput', ok: boolean, hoKhau?: { __typename?: 'HoKhau', id: string, soHoKhau: string, createdAt: any, diaChiThuongTru: string, thanhVien: Array<{ __typename?: 'User', id: string, gioiTinh: string, biDanh?: string | null, ngaySinh: any, noiSinh: string, queQuan: string, noiThuongTruTruocDo?: string | null, ngayDangKiThuongTru?: any | null, ngheNghiep?: string | null, noiLamViec?: string | null, danToc: string, ghiChu?: string | null, canCuocCongDan?: string | null, soDienThoai?: string | null, vaiTroNguoiDung: VaitroNguoiDung, vaiTroThanhVien?: VaiTroThanhVien | null, daDangKi: boolean, ten: string, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null }> } | null, error?: { __typename?: 'CustomError', message: string, mainReason: string } | null } };

export type KhoanPhiDetailsQueryVariables = Exact<{
  input: XemKhoanPhiChiTietChoQuanLiInput;
}>;


export type KhoanPhiDetailsQuery = { __typename?: 'Query', xemKhoanPhiChiTietChoNguoiQuanLi: { __typename?: 'XemKhoanPhiChiTietChoQuanLiOutput', ok: boolean, tongtien: number, nDaDong: number, nChuaDong: number, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null, khoanphi?: { __typename?: 'KhoanPhi', id: string, tenKhoanPhi: string, ngayPhatDong: any, soTien?: number | null, ngayHetHan: any, theoHoKhau: boolean, loaiPhi: LoaiPhi } | null, donggop?: Array<{ __typename?: 'DongGop', id: string, trangThai: boolean, ngayNop?: any | null, soTienDongGop: number, nguoiTamTru?: { __typename?: 'User', id: string, canCuocCongDan?: string | null, ten: string } | null, hoKhau?: { __typename?: 'HoKhau', id: string, soHoKhau: string } | null, khoanPhi: { __typename?: 'KhoanPhi', id: string, tenKhoanPhi: string, ngayPhatDong: any, soTien?: number | null, ngayHetHan: any, theoHoKhau: boolean, loaiPhi: LoaiPhi } }> | null } };

export type LichSuHoKhauChoNguoiDungQueryVariables = Exact<{ [key: string]: never; }>;


export type LichSuHoKhauChoNguoiDungQuery = { __typename?: 'Query', xemLichSuThayDoiNhanKhauChoNguoiDung: { __typename?: 'XemLichSuThayDoiNhanKhauOutput', ok: boolean, lichSuHoKhau?: Array<{ __typename?: 'LichSuHoKhau', hanhDong: LoaiThayDoiHoKhau, ghiChu?: string | null, thoiGian: any, hoKhau: { __typename?: 'HoKhau', id: string, soHoKhau: string, diaChiThuongTru: string, ghiChu?: string | null, createdAt: any, updatedAt: any }, nguoiYeuCau: { __typename?: 'User', id: string, gioiTinh: string, biDanh?: string | null, ngaySinh: any, noiSinh: string, queQuan: string, noiThuongTruTruocDo?: string | null, ngayDangKiThuongTru?: any | null, ngheNghiep?: string | null, noiLamViec?: string | null, danToc: string, ghiChu?: string | null, canCuocCongDan?: string | null, soDienThoai?: string | null, vaiTroNguoiDung: VaitroNguoiDung, vaiTroThanhVien?: VaiTroThanhVien | null, daDangKi: boolean, ten: string, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null }, nguoiPheDuyet: { __typename?: 'User', id: string, gioiTinh: string, biDanh?: string | null, ngaySinh: any, noiSinh: string, queQuan: string, noiThuongTruTruocDo?: string | null, ngayDangKiThuongTru?: any | null, ngheNghiep?: string | null, noiLamViec?: string | null, danToc: string, ghiChu?: string | null, canCuocCongDan?: string | null, soDienThoai?: string | null, vaiTroNguoiDung: VaitroNguoiDung, vaiTroThanhVien?: VaiTroThanhVien | null, daDangKi: boolean, ten: string, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null } }> | null, error?: { __typename?: 'CustomError', message: string, mainReason: string } | null } };

export type LichSuHoKhauChoQuanLiQueryVariables = Exact<{
  input: XemLichSuThayDoiNhanKhauInput;
}>;


export type LichSuHoKhauChoQuanLiQuery = { __typename?: 'Query', xemLichSuThayDoiNhanKhauChoQuanLy: { __typename?: 'XemLichSuThayDoiNhanKhauOutput', ok: boolean, lichSuHoKhau?: Array<{ __typename?: 'LichSuHoKhau', hanhDong: LoaiThayDoiHoKhau, ghiChu?: string | null, thoiGian: any, hoKhau: { __typename?: 'HoKhau', id: string, soHoKhau: string, diaChiThuongTru: string, ghiChu?: string | null, createdAt: any, updatedAt: any }, nguoiYeuCau: { __typename?: 'User', id: string, gioiTinh: string, biDanh?: string | null, ngaySinh: any, noiSinh: string, queQuan: string, noiThuongTruTruocDo?: string | null, ngayDangKiThuongTru?: any | null, ngheNghiep?: string | null, noiLamViec?: string | null, danToc: string, ghiChu?: string | null, canCuocCongDan?: string | null, soDienThoai?: string | null, vaiTroNguoiDung: VaitroNguoiDung, vaiTroThanhVien?: VaiTroThanhVien | null, daDangKi: boolean, ten: string, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null }, nguoiPheDuyet: { __typename?: 'User', id: string, gioiTinh: string, biDanh?: string | null, ngaySinh: any, noiSinh: string, queQuan: string, noiThuongTruTruocDo?: string | null, ngayDangKiThuongTru?: any | null, ngheNghiep?: string | null, noiLamViec?: string | null, danToc: string, ghiChu?: string | null, canCuocCongDan?: string | null, soDienThoai?: string | null, vaiTroNguoiDung: VaitroNguoiDung, vaiTroThanhVien?: VaiTroThanhVien | null, daDangKi: boolean, ten: string, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null } }> | null, error?: { __typename?: 'CustomError', message: string, mainReason: string } | null } };

export type DanhSachHoKhauQueryVariables = Exact<{
  input: XemDanhSachHoKhauInput;
}>;


export type DanhSachHoKhauQuery = { __typename?: 'Query', xemDanhSachHoKhau: { __typename?: 'XemDanhSachHoKhauOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null, paginationOutput?: { __typename?: 'PaginationOutput', totalPages?: number | null, totalResults?: number | null } | null, hoKhau?: Array<{ __typename?: 'HoKhau', id: string, createdAt: any, updatedAt: any, diaChiThuongTru: string, soHoKhau: string, thanhVien: Array<{ __typename?: 'User', id: string, gioiTinh: string, biDanh?: string | null, ngaySinh: any, noiSinh: string, queQuan: string, noiThuongTruTruocDo?: string | null, ngayDangKiThuongTru?: any | null, ngheNghiep?: string | null, noiLamViec?: string | null, danToc: string, ghiChu?: string | null, canCuocCongDan?: string | null, soDienThoai?: string | null, vaiTroNguoiDung: VaitroNguoiDung, vaiTroThanhVien?: VaiTroThanhVien | null, daDangKi: boolean, ten: string, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null }> }> | null } };

export type DanhSachKhoanPhiQueryVariables = Exact<{
  input: XemDanhSachKhoanPhiChoNguoiQuanLiInput;
}>;


export type DanhSachKhoanPhiQuery = { __typename?: 'Query', XemDanhSachKhoanPhiChoNguoiQuanLi: { __typename?: 'xemDanhSachKhoanPhiChoNguoiQuanLiOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null, paginationOutput?: { __typename?: 'PaginationOutput', totalPages?: number | null, totalResults?: number | null } | null, khoanPhi?: Array<{ __typename?: 'KhoanPhi', id: string, tenKhoanPhi: string, loaiPhi: LoaiPhi, ngayPhatDong: any, ngayHetHan: any, theoHoKhau: boolean, soTien?: number | null }> | null } };

export type DanhSachNguoiDungQueryVariables = Exact<{
  input: XemDanhSachNguoiDungInput;
}>;


export type DanhSachNguoiDungQuery = { __typename?: 'Query', xemDanhSachNguoiDung: { __typename?: 'XemDanhSachNguoiDungOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null, paginationOutput?: { __typename?: 'PaginationOutput', totalPages?: number | null, totalResults?: number | null } | null, users?: Array<{ __typename?: 'User', id: string, gioiTinh: string, biDanh?: string | null, ngaySinh: any, noiSinh: string, queQuan: string, noiThuongTruTruocDo?: string | null, ngayDangKiThuongTru?: any | null, ngheNghiep?: string | null, noiLamViec?: string | null, danToc: string, ghiChu?: string | null, canCuocCongDan?: string | null, soDienThoai?: string | null, vaiTroNguoiDung: VaitroNguoiDung, vaiTroThanhVien?: VaiTroThanhVien | null, daDangKi: boolean, ten: string, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null }> | null } };

export type XemDanhSachTamVangQueryVariables = Exact<{
  input: XemDanhSachTamVangInput;
}>;


export type XemDanhSachTamVangQuery = { __typename?: 'Query', xemDanhSachTamVang: { __typename?: 'XemDanhSachTamVangOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null, paginationOutput?: { __typename?: 'PaginationOutput', totalPages?: number | null, totalResults?: number | null } | null, tamVang?: Array<{ __typename?: 'TamVang', id: string, createdAt: any, ngayBatDauTamVang?: any | null, lyDoTamVang?: string | null, diaChiNoiDen?: string | null, ngayHetHieuLuc?: any | null, updatedAt: any, nguoiTamVang: { __typename?: 'User', id: string, gioiTinh: string, biDanh?: string | null, ngaySinh: any, noiSinh: string, queQuan: string, noiThuongTruTruocDo?: string | null, ngayDangKiThuongTru?: any | null, ngheNghiep?: string | null, noiLamViec?: string | null, danToc: string, ghiChu?: string | null, canCuocCongDan?: string | null, soDienThoai?: string | null, vaiTroNguoiDung: VaitroNguoiDung, vaiTroThanhVien?: VaiTroThanhVien | null, daDangKi: boolean, ten: string, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null } }> | null } };

export type EditDongGopMutationVariables = Exact<{
  input: EditDongGopInput;
}>;


export type EditDongGopMutation = { __typename?: 'Mutation', EditDongGop: { __typename?: 'EditDongGopOutput', ok: boolean, error?: { __typename?: 'CustomError', message: string, mainReason: string } | null } };

export type HoKhauQueryVariables = Exact<{ [key: string]: never; }>;


export type HoKhauQuery = { __typename?: 'Query', xemHoKhauChiTietChoNguoiDung: { __typename?: 'XemHoKhauChiTietChoQuanLiOutput', ok: boolean, hoKhau?: { __typename?: 'HoKhau', id: string, soHoKhau: string, createdAt: any, diaChiThuongTru: string, thanhVien: Array<{ __typename?: 'User', id: string, gioiTinh: string, biDanh?: string | null, ngaySinh: any, noiSinh: string, queQuan: string, noiThuongTruTruocDo?: string | null, ngayDangKiThuongTru?: any | null, ngheNghiep?: string | null, noiLamViec?: string | null, danToc: string, ghiChu?: string | null, canCuocCongDan?: string | null, soDienThoai?: string | null, vaiTroNguoiDung: VaitroNguoiDung, vaiTroThanhVien?: VaiTroThanhVien | null, daDangKi: boolean, ten: string, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null }> } | null, error?: { __typename?: 'CustomError', message: string, mainReason: string } | null } };

export type LoginQueryVariables = Exact<{
  input: LoginInput;
}>;


export type LoginQuery = { __typename?: 'Query', login: { __typename?: 'LoginOutput', ok: boolean, accessToken?: string | null, error?: { __typename?: 'CustomError', message: string, mainReason: string } | null } };

export type RegisterMutationVariables = Exact<{
  input: RegisterUserInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'RegisterUserOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null } };

export type ThongKeUserQueryVariables = Exact<{ [key: string]: never; }>;


export type ThongKeUserQuery = { __typename?: 'Query', thongKeUser: { __typename?: 'ThongKeUserOuput', ok: boolean, soNguoiDangKi?: number | null, soNguoiDangKiTamTru?: number | null, soNguoiDangKiTamVang?: number | null, soHo?: number | null, soNguoiDuoiLaoDong?: number | null, soNguoiTrongLaoDong?: number | null, soNguoiTrenLaoDong?: number | null, error?: { __typename?: 'CustomError', message: string, mainReason: string } | null } };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', xemThongTinNguoiDung: { __typename?: 'XemThongTinNguoiDungOutput', ok: boolean, error?: { __typename?: 'CustomError', message: string, mainReason: string } | null, user?: { __typename?: 'User', id: string, gioiTinh: string, biDanh?: string | null, ngaySinh: any, noiSinh: string, queQuan: string, noiThuongTruTruocDo?: string | null, ngayDangKiThuongTru?: any | null, ngheNghiep?: string | null, noiLamViec?: string | null, danToc: string, ghiChu?: string | null, canCuocCongDan?: string | null, soDienThoai?: string | null, vaiTroNguoiDung: VaitroNguoiDung, vaiTroThanhVien?: VaiTroThanhVien | null, daDangKi: boolean, ten: string, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null } | null } };

export type UserDetailsQueryVariables = Exact<{
  input: XemThongTinNguoiDungChoQuanLiInput;
}>;


export type UserDetailsQuery = { __typename?: 'Query', xemThongTinNguoiDungChoQuanLi: { __typename?: 'XemThongTinNguoiDungOutput', ok: boolean, error?: { __typename?: 'CustomError', mainReason: string, message: string } | null, user?: { __typename?: 'User', id: string, gioiTinh: string, biDanh?: string | null, ngaySinh: any, noiSinh: string, queQuan: string, noiThuongTruTruocDo?: string | null, ngayDangKiThuongTru?: any | null, ngheNghiep?: string | null, noiLamViec?: string | null, danToc: string, ghiChu?: string | null, canCuocCongDan?: string | null, soDienThoai?: string | null, vaiTroNguoiDung: VaitroNguoiDung, vaiTroThanhVien?: VaiTroThanhVien | null, daDangKi: boolean, ten: string, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null } | null } };

export type XemThongTinTamTruQueryVariables = Exact<{ [key: string]: never; }>;


export type XemThongTinTamTruQuery = { __typename?: 'Query', xemThongTinTamTru: { __typename?: 'XemThongTinTamTruOutput', ok: boolean, error?: { __typename?: 'CustomError', message: string, mainReason: string } | null, tamTru?: { __typename?: 'TamTru', createdAt: any, ngayHetHanTamTru?: any | null, ghiChu?: string | null, noiTamTruHienTai?: string | null, ngayHetHieuLuc?: any | null, nguoiPheDuyet: { __typename?: 'User', id: string, gioiTinh: string, biDanh?: string | null, ngaySinh: any, noiSinh: string, queQuan: string, noiThuongTruTruocDo?: string | null, ngayDangKiThuongTru?: any | null, ngheNghiep?: string | null, noiLamViec?: string | null, danToc: string, ghiChu?: string | null, canCuocCongDan?: string | null, soDienThoai?: string | null, vaiTroNguoiDung: VaitroNguoiDung, vaiTroThanhVien?: VaiTroThanhVien | null, daDangKi: boolean, ten: string, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null }, nguoiTamTru: { __typename?: 'User', id: string, gioiTinh: string, biDanh?: string | null, ngaySinh: any, noiSinh: string, queQuan: string, noiThuongTruTruocDo?: string | null, ngayDangKiThuongTru?: any | null, ngheNghiep?: string | null, noiLamViec?: string | null, danToc: string, ghiChu?: string | null, canCuocCongDan?: string | null, soDienThoai?: string | null, vaiTroNguoiDung: VaitroNguoiDung, vaiTroThanhVien?: VaiTroThanhVien | null, daDangKi: boolean, ten: string, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null } } | null } };

export type XemThongTinTamVangQueryVariables = Exact<{ [key: string]: never; }>;


export type XemThongTinTamVangQuery = { __typename?: 'Query', xemThongTinTamVang: { __typename?: 'XemThongTinTamVangOutput', ok: boolean, error?: { __typename?: 'CustomError', message: string, mainReason: string } | null, tamVang?: { __typename?: 'TamVang', createdAt: any, lyDoTamVang?: string | null, diaChiNoiDen?: string | null, ngayHetHieuLuc?: any | null, nguoiPheDuyet: { __typename?: 'User', id: string, gioiTinh: string, biDanh?: string | null, ngaySinh: any, noiSinh: string, queQuan: string, noiThuongTruTruocDo?: string | null, ngayDangKiThuongTru?: any | null, ngheNghiep?: string | null, noiLamViec?: string | null, danToc: string, ghiChu?: string | null, canCuocCongDan?: string | null, soDienThoai?: string | null, vaiTroNguoiDung: VaitroNguoiDung, vaiTroThanhVien?: VaiTroThanhVien | null, daDangKi: boolean, ten: string, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null }, nguoiTamVang: { __typename?: 'User', id: string, gioiTinh: string, biDanh?: string | null, ngaySinh: any, noiSinh: string, queQuan: string, noiThuongTruTruocDo?: string | null, ngayDangKiThuongTru?: any | null, ngheNghiep?: string | null, noiLamViec?: string | null, danToc: string, ghiChu?: string | null, canCuocCongDan?: string | null, soDienThoai?: string | null, vaiTroNguoiDung: VaitroNguoiDung, vaiTroThanhVien?: VaiTroThanhVien | null, daDangKi: boolean, ten: string, avatar?: { __typename?: 'StoredFile', fileUrl: string, filePath: string } | null } } | null } };

export const KhoanPhiFragmentFragmentDoc = gql`
    fragment KhoanPhiFragment on KhoanPhi {
  id
  tenKhoanPhi
  ngayPhatDong
  soTien
  ngayHetHan
  theoHoKhau
  loaiPhi
}
    `;
export const DongGopFragmentFragmentDoc = gql`
    fragment DongGopFragment on DongGop {
  id
  trangThai
  ngayNop
  soTienDongGop
  nguoiTamTru {
    id
    canCuocCongDan
    ten
  }
  hoKhau {
    id
    soHoKhau
  }
  khoanPhi {
    ...KhoanPhiFragment
  }
}
    ${KhoanPhiFragmentFragmentDoc}`;
export const HoKhauFragmentFragmentDoc = gql`
    fragment HoKhauFragment on HoKhau {
  id
  soHoKhau
  diaChiThuongTru
  ghiChu
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  gioiTinh
  biDanh
  ngaySinh
  noiSinh
  queQuan
  noiThuongTruTruocDo
  ngayDangKiThuongTru
  ngheNghiep
  noiLamViec
  danToc
  avatar {
    fileUrl
    filePath
  }
  ghiChu
  canCuocCongDan
  soDienThoai
  vaiTroNguoiDung
  vaiTroThanhVien
  daDangKi
  ten
}
    `;
export const TamTruFragmentFragmentDoc = gql`
    fragment TamTruFragment on TamTru {
  id
  ghiChu
  ngayHetHanTamTru
  nguoiTamTru {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export const ThemDongGopDocument = gql`
    mutation ThemDongGop($input: AddDongGopInput!) {
  addDongGop(input: $input) {
    ok
    error {
      message
      mainReason
    }
  }
}
    `;
export type ThemDongGopMutationFn = Apollo.MutationFunction<ThemDongGopMutation, ThemDongGopMutationVariables>;

/**
 * __useThemDongGopMutation__
 *
 * To run a mutation, you first call `useThemDongGopMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useThemDongGopMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [themDongGopMutation, { data, loading, error }] = useThemDongGopMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useThemDongGopMutation(baseOptions?: Apollo.MutationHookOptions<ThemDongGopMutation, ThemDongGopMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ThemDongGopMutation, ThemDongGopMutationVariables>(ThemDongGopDocument, options);
      }
export type ThemDongGopMutationHookResult = ReturnType<typeof useThemDongGopMutation>;
export type ThemDongGopMutationResult = Apollo.MutationResult<ThemDongGopMutation>;
export type ThemDongGopMutationOptions = Apollo.BaseMutationOptions<ThemDongGopMutation, ThemDongGopMutationVariables>;
export const AddKhoanPhiDocument = gql`
    mutation AddKhoanPhi($input: AddKhoanPhiInput!) {
  addKhoanPhi(input: $input) {
    ok
    error {
      message
      mainReason
    }
  }
}
    `;
export type AddKhoanPhiMutationFn = Apollo.MutationFunction<AddKhoanPhiMutation, AddKhoanPhiMutationVariables>;

/**
 * __useAddKhoanPhiMutation__
 *
 * To run a mutation, you first call `useAddKhoanPhiMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddKhoanPhiMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addKhoanPhiMutation, { data, loading, error }] = useAddKhoanPhiMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddKhoanPhiMutation(baseOptions?: Apollo.MutationHookOptions<AddKhoanPhiMutation, AddKhoanPhiMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddKhoanPhiMutation, AddKhoanPhiMutationVariables>(AddKhoanPhiDocument, options);
      }
export type AddKhoanPhiMutationHookResult = ReturnType<typeof useAddKhoanPhiMutation>;
export type AddKhoanPhiMutationResult = Apollo.MutationResult<AddKhoanPhiMutation>;
export type AddKhoanPhiMutationOptions = Apollo.BaseMutationOptions<AddKhoanPhiMutation, AddKhoanPhiMutationVariables>;
export const AddTamTruDocument = gql`
    mutation AddTamTru($input: AddTamTruInput!) {
  addTamTru(input: $input) {
    ok
    error {
      mainReason
      message
    }
  }
}
    `;
export type AddTamTruMutationFn = Apollo.MutationFunction<AddTamTruMutation, AddTamTruMutationVariables>;

/**
 * __useAddTamTruMutation__
 *
 * To run a mutation, you first call `useAddTamTruMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTamTruMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTamTruMutation, { data, loading, error }] = useAddTamTruMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddTamTruMutation(baseOptions?: Apollo.MutationHookOptions<AddTamTruMutation, AddTamTruMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTamTruMutation, AddTamTruMutationVariables>(AddTamTruDocument, options);
      }
export type AddTamTruMutationHookResult = ReturnType<typeof useAddTamTruMutation>;
export type AddTamTruMutationResult = Apollo.MutationResult<AddTamTruMutation>;
export type AddTamTruMutationOptions = Apollo.BaseMutationOptions<AddTamTruMutation, AddTamTruMutationVariables>;
export const AddTamVangDocument = gql`
    mutation addTamVang($input: AddTamVangInput!) {
  addTamVang(input: $input) {
    ok
    error {
      mainReason
      message
    }
  }
}
    `;
export type AddTamVangMutationFn = Apollo.MutationFunction<AddTamVangMutation, AddTamVangMutationVariables>;

/**
 * __useAddTamVangMutation__
 *
 * To run a mutation, you first call `useAddTamVangMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTamVangMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTamVangMutation, { data, loading, error }] = useAddTamVangMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddTamVangMutation(baseOptions?: Apollo.MutationHookOptions<AddTamVangMutation, AddTamVangMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTamVangMutation, AddTamVangMutationVariables>(AddTamVangDocument, options);
      }
export type AddTamVangMutationHookResult = ReturnType<typeof useAddTamVangMutation>;
export type AddTamVangMutationResult = Apollo.MutationResult<AddTamVangMutation>;
export type AddTamVangMutationOptions = Apollo.BaseMutationOptions<AddTamVangMutation, AddTamVangMutationVariables>;
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
export const CapNhatHoKhauDocument = gql`
    mutation CapNhatHoKhau($input: CapNhatHoKhauInput!) {
  capNhatHoKhau(input: $input) {
    ok
    error {
      mainReason
      message
    }
  }
}
    `;
export type CapNhatHoKhauMutationFn = Apollo.MutationFunction<CapNhatHoKhauMutation, CapNhatHoKhauMutationVariables>;

/**
 * __useCapNhatHoKhauMutation__
 *
 * To run a mutation, you first call `useCapNhatHoKhauMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCapNhatHoKhauMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [capNhatHoKhauMutation, { data, loading, error }] = useCapNhatHoKhauMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCapNhatHoKhauMutation(baseOptions?: Apollo.MutationHookOptions<CapNhatHoKhauMutation, CapNhatHoKhauMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CapNhatHoKhauMutation, CapNhatHoKhauMutationVariables>(CapNhatHoKhauDocument, options);
      }
export type CapNhatHoKhauMutationHookResult = ReturnType<typeof useCapNhatHoKhauMutation>;
export type CapNhatHoKhauMutationResult = Apollo.MutationResult<CapNhatHoKhauMutation>;
export type CapNhatHoKhauMutationOptions = Apollo.BaseMutationOptions<CapNhatHoKhauMutation, CapNhatHoKhauMutationVariables>;
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
export const HetTamTruDocument = gql`
    mutation HetTamTru($input: HetTamTruInput!) {
  hetTamTru(input: $input) {
    ok
    error {
      mainReason
      message
    }
  }
}
    `;
export type HetTamTruMutationFn = Apollo.MutationFunction<HetTamTruMutation, HetTamTruMutationVariables>;

/**
 * __useHetTamTruMutation__
 *
 * To run a mutation, you first call `useHetTamTruMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useHetTamTruMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [hetTamTruMutation, { data, loading, error }] = useHetTamTruMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useHetTamTruMutation(baseOptions?: Apollo.MutationHookOptions<HetTamTruMutation, HetTamTruMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<HetTamTruMutation, HetTamTruMutationVariables>(HetTamTruDocument, options);
      }
export type HetTamTruMutationHookResult = ReturnType<typeof useHetTamTruMutation>;
export type HetTamTruMutationResult = Apollo.MutationResult<HetTamTruMutation>;
export type HetTamTruMutationOptions = Apollo.BaseMutationOptions<HetTamTruMutation, HetTamTruMutationVariables>;
export const KetThucTamVangDocument = gql`
    mutation KetThucTamVang($input: HetTamVangInput!) {
  hetTamVang(input: $input) {
    ok
    error {
      message
      mainReason
    }
  }
}
    `;
export type KetThucTamVangMutationFn = Apollo.MutationFunction<KetThucTamVangMutation, KetThucTamVangMutationVariables>;

/**
 * __useKetThucTamVangMutation__
 *
 * To run a mutation, you first call `useKetThucTamVangMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useKetThucTamVangMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [ketThucTamVangMutation, { data, loading, error }] = useKetThucTamVangMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useKetThucTamVangMutation(baseOptions?: Apollo.MutationHookOptions<KetThucTamVangMutation, KetThucTamVangMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<KetThucTamVangMutation, KetThucTamVangMutationVariables>(KetThucTamVangDocument, options);
      }
export type KetThucTamVangMutationHookResult = ReturnType<typeof useKetThucTamVangMutation>;
export type KetThucTamVangMutationResult = Apollo.MutationResult<KetThucTamVangMutation>;
export type KetThucTamVangMutationOptions = Apollo.BaseMutationOptions<KetThucTamVangMutation, KetThucTamVangMutationVariables>;
export const SuaThongTinTamTruDocument = gql`
    mutation suaThongTinTamTru($input: SuaThongTinTamTruInput!) {
  suaThongTinTamTru(input: $input) {
    ok
    error {
      mainReason
      message
    }
  }
}
    `;
export type SuaThongTinTamTruMutationFn = Apollo.MutationFunction<SuaThongTinTamTruMutation, SuaThongTinTamTruMutationVariables>;

/**
 * __useSuaThongTinTamTruMutation__
 *
 * To run a mutation, you first call `useSuaThongTinTamTruMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSuaThongTinTamTruMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [suaThongTinTamTruMutation, { data, loading, error }] = useSuaThongTinTamTruMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSuaThongTinTamTruMutation(baseOptions?: Apollo.MutationHookOptions<SuaThongTinTamTruMutation, SuaThongTinTamTruMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SuaThongTinTamTruMutation, SuaThongTinTamTruMutationVariables>(SuaThongTinTamTruDocument, options);
      }
export type SuaThongTinTamTruMutationHookResult = ReturnType<typeof useSuaThongTinTamTruMutation>;
export type SuaThongTinTamTruMutationResult = Apollo.MutationResult<SuaThongTinTamTruMutation>;
export type SuaThongTinTamTruMutationOptions = Apollo.BaseMutationOptions<SuaThongTinTamTruMutation, SuaThongTinTamTruMutationVariables>;
export const SuaThongTinTamVangDocument = gql`
    mutation suaThongTinTamVang($input: SuaThongTinTamVangInput!) {
  suaThongTinTamVang(input: $input) {
    ok
    error {
      mainReason
      message
    }
  }
}
    `;
export type SuaThongTinTamVangMutationFn = Apollo.MutationFunction<SuaThongTinTamVangMutation, SuaThongTinTamVangMutationVariables>;

/**
 * __useSuaThongTinTamVangMutation__
 *
 * To run a mutation, you first call `useSuaThongTinTamVangMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSuaThongTinTamVangMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [suaThongTinTamVangMutation, { data, loading, error }] = useSuaThongTinTamVangMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSuaThongTinTamVangMutation(baseOptions?: Apollo.MutationHookOptions<SuaThongTinTamVangMutation, SuaThongTinTamVangMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SuaThongTinTamVangMutation, SuaThongTinTamVangMutationVariables>(SuaThongTinTamVangDocument, options);
      }
export type SuaThongTinTamVangMutationHookResult = ReturnType<typeof useSuaThongTinTamVangMutation>;
export type SuaThongTinTamVangMutationResult = Apollo.MutationResult<SuaThongTinTamVangMutation>;
export type SuaThongTinTamVangMutationOptions = Apollo.BaseMutationOptions<SuaThongTinTamVangMutation, SuaThongTinTamVangMutationVariables>;
export const TachHoKhauDocument = gql`
    mutation TachHoKhau($input: TachHoKhauInput!) {
  tachHoKhau(input: $input) {
    ok
    error {
      mainReason
      message
    }
  }
}
    `;
export type TachHoKhauMutationFn = Apollo.MutationFunction<TachHoKhauMutation, TachHoKhauMutationVariables>;

/**
 * __useTachHoKhauMutation__
 *
 * To run a mutation, you first call `useTachHoKhauMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTachHoKhauMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tachHoKhauMutation, { data, loading, error }] = useTachHoKhauMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTachHoKhauMutation(baseOptions?: Apollo.MutationHookOptions<TachHoKhauMutation, TachHoKhauMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TachHoKhauMutation, TachHoKhauMutationVariables>(TachHoKhauDocument, options);
      }
export type TachHoKhauMutationHookResult = ReturnType<typeof useTachHoKhauMutation>;
export type TachHoKhauMutationResult = Apollo.MutationResult<TachHoKhauMutation>;
export type TachHoKhauMutationOptions = Apollo.BaseMutationOptions<TachHoKhauMutation, TachHoKhauMutationVariables>;
export const ThemHoKhauDocument = gql`
    mutation ThemHoKhau($input: ThemHoKhauInput!) {
  themHoKhau(input: $input) {
    ok
    error {
      message
      mainReason
    }
  }
}
    `;
export type ThemHoKhauMutationFn = Apollo.MutationFunction<ThemHoKhauMutation, ThemHoKhauMutationVariables>;

/**
 * __useThemHoKhauMutation__
 *
 * To run a mutation, you first call `useThemHoKhauMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useThemHoKhauMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [themHoKhauMutation, { data, loading, error }] = useThemHoKhauMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useThemHoKhauMutation(baseOptions?: Apollo.MutationHookOptions<ThemHoKhauMutation, ThemHoKhauMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ThemHoKhauMutation, ThemHoKhauMutationVariables>(ThemHoKhauDocument, options);
      }
export type ThemHoKhauMutationHookResult = ReturnType<typeof useThemHoKhauMutation>;
export type ThemHoKhauMutationResult = Apollo.MutationResult<ThemHoKhauMutation>;
export type ThemHoKhauMutationOptions = Apollo.BaseMutationOptions<ThemHoKhauMutation, ThemHoKhauMutationVariables>;
export const DanhSachDongGopChoNguoiDungDocument = gql`
    query DanhSachDongGopChoNguoiDung {
  xemDanhSachDongGopChoNguoiDung {
    ok
    error {
      mainReason
      message
    }
    DongGop {
      ...DongGopFragment
    }
  }
}
    ${DongGopFragmentFragmentDoc}`;

/**
 * __useDanhSachDongGopChoNguoiDungQuery__
 *
 * To run a query within a React component, call `useDanhSachDongGopChoNguoiDungQuery` and pass it any options that fit your needs.
 * When your component renders, `useDanhSachDongGopChoNguoiDungQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDanhSachDongGopChoNguoiDungQuery({
 *   variables: {
 *   },
 * });
 */
export function useDanhSachDongGopChoNguoiDungQuery(baseOptions?: Apollo.QueryHookOptions<DanhSachDongGopChoNguoiDungQuery, DanhSachDongGopChoNguoiDungQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DanhSachDongGopChoNguoiDungQuery, DanhSachDongGopChoNguoiDungQueryVariables>(DanhSachDongGopChoNguoiDungDocument, options);
      }
export function useDanhSachDongGopChoNguoiDungLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DanhSachDongGopChoNguoiDungQuery, DanhSachDongGopChoNguoiDungQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DanhSachDongGopChoNguoiDungQuery, DanhSachDongGopChoNguoiDungQueryVariables>(DanhSachDongGopChoNguoiDungDocument, options);
        }
export type DanhSachDongGopChoNguoiDungQueryHookResult = ReturnType<typeof useDanhSachDongGopChoNguoiDungQuery>;
export type DanhSachDongGopChoNguoiDungLazyQueryHookResult = ReturnType<typeof useDanhSachDongGopChoNguoiDungLazyQuery>;
export type DanhSachDongGopChoNguoiDungQueryResult = Apollo.QueryResult<DanhSachDongGopChoNguoiDungQuery, DanhSachDongGopChoNguoiDungQueryVariables>;
export const XemDanhSachTamTruDocument = gql`
    query XemDanhSachTamTru($input: XemDanhSachTamTruInput!) {
  xemDanhSachTamTru(input: $input) {
    ok
    error {
      mainReason
      message
    }
    paginationOutput {
      totalPages
      totalResults
    }
    tamTru {
      id
      createdAt
      updatedAt
      nguoiTamTru {
        ...UserFragment
      }
      noiTamTruHienTai
    }
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useXemDanhSachTamTruQuery__
 *
 * To run a query within a React component, call `useXemDanhSachTamTruQuery` and pass it any options that fit your needs.
 * When your component renders, `useXemDanhSachTamTruQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useXemDanhSachTamTruQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useXemDanhSachTamTruQuery(baseOptions: Apollo.QueryHookOptions<XemDanhSachTamTruQuery, XemDanhSachTamTruQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<XemDanhSachTamTruQuery, XemDanhSachTamTruQueryVariables>(XemDanhSachTamTruDocument, options);
      }
export function useXemDanhSachTamTruLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<XemDanhSachTamTruQuery, XemDanhSachTamTruQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<XemDanhSachTamTruQuery, XemDanhSachTamTruQueryVariables>(XemDanhSachTamTruDocument, options);
        }
export type XemDanhSachTamTruQueryHookResult = ReturnType<typeof useXemDanhSachTamTruQuery>;
export type XemDanhSachTamTruLazyQueryHookResult = ReturnType<typeof useXemDanhSachTamTruLazyQuery>;
export type XemDanhSachTamTruQueryResult = Apollo.QueryResult<XemDanhSachTamTruQuery, XemDanhSachTamTruQueryVariables>;
export const HoKhauDetailDocument = gql`
    query HoKhauDetail($input: XemHoKhauChiTietChoQuanLiInput!) {
  xemHoKhauChiTietChoQuanLi(input: $input) {
    ok
    hoKhau {
      id
      soHoKhau
      createdAt
      diaChiThuongTru
      thanhVien {
        ...UserFragment
      }
    }
    error {
      message
      mainReason
    }
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useHoKhauDetailQuery__
 *
 * To run a query within a React component, call `useHoKhauDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useHoKhauDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHoKhauDetailQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useHoKhauDetailQuery(baseOptions: Apollo.QueryHookOptions<HoKhauDetailQuery, HoKhauDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HoKhauDetailQuery, HoKhauDetailQueryVariables>(HoKhauDetailDocument, options);
      }
export function useHoKhauDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HoKhauDetailQuery, HoKhauDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HoKhauDetailQuery, HoKhauDetailQueryVariables>(HoKhauDetailDocument, options);
        }
export type HoKhauDetailQueryHookResult = ReturnType<typeof useHoKhauDetailQuery>;
export type HoKhauDetailLazyQueryHookResult = ReturnType<typeof useHoKhauDetailLazyQuery>;
export type HoKhauDetailQueryResult = Apollo.QueryResult<HoKhauDetailQuery, HoKhauDetailQueryVariables>;
export const KhoanPhiDetailsDocument = gql`
    query KhoanPhiDetails($input: XemKhoanPhiChiTietChoQuanLiInput!) {
  xemKhoanPhiChiTietChoNguoiQuanLi(input: $input) {
    ok
    error {
      mainReason
      message
    }
    khoanphi {
      ...KhoanPhiFragment
    }
    tongtien
    nDaDong
    nChuaDong
    donggop {
      ...DongGopFragment
    }
  }
}
    ${KhoanPhiFragmentFragmentDoc}
${DongGopFragmentFragmentDoc}`;

/**
 * __useKhoanPhiDetailsQuery__
 *
 * To run a query within a React component, call `useKhoanPhiDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useKhoanPhiDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useKhoanPhiDetailsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useKhoanPhiDetailsQuery(baseOptions: Apollo.QueryHookOptions<KhoanPhiDetailsQuery, KhoanPhiDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<KhoanPhiDetailsQuery, KhoanPhiDetailsQueryVariables>(KhoanPhiDetailsDocument, options);
      }
export function useKhoanPhiDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<KhoanPhiDetailsQuery, KhoanPhiDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<KhoanPhiDetailsQuery, KhoanPhiDetailsQueryVariables>(KhoanPhiDetailsDocument, options);
        }
export type KhoanPhiDetailsQueryHookResult = ReturnType<typeof useKhoanPhiDetailsQuery>;
export type KhoanPhiDetailsLazyQueryHookResult = ReturnType<typeof useKhoanPhiDetailsLazyQuery>;
export type KhoanPhiDetailsQueryResult = Apollo.QueryResult<KhoanPhiDetailsQuery, KhoanPhiDetailsQueryVariables>;
export const LichSuHoKhauChoNguoiDungDocument = gql`
    query LichSuHoKhauChoNguoiDung {
  xemLichSuThayDoiNhanKhauChoNguoiDung {
    ok
    lichSuHoKhau {
      hoKhau {
        id
        soHoKhau
        diaChiThuongTru
        ghiChu
        createdAt
        updatedAt
      }
      hanhDong
      ghiChu
      thoiGian
      nguoiYeuCau {
        ...UserFragment
      }
      nguoiPheDuyet {
        ...UserFragment
      }
    }
    error {
      message
      mainReason
    }
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useLichSuHoKhauChoNguoiDungQuery__
 *
 * To run a query within a React component, call `useLichSuHoKhauChoNguoiDungQuery` and pass it any options that fit your needs.
 * When your component renders, `useLichSuHoKhauChoNguoiDungQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLichSuHoKhauChoNguoiDungQuery({
 *   variables: {
 *   },
 * });
 */
export function useLichSuHoKhauChoNguoiDungQuery(baseOptions?: Apollo.QueryHookOptions<LichSuHoKhauChoNguoiDungQuery, LichSuHoKhauChoNguoiDungQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LichSuHoKhauChoNguoiDungQuery, LichSuHoKhauChoNguoiDungQueryVariables>(LichSuHoKhauChoNguoiDungDocument, options);
      }
export function useLichSuHoKhauChoNguoiDungLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LichSuHoKhauChoNguoiDungQuery, LichSuHoKhauChoNguoiDungQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LichSuHoKhauChoNguoiDungQuery, LichSuHoKhauChoNguoiDungQueryVariables>(LichSuHoKhauChoNguoiDungDocument, options);
        }
export type LichSuHoKhauChoNguoiDungQueryHookResult = ReturnType<typeof useLichSuHoKhauChoNguoiDungQuery>;
export type LichSuHoKhauChoNguoiDungLazyQueryHookResult = ReturnType<typeof useLichSuHoKhauChoNguoiDungLazyQuery>;
export type LichSuHoKhauChoNguoiDungQueryResult = Apollo.QueryResult<LichSuHoKhauChoNguoiDungQuery, LichSuHoKhauChoNguoiDungQueryVariables>;
export const LichSuHoKhauChoQuanLiDocument = gql`
    query LichSuHoKhauChoQuanLi($input: XemLichSuThayDoiNhanKhauInput!) {
  xemLichSuThayDoiNhanKhauChoQuanLy(input: $input) {
    ok
    lichSuHoKhau {
      hoKhau {
        id
        soHoKhau
        diaChiThuongTru
        ghiChu
        createdAt
        updatedAt
      }
      hanhDong
      ghiChu
      thoiGian
      nguoiYeuCau {
        ...UserFragment
      }
      nguoiPheDuyet {
        ...UserFragment
      }
    }
    error {
      message
      mainReason
    }
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useLichSuHoKhauChoQuanLiQuery__
 *
 * To run a query within a React component, call `useLichSuHoKhauChoQuanLiQuery` and pass it any options that fit your needs.
 * When your component renders, `useLichSuHoKhauChoQuanLiQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLichSuHoKhauChoQuanLiQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLichSuHoKhauChoQuanLiQuery(baseOptions: Apollo.QueryHookOptions<LichSuHoKhauChoQuanLiQuery, LichSuHoKhauChoQuanLiQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LichSuHoKhauChoQuanLiQuery, LichSuHoKhauChoQuanLiQueryVariables>(LichSuHoKhauChoQuanLiDocument, options);
      }
export function useLichSuHoKhauChoQuanLiLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LichSuHoKhauChoQuanLiQuery, LichSuHoKhauChoQuanLiQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LichSuHoKhauChoQuanLiQuery, LichSuHoKhauChoQuanLiQueryVariables>(LichSuHoKhauChoQuanLiDocument, options);
        }
export type LichSuHoKhauChoQuanLiQueryHookResult = ReturnType<typeof useLichSuHoKhauChoQuanLiQuery>;
export type LichSuHoKhauChoQuanLiLazyQueryHookResult = ReturnType<typeof useLichSuHoKhauChoQuanLiLazyQuery>;
export type LichSuHoKhauChoQuanLiQueryResult = Apollo.QueryResult<LichSuHoKhauChoQuanLiQuery, LichSuHoKhauChoQuanLiQueryVariables>;
export const DanhSachHoKhauDocument = gql`
    query DanhSachHoKhau($input: XemDanhSachHoKhauInput!) {
  xemDanhSachHoKhau(input: $input) {
    ok
    error {
      mainReason
      message
    }
    paginationOutput {
      totalPages
      totalResults
    }
    hoKhau {
      id
      createdAt
      updatedAt
      diaChiThuongTru
      soHoKhau
      thanhVien {
        ...UserFragment
      }
    }
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useDanhSachHoKhauQuery__
 *
 * To run a query within a React component, call `useDanhSachHoKhauQuery` and pass it any options that fit your needs.
 * When your component renders, `useDanhSachHoKhauQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDanhSachHoKhauQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDanhSachHoKhauQuery(baseOptions: Apollo.QueryHookOptions<DanhSachHoKhauQuery, DanhSachHoKhauQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DanhSachHoKhauQuery, DanhSachHoKhauQueryVariables>(DanhSachHoKhauDocument, options);
      }
export function useDanhSachHoKhauLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DanhSachHoKhauQuery, DanhSachHoKhauQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DanhSachHoKhauQuery, DanhSachHoKhauQueryVariables>(DanhSachHoKhauDocument, options);
        }
export type DanhSachHoKhauQueryHookResult = ReturnType<typeof useDanhSachHoKhauQuery>;
export type DanhSachHoKhauLazyQueryHookResult = ReturnType<typeof useDanhSachHoKhauLazyQuery>;
export type DanhSachHoKhauQueryResult = Apollo.QueryResult<DanhSachHoKhauQuery, DanhSachHoKhauQueryVariables>;
export const DanhSachKhoanPhiDocument = gql`
    query DanhSachKhoanPhi($input: xemDanhSachKhoanPhiChoNguoiQuanLiInput!) {
  XemDanhSachKhoanPhiChoNguoiQuanLi(input: $input) {
    ok
    error {
      mainReason
      message
    }
    paginationOutput {
      totalPages
      totalResults
    }
    khoanPhi {
      id
      tenKhoanPhi
      loaiPhi
      ngayPhatDong
      ngayHetHan
      theoHoKhau
      soTien
    }
  }
}
    `;

/**
 * __useDanhSachKhoanPhiQuery__
 *
 * To run a query within a React component, call `useDanhSachKhoanPhiQuery` and pass it any options that fit your needs.
 * When your component renders, `useDanhSachKhoanPhiQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDanhSachKhoanPhiQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDanhSachKhoanPhiQuery(baseOptions: Apollo.QueryHookOptions<DanhSachKhoanPhiQuery, DanhSachKhoanPhiQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DanhSachKhoanPhiQuery, DanhSachKhoanPhiQueryVariables>(DanhSachKhoanPhiDocument, options);
      }
export function useDanhSachKhoanPhiLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DanhSachKhoanPhiQuery, DanhSachKhoanPhiQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DanhSachKhoanPhiQuery, DanhSachKhoanPhiQueryVariables>(DanhSachKhoanPhiDocument, options);
        }
export type DanhSachKhoanPhiQueryHookResult = ReturnType<typeof useDanhSachKhoanPhiQuery>;
export type DanhSachKhoanPhiLazyQueryHookResult = ReturnType<typeof useDanhSachKhoanPhiLazyQuery>;
export type DanhSachKhoanPhiQueryResult = Apollo.QueryResult<DanhSachKhoanPhiQuery, DanhSachKhoanPhiQueryVariables>;
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
export const XemDanhSachTamVangDocument = gql`
    query xemDanhSachTamVang($input: XemDanhSachTamVangInput!) {
  xemDanhSachTamVang(input: $input) {
    ok
    error {
      mainReason
      message
    }
    paginationOutput {
      totalPages
      totalResults
    }
    tamVang {
      nguoiTamVang {
        ...UserFragment
      }
      id
      createdAt
      ngayBatDauTamVang
      lyDoTamVang
      diaChiNoiDen
      ngayHetHieuLuc
      updatedAt
    }
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useXemDanhSachTamVangQuery__
 *
 * To run a query within a React component, call `useXemDanhSachTamVangQuery` and pass it any options that fit your needs.
 * When your component renders, `useXemDanhSachTamVangQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useXemDanhSachTamVangQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useXemDanhSachTamVangQuery(baseOptions: Apollo.QueryHookOptions<XemDanhSachTamVangQuery, XemDanhSachTamVangQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<XemDanhSachTamVangQuery, XemDanhSachTamVangQueryVariables>(XemDanhSachTamVangDocument, options);
      }
export function useXemDanhSachTamVangLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<XemDanhSachTamVangQuery, XemDanhSachTamVangQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<XemDanhSachTamVangQuery, XemDanhSachTamVangQueryVariables>(XemDanhSachTamVangDocument, options);
        }
export type XemDanhSachTamVangQueryHookResult = ReturnType<typeof useXemDanhSachTamVangQuery>;
export type XemDanhSachTamVangLazyQueryHookResult = ReturnType<typeof useXemDanhSachTamVangLazyQuery>;
export type XemDanhSachTamVangQueryResult = Apollo.QueryResult<XemDanhSachTamVangQuery, XemDanhSachTamVangQueryVariables>;
export const EditDongGopDocument = gql`
    mutation EditDongGop($input: EditDongGopInput!) {
  EditDongGop(input: $input) {
    ok
    error {
      message
      mainReason
    }
  }
}
    `;
export type EditDongGopMutationFn = Apollo.MutationFunction<EditDongGopMutation, EditDongGopMutationVariables>;

/**
 * __useEditDongGopMutation__
 *
 * To run a mutation, you first call `useEditDongGopMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditDongGopMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editDongGopMutation, { data, loading, error }] = useEditDongGopMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditDongGopMutation(baseOptions?: Apollo.MutationHookOptions<EditDongGopMutation, EditDongGopMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditDongGopMutation, EditDongGopMutationVariables>(EditDongGopDocument, options);
      }
export type EditDongGopMutationHookResult = ReturnType<typeof useEditDongGopMutation>;
export type EditDongGopMutationResult = Apollo.MutationResult<EditDongGopMutation>;
export type EditDongGopMutationOptions = Apollo.BaseMutationOptions<EditDongGopMutation, EditDongGopMutationVariables>;
export const HoKhauDocument = gql`
    query hoKhau {
  xemHoKhauChiTietChoNguoiDung {
    ok
    hoKhau {
      id
      soHoKhau
      createdAt
      diaChiThuongTru
      thanhVien {
        ...UserFragment
      }
    }
    error {
      message
      mainReason
    }
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useHoKhauQuery__
 *
 * To run a query within a React component, call `useHoKhauQuery` and pass it any options that fit your needs.
 * When your component renders, `useHoKhauQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHoKhauQuery({
 *   variables: {
 *   },
 * });
 */
export function useHoKhauQuery(baseOptions?: Apollo.QueryHookOptions<HoKhauQuery, HoKhauQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HoKhauQuery, HoKhauQueryVariables>(HoKhauDocument, options);
      }
export function useHoKhauLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HoKhauQuery, HoKhauQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HoKhauQuery, HoKhauQueryVariables>(HoKhauDocument, options);
        }
export type HoKhauQueryHookResult = ReturnType<typeof useHoKhauQuery>;
export type HoKhauLazyQueryHookResult = ReturnType<typeof useHoKhauLazyQuery>;
export type HoKhauQueryResult = Apollo.QueryResult<HoKhauQuery, HoKhauQueryVariables>;
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
export const ThongKeUserDocument = gql`
    query ThongKeUser {
  thongKeUser {
    ok
    error {
      message
      mainReason
    }
    soNguoiDangKi
    soNguoiDangKiTamTru
    soNguoiDangKiTamVang
    soHo
    soNguoiDuoiLaoDong
    soNguoiTrongLaoDong
    soNguoiTrenLaoDong
  }
}
    `;

/**
 * __useThongKeUserQuery__
 *
 * To run a query within a React component, call `useThongKeUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useThongKeUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useThongKeUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useThongKeUserQuery(baseOptions?: Apollo.QueryHookOptions<ThongKeUserQuery, ThongKeUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ThongKeUserQuery, ThongKeUserQueryVariables>(ThongKeUserDocument, options);
      }
export function useThongKeUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ThongKeUserQuery, ThongKeUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ThongKeUserQuery, ThongKeUserQueryVariables>(ThongKeUserDocument, options);
        }
export type ThongKeUserQueryHookResult = ReturnType<typeof useThongKeUserQuery>;
export type ThongKeUserLazyQueryHookResult = ReturnType<typeof useThongKeUserLazyQuery>;
export type ThongKeUserQueryResult = Apollo.QueryResult<ThongKeUserQuery, ThongKeUserQueryVariables>;
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
export const XemThongTinTamTruDocument = gql`
    query xemThongTinTamTru {
  xemThongTinTamTru {
    ok
    error {
      message
      mainReason
    }
    tamTru {
      createdAt
      nguoiPheDuyet {
        ...UserFragment
      }
      nguoiTamTru {
        ...UserFragment
      }
      ngayHetHanTamTru
      ghiChu
      noiTamTruHienTai
      ngayHetHieuLuc
    }
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useXemThongTinTamTruQuery__
 *
 * To run a query within a React component, call `useXemThongTinTamTruQuery` and pass it any options that fit your needs.
 * When your component renders, `useXemThongTinTamTruQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useXemThongTinTamTruQuery({
 *   variables: {
 *   },
 * });
 */
export function useXemThongTinTamTruQuery(baseOptions?: Apollo.QueryHookOptions<XemThongTinTamTruQuery, XemThongTinTamTruQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<XemThongTinTamTruQuery, XemThongTinTamTruQueryVariables>(XemThongTinTamTruDocument, options);
      }
export function useXemThongTinTamTruLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<XemThongTinTamTruQuery, XemThongTinTamTruQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<XemThongTinTamTruQuery, XemThongTinTamTruQueryVariables>(XemThongTinTamTruDocument, options);
        }
export type XemThongTinTamTruQueryHookResult = ReturnType<typeof useXemThongTinTamTruQuery>;
export type XemThongTinTamTruLazyQueryHookResult = ReturnType<typeof useXemThongTinTamTruLazyQuery>;
export type XemThongTinTamTruQueryResult = Apollo.QueryResult<XemThongTinTamTruQuery, XemThongTinTamTruQueryVariables>;
export const XemThongTinTamVangDocument = gql`
    query xemThongTinTamVang {
  xemThongTinTamVang {
    ok
    error {
      message
      mainReason
    }
    tamVang {
      createdAt
      nguoiPheDuyet {
        ...UserFragment
      }
      nguoiTamVang {
        ...UserFragment
      }
      lyDoTamVang
      diaChiNoiDen
      ngayHetHieuLuc
    }
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useXemThongTinTamVangQuery__
 *
 * To run a query within a React component, call `useXemThongTinTamVangQuery` and pass it any options that fit your needs.
 * When your component renders, `useXemThongTinTamVangQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useXemThongTinTamVangQuery({
 *   variables: {
 *   },
 * });
 */
export function useXemThongTinTamVangQuery(baseOptions?: Apollo.QueryHookOptions<XemThongTinTamVangQuery, XemThongTinTamVangQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<XemThongTinTamVangQuery, XemThongTinTamVangQueryVariables>(XemThongTinTamVangDocument, options);
      }
export function useXemThongTinTamVangLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<XemThongTinTamVangQuery, XemThongTinTamVangQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<XemThongTinTamVangQuery, XemThongTinTamVangQueryVariables>(XemThongTinTamVangDocument, options);
        }
export type XemThongTinTamVangQueryHookResult = ReturnType<typeof useXemThongTinTamVangQuery>;
export type XemThongTinTamVangLazyQueryHookResult = ReturnType<typeof useXemThongTinTamVangLazyQuery>;
export type XemThongTinTamVangQueryResult = Apollo.QueryResult<XemThongTinTamVangQuery, XemThongTinTamVangQueryVariables>;