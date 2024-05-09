import { useEffect, useState } from "react";
import ListView from "./ListView";
import axios from "axios";

const ListController = () => {

  const [data, setData] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3030/posts")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    
    <ListView
      userName={userName}
      setUserName={setUserName}
      data={data}
      showPopUp={showPopUp}
      setShowPopUp={setShowPopUp}
    />
  );
};
export default ListController;