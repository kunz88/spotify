import { PropsWithChildren } from "react";
import "./SideListSection.scss"

const SideListSection = ({children}: PropsWithChildren) => {
    return <section className="relative side-list-section bg-base-200">
        {children}
    </section>

}
export default SideListSection