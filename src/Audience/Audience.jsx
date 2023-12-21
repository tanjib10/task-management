import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Audience = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="mt-20 py-12">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">
          Who Can Benefit?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="bg-white p-6 rounded-lg shadow-lg col-span-full md:col-span-1"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="text-[#9C0063] text-xl font-bold mb-4">
              Corporate Professionals
            </h3>
            <p className="text-gray-700">
              Stay organized with your daily tasks, manage projects efficiently,
              and boost productivity in a corporate environment.
            </p>
          </div>
          <div
            className="bg-white p-6 rounded-lg shadow-lg col-span-full md:col-span-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-[#9C0063] text-xl font-bold mb-4">
              Creative Professionals
            </h3>
            <p className="text-gray-700">
              Enhance your creative workflows, keep track of design tasks, and
              collaborate seamlessly with your creative team.
            </p>
          </div>
          <div
            className="bg-white p-6 rounded-lg shadow-lg col-span-full md:col-span-1"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="text-[#9C0063] text-xl font-bold mb-4">
              Entrepreneurs
            </h3>
            <p className="text-gray-700">
              Manage your business tasks, set goals, and stay on top of your
              entrepreneurial journey with our task management platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
