import { IconContext } from "react-icons";
import { MdStar, MdStarHalf } from "react-icons/md";

const StarRating = ({ rating }) => (
    Array(5).fill('').map((_, i) => (
        <IconContext.Provider
            key={i}
            value={{ color: i < rating ? '#efc45c' : '#ddd' }}
        >
            {rating % 1 ?
                i === Math.floor(rating) ?
                    < MdStarHalf /> : <MdStar /> : <MdStar />
            }
        </IconContext.Provider>

    ))
);

export default StarRating;