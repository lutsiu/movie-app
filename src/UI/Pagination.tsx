interface Props {
  amountOfButtons: number;
  activeMovie: number;
  translateByButton: (i: number) => void;
}

export default function Pagination(props: Props) {
  const paginationBtns = Array.from(
    { length: props.amountOfButtons },
    (_, i) => {
      const isActive = i === props.activeMovie;

      return (
        <span
          key={i}
          className={`${
            isActive ? "bg-main" : "bg-white"
          } ${"inline-block w-[1rem] h-[1rem] rounded-full cursor-pointer hover:bg-main duration-500 "}`}
          onClick={() => {
            props.translateByButton(i);
          }}
        ></span>
      );
    }
  );

  return (
    <div
      className="flex items-center px-[0.8rem] py-[0.9rem] justify-center rounded-lg self-center h-fit gap-[1rem] w-fit flex-wrap"
      style={{ backgroundColor: "rgba(249,249,249, 0.2)" }}
    >
      {paginationBtns}
    </div>
  );
}
