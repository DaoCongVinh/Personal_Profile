'use client';

import Link from 'next/link';
import {motion} from 'framer-motion';
import {cn} from '@/lib/utils';
import {Button} from '@/components/ui/button';
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";

export default function Navigation() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md"
      initial={{opacity: 0, y: -50}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5, ease: 'easeInOut'}}
    >
      <div className="container mx-auto flex justify-between items-center px-4 pr-8">
        <Avatar className="h-8 w-8">
        <AvatarImage src="/images/ava.png" alt="Profile Picture" />
        <AvatarFallback>DCV</AvatarFallback>
        </Avatar>
        <div className="flex space-x-4">
          <motion.div
            whileHover={{scale: 1.05, textShadow: '0px 0px 6px rgb(255,255,255)'}}
            transition={{duration: 0.2}}
            className="nav-item"
          >
            <Button variant="link" asChild>
              <Link
                href="/"
                className={cn(
                  'text-foreground text-md font-semibold hover:text-primary transition-colors duration-200'
                )}
              >
                Home
              </Link>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{scale: 1.05, textShadow: '0px 0px 6px rgb(255,255,255)'}}
            transition={{duration: 0.2}}
            className="nav-item"
          >
            <Button variant="link" asChild>
              <Link
                href="/about"
                className={cn(
                  'text-foreground text-md font-semibold hover:text-primary transition-colors duration-200'
                )}
              >
                About
              </Link>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{scale: 1.05, textShadow: '0px 0px 6px rgb(255,255,255)'}}
            transition={{duration: 0.2}}
            className="nav-item"
          >
            <Button variant="link" asChild>
              <Link
                href="/projects"
                className={cn(
                  'text-foreground text-md font-semibold hover:text-primary transition-colors duration-200'
                )}
              >
                Projects
              </Link>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{scale: 1.05, textShadow: '0px 0px 6px rgb(255,255,255)'}}
            transition={{duration: 0.2}}
            className="nav-item"
          >
            <Button variant="link" asChild>
              <Link
                href="/contact"
                className={cn(
                  'text-foreground text-md font-semibold hover:text-primary transition-colors duration-200'
                )}
              >
                Contact
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}

