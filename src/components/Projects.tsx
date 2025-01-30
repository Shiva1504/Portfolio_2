import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const projects = [
  {
    title: "DeepFake Detection",
    description: "Detecting manipulated images using machine learning algorithms",
    tech: "Python, Deep Learning Algorithms, TensorFlow, CNN",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=60",
    longDescription: "Designed and developed a deepfake detection system based on the principles of machine learning algorithms for detecting manipulated images as concerns with deepfakes increased. Implemented CNN architecture achieving 99% accuracy.",
    features: [
      "Real-time image processing",
      "Interactive dashboards",
      "Automated ML model training",
      "deep learning architecture"
    ],
    demoUrl: "",
    githubUrl: ""
  },
  {
    title: "Employee Assistance System",
    description: "Employee Assistance System is an AI-driven support for employees across various business functions",
    tech: "React, TypeScript, vite.js, Speech recognition and AI/ML services, Tailwind CSS",
    image: "public/images/AI3_Pic1.png",
    longDescription: "The Employee Assistance System is an AI-powered platform designed to enhance productivity and streamline communication within organizations. It features AI-driven task automation, speech recognition, multilingual support, and real-time collaboration tools. With functionalities like task management, announcements, and quick actions, the system helps employees stay organized and efficient. Built with React, TypeScript, and Tailwind CSS, it provides a user-friendly interface and integrates advanced machine learning algorithms to improve workplace efficiency.",
    features: [
      "AI-Powered Chatbot",
      "Employee Feedback System",
      "Speech recognition and AI/ML services integrated via custom",
      "Task Management"
    ],
    demoUrl: "https://shiva1504.github.io/Employee_Assistance_System/",
    githubUrl: "https://github.com/Shiva1504/Employee_Assistance_System"
  },
  {
    title: "WEB APPLICATION USING DJANGO",
    description: "Designed an entire web application with Django that included features like: User Authentication, OTP-Based Password Reset, Data Handling, Email Integration. Successfully developed a secure and user-friendly login system with enhanced security measures.",
    tech: "HTML, CSS, JavaScript, Django, Python, SQLite, Bootstrap",
    // image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=60",
    image: "public/images/Port_Pic2.png",
    longDescription: "This project is a complete web application developed using Django, with a focus on user authentication and security. The application features user login with enhanced security measures, OTP-based password reset for easy account recovery, and seamless data handling for efficient backend processing. Additionally, email integration allows for user notifications and password reset confirmations. The web interface is responsive and user-friendly, built using HTML, CSS, and JavaScript, while the backend is powered by Django, Python, and SQLite for database management. Bootstrap was utilized to create a clean and modern UI design.",
    features: [
      "User Authentication",
      "OTP-Based Password Reset",
      "Data Handling",
      "Email Integration"
    ],
    demoUrl: "https://shiva1504.github.io/Web-Application-Using-DJANGO/",
    githubUrl: "https://github.com/Shiva1504/Web-Application-Using-DJANGO"
  },
  {
    title: "PREDICTION MODELS AND ANALYSIS",
    description: "PREDICTION MODELS AND ANALYSIS OF REAL-WORLD APPLICATIONS",
    tech: "Python, Machine Learning & Deep Learning Algorithms, Regression Models",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=60",
    longDescription: "• Developed a variety of prediction models to solve various problems in health care, finance, education, and retailing.The model above gave high precision because these techniques of data preprocessing, feature engineering, and machine learning algorithms such as logistic regression, decision trees, and neural networks were used.",
    features: [
      "Cancer Prediction Model",
      "Chance of Admission Model",
      "CreditCard Prediction Model",
      "Fish Weight Prediction Model",
      "Purchase Prediction Model"
    ],
    demoUrl: "https://github.com/Shiva1504/AL_ML-PROJECTS",
    githubUrl: "https://github.com/Shiva1504/AL_ML-PROJECTS"
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section className="py-20 px-4" id="projects">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.tech}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {selectedProject.tech}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-auto object-cover rounded-lg"
              />
              <p className="text-muted-foreground">
                {selectedProject.longDescription}
              </p>
              <div>
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="text-muted-foreground">{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4 pt-4">
                <Button asChild>
                  <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                    View Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};
