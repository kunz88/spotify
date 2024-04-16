
import './Card.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


type props = {
  id: string
  title: string,
  subTitle: string,
  pictureUrl: string,
  rounded: string,
}

const Card = ({ title, subTitle, pictureUrl, rounded, id }: props) => {


  return (
    <Link to={`/details/${id}`}>
      <div className="card w-48 h-64  shadow-xl bg-costum">

        <figure className="mt-1 relative ">
          <img
            src={pictureUrl}
            alt="Shoes"
            className={`h-40 w-40 m-5 ${rounded}`}

          />
          <button
            className="btn btn-primary join-item absolute bottom-0 right-7 btn-player -z-50"
          >
            <FontAwesomeIcon icon={faPlay} size='lg' />
          </button>
        </figure>
        <div className="card-body p-3">
          <h6 className="card-title text-base font-bold text-white">{title}</h6>
          <p> raiting {Number(subTitle) / 10}</p>
          <div className="card-actions"></div>
        </div>

      </div>
    </Link>



  )
}

export default Card