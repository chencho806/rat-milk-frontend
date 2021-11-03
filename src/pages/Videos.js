import YouTubePlayer from "react-player/youtube";

const Videos =(props) => {
    return (
        <div className="videoContainer">

            <div className="Videos">
                <YouTubePlayer 
                    width="320px"
                    height="180px"
                    url = "https://www.youtube.com/watch?v=DBkmAOZav0Y"
                    controls
                    muted
                />
            </div>

            <div className="Videos">
                <YouTubePlayer 
                    width="320px"
                    height="180px"
                    url = "https://www.youtube.com/watch?v=B9Py6or0M9U"
                    controls
                    muted
                />
            </div>
            <div className="Videos">
                <YouTubePlayer 
                    width="320px"
                    height="180px"
                    url = "https://www.youtube.com/watch?v=JixM-q5WUJ8"
                    controls
                    muted
                />

            </div>
            <div className="Videos">
                <YouTubePlayer 
                    width="320px"
                    height="180px"
                    url = "https://www.youtube.com/watch?v=YoS1GpaVIFk"
                    controls
                    muted
                />
            </div>
            <div className="Videos">
                <YouTubePlayer 
                    width="320px"
                    height="180px"
                    url = "https://www.youtube.com/watch?v=X2KkjnWOCFc"
                    controls
                    muted
                />
            </div>
            <div className="Videos">
                <YouTubePlayer 
                    width="320px"
                    height="180px"
                    url = "https://www.youtube.com/watch?v=x8cJb8Gqzaw"
                    controls
                    muted
                />
            </div>
        </div>





       
    )
};


export default Videos;