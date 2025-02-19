
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckCircle2 } from "lucide-react";

const Features = () => {
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
      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary mb-8">Features</h1>
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
