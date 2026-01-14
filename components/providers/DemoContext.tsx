"use client"
import React, { createContext, useContext, useState, useEffect } from "react";

import { MOCK_EXPERTS } from "@/lib/data";

// Types
export type RequestStatus = 'PENDING' | 'ACCEPTED' | 'DECLINED';

export interface Request {
    id: string;
    startupId: string;
    startupName: string;
    mentorId: string;
    mentorName: string;
    title: string;
    message: string;
    status: RequestStatus;
    timestamp: string;
    location?: string; // e.g. Mumbai
}

interface DemoContextType {
    requests: Request[];
    sendRequest: (req: Omit<Request, 'id' | 'status' | 'timestamp'>) => void;
    updateRequestStatus: (id: string, status: RequestStatus) => void;
    // User Data Store (Mock DB)
    experts: any[];
    companies: any[];
}

const DemoContext = createContext<DemoContextType | null>(null);

// Initial Mock Data matches ver2 requirements
const INITIAL_REQUESTS: Request[] = [
    {
        id: "req_1",
        startupId: "user-startup", // ForschMedx
        startupName: "ForschMedx",
        mentorId: "user-mentor",   // Abhishek Sir
        mentorName: "Abhishek Sir",
        title: "Clinical Trial Pilot (Mumbai)",
        message: "We are developing a non-invasive sleep monitoring device and need feedback on our clinical trial protocol for Indian demographics.",
        status: 'PENDING',
        timestamp: new Date(Date.now() - 7200000).toISOString(), // 2 hours ago
        location: "Mumbai"
    },
    {
        id: "req_2",
        startupId: "other_startup",
        startupName: "AyurTech Innovations",
        mentorId: "user-mentor",
        mentorName: "Abhishek Sir",
        title: "Regulatory Advice (CDSCO)",
        message: "Seeking advice on regulatory pathways for AI-based diagnostic tools in the Indian market (CDSCO).",
        status: 'PENDING',
        timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
        location: "Delhi"
    }
];

export function DemoProvider({ children }: { children: React.ReactNode }) {
    const [requests, setRequests] = useState<Request[]>(INITIAL_REQUESTS);

    const sendRequest = (req: Omit<Request, 'id' | 'status' | 'timestamp'>) => {
        const newReq: Request = {
            ...req,
            id: `req_${Date.now()}`,
            status: 'PENDING',
            timestamp: new Date().toISOString()
        };
        setRequests(prev => [newReq, ...prev]);
    };

    const updateRequestStatus = (id: string, status: RequestStatus) => {
        setRequests(prev => prev.map(r => r.id === id ? { ...r, status } : r));
    };

    // Use centralized data
    const experts = MOCK_EXPERTS;

    const companies = [
        {
            id: "user-startup", // Matches ForschMedx
            name: "ForschMedx",
            description: "AI-driven diagnostics for early cancer detection.",
            location: "Mumbai"
        }
    ]

    return (
        <DemoContext.Provider value={{ requests, sendRequest, updateRequestStatus, experts, companies }}>
            {children}
        </DemoContext.Provider>
    );
}

export const useDemo = () => {
    const context = useContext(DemoContext);
    if (!context) throw new Error("useDemo must be used within a DemoProvider");
    return context;
};
