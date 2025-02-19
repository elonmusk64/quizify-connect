
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <main className="flex-grow">
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary animate-fadeIn">
              Welcome to ExamSage
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              Streamline your examination process with our comprehensive management system. Empowering administrators, faculty, and students.
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

        {/* Features Preview */}
        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "Secure Exam Management",
                "Real-time Results",
                "Comprehensive Analytics",
              ].map((feature, index) => (
                <div
                  key={feature}
                  className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 animate-fadeIn"
                  style={{ animationDelay: `${0.2 * (index + 1)}s` }}
                >
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {feature}
                  </h3>
                  <p className="text-gray-600">
                    Experience seamless exam management with our advanced features.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
