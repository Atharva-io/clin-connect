"use client";

import { ExpertCard } from "@/components/features/ExpertCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, Search } from "lucide-react";
import { useState } from "react";
// Mock Data
import { MOCK_EXPERTS } from "@/lib/data";

export default function ExplorePage() {
    const [search, setSearch] = useState("");
    const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
    const [selectedPrices, setSelectedPrices] = useState<string[]>([]);

    const specialties = ["Cardiology", "Oncology", "Regulatory", "Neurology", "Operations"]; // Added Operations
    const prices = ["< ₹2,000", "₹2,000 - ₹5,000", "₹5,000+"];

    const toggleSpecialty = (s: string) => {
        if (selectedSpecialties.includes(s)) {
            setSelectedSpecialties(prev => prev.filter(item => item !== s));
        } else {
            setSelectedSpecialties(prev => [...prev, s]);
        }
    };

    const togglePrice = (p: string) => {
        if (selectedPrices.includes(p)) {
            setSelectedPrices(prev => prev.filter(item => item !== p));
        } else {
            setSelectedPrices(prev => [...prev, p]);
        }
    };

    const filteredExperts = MOCK_EXPERTS.filter(expert => {
        const matchesSearch = expert.name.toLowerCase().includes(search.toLowerCase()) ||
            expert.specialty.toLowerCase().includes(search.toLowerCase()) ||
            expert.location.toLowerCase().includes(search.toLowerCase());

        const matchesSpecialty = selectedSpecialties.length === 0 || selectedSpecialties.includes(expert.specialty);

        // Simple price filtering logic (parsing strings like "₹4,000")
        let matchesPrice = true;
        if (selectedPrices.length > 0) {
            const priceVal = parseInt(expert.price.replace(/[^0-9]/g, ''));
            matchesPrice = selectedPrices.some(range => {
                if (range === "< ₹2,000") return priceVal < 2000;
                if (range === "₹2,000 - ₹5,000") return priceVal >= 2000 && priceVal <= 5000;
                if (range === "₹5,000+") return priceVal > 5000;
                return false;
            });
        }

        return matchesSearch && matchesSpecialty && matchesPrice;
    });

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Find Experts</h1>
                    <p className="text-muted-foreground">Connect with verified clinical leaders and specialists.</p>
                </div>
                <div className="flex w-full md:w-auto gap-2">
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search by name, specialty, or hospital..."
                            className="pl-9"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Sidebar Filters */}
                <aside className="hidden md:block col-span-1 space-y-6">
                    <div className="space-y-4">
                        <h3 className="font-semibold text-sm tracking-wide uppercase text-muted-foreground">Specialty</h3>
                        <div className="space-y-2 text-sm">
                            {specialties.map(specialty => (
                                <label key={specialty} className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="rounded border-input text-primary focus:ring-primary h-4 w-4"
                                        checked={selectedSpecialties.includes(specialty)}
                                        onChange={() => toggleSpecialty(specialty)}
                                    /> {specialty}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-sm tracking-wide uppercase text-muted-foreground">Price / Hr</h3>
                        <div className="space-y-2 text-sm">
                            {prices.map(price => (
                                <label key={price} className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="rounded border-input text-primary focus:ring-primary h-4 w-4"
                                        checked={selectedPrices.includes(price)}
                                        onChange={() => togglePrice(price)}
                                    /> {price}
                                </label>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Grid */}
                <div className="col-span-1 md:col-span-3 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredExperts.length > 0 ? (
                        filteredExperts.map(expert => <ExpertCard key={expert.id} expert={expert} />)
                    ) : (
                        <div className="col-span-full text-center py-10 text-muted-foreground">
                            No experts found matching your criteria.
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
