import style from '@/css/layout/Header.module.css';
import LeftBoxClick from './menu/LeftBoxClick';
import MainNavBox from './MainNavBox';
import Link from 'next/link';

export default function HeaderMobile(){
    return (
      <div className={style.mobile}>
            <div className='center'>
                <div className={style.layout}>
                        <LeftBoxMobile/>
                     <Link href='/' passHref>
                        <h1>Home
                        </h1>
                    </Link>
                    <div className={style.rightBox}></div>
                </div>
            </div>
        </div>
    )
}
export function LeftBoxMobile(){
    return (
        <div className='center'>
            <div className={style.leftBox}>
                <div className='center'>
                    <LeftBoxClick
                        content={<MainNavBox/> }/> 
                   
                </div>
            </div>
            
        </div>
    )
}
