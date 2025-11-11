import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import style from '@/css/layout/Header.module.css';


export default function Header(){

    return (
        <header className={style.headerContainer}>
            <HeaderDesktop/>
            <HeaderMobile/>
        </header>
    )
}