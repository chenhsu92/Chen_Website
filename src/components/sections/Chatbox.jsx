import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Chatbox.css';

const Chatbox = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const scrollRef = useRef(null);

    // Auto-scroll to bottom when messages or loading state change
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isLoading, isOpen]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg = { role: 'user', text: input };
        setMessages((prev) => [...prev, userMsg]);
        setInput('');
        setIsLoading(true); // Trigger thinking animation

        try {
            const response = await fetch('http://localhost:8000/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: input }),
            });
            const data = await response.json();
            
            // Assuming your backend returns { "reply": "..." }
            setMessages((prev) => [...prev, { role: 'bot', text: data.reply }]);
        } catch (error) {
            setMessages((prev) => [...prev, { role: 'bot', text: "Virtual Me is currently offline. Please ensure the Python backend is running." }]);
        } finally {
            setIsLoading(false); // Remove thinking animation
        }
    };

    return (
        <div className="floating-chat-container">
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="chat-window-expanded"
                    >
                        <div className="chat-header">
                            <div className="header-info">
                                <div className="online-indicator"></div>
                                <span>Chen Bot</span>
                            </div>
                            <button className="close-btn" onClick={() => setIsOpen(false)}>✕</button>
                        </div>

                        <div className="chat-messages" ref={scrollRef}>
                            {messages.length === 0 && (
                                <p className="welcome-text">Hi! I'm Chen Bot, a virtual Chen! Ask me anything about his engineering work or projects!</p>
                            )}
                            
                            {messages.map((msg, i) => (
                                <motion.div 
                                    initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    key={i} 
                                    className={`message-bubble ${msg.role}`}
                                >
                                    <p>{msg.text}</p>
                                </motion.div>
                            ))}

                            {/* Thinking Animation */}
                            {isLoading && (
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="message-bubble bot thinking-container"
                                >
                                    <div className="typing-dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        <div className="chat-input-area">
                            <input 
                                value={input} 
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Write a message..."
                            />
                            <button className="send-icon-btn" onClick={handleSend} disabled={isLoading}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="chat-toggle-btn" 
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? (
        '✕' 
    ) : (
        <svg 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
    )}
</motion.button>
        </div>
    );
};

export default Chatbox;