import { useState } from "react";
import PostModel from "./PostModel";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PostView from "./PostView";

const PostController = () => {
  const navigate=useNavigate()
  //Classın yani Modelin örneğini oluştruma
  const model = new PostModel();
  //console.log(model)
  //statenin ilk değerini modele eşitledik
  const [form, setForm] = useState(model.state);
  //console.log(form)
  const onInputChange = (key, e) => {
    /**
     * setForm metodunu state güncellemek için çağırdık
     * içerisinde spread operatör yarıdmı ile tüm form  objesini aldık
     * daha sonra köşeli parantez ile bir obje keyi gelecenii belirttik
     * ve keye karışık yine dışardan kelen vallueyi ekledik
     */
    setForm({ ...form, [key]: e.target.value });
  };
  //console.log(form)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.user || !form.text) {
      alert("Tüm Doldurunuz");
      return;
    }
    // console.log(form)
    axios
      .post("http://localhost:3030/posts",form)
      .then(() => navigate('/add-post'))
      .catch((error) => console.log(error));
  };
  return (
    <PostView onInputChange={onInputChange} handleSubmit={handleSubmit} />
  );
};

export default PostController;