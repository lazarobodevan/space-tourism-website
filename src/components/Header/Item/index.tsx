import style from './Item.module.scss'

interface Props{
    name:string,
    number:string,
    isSelected?: boolean
}

export default function MenuItem({name, number}:Props){
    return(
        <div className={style.container}>
            <span className={style.number}>{number}</span>
            <span>{name}</span>
        </div>
    )
}