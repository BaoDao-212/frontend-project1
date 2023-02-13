import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetUser } from "./hooks/useGetUser";
import KeToanLayout from "./layouts/KeToanLayout";
import LoginProtect from "./layouts/LoginProtect";
import ManagerLayout from "./layouts/ManagerLayout";
import NVBanHangLayout from "./layouts/NV_BanHangLayout";
import NormalUserLayout from "./layouts/UserLayout";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ThemDonHang from "./pages/banhang/addDonHang";
import AddVoucher from "./pages/banhang/addMaGiamGia";
import AddSanPham from "./pages/banhang/addSanPham";
import DanhSachSanPham from "./pages/banhang/xemDanhSachSanPham";
import ChangePassword from "./pages/nguoiDan/ChangePassword";
import NormalUserHomePage from "./pages/nguoiDan/NormalUserHomePage";
import UserDetailsForUsers from "./pages/nguoiDan/UserDetailsForUsers";
import AddUser from "./pages/quanLi/user/AddUser";
import EditUser from "./pages/quanLi/user/EditUser";
import UserDetails from "./pages/quanLi/user/UserDetails";
import UserManager from "./pages/quanLi/user/UserManager";

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
          </Route>
          <Route path="/manager" element={<ManagerLayout />}>
            <Route path="users">
              <Route index element={<UserManager />} />
              <Route path="add" element={<AddUser />} />
              <Route path=":id" element={<UserDetails />} />
              <Route path="edit/:id" element={<EditUser />} />
            </Route>
            <Route path="sp">
              <Route index element={<DanhSachSanPham />} />
              <Route path="add" element={<AddSanPham />} />
            </Route>
            <Route path="voucher">
              {/* <Route index element={<DanhSachSanPham />} /> */}
              <Route path="add" element={<AddVoucher />} />
            </Route>
          </Route>
          <Route path="/banhang" element={<NVBanHangLayout />}>
            <Route path="add" element={<ThemDonHang />} />
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
