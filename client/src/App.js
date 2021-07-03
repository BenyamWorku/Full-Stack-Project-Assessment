import axios from "axios";
import "./App.css";
import React,{useState,useEffect} from "react";
import Search from "./Search";
import Addvideo from "./Addvideo";
import VideoCard from "./VideoCard";
// import data from './exampleresponse.json';
function App() {
  // const [newVideo,setNewVideo]=useState({title:"",url:"",rating:0})
  const [videos, setVideos] = useState(null);
  //re-render everytime videos change
  useEffect(() => {
    const pathtojson = '../exampleresponse.json';
    axios
      .get(pathtojson)
      .then((res) => setVideos(res.data))
    .catch(err=>console.log(err))
  }, []);

  //update video collection
  function updateCollection(newVideo) {
    console.log(newVideo);
    
    setVideos([...videos,newVideo]);
 

  }

  function searchCollection(searchInput) {
    setVideos(videos.filter((item)=>item.title.toLowerCase().includes(searchInput)));
  }

  function deleteVideo(videoId) {
    setVideos(videos.filter((item)=>item.url.split("=")[1] !== videoId ))
  }

  console.log(videos);
  return (
    <div className="App">
      <header className="App-header bg-primary">
        <h1>Video Recommendation</h1>
      
      </header>
      <Search callbackSearch={searchCollection} />
    
      <Addvideo  callbackAdd={updateCollection}/>
      <div className="d-flex">
         {videos && videos.map((video) => {
    
           return <VideoCard callbackDelete={deleteVideo} video={video} />
          
        })}
      </div>
     

    </div>
  );
}

export default App;
