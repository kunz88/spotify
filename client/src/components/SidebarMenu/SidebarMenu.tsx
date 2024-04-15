import MenuComponent from "./MenuComponent/MenuComponent"
import MenuFooter from "./MenuFooter/MenuFooter"
import PlaylistComponent from "./PlaylistComponent/PlaylistComponent"
import "./SidebarMenu.scss"
const SidebarMenu = () => {
    return (
        <section className="box-border min-h-dvh sidebar fixed grid ">
            <MenuComponent />
            <PlaylistComponent />
            <MenuFooter />
        </section>)

}
export default SidebarMenu