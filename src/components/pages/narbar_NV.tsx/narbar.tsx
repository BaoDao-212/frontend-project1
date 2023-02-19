import { useReactiveVar } from "@apollo/client";
import { faCoffee, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PresentationChartBarIcon } from "@heroicons/react/outline";
import { ArrowCircleLeftIcon, PencilAltIcon } from "@heroicons/react/solid";
import { Dispatch, SetStateAction } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout, userVar } from "../../../apollo/reactiveVar/loginStatusVar";
import { classNames } from "../../../common/utilFunctions";
import { VaitroNguoiDung } from "../../../graphql/generated/schema";
import { NavState } from "../../../layouts/ManagerLayout";

const checkMatchBaseRoutes = (route: string) => {
  const routes = ["/", "/thongtin", "/changepassword", "/account/user"];
  return routes.some((r) => {
    return r === route;
  });
};
type Props = {
  navState: NavState[];
  setNavState: Dispatch<SetStateAction<NavState[]>>;
};
const Narbar = ({ navState, setNavState }: Props) => {
  const user = useReactiveVar(userVar);
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav className="bg-slate-200  border-gray-200 px-2 sm:px-4 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center">
          <Link to={"/"}>
            <FontAwesomeIcon
              className="h-6 mr-3 sm:h-9  text-indigo-900 mx-auto "
              icon={faCoffee}
            />
          </Link>
          <span className="self-center text-xl font-semibold whitespace-nowrap text-indigo-900">
            Mixi
          </span>
        </div>
        <div className="flex items-center md:order-2">
          <div className="justify-self-end px-2 w-fit mx-auto mb-4">
            <div
              onClick={() => logout()}
              className="flex mt-6 group items-center pl-1 pr-3 py-1 text-sm font-medium rounded w-full text-gray-700 hover:text-white hover:bg-indigo-600 shadow-md space-x-2 cursor-pointer group"
            >
              <button className="">Log out</button>
            </div>
          </div>
        </div>
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 border border-gray-200 rounded-lg bg-slate-200 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navState.map((item, i) => (
              <button
                onClick={() => {
                  const temp = navState[i].routes[0];
                  if (temp instanceof RegExp) {
                    navigate(temp.source);
                  } else navigate(temp);
                }}
                key={item.name}
                className={classNames(
                  item.current
                    ? "bg-gray-200 text-gray-900"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-200",
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full block py-2 pl-3 pr-4 text-white bg-black-700 rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-white"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? "text-slate-600"
                      : "text-slate-400 group-hover:text-slate-900",
                    "mr-3 flex-shrink-0 h-6 w-6"
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </button>
            ))}
            {user &&
              [VaitroNguoiDung.Admin, VaitroNguoiDung.QuanLy].includes(
                user.vaiTroNguoiDung
              ) &&
              checkMatchBaseRoutes(location.pathname) && (
                <button
                  onClick={() => navigate("/manager")}
                  className={classNames(
                    "text-gray-700 hover:text-gray-900 hover:bg-gray-200 group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full"
                  )}
                >
                  <PencilAltIcon
                    className={
                      "text-indigo-400 group-hover:text-indigo-600 mr-3 flex-shrink-0 h-6 w-6"
                    }
                    aria-hidden="true"
                  />
                  Quản lí
                </button>
              )}
            {user &&
              [VaitroNguoiDung.NhanVien].includes(user.vaiTroNguoiDung) &&
              checkMatchBaseRoutes(location.pathname) && (
                <button
                  onClick={() => navigate("/banhang/add")}
                  className={classNames(
                    "text-gray-700 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full"
                  )}
                >
                  <PresentationChartBarIcon
                    className={
                      "text-indigo-400 group-hover:text-indigo-600 mr-3 flex-shrink-0 h-6 w-6"
                    }
                    aria-hidden="true"
                  />
                  Bán hàng
                </button>
              )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Narbar;
