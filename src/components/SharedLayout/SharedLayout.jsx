import { Link, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/create-contact">Create Contact</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
