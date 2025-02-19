
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckCircle2 } from "lucide-react";

const Index = () => {
  const features = [
    {
      title: "Automated Seating Allocation",
      description: "Dynamically assigns students to exam halls using the ILP algorithm, handling last-minute changes."
    },
    {
      title: "Supervisor Assignment",
      description: "Automatically assigns supervisors based on availability and workload, sending instant notifications."
    },
    {
      title: "Smart Mark Computation",
      description: "Securely records and verifies internal assessments, attendance, and final marks."
    },
    {
      title: "Result Generation & Transparency",
      description: "Ensures accurate grading with real-time access for students and faculty."
    },
    {
      title: "Performance Tracking Dashboards",
      description: "Allows students to view rankings and faculty to monitor class progress."
    },
    {
      title: "Low-Network & Offline Mode",
      description: "Enables seamless operation even in areas with weak internet connectivity."
    },
    {
      title: "Scalability for Large Exams",
      description: "Handles large-scale exams like government and corporate assessments effortlessly."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <main className="flex-grow">
        <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Technology representation"
                className="w-24 h-24 object-cover rounded-full border-4 border-accent shadow-lg animate-fadeIn"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary animate-fadeIn">
              Welcome to PragyaParikshan
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              A smart and secure exam management system
            </p>
            <div className="mt-10 flex justify-center gap-4 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
              <a
                href="/student"
                className="px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors duration-200"
              >
                Student Portal
              </a>
              <a
                href="/faculty"
                className="px-8 py-3 bg-secondary text-primary rounded-lg hover:bg-secondary/90 transition-colors duration-200"
              >
                Faculty Portal
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">About Us</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-600">
                  PragyaParikshan is an advanced exam management system designed to automate seating arrangements, supervisor assignments, mark computation, and result generation. Our platform ensures accuracy, transparency, and efficiency in conducting exams across universities, colleges, schools, coaching institutes, and corporate training centres.
                </p>
                <p className="text-lg text-gray-600">
                  With intelligent algorithms like Integer Linear Programming (ILP), we dynamically allocate seating while ensuring seamless management, even in low-network areas.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                  alt="Collaborative Learning"
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Digital Education"
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Features</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 animate-fadeIn"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Technology Integration"
                className="w-full max-w-2xl rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Notices Section */}
        <section id="notices" className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Notices</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-lg text-gray-600 text-center">
                Stay updated with the latest announcements and notifications.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
