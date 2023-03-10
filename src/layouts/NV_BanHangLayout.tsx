import { useReactiveVar } from "@apollo/client";
import { Fragment, SVGProps, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { userVar } from "../apollo/reactiveVar/loginStatusVar";
import { VaitroNguoiDung } from "../graphql/generated/schema";

import {
  MenuAlt1Icon,
  MenuAlt3Icon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  BookOpenIcon,
  ChartSquareBarIcon,
  IdentificationIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import { cloneDeep } from "lodash";
import DesktopSidebar from "../components/pages/managerPage/DesktopSidebar";
import Narbar from "../components/pages/narbar_NV.tsx/narbar";

const navigation = [
  {
    routes: ["/banhang/add", RegExp("^/banhang/add/*")],
    name: "Đặt hàng",
    icon: UserGroupIcon,
    current: false,
  },
  {
    routes: ["/banhang/showsp"],
    name: "Thực đơn",
    icon: MenuAlt1Icon,
    current: false,
  },
  {
    routes: ["/banhang/show", RegExp("^/banhang/donhang/*")],
    name: "Đơn hàng được đặt",
    icon: MenuAlt3Icon,
    current: false,
  },
  {
    routes: ["/thongtin"],
    name: "Cá nhân",
    icon: UserCircleIcon,
    current: false,
  },
];

export type NavState = {
  routes: (string | RegExp)[];
  name: string;
  icon: (p: SVGProps<SVGSVGElement>) => JSX.Element;
  current: boolean;
};
type Props = {};
const NVBanHangLayout = (props: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [navState, setNavState] = useState<NavState[]>(navigation);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user = useReactiveVar(userVar);
  useEffect(() => {
    if (user && ![VaitroNguoiDung.NhanVien].includes(user.vaiTroNguoiDung))
      navigate("/");
  }, [user]);
  useEffect(() => {
    const index = navState.findIndex((s) =>
      s.routes
        .map((v) => {
          if (v instanceof RegExp) return (x: string) => v.test(x);
          return (x: string) => v === x;
        })
        .some((f) => f(location.pathname))
    );
    if (index === -1) return;
    setNavState((pre) => {
      const newState = cloneDeep(pre);
      newState.forEach((s) => (s.current = false));
      newState[index].current = true;
      return newState;
    });
  }, [location]);
  return (
    <Fragment>
      <div className="w-h-full">
        <Narbar navState={navState} setNavState={setNavState} />
        <div className="lg:pl-64 flex flex-col">
          <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden">
            <button
              type="button"
              className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
};

export default NVBanHangLayout;
