
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary mb-8">About Us</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              ExamSage is dedicated to revolutionizing the way educational institutions manage their examination processes. Our platform provides a comprehensive solution for administrators, faculty, and students.
            </p>
            {/* Contact Information */}
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-primary mb-4">Contact Information</h2>
              <div className="bg-secondary p-6 rounded-lg">
                <p className="mb-2"><strong>Email:</strong> contact@examsage.edu</p>
                <p className="mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Address:</strong> 123 Education Ave, Learning City, 12345</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
