import { BsSearch } from "react-icons/bs";
import { useState, ChangeEvent, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface Props {
  query: string;
  handlePassQuery: (query: string) => void;
}
export default function SearchBar(props: Props) {
  const [request, setRequest] = useState("");
  const [propsSet, setPropsSet] = useState(false);
  const navigate = useNavigate();
  const {search} = useLocation();
  const queryParams = new URLSearchParams(search);
  const query = queryParams.get("q") || "";
  const inputRef = useRef<null | HTMLInputElement>(null);
  
  const handleMadeRequest = (e: ChangeEvent<HTMLInputElement>) => {
    setRequest(e.target.value);
  };
  
  useEffect(() => {
    props.handlePassQuery(query);
  }, [query, props]);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = props.query;
      setRequest(props.query);
      inputRef.current?.focus();
      setPropsSet(true);
    }
  }, [props.query]);

  useEffect(() => {
    if (!propsSet) return; 
       const setRequest = setTimeout(() => {
        navigate(`/search?q=${request}`);
      });
    return () => {
      clearTimeout(setRequest);
    };
  }, [navigate, request, propsSet]);


  useEffect(() => {
    if (!request && propsSet) {
      navigate('/');
    }
  },[navigate, request, propsSet]);

  return (
    <div className=" bg-gray-800 w-[15rem] md:w-[20rem]  xl:w-[25rem] 2xl:w-[30rem] h-[5.6rem] rounded-2xl flex items-center py-[1.6rem] pl-[1rem] gap-[1.5rem]">
      <BsSearch className="flex-1 min-w-[2rem] md:min-w-[2.4rem] min-h-[2rem] md:min-h-[2.4rem] cursor-pointer" />
      <input
        type="text"
        className="flex-[9] bg-transparent text-2xl md:text-3xl outline-none pr-[1rem] overflow-hidden"
        onChange={handleMadeRequest}
        ref={inputRef}
      />
    </div>
  );
}
