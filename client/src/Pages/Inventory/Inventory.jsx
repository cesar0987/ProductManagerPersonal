import "./Inventory.css"


export const Inventory = () => {

    return (
        <div className="inventoryContainer">
            <div className="leftPanel">
                <div className="heading">
                    <input type="text" placeholder="Search Product" />
                    <button type="submit">Search</button>
                </div>
                <div className="productList">
                    <h2>Product List</h2>
                    <ul>
                        <li>Product 1</li>
                        <li>Product 2</li>
                        <li>Product 3</li>
                        <li>Product 4</li>
                        <li>Product 5</li>
                    </ul>
                </div>
            </div>
            <div className="rightPanel">
                <div className="admin">
                    <h1>Name</h1>
                    <h2>Admin</h2>
                </div>
                <div className="quickActions">
                    <h2>Quick Actions</h2>
                    <ul>
                        <li>Create Order</li>
                        <li>Add Product</li>
                        <li>Add Supplier</li>
                        <li>Export</li>
                    </ul>
                </div>
                <div className="recentActivity">
                    <h2>Recent Activity</h2>
                    <ul>
                        <li>Product 1 added</li>
                        <li>Product 2 added</li>
                        <li>Product 3 added</li>
                        <li>Product 4 added</li>
                        <li>Product 5 added</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}