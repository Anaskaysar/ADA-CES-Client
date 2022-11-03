import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="hero h-96  bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <p className="py-3">Welcome to our User Management System</p>
                        <Link to="/signup" className="btn btn-primary">Get Started</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;