import Link from "next/link";
import style from '@/css/layout/Header.module.css';

export default function MainNavBox(){
    return(
        <nav 
        className={style.mainNav}
        >
           <ul>
          <li>
            <Link href='/basic'>Basic </Link>
          </li>
          </ul>
        </nav>
    )
}