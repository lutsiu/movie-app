
export default function Header(props: {title: string}) {

  return (
    <h2 className=" text-3xl sm:text-4xl lg:text-5xl font-bold">{props.title}</h2>
  )
}