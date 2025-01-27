import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Database, LineChart } from "lucide-react";

const services = [
  {
    title: "Custom AI Solutions",
    description: "Tailored artificial intelligence solutions for your specific needs",
    icon: Brain
  },
  {
    title: "Full Stack Development",
    description: "End-to-end web application development with modern technologies",
    icon: Code
  },
  {
    title: "Predictive Analytics",
    description: "Data-driven insights and forecasting for business intelligence",
    icon: LineChart
  },
  {
    title: "Database Architecture",
    description: "Scalable and efficient database design and implementation",
    icon: Database
  }
];

export const Services = () => {
  return (
    <section className="bg-muted py-20 px-4" id="services">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <service.icon className="w-6 h-6 text-primary" />
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};