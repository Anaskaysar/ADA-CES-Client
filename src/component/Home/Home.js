import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="hero h-96  bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello There!</h1>
                        <h2 className="py-3">Welcome to our User Management System</h2>
                        <Link to="/login" className="btn btn-primary">Get Started</Link>
                    </div>
                </div>
            </div>

            <div>

            </div>
        </>
    )
}

export default Home;