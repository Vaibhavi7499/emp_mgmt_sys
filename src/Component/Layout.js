import { Link } from "react-router-dom";
function Layout() {
  return (
    <div>
        
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Employee Management System
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            
            <Link className="nav-item nav-link" to="/">
              Add Employee
            </Link>
            <Link className="nav-item nav-link" to="/word-letter">
              word & letter counter
            </Link>
            <Link className="nav-item nav-link" to="/todo">
            ToDo List 
          
            </Link>
            <Link to="/percentage">Percentage calculate</Link>
           
          </div>
          
        </div>
        
      </nav>
      
    </div>
    
    

  );
}
export default Layout;
