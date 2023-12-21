import { Link, useLocation } from "react-router-dom";

interface Ilist {
  url: string;
  path: string;
  title: string;
  active?: boolean;
}

const SideBar = () => {
  const location = useLocation();
  
  return (
    <div className="flex flex-col p-2 items-center h-auto min-h-[100vh] border-r shadow-3xl  max-[800px]:h-auto">
      <h1 className="font-bold text-4xl font-robotoSlab mt-4">
        <Link to={"/"}>
          <span className="text-mainColor">Q</span>
          <span>-</span>
          <span>B</span>
          <span className="text-mainColor">ee</span>
        </Link>
      </h1>

      <div className="mt-8">

        <List
          title={"Create Mobile"}
          url="/admin/create"
          active={location.pathname==='/admin/create'}
          path="M9.546.5a9.5 9.5 0 1 0 9.5 9.5 9.51 9.51 0 0 0-9.5-9.5ZM13.788 11h-3.242v3.242a1 1 0 1 1-2 0V11H5.304a1 1 0 0 1 0-2h3.242V5.758a1 1 0 0 1 2 0V9h3.242a1 1 0 1 1 0 2Z"
        />

        <List
          title={"Mobile"}
          url="/admin/mobile"
          active={location.pathname==='/admin/mobile'}
          path="M1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12ZM12.0003 17C14.7617 17 17.0003 14.7614 17.0003 12C17.0003 9.23858 14.7617 7 12.0003 7C9.23884 7 7.00026 9.23858 7.00026 12C7.00026 14.7614 9.23884 17 12.0003 17ZM12.0003 15C10.3434 15 9.00026 13.6569 9.00026 12C9.00026 10.3431 10.3434 9 12.0003 9C13.6571 9 15.0003 10.3431 15.0003 12C15.0003 13.6569 13.6571 15 12.0003 15Z"
        />

        <List
          title={"Users"}
          url="/admin/users"
          active={location.pathname==='/admin/users'}
          path="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"
        />
      </div>
    </div>
  );
};

const List = ({ url, title, path, active }: Ilist) => {
  return (
    <Link
      to={`${url}`}
      className={`my-5 block  group hover:-translate-y-1 hover:scale-50 transition duration-500 ease-in-out`}
    >
      <button className="flex items-center">
        <svg
          className={`w-6 h-6 mr-1 text-${active && "mainColor"}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d={path} />
        </svg>
        <p className={`text-${active && "mainColor"}`}>{title}</p>
      </button>
    </Link>
  );
};

export default SideBar;
