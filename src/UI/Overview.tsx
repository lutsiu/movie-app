interface Props {
  overview: string;
}

export default function Overview(props: Props) {

  const sentences = props.overview.split('. ');
  
  const overview = sentences.slice(0, 2).join('. ');
 
  return (<p className="mt-[1rem] text-lg">{overview}</p>);
}