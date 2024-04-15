

type ButtonProps = {
    color:string,
    name:string
}

const CustomButton = ({color,name}:ButtonProps) => {
    return <button className={`btn btn-xs sm:btn-sm md:btn-md ${color}`} >{name }</button>
}
export default CustomButton