import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaUser, 
  FaSearch, 
  FaHome, 
  FaCog, 
  FaList, 
  FaPlus, 
  FaUserCircle,
  FaColumns,
  FaBars,
  FaKeyboard,
  FaExpandArrowsAlt,
  FaImage,
  FaSlidersH,
  FaInfoCircle,
  FaLink,
  FaPalette,
  FaCode
} from "react-icons/fa";

const Sidebar = () => {
  const [employeeOpen, setEmployeeOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  return (
    <div className="sidebar" style={styles.sidebar}>
      <h2 style={styles.logo}>Magnus</h2>

      <div style={styles.userBox}>
        <FaUserCircle size={40} />
        <div style={styles.userDetails}>
          <strong>Guest User</strong>
          <div style={{ fontSize: "12px" }}>👤 User</div>
        </div>
      </div>

      <Link to="/" style={styles.link}>
        <FaHome style={styles.icon} /> Home
      </Link>

      <div>
        <div onClick={() => setEmployeeOpen(!employeeOpen)} style={styles.menuTitle}>
          <FaUser style={styles.icon} /> Employee {employeeOpen ? '▲' : '▼'}
        </div>
        {employeeOpen && (
          <div style={styles.subMenu}>
            <Link to="/create-employee" style={styles.link}>
              <FaPlus style={styles.icon} /> Create
            </Link>
            <Link to="/search-employee" style={styles.link}>
              <FaSearch style={styles.icon} /> Search
            </Link>
          </div>
        )}
      </div>

      <div>
        <div onClick={() => setMoreOpen(!moreOpen)} style={styles.menuTitle}>
          <FaList style={styles.icon} /> More {moreOpen ? '▲' : '▼'}
        </div>
        {moreOpen && (
          <div style={styles.subMenu}>
            <Link to="/multiple-tabs" style={styles.subLink}>
              <FaColumns style={styles.subIcon} /> Multiple Tabs
            </Link>
            <Link to="/menu" style={styles.subLink}>
              <FaBars style={styles.subIcon} /> Menu
            </Link>
            <Link to="/autocomplete" style={styles.subLink}>
              <FaKeyboard style={styles.subIcon} /> Autocomplete
            </Link>
            <Link to="/collapsible-content" style={styles.subLink}>
              <FaExpandArrowsAlt style={styles.subIcon} /> Collapsible Content
            </Link>
            <Link to="/images" style={styles.subLink}>
              <FaImage style={styles.subIcon} /> Images
            </Link>
            <Link to="/slider" style={styles.subLink}>
              <FaSlidersH style={styles.subIcon} /> Slider
            </Link>
            <Link to="/tooltips" style={styles.subLink}>
              <FaInfoCircle style={styles.subIcon} /> Tooltips
            </Link>
            <Link to="/popups" style={styles.subLink}>
              <FaInfoCircle style={styles.subIcon} /> Popups
            </Link>
            <Link to="/links" style={styles.subLink}>
              <FaLink style={styles.subIcon} /> Links
            </Link>
            <Link to="/css-properties" style={styles.subLink}>
              <FaPalette style={styles.subIcon} /> CSS Properties
            </Link>
            <Link to="/iframes" style={styles.subLink}>
              <FaCode style={styles.subIcon} /> iFrames
            </Link>
          </div>
        )}
      </div>
      <div>
        <div onClick={() => setSettingsOpen(!settingsOpen)} style={styles.menuTitle}>
          <FaCog style={styles.icon} /> Settings {settingsOpen ? '▲' : '▼'}
        </div>
        {settingsOpen && (
          <div style={styles.subMenu}>
            <Link to="/general-settings" style={styles.subLink}>
              <FaCog style={styles.subIcon} /> General
            </Link>
            <Link to="/user-settings" style={styles.subLink}>
              <FaUser style={styles.subIcon} /> User Preferences
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "250px",
    minHeight:"100%",
    backgroundColor: "#2c3e50",
    color: "#fff",
    padding: "0",
    boxSizing: "border-box",
    position: "sticky",
    top:0,
    overflowY: "auto",
  },
  logo: {
    fontSize: "24px",
    marginBottom: "0",
    backgroundColor: "#3498db",
    padding: "20px",
    margin: "0",
    textAlign: "center",
  },
  userBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "20px",
    backgroundColor: "#34495e",
    borderBottom: "1px solid #4a6741",
  },
  userDetails: {
    display: "flex",
    flexDirection: "column",
  },
  icon: {
    marginRight: "10px",
    fontSize: "16px",
  },
  subIcon: {
    marginRight: "10px",
    fontSize: "14px",
    color: "#7fb3d3",
  },
  menuTitle: {
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 20px",
    borderBottom: "1px solid #34495e",
    transition: "background-color 0.2s",
  },
  subMenu: {
    backgroundColor: "#34495e",
    display: "flex",
    flexDirection: "column",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    padding: "15px 20px",
    borderBottom: "1px solid #34495e",
    transition: "background-color 0.2s",
  },
  subLink: {
    color: "#bdc3c7",
    textDecoration: "none",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    padding: "12px 20px 12px 40px",
    borderBottom: "1px solid #2c3e50",
    transition: "background-color 0.2s",
  },
};

export default Sidebar;