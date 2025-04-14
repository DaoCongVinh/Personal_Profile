
'use client';

import { useState } from 'react';
import { sendEmail } from '@/services/email';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await sendEmail({
        to: 'vinhcoder2004@gmail.com.com', // Replace with your actual email address
        subject: 'Contact Form Submission',
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });
      setStatus('success');
    } catch (error) {
      console.error('Failed to send email', error);
      setStatus('error');
    }
  };

  return (
    <motion.div
      className="container mx-auto mt-10 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="max-w-2xl mx-auto rounded-lg shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">Contact Me</CardTitle>
          <CardDescription className="text-muted-foreground">
            Feel free to reach out with any questions or comments.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-lg">Name:</Label>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-12 px-4 text-lg" // Increased height and padding
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-lg">Email:</Label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 px-4 text-lg" // Increased height and padding
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-lg">Message:</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6} // Increased rows
                required
                className="h-32 px-4 text-lg" // Increased height and padding
              />
            </div>
            <Button
              className={`w-full h-12 text-lg shadow-md ${status === 'loading' ? 'opacity-50 cursor-wait' : ''}`} // Increased height, text-lg, and added shadow
              type="submit"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </Button>
            {status === 'success' && <p className="text-green-500 mt-2">Message sent successfully!</p>}
            {status === 'error' && <p className="text-red-500 mt-2">Failed to send message.</p>}
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Contact;

    