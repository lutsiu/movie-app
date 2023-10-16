interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function MainButton(props: Props) {
  return (
    <button onClick={props.onClick} className="text-black flex justify-center items-center w-fit border-2 border-transparent box-border bg-main rounded-xl h-[4rem] text-2xl font-black hover:bg-transparent hover:text-main hover:border-2 hover:border-main duration-500 px-[2.2rem]">{props.children}</button>
  )
}