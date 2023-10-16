import { FaStar, FaStarHalf } from "react-icons/fa";

interface Props {
  rating: number;
  size: 'sm' | 'md' | 'lg';
}

export default function Stars(props: Props) {

  const amountOfFullStars = Math.floor(props.rating);
  let HalfStar: JSX.Element;

  let size:number;

  if (props.size === 'sm') {
    size = 1.8;
  }
  if (props.size === 'md') {
    size = 2.5;
  }
  if (props.size === 'lg') {
    size = 3.5;
  }

  const rest = props.rating - amountOfFullStars;

  

  if (rest > 0.3) {
    HalfStar = (
      <FaStarHalf className={`text-main `} style={{width: `${size!}rem`, height: `${size!}rem`}} />
    );
  }

  const fullStars = Array.from({ length: amountOfFullStars }, (_, i) => {
    return (
      <FaStar key={i} className={`text-main `} style={{width: `${size}rem`, height: `${size}rem`}} />
    );
  });

  return (
    <div className="flex gap-[1.2rem]">
      {fullStars}
      {HalfStar!}
    </div>
  );
}
