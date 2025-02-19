
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Notices = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary mb-8">Notices</h1>
          <p className="text-lg text-gray-600">
            Stay updated with the latest announcements and notifications.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Notices;
