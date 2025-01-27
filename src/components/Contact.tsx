import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import React, { useState } from "react";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "e251aa05-3900-410d-a0cf-a5573d21b329", 
          ...formData,
        }),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" }); // Reset the form
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Unable to send your message. Please check your connection.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Your Message"
              className="min-h-[150px]"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
};
