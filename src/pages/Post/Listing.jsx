import { useEffect } from "react";
import { useAppContext } from "../../components/AppContext/AppContext";
import Title from "../../components/Title/Title";

const Listing = () => {
  const { setAppTitle } = useAppContext();
  useEffect(() => {
    setAppTitle("Post Listing");
  }, []);
  return <Title>Post Listing</Title>;
};

export default Listing;
