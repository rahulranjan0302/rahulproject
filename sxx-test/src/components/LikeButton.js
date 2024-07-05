import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiFillEye, AiOutlineDownload } from "react-icons/ai";
import { Modal, Button, Row} from "@nextui-org/react";
import React from "react";
import { useSession, signIn } from "next-auth/react";
import axios from "axios";

function LikeButton({ vidId }) {
  const [likes, setLikes] = useState(0);
  const [views, setViews] = useState(0);
  const [liked, setLiked] = useState(false);
  const { data: session } = useSession();
  // console.log(session);

  useEffect(() => {
    axios
      .get("/api/video")
      .then(res => res.data)
      .then(res => res.filter(item => item.id === vidId))
      // .then(res => res.likes)
      .then(res => {
        res = res[0];
        let { likes } = res;
        likes = [...new Set(likes)];
        if (session) {
          const userHasLiked = likes.find(user => user === session?.user.email);
          // console.log(userHasLiked);
          if (userHasLiked) {
            setLiked(true);
          }
        }
        setLikes(likes.length);
      });
  }, [session, vidId]);

  useEffect(() => {
    axios
      .get("/api/video")
      .then(res => res.data)
      .then(res => res[0].views)
      .then(res => {
        setViews(res);
      });
  }, []);

  const handleLike = () => {
    if (session) {
      if (!liked) {
        setLikes(likes + 1);
        setLiked(true);
        fetch("/api/like", {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          //make sure to serialize your JSON body
          body: JSON.stringify({
            vidId: vidId,
          }),
        }).catch(err => {
          // catch them errors
          console.log(err);
        });
      } else {
        setLikes(likes - 1);
        setLiked(false);
        fetch("/api/unlike", {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          //make sure to serialize your JSON body
          body: JSON.stringify({
            vidId: vidId,
          }),
        }).catch(err => {
          // catch them errors
          console.log(err);
        });
      }
    } else {
      signIn("google");
    }
  };

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <button
        className={`like-button ${liked ? "liked" : ""}`}
        onClick={handleLike}
        style={{ margin: "1rem" }}
      >
        <AiFillHeart /> {likes}
      </button>

      <div style={{ display: "flex", alignItems: "center", margin: "1rem" }}>
      <Button auto onPress={handler} style={{zIndex:"1"}} color="secondary">
          <AiOutlineDownload
              style={{
                fontSize: "25px",
                cursor: "pointer",
              }}
            />
            <p className="downloadbtn">Download</p>
      </Button>
        <AiFillEye
          style={{
            fontSize: "30px",
            margin: "0 0.3rem",
          }}
          color="#FFFFFF"
        />
        <div>{views}</div>
      </div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Body>
          <Row justify="center">
            <a style={{textDecoration:"none"}} href="https://www.mediafire.com/file/acg1hfeicmwte4g/Attack_On_Titan_S4_P3_Hindi_Dub_Full_HD.mov/file" download="video.mp4"><Button size="md" color="secondary">Download in 1080p (2.2 gb)</Button></a>
          </Row>
           <Row justify="center">
            <a style={{textDecoration:"none"}} href="https://www.mediafire.com/file/puxn0m9u1hnue8b/Attack_On_Titan_S4_P3_Hindi_%2528720p%2529.mkv/file" download="video.mp4"><Button size="md" color="secondary">Download in 720p (550 mb)</Button></a>
          </Row>
              <Row justify="center">
            <a style={{textDecoration:"none"}} href="https://www.mediafire.com/file/lr7k15zp0rhz90a/Attack_On_Titan_S4_P3_Hindi_Dub.mkv/file" download="Attack on Titans Hindi Dub"><Button size="md" color="secondary">Download in 854x480p (250 mb)</Button></a>
          </Row>
            <Row justify="center">
            <a style={{textDecoration:"none"}} href="https://www.mediafire.com/file/vsl66g6allr2yv0/Attack_On_Titan_S4_P3_Hindi_%2528480p%2529.mkv/file" download="video.mp4"><Button size="md" color="secondary">Download in 480p (190 mb)</Button></a>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default LikeButton;
