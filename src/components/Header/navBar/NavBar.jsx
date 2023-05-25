import MenuResponsive from "./MenuResponsive";
import Menu from "./Menu";

export default function NavBar () {
    return (
      <nav>
        <div className="flex md:flex-wrap justify-between mx-auto items-center">
          <MenuResponsive />
          <Menu />
        </div>
      </nav>
    )
  }