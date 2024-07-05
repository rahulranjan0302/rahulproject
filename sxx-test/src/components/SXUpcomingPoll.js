import React, { useState } from "react";
import { Button, Progress, Grid, Container, Text } from "@nextui-org/react";
import {
  BsEmojiHeartEyes,
  BsEmojiWink,
  BsEmojiSunglasses,
  BsEmojiKiss,
  BsEmojiLaughing,
} from "react-icons/bs";
import { useEffect } from "react";
import axios from "axios";
const SXUpcomingPoll = () => {
  const [pollData, setPollData] = useState([]);
  useEffect(() => {
    let data = [];
    axios
      .get("/api/poll")
      .then(res => res.data)
      .then(res => {
        res.map(item => {
          data = [
            ...data,
            { "id": item.id, "name": item.title, "value": item.percent },
          ];
        });
      })
      .then(() => {
        setPollData(data);
        // console.log(pollData);
      });
  }, []);

  return (
    <>
      <div className="container">
        <Container className="pollingDiv" data-aos="fade-up" css={{ display: "block" }}>
          <h3
            className="maintitle big"
            data-text="Top Voted"
            data-align="center"
            style={{ fontFamily: "font1", paddingBottom: "1rem" }}
          >
            Top Voted
          </h3>
          <Grid.Container xs={12} sm={12} gap={3} className="pollingDiv2">
            <Grid>
              <Text color="White" className="pollingDiv3" h4>
                <span style={{ color: "#f31260" }}>
                  <BsEmojiHeartEyes /> {pollData[0]?.value}%
                </span>{" "}
                <span style={{ color: "#9ba0b8" }}>People Vote for</span>{" "}
                {pollData[0]?.name}
              </Text>
              <Progress
                value={pollData[0]?.value}
                color="error"
                size="md"
                status="primary"
              />
            </Grid>
            <Grid>
              <Text color="white" className="pollingDiv3" h4>
                <span style={{ color: "#9750dd" }}>
                  <BsEmojiSunglasses /> {pollData[1]?.value}%
                </span>{" "}
                <span style={{ color: "#9ba0b8" }}>People Vote for</span>{" "}
                {pollData[1]?.name}
              </Text>
              <Progress
                value={pollData[1]?.value}
                color="secondary"
                size="md"
                status="secondary"
              />
            </Grid>
            <Grid>
              <Text color="white" className="pollingDiv3" h4>
                <span style={{ color: "#17c964" }}>
                  <BsEmojiKiss /> {pollData[2]?.value}%
                </span>{" "}
                <span style={{ color: "#9ba0b8" }}>People Vote for</span>{" "}
                {pollData[2]?.name}
              </Text>
              <Progress
                value={pollData[2]?.value}
                color="success"
                size="md"
                status="success"
              />
            </Grid>
            <Grid>
              <Text color="white" className="pollingDiv3" h4>
                <span style={{ color: "#f5a524" }}>
                  <BsEmojiWink /> {pollData[3]?.value}%
                </span>{" "}
                <span style={{ color: "#9ba0b8" }}>People Vote for</span>{" "}
                {pollData[3]?.name}
              </Text>
              <Progress
                value={pollData[3]?.value}
                color="warning"
                size="md"
                status="warning"
              />
            </Grid>
            <Grid>
              <Text color="white" className="pollingDiv3" h4>
                <span style={{ color: "#0072f5" }}>
                  <BsEmojiLaughing /> {pollData[4]?.value}%
                </span>{" "}
                <span style={{ color: "#9ba0b8" }}>People Vote for</span>{" "}
                {pollData[4]?.name}
              </Text>
              <Progress
                value={pollData[4]?.value}
                color="primary"
                size="md"
                status="error"
              />
            </Grid>
          </Grid.Container>
        </Container>
      </div>

    </>
  );
};
export default SXUpcomingPoll;
