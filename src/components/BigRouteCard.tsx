import style from '@/css/components/card.module.css';
import Link from 'next/link';

export function BigRouteCard(
    bigRoute: string,
    niceName: string
){
    return (
        <div className={style.bigRouteCard} key= {`${bigRoute}`}>
            <Link href= {`${bigRoute}`}>
              <h3>{niceName}</h3>
            </Link>
            
        </div>
    )
}