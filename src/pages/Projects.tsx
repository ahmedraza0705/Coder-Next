import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      description: "A modern, scalable e-commerce solution with real-time inventory management and seamless checkout experience.",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    },
    {
      id: "fitness-app",
      title: "Fitness Tracking App",
      description: "Cross-platform mobile app for tracking workouts, nutrition, and progress with social features.",
      tags: ["React Native", "Firebase", "Redux"],
      imageUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
    },
    {
      id: "saas-dashboard",
      title: "SaaS Analytics Dashboard",
      description: "Comprehensive analytics platform with real-time data visualization and customizable reporting.",
      tags: ["Vue.js", "D3.js", "PostgreSQL"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
    {
      id: "booking-system",
      title: "Hotel Booking System",
      description: "Full-featured booking platform with payment processing, calendar management, and automated emails.",
      tags: ["Next.js", "Prisma", "Tailwind"],
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    },
    {
      id: "social-platform",
      title: "Social Media Platform",
      description: "Modern social networking app with real-time messaging, content feeds, and advanced privacy controls.",
      tags: ["React", "GraphQL", "WebSockets"],
      imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    },
    {
      id: "education-portal",
      title: "Online Education Portal",
      description: "Interactive learning platform with video courses, quizzes, progress tracking, and certificates.",
      tags: ["Angular", "Node.js", "AWS"],
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    },
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary">Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Explore our portfolio of successful projects across various industries and technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;
