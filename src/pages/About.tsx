
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
              PragyaParikshan is an advanced exam management system designed to automate seating arrangements, supervisor assignments, mark computation, and result generation. Our platform ensures accuracy, transparency, and efficiency in conducting exams across universities, colleges, schools, coaching institutes, and corporate training centres. With intelligent algorithms like Integer Linear Programming (ILP), we dynamically allocate seating while ensuring seamless management, even in low-network areas.
            </p>
            {/* Contact Information */}
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-primary mb-4">Contact Information</h2>
              <div className="bg-secondary p-6 rounded-lg">
                <p className="mb-2"><strong>Email:</strong> contact@pragyaparikshan.edu</p>
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
