import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const ManageTasks = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto">
          <Link to="/manageTasks" className="text-white font-bold text-lg">
            Manage Tasks
          </Link>
        </div>
      </nav>
      <div className="flex items-center p-8 bg-gray-200">
        {user ? (
          <>
            <div className="mr-8">
              <img
                src={user.photoURL}
                alt="User Profile"
                className="w-16 h-16 rounded-full"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{user.displayName}</h2>
            </div>
          </>
        ) : (
          <p className="text-gray-600">Please log in to view your dashboard.</p>
        )}
      </div>
    </div>
  );
};

export default ManageTasks;
