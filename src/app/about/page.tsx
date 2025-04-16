
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { generateProfileSummary } from '@/ai/flows/generate-profile-summary';

const About = () => {
  const [profileSummary, setProfileSummary] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfileSummary = async () => {
      const input = {
        skillsAndExperiences: `
          I am a passionate software engineer with 2+ years of experience in developing web applications.
          My skills include JavaScript, TypeScript, React, Next.js, Tailwind CSS, and Node.js.
          I have worked on various projects, from e-commerce platforms to social media applications.
          I am also interested in AI and machine learning.
        `,
      };
      try {
        const result = await generateProfileSummary(input);
        setProfileSummary(result?.profileSummary || 'Failed to generate profile summary.');
      } catch (error) {
        console.error('Error generating profile summary:', error);
        setProfileSummary('Error generating profile summary.');
      }
    };

    fetchProfileSummary();
  }, []);

  return (
    <motion.div
      className="container mx-auto mt-10 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="max-w-3xl mx-auto rounded-lg shadow-xl"> {/* Increased max-w and added shadow-xl */}
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">About Me</CardTitle> {/* Increased text size */}
          <CardDescription className="text-muted-foreground">
            A brief overview of my skills, experience, and interests.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6"> {/* Increased gap */}
          <div className="flex items-center space-x-6"> {/* Increased space */}
            <Avatar className="h-20 w-20"> {/* Increased avatar size */}
              <AvatarImage src="/images/ava.png" alt="Profile" />
              <AvatarFallback>DCV</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-2xl font-semibold">Dao Cong Vinh</h3> {/* Increased text size */}
              <p className="text-muted-foreground">Software Engineer</p>
            </div>
          </div>

          <div className="space-y-3"> {/* Increased space */}
            <h4 className="text-2xl font-semibold">Summary</h4> {/* Increased text size */}
            <p className="text-gray-700">
              {profileSummary ? profileSummary : "Loading profile summary..."}
            </p>
          </div>

          <div className="space-y-3"> {/* Increased space */}
            <h4 className="text-2xl font-semibold">Skills</h4> {/* Increased text size */}
            <ul className="list-disc list-inside text-lg"> {/* Increased text size */}
              <li>Python</li>
              <li>Java</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Node.js</li>
              <li>HTML, CSS</li>
              <li>Docker</li>
              <li>MYSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div className="space-y-3"> {/* Increased space */}
            <h4 className="text-2xl font-semibold">Experience</h4> {/* Increased text size */}
            <p className="text-gray-700 text-lg"> {/* Increased text size */}
              Freelancer Software Engineer - 2023
            </p>
          </div>

          <div className="space-y-3"> {/* Increased space */}
            <h4 className="text-2xl font-semibold">Interests</h4> {/* Increased text size */}
            <p className="text-gray-700 text-lg"> {/* Increased text size */}
              I enjoy playing badminton, listening to music and playing video games.
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default About;

    
