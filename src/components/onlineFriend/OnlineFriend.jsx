import "./onlinefriend.css";
import styles from "../../index.css"

export default function OnlineFriend({ user }) {
  const { profilePicture, userName } = user;

  return (
    <li className="rightBarFriend flex items-center mb-4 cursor-pointer">
      <div className="rightBarProfileImgContainer mr-3 relative">
        <img
          className="rightBarProfileImg w-9 h-9 rounded-full object-cover mr-2.5"
          src= { profilePicture }
          alt=""
        />
        <span className="rightBarOnline w-2.5 h-2.5 top-0 right-0 absolute bg-green-500 rounded-full"></span>
      </div>
      <span className="rightBarUserName font-medium">{ userName }</span>
    </li>
  );
}
