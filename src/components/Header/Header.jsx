import ButtonCV from "../Buttons/ButtonCV/ButtonCV";
import NavBar from "./navBar/NavBar";
import Logo from "./Logo/Logo";


export default function Header () {
    const fileUrl = process.env.PUBLIC_URL + '/CV - Daniel Castillo.pdf';
    
    return (
      <header className='flex items-center justify-between bg-gray-700 py-5 px-7 max-h-[4.5rem] shadow-sm'>
        <Logo />
        <NavBar />
        <div className="hidden md:block">
            <ButtonCV
            path={fileUrl}
            fileName='CV - Daniel Castillo.pdf'
            />
        </div>
      </header>
    )
  }