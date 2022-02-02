import "./Home.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import smn from "../../image/smn.png";

function Home() {
  const history = useHistory();

  const addChannel = () => {
    history.push("/add/channel");
  };

  return (
    <div className="home">
      <div className="home__container">
        <img src={smn} alt="Slack Logo" />
        <h1>Welcome to ChiChat</h1>
        <p>
          ChiChat brings all your communication's into one place.
        </p>

        <p>
          "We may not stay quick, <br/>
If we are weak or sage, <br/>
but a lot can squeak <br/>
As we start to age"
        </p>

        <Button onClick={addChannel}>Create Channel</Button>
      </div>
    </div>
  );
}

export default Home;
