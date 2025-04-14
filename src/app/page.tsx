'use client';

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Home = () => {
  const audioRef = useRef(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handlePlay = () => {
    audioRef.current?.play();
    setHasInteracted(true);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-2 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Audio Element */}
      <audio ref={audioRef} loop>
        <source src="/audio/nhac2.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 blur-md"></div>

      <motion.div
        className="w-full max-w-md relative z-10"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="bg-transparent border-none shadow-none rounded-lg">
          <CardContent className="flex flex-col items-center justify-center p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <Avatar className="h-32 w-32 mb-4">
                <AvatarImage src="/images/ava.png" alt="Profile Picture" />
                <AvatarFallback>DCV</AvatarFallback>
              </Avatar>
              <h1 className="text-4xl font-bold text-white mb-2 shadow-md">
                Dao Cong Vinh
              </h1>
              <p className="text-gray-300 text-lg mt-3 italic shadow-sm">
                Software Engineer
              </p>

              {!hasInteracted && (
                <Button onClick={handlePlay} className="mt-6">
                  Bật nhạc 🎵
                </Button>
              )}
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Home;
