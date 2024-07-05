import { Progress, Grid, Container } from "@nextui-org/react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SXUpcomingProject from "./SXUpcomingProject";
import SXUpcomingPoll from "./SXUpcomingPoll";

const Pollsystem = () => {
    
    const [liked, setLiked] = useState(false);

  return (
    <>
    <SXUpcomingPoll/>
    </>
  )
}

export default Pollsystem