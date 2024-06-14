import profilePic from "./assets/profile.png";
import "./styles.css";

function Card() {
  return (
    <div className="card">
      <img src={profilePic} alt="profile picture" />
      <div className="cardText">
        <h2 className="Card-title">My Name</h2>
        <p className="card-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          error totam quod? Recusandae quis dolorum voluptatibus ipsa fuga,
          iusto eius quasi facere cupiditate. Est esse voluptatem dignissimos
          perferendis officiis quibusdam, architecto, odit ut, aut excepturi
          minus quasi
        </p>
      </div>
    </div>
  );
}

export default Card;
