import "./SideBar.css";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
const SideBar = () => {
  return (
    <div className="side-bar-session">
      <p className="title">Notes App</p>
      <div className="btn-container">
        <DescriptionOutlinedIcon className="icon" />
        <p className="side-btn">Notes</p>
      </div>
    </div>
  );
};

export default SideBar;
