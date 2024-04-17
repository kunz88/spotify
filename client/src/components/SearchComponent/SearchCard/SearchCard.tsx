type SearchCardProps = {

    title:string,
    imageUrl:string,
    subtitle:string

}





const SearchCard = ({title,imageUrl,subtitle}:SearchCardProps) => {














    return (
        <div className="card w-80 glass mb-3">
            <figure><img src={imageUrl} alt="car!" /></figure>
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p>data uscita {subtitle}</p>
            </div>
        </div>
    )
}
export default SearchCard