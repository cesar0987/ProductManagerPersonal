import "./Header.css"

export const Header = () => {
    return (
        <div className="headerContainer">
            <div className="headerTitle">
            <h1>Terracota Shoes</h1>
            <h2>Inventory Management System</h2>
            </div>
            <form>
            <input type="text" placeholder="Search" />
            <button>Search</button>
            </form>
        </div>
    );
}