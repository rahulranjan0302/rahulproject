import React from "react";
import MediaComponent from "../src/components/MediaComponent";
import Feedback from "../src/components/Feedback";
import axios from "axios";
import { useState, useEffect } from "react";
import Layout from "../src/layout/Layout";

const Video = () => {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    axios
      .get("/api/video")
      .then(({ data }) => setVideos(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
        <Layout pageTitle={"Attack On Titan Season 3"}>
          <MediaComponent videos={videos} />
          <Feedback />
        </Layout>
    </>
  );
};

export default Video;
