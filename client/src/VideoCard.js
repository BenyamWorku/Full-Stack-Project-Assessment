import React ,{useState} from 'react'

export default function VideoCard({video,callbackDelete}) {
    const [vote, setVote] = useState(video.rating);
    const baseUrl = "https://www.youtube.com/embed"
    const videoId = video.url.split("=")[1];
    function updateRating(change) {
        setVote(vote+change)
    }
    return (
        <div className="d-flex mt-5 p-1 ">
            <div >
                <span>
                <button onClick={()=>updateRating(1)} className="m-1 btn btn-primary shadow-none"><i class="fas fa-thumbs-up"></i></button> 
                    {video.title}
                <button onClick={()=>updateRating(-1)}className="m-1 btn btn-primary shadow-none"><i class="fas fa-thumbs-down"></i></button> 
                </span>
                 <p>{vote} votes</p>
                <iframe 
                    width="300"
                    height="200"
                    src={`${baseUrl}/${videoId}`}
                    frameBorder="0"
                    allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
                    allowFullScreen
                    title={video.title}
                />
                <button onClick={()=>callbackDelete(videoId) } type="button" className="m-2 btn btn-danger">Delete</button>
                </div>
        </div>
    )
}
