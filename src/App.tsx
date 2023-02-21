import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetUser } from "./hooks/useGetUser";
import LoginProtect from "./layouts/LoginProtect";
import ManagerLayout from "./layouts/ManagerLayout";
import NVBanHangLayout from "./layouts/NV_BanHangLayout";
import NormalUserLayout from "./layouts/UserLayout";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ThemDonHang from "./pages/banhang/addDonHang2";
import AddVoucher from "./pages/quanLi/sanpham/addMaGiamGia";
import AddSanPham from "./pages/quanLi/sanpham/addSanPham";
import DanhSachDonHang from "./pages/banhang/xemDanhSachDonHang";
import DanhSachSanPham from "./pages/banhang/xemDanhSachSanPham";
import ChangePassword from "./pages/nguoiDan/ChangePassword";
import NormalUserHomePage from "./pages/nguoiDan/NormalUserHomePage";
import UserDetailsForUsers from "./pages/nguoiDan/UserDetailsForUsers";
import AddUser from "./pages/quanLi/user/AddUser";
import EditUser from "./pages/quanLi/user/EditUser";
import UserDetails from "./pages/quanLi/user/UserDetails";
import UserManager from "./pages/quanLi/user/UserManager";
import EditSanPham from "./pages/quanLi/sanpham/editSanPham";
import SanPhamDetails from "./pages/banhang/sanPhamDetails";
import DanhSachNhanVien from "./pages/quanLi/nhanvien/xemDanhSachNhanVien";
import AddNhanVien from "./pages/quanLi/nhanvien/addNhanVien";
import ThongKe from "./pages/quanLi/user/thongke";
import ThemDonHangChoUser from "./pages/quanLi/user/muaHang";
import DonHangDetails from "./pages/banhang/donHangDetails";
import NhanVienDetails from "./pages/quanLi/nhanvien/nhanVienDetails";
import EditNhanVien from "./pages/quanLi/nhanvien/editNhanVien";
import DonHangDetails2 from "./pages/quanLi/donhang/donHangDetails";
import DanhSachDonHangChoQuanLi from "./pages/quanLi/donhang/xemDanhSachDonHang";
import DanhSachDonHangChoUser from "./pages/nguoiDan/donhang/xemDanhSachDonHang";
import DonHangDetailsCHoUser from "./pages/nguoiDan/donhang/donHangDetails";

function App() {
  useGetUser();
  return (
    <div className="">
      <Routes>
        <Route element={<LoginProtect />}>
          <Route path="/" element={<NormalUserLayout />}>
            <Route index element={<NormalUserHomePage />} />
            <Route path="thongtin" element={<UserDetailsForUsers />} />
            <Route path="changepassword" element={<ChangePassword />} />
            <Route path="muahang" element={<ThemDonHangChoUser />} />
            <Route path="donhang/show" element={<DanhSachDonHangChoUser />} />
            <Route
              path="donhang/details/:id"
              element={<DonHangDetailsCHoUser />}
            />
          </Route>
          <Route path="/manager" element={<ManagerLayout />}>
            <Route index element={<ThongKe />} />
            <Route path="donhang">
              <Route path="show" element={<DanhSachDonHangChoQuanLi />} />
              <Route path="details/:id" element={<DonHangDetails2 />} />
            </Route>
            <Route path="users">
              <Route index element={<UserManager />} />
              <Route path="add" element={<AddUser />} />
              <Route path=":id" element={<UserDetails />} />
              <Route path="edit/:id" element={<EditUser />} />
            </Route>
            <Route path="sp">
              <Route index element={<DanhSachSanPham />} />
              <Route path="add" element={<AddSanPham />} />
              <Route path="edit/:id" element={<EditSanPham />} />
              <Route path="detail/:id" element={<SanPhamDetails />} />
            </Route>
            <Route path="nv">
              <Route index element={<DanhSachNhanVien />} />
              <Route path="add" element={<AddNhanVien />} />
              <Route path="edit/:id" element={<EditNhanVien />} />
              <Route path="detail/:id" element={<NhanVienDetails />} />
            </Route>
          </Route>
          <Route path="voucher">
            <Route path="add" element={<AddVoucher />} />
          </Route>
          <Route path="/banhang" element={<NVBanHangLayout />}>
            <Route path="donhang/:id" element={<DonHangDetails />} />
            <Route path="show" element={<DanhSachDonHang />} />
            <Route path="add" element={<ThemDonHang />} />
            <Route path="showsp" element={<DanhSachSanPham />} />
          </Route>
        </Route>
        <Route path="/auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
      <ToastContainer closeOnClick autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
