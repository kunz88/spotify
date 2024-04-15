import './CardListSection.scss'
import { PropsWithChildren } from 'react';

type Props = {
    title:string,
}


const CardListSection = ({title,children}:PropsWithChildren<Props>) => {
    return (
    <section className="section-component p-4">
        <h2 className="section-title font-bold text-white">{ title }</h2>
        <section className="cards-container">{children}</section>
    </section>)
}
export default CardListSection