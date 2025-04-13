'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './ChatBot.module.css';

type Message = {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi there! I'm Kalash's portfolio assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Knowledge base for the chatbot
  const knowledgeBase = {
    skills: [
      'Next.js', 'React', 'Django', 'FastAPI', 'Node.js', 'Express.js', 
      'Python', 'LLM Integration', 'AI Development', 'Docker'
    ],
    experience: [
      {
        company: 'Indoricoders',
        role: 'Backend Developer',
        period: '2023 - Present',
        description: 'Building scalable and efficient systems using Django, FastAPI, Node.js, and Express.js. Designing and developing robust APIs, ensuring high performance and maintainability in production environments.'
      },
      {
        company: 'Gurave Educational Platform',
        role: 'Full Stack Developer',
        period: '2023 - 2024',
        description: 'Worked on an educational platform using Next.js, integrating various LLMs to create educational content. Implemented AI-powered features that generate customized learning materials using ChatGPT API.'
      },
      {
        company: 'AI Travel Agent',
        role: 'AI Developer',
        period: '2023',
        description: 'Developed an AI-powered travel agent application for a US client. The system uses natural language processing to understand travel preferences, recommend destinations, and create personalized itineraries.'
      }
    ],
    projects: [
      {
        name: 'AI Travel Agent',
        description: 'An AI-powered travel assistant that helps users plan trips, find destinations, and create personalized itineraries. Integrates with travel APIs and uses natural language processing to understand user preferences.',
        technologies: ['AI/ML', 'Next.js', 'OpenAI API', 'Travel APIs']
      },
      {
        name: 'Gurave LLM Integration',
        description: 'Educational content generation system using LLMs like ChatGPT. Creates customized learning materials, quizzes, and interactive exercises based on curriculum requirements and student learning styles.',
        technologies: ['Next.js', 'LLM', 'ChatGPT API', 'Education']
      },
      {
        name: 'ORM to SQL Converter',
        description: 'Converts ORM queries to raw SQL for better performance. This tool helps developers optimize database queries by providing the equivalent SQL statements for their ORM code.',
        technologies: ['Python', 'Django', 'SQL']
      }
    ],
    education: [
      {
        institution: 'IPS Academy, Indore',
        degree: 'B.Tech in CSE (AIML)',
        period: '2024 - Present'
      },
      {
        institution: "St. Jude's Co-Ed School",
        degree: 'High School (12th Grade)',
        period: 'Graduated: 2022'
      }
    ],
    contact: {
      email: 'kalashchouhan939@gmail.com',
      phone: '+917223029969',
      linkedin: 'https://www.linkedin.com/in/kalash-singh-317079282/',
      github: 'https://github.com/kalashsingh18'
    }
  };

  // Function to generate bot response
  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Check for greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm Kalash's portfolio assistant. How can I help you today?";
    }
    
    // Check for skills inquiry
    if (message.includes('skill') || message.includes('technologies') || message.includes('tech stack')) {
      return `Kalash is skilled in: ${knowledgeBase.skills.join(', ')}`;
    }
    
    // Check for experience inquiry
    if (message.includes('experience') || message.includes('work') || message.includes('job')) {
      const experienceText = knowledgeBase.experience.map(exp => 
        `${exp.role} at ${exp.company} (${exp.period}): ${exp.description}`
      ).join('\n\n');
      
      return `Here's Kalash's work experience:\n\n${experienceText}`;
    }
    
    // Check for projects inquiry
    if (message.includes('project') || message.includes('portfolio') || message.includes('work')) {
      const projectsText = knowledgeBase.projects.map(project => 
        `${project.name}: ${project.description}\nTechnologies: ${project.technologies.join(', ')}`
      ).join('\n\n');
      
      return `Here are some of Kalash's notable projects:\n\n${projectsText}`;
    }
    
    // Check for education inquiry
    if (message.includes('education') || message.includes('study') || message.includes('degree') || message.includes('school') || message.includes('college')) {
      const educationText = knowledgeBase.education.map(edu => 
        `${edu.degree} at ${edu.institution} (${edu.period})`
      ).join('\n\n');
      
      return `Here's Kalash's educational background:\n\n${educationText}`;
    }
    
    // Check for contact inquiry
    if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('reach')) {
      return `You can contact Kalash at:\n\nEmail: ${knowledgeBase.contact.email}\nPhone: ${knowledgeBase.contact.phone}\nLinkedIn: ${knowledgeBase.contact.linkedin}\nGitHub: ${knowledgeBase.contact.github}`;
    }
    
    // Check for AI/LLM specific questions
    if (message.includes('ai') || message.includes('llm') || message.includes('machine learning') || message.includes('artificial intelligence')) {
      return "Kalash has experience with AI and LLM integration, particularly in educational content creation. He worked on the Gurave educational platform where he integrated various LLMs to generate customized learning materials. He also developed an AI travel agent for a US client that uses natural language processing to understand travel preferences and create personalized itineraries.";
    }
    
    // Check for Next.js specific questions
    if (message.includes('next.js') || message.includes('nextjs') || message.includes('next js')) {
      return "Kalash has experience with Next.js, particularly in his work on the Gurave educational platform. He used Next.js to build the frontend of the platform and integrated it with various LLMs to create educational content.";
    }
    
    // Default response
    return "I'm not sure I understand. You can ask me about Kalash's skills, experience, projects, education, or contact information.";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate typing delay for bot response
    setTimeout(() => {
      const botResponse: Message = {
        text: generateResponse(userMessage.text),
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const formatMessage = (text: string) => {
    return text.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <>
      <button 
        className={styles.chatButton} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat with portfolio assistant"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {isOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <>
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="10" r="1" />
              <circle cx="8" cy="10" r="1" />
              <circle cx="16" cy="10" r="1" />
            </>
          )}
        </svg>
      </button>
      
      {isOpen && (
        <div className={styles.chatContainer}>
          <div className={styles.chatHeader}>
            <h3>Portfolio Assistant</h3>
            <button 
              className={styles.closeButton} 
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className={styles.messagesContainer}>
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`${styles.message} ${message.sender === 'user' ? styles.userMessage : styles.botMessage}`}
              >
                <div className={styles.messageContent}>
                  {formatMessage(message.text)}
                </div>
                <div className={styles.messageTime}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className={`${styles.message} ${styles.botMessage}`}>
                <div className={styles.typingIndicator}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          <form className={styles.inputContainer} onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className={styles.input}
            />
            <button 
              type="submit" 
              className={styles.sendButton}
              disabled={!inputValue.trim()}
              aria-label="Send message"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
