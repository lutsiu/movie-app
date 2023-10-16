interface Props {
  title: string;
  data: string | undefined;
}

export default function Personalnfo(props: Props) {
  return (
    <div className="mt-[1rem]">
      <h4 className="text-2xl">{props.title}</h4>
      <span className="text-xl">{props.data}</span>
    </div>
  );
}
