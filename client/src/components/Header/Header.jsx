import "./Header.css"
import { useLocation } from "react-router-dom";
export const Header = () => {
    const location = useLocation();
    

    console.log(location);
    return (
        <div className="headerContainer">
            <div className="headerTitle">
            <h1>Terracota Shoes</h1>
            <h2>Inventory Management System</h2>
            </div>
            <form>
            {(location.pathname === "/") ? <> <input type="text" placeholder="Search" /> <button type="submit">Search</button></> : null}
            </form>
        </div>
    );
}