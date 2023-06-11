import Brand from "../Brand";
import style from './Header.module.scss'
import MenuItem from "./Item";
export default function Header(){
    return(
        <div className={style.container}>
            <Brand/>
            <div className={style.menu_wrapper}>
                <hr className={style.line}/>
                <div className={style.menu}>
                    <MenuItem name="HOME" number="00"/>
                    <MenuItem name="DESTINATION" number="01"/>
                    <MenuItem name="CREW" number="02"/>
                    <MenuItem name="TECHNOLOGY" number="03"/>
                </div>
            
            </div>
        </div>
    )
}