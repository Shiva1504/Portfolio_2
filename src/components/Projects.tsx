import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const projects = [
  {
    title: "AI-Powered Analytics Platform",
    description: "Predictive analytics solution using machine learning algorithms",
    tech: "Python, TensorFlow, React",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=60",
    longDescription: "A comprehensive analytics platform that leverages machine learning algorithms to provide predictive insights. Features include data visualization, automated reporting, and real-time analytics processing. The system uses TensorFlow for ML models and React for the frontend dashboard.",
    features: [
      "Real-time data processing",
      "Interactive dashboards",
      "Automated ML model training",
      "Custom report generation"
    ],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project"
  },
  {
    title: "Smart Portfolio Manager",
    description: "Automated portfolio management system with ML insights",
    tech: "PyTorch, Node.js, MongoDB",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=60",
    longDescription: "An intelligent portfolio management system that provides ML-driven insights for investment decisions. The platform analyzes market trends, predicts potential risks, and suggests portfolio optimizations.",
    features: [
      "Portfolio performance tracking",
      "Risk assessment",
      "Market trend analysis",
      "Automated rebalancing suggestions"
    ],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project"
  },
  {
    title: "Intelligent Customer Service",
    description: "NLP-based customer service automation platform",
    tech: "BERT, FastAPI, React",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=60",
    longDescription: "A customer service automation platform powered by Natural Language Processing. Uses BERT for understanding customer queries and automatically routes or responds to inquiries based on content analysis.",
    features: [
      "Automated query classification",
      "Smart routing system",
      "Response suggestion",
      "Performance analytics"
    ],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project"
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
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
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
                className="w-full h-64 object-cover rounded-lg"
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