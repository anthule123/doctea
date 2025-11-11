import style from '@/css/layout/Header.module.css';
import Link from 'next/link';
import MainNavBox from './MainNavBox';


export default function HeaderDesktop(
){
    return (
       <div className={style.desktop}>
            <div className='center'>
                <div className={style.layout}>
                     <div className={style.mainNav}>
                         <Link href='/' passHref>
                            <h1>Home
                            </h1>
                        </Link>
                        <MainNavBox/>
                    </div>
                </div>
            </div>
        </div>
    )
}