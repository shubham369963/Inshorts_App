import './App.css';
import Nav from "./components/Nav/Nav.js"
import {useState,useEffect} from "react"
import NewsContent from "./components/NewsContent/NewsContent.js"
import Footer from "./components/Footer/Footer.js"
import axios from "axios"
const App = ()=> {

  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([])
  const [newsResults, setNewsResults] = useState()
  const newsApi = async () =>{
    try{
      const API_KEY = "e0980dd008674717baee894d7a5e9b90";
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&category=${category}`);
      setNewsArray(news.data.articles)
      setNewsResults(news.data.totalResults)
      console.log(news);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    newsApi();
  }, [newsResults, category])

  return (
    <div>
      <Nav setCategory={setCategory}/>
      <NewsContent newsArray={newsArray} newsResults={newsResults} />
      <Footer/>
    </div>
  );
}

export default App;
