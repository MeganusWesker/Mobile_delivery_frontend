//@ts-ignore
import { ReactNavbar } from "overlay-navbar";
import { useAppSelector } from "../redux/hooks";
import logo from "../assets/react.svg"
const Navbar = () => {

  const { isAuthenticated } = useAppSelector(
    (state) => state.user
  );

    return (
      <ReactNavbar
      burgerColor="#427bf5"
      burgerColorHover="#2a7aad"
      logo={logo}
      logoWidth="15vmax"
      logoHoverSize="10px"
      logoHoverColor="#2a7aad"
      link1Text= "Home"
      link2Text= {`${isAuthenticated ? 'UserList' :'login'} `}
      link3Text= {`${isAuthenticated ? 'MobileList' :'register'} `}
      link4Text= {`${isAuthenticated ? 'Logout' :'Mobile'} `}
      link1Url= "/"
      link2Url= {`${isAuthenticated ? '/admin/users' :'/login'} `}
      link3Url= {`${isAuthenticated ? '/admin/mobile' :'/register'} `}
      link4Url= {`${isAuthenticated ? '/logout' :'/#container'} `}
      link1ColorHover="#2a7aad"
      navColor1="white"
      nav1justifyContent="flex-end"
      nav2justifyContent="flex-end"
      nav3justifyContent="flex-start"
      nav4justifyContent= "flex-start"
      profileIconUrl="/login"
      link1Margin= "0.5vmax"
      link1Size="1.3vmax"
      link1Color= "rgba(35, 35, 35,0.8)"
      profileIconColor= "rgba(35, 35, 35,0.8)"
      searchIconColor="rgba(35, 35, 35,0.8)"
      cartIconColor= "rgba(35, 35, 35,0.8)"
      profileIconColorHover="#2a7aad"
      searchIconColorHover= "#2a7aad"
      cartIconColorHover= "#2a7aad"
      cartIconMargin ="1vmax"
      />
  );

}

export default Navbar