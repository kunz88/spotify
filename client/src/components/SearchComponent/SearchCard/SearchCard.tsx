import { Link } from "react-router-dom"

type SearchCardProps = {
    id:string
    title:string,
    imageUrl:string,
    subtitle:string

}





const SearchCard = ({title,imageUrl,subtitle,id}:SearchCardProps) => {














    return (
        <Link to={`/details/albums/${id}`}>
        <div className="card w-80 h-96 mb-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
            <figure><img src={imageUrl} alt="car!" /></figure>
            <div className="card-body h-56">
                <h3 className="card-title ">{title}</h3>
                <p>data uscita {subtitle}</p>
            </div>
        </div>
        </Link>
    )
}
export default SearchCard