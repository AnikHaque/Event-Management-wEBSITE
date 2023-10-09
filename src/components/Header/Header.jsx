import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";


const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
       <div>
            <header className="p-4 bg-gray-100 text-gray-800">
                <div className="container flex justify-between h-16 mx-auto">
                    <div className="flex">
                        <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                            <img src="https://www.themetechmount.com/wordpress/presentup/wp-content/uploads/2022/08/logo-02.png" className="w-24"></img>
                        </a>
                        <ul className="items-stretch hidden space-x-3 lg:flex">
                            <li className="flex">
                                <Link to="/" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-rose-600 border-red-600">Home</Link>
                            </li>
                            <li className="flex">
                                <Link to="/pages" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-rose-600 border-rose-600">Pages</Link>
                            </li>
                            <li className="flex">
                                <Link to="/portfolio" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-rose-600 border-rose-600">Portfolio</Link>
                            </li>
                            <li className="flex">
                                <Link to="/blogs" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-rose-600 border-rose-600">Blogs</Link>
                            </li>
                            <li className="flex">
                                <Link to="/contact" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-rose-600 border-rose-600">Contact Us</Link>
                            </li>

                            {
                                user ? <li className="flex">
                                    <Link to="/profile" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-rose-600 border-rose-600">User Profile</Link>
                                </li>:
                                <div></div>
                            }
                            
                        </ul>
                    </div>
                    <div className="items-center flex-shrink-0 hidden lg:flex">

                        <li className="flex ">
                            <img className='w-16 rounded-full mr-4' src={user?.photoURL}></img>
                        </li>
                        <li className="flex mr-8">
                            <h1 className="font-bold">{user?.displayName}</h1>
                        </li>

                        {
                            user ? <Link to="/login">
                                <button onClick={handleSignOut} className="px-8 py-3 font-semibold rounded bg-rose-600 text-gray-50">Logout</button>
                            </Link>
                            :
                                <Link to="/login">
                                    <button className="px-8 py-3 font-semibold rounded bg-rose-600 text-gray-50">Log in</button>
                                </Link>
                        }
                        
                       
                       
                    </div>
                    <button className="p-4 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </header>

       </div>
    );
};

export default Header;