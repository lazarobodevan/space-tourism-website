import brand from '../../assets/shared/logo.svg';
import style from './Brand.module.scss'
export default function Brand(){
    return(
        <img src={brand} className={style.brand}/>
    )
}