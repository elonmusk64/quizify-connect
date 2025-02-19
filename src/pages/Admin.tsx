
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Admin = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary mb-8">Admin Portal</h1>
          <p className="text-lg text-gray-600">
            Welcome to the admin portal. Please log in to access administrative features.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
