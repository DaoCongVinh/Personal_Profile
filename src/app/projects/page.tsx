
'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    name: 'Project 1',
    description: 'A brief description of project 1.',
    image: '/images/p1.png', // Increased image size
    link: 'https://example.com/project1',
    github: 'https://github.com/DaoCongVinh/Python_Web',
  },
  {
    name: 'Project 2',
    description: 'A brief description of project 2.',
    image: '/images/p2.png', // Increased image size
    link: 'https://example.com/project2',
    github: 'https://github.com/DaoCongVinh/Four_In_All_Tool_Download',
  },
];

const Projects = () => {
  return (
    <motion.div
      className="container mx-auto mt-10 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-primary">Projects</h2> {/* Increased text size and margin */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Increased gap */}
        {projects.map((project, index) => (
          <Card key={index} className="bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"> {/* Added hover effect */}
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">{project.name}</CardTitle>
              <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={project.image}
                alt={project.name}
                width={600} // Increased width
                height={400} // Increased height
                className="rounded-md mb-4"
              />
              <div className="flex justify-between">
                <Button variant="link" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
                <Button variant="link" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;

    