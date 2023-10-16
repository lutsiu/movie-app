import { BsSearch } from "react-icons/bs";
import { useState, ChangeEvent, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface Props {
  query?: string;
}
export default function SearchBar(props: Props) {
  const [request, setRequest] = useState("");
  const [initialRender, setInitialRender] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const searchPageIsActive = pathname.includes("/search");

  const inputRef = useRef<null | HTMLInputElement>(null);

  const handleMadeRequest = (e: ChangeEvent<HTMLInputElement>) => {
    setRequest(e.target.value);
  };

  useEffect(() => {
    if (props.query) {
      setRequest(props.query);
      inputRef.current?.focus();
    }
  }, [props.query]);

  useEffect(() => {
    setInitialRender(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (!initialRender || !request) return;
    const setRequest = setTimeout(() => {
      navigate(`/search?q=${request}`);
    }, 10);

    return () => {
      clearTimeout(setRequest);
    };
  }, [request, navigate, initialRender, searchPageIsActive]);

  return (
    <div className=" bg-gray-800 w-[15rem] md:w-[20rem]  xl:w-[25rem] 2xl:w-[30rem] h-[5.6rem] rounded-2xl flex items-center py-[1.6rem] pl-[1rem] gap-[1.5rem]">
      <BsSearch className="flex-1 min-w-[2rem] md:min-w-[2.4rem] min-h-[2rem] md:min-h-[2.4rem] cursor-pointer" />
      <input
        type="text"
        placeholder="Search"
        className="flex-[9] bg-transparent text-2xl md:text-3xl outline-none pr-[1rem] overflow-hidden"
        onChange={handleMadeRequest}
        ref={inputRef}
      />
    </div>
  );
}
