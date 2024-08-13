import { Star } from "lucide-react";

type IRatingStart = {
  value: number;
};

const Rating = ({ value }: IRatingStart) => {
  const ratingStarts = Array(value).fill(
    <Star width={"14"} height={"14"} className="text-primary" fill="#ff9900" />
  );
  return (
    <div className="flex items-center space-x-1">
      {ratingStarts.map((rating, index) => (
        <span key={index}>{rating}</span>
      ))}
    </div>
  );
};

export default Rating;
