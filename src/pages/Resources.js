import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card.js";
import { Button } from "@/components/ui/button.js";
import { BookOpenIcon, DownloadIcon, LinkIcon, SearchIcon, ChevronRightIcon } from "lucide-react";
const Resources = () => {
    const [activeSection, setActiveSection] = useState("all");
    const [hoveredCard, setHoveredCard] = useState(null);
    const resources = {
        studyMaterials: [
            {
                title: "Financial Analysis Fundamentals",
                description: "Complete guide to financial statement analysis with practical examples and industry best practices.",
                type: "PDF",
                downloadLink: "/resources/financial-analysis.pdf",
                size: "2.4 MB",
                lastUpdated: "Jan 15, 2024",
            },
            {
                title: "Business Strategy Framework",
                description: "Strategic planning templates and guides for developing robust business strategies.",
                type: "PDF",
                downloadLink: "/resources/strategy-framework.pdf",
                size: "1.8 MB",
                lastUpdated: "Jan 20, 2024",
            },
        ],
        tools: [
            {
                title: "Data Analytics Suite",
                description: "Powerful collection of data analysis tools for financial modeling and market research.",
                link: "https://analytics.febs.org",
                type: "Web App",
                users: "2.5k+ active users",
                lastUpdated: "Real-time",
            },
            {
                title: "Project Management Kit",
                description: "Comprehensive templates and software for effective project management and tracking.",
                link: "https://pm.febs.org",
                type: "Web App",
                users: "1.8k+ active users",
                lastUpdated: "Real-time",
            },
        ],
        research: [
            {
                title: "Market Analysis 2024",
                description: "In-depth market research report covering emerging trends and industry forecasts.",
                type: "Research Paper",
                downloadLink: "/resources/market-analysis-2024.pdf",
                size: "3.2 MB",
                lastUpdated: "Jan 25, 2024",
            },
            {
                title: "Industry Trends Report",
                description: "Latest insights on market dynamics, competitive landscape, and growth opportunities.",
                type: "Research Paper",
                downloadLink: "/resources/trends-2024.pdf",
                size: "2.8 MB",
                lastUpdated: "Jan 22, 2024",
            },
        ],
    };
    const FilterButton = ({ title, value }) => (React.createElement(Button, { variant: activeSection === value ? "default" : "outline", onClick: () => setActiveSection(value), className: `
                px-6 py-2 transition-all duration-300
                ${activeSection === value
            ? "bg-[#41E5BD] hover:bg-[#2CCAA3] text-black shadow-lg shadow-[#41E5BD]/20"
            : "hover:bg-white/10 hover:shadow-lg hover:shadow-[#41E5BD]/10 border-white/20"}
            ` }, title));
    const ResourceCard = ({ resource, type, index }) => (React.createElement(Card, { className: "group relative overflow-hidden transition-all duration-500 hover:shadow-xl bg-black/40 backdrop-blur-sm border-2 border-white/5 hover:border-[#41E5BD]", onMouseEnter: () => setHoveredCard(`${type}-${index}`), onMouseLeave: () => setHoveredCard(null) },
        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-br from-[#41E5BD]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
        React.createElement(CardHeader, null,
            React.createElement(CardTitle, { className: "text-xl font-bold group-hover:text-[#41E5BD] transition-colors flex items-center justify-between" },
                resource.title,
                React.createElement(ChevronRightIcon, { className: `w-5 h-5 transform transition-transform duration-300 ${hoveredCard === `${type}-${index}` ? "translate-x-1" : "-translate-x-2 opacity-0"}` }))),
        React.createElement(CardContent, null,
            React.createElement("p", { className: "text-white/80 mb-6 text-sm md:text-base leading-relaxed" }, resource.description),
            React.createElement("div", { className: "space-y-4" },
                React.createElement("div", { className: "flex items-center justify-between text-sm text-white/40" },
                    React.createElement("span", null,
                        "Last updated: ",
                        resource.lastUpdated),
                    resource.size && React.createElement("span", null, resource.size),
                    resource.users && React.createElement("span", null, resource.users)),
                React.createElement("div", { className: "flex justify-between items-center" },
                    React.createElement("span", { className: "text-sm font-medium px-3 py-1 bg-[#41E5BD]/5 rounded-full text-[#41E5BD] border border-[#41E5BD]/10" }, resource.type),
                    type === "tool" ? (React.createElement(Button, { variant: "outline", className: "hover:bg-[#41E5BD]/10 hover:text-[#41E5BD] border-[#41E5BD]/20", asChild: true },
                        React.createElement("a", { href: resource.link, target: "_blank", rel: "noopener noreferrer", className: "flex items-center" },
                            React.createElement(LinkIcon, { className: "w-4 h-4 mr-2" }),
                            " Access Tool"))) : (React.createElement(Button, { variant: "default", className: "bg-[#41E5BD] hover:bg-[#2CCAA3] text-black shadow-lg shadow-[#41E5BD]/20", asChild: true },
                        React.createElement("a", { href: resource.downloadLink, download: true, className: "flex items-center" },
                            React.createElement(DownloadIcon, { className: "w-4 h-4 mr-2" }),
                            " Download"))))))));
    return (React.createElement("div", { className: "min-h-screen relative" },
        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-br from-[#012C3D] via-[#025A6A] to-[#00C2CC]" }),
        React.createElement("div", { className: "absolute inset-0 bg-[url('/api/placeholder/8/8')] opacity-3" }),
        React.createElement("div", { className: "absolute inset-0 bg-black/40" }),
        React.createElement("div", { className: "relative z-10 py-16 px-4" },
            React.createElement("div", { className: "max-w-6xl mx-auto" },
                React.createElement("header", { className: "text-center mb-16 space-y-6" },
                    React.createElement("div", { className: "inline-block" },
                        React.createElement("h1", { className: "text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#41E5BD] to-[#2666B0] bg-clip-text text-transparent" }, "Resources"),
                        React.createElement("div", { className: "h-1 w-full bg-gradient-to-r from-[#41E5BD] to-[#2666B0] rounded-full mt-2 transform origin-left scale-x-0 animate-scale-x" })),
                    React.createElement("p", { className: "text-xl text-white/80 max-w-2xl mx-auto" }, "Access our comprehensive collection of study materials, tools, and research papers"),
                    React.createElement("div", { className: "flex flex-wrap justify-center gap-4 mt-8" },
                        React.createElement(FilterButton, { title: "All Resources", value: "all" }),
                        React.createElement(FilterButton, { title: "Study Materials", value: "studyMaterials" }),
                        React.createElement(FilterButton, { title: "Tools", value: "tools" }),
                        React.createElement(FilterButton, { title: "Research", value: "research" }))),
                React.createElement("div", { className: "space-y-16" },
                    (activeSection === "all" || activeSection === "studyMaterials") && (React.createElement("section", { className: "animate-fade-in" },
                        React.createElement("div", { className: "flex items-center gap-3 mb-8" },
                            React.createElement("div", { className: "p-2 bg-[#41E5BD]/5 rounded-lg" },
                                React.createElement(BookOpenIcon, { className: "w-8 h-8 text-[#41E5BD]" })),
                            React.createElement("h2", { className: "text-3xl font-bold text-white" }, "Study Materials")),
                        React.createElement("div", { className: "grid md:grid-cols-2 gap-6" }, resources.studyMaterials.map((resource, index) => (React.createElement(ResourceCard, { key: index, resource: resource, type: "studyMaterial", index: index })))))),
                    (activeSection === "all" || activeSection === "tools") && (React.createElement("section", { className: "animate-fade-in" },
                        React.createElement("div", { className: "flex items-center gap-3 mb-8" },
                            React.createElement("div", { className: "p-2 bg-[#41E5BD]/5 rounded-lg" },
                                React.createElement(LinkIcon, { className: "w-8 h-8 text-[#41E5BD]" })),
                            React.createElement("h2", { className: "text-3xl font-bold text-white" }, "Tools")),
                        React.createElement("div", { className: "grid md:grid-cols-2 gap-6" }, resources.tools.map((tool, index) => (React.createElement(ResourceCard, { key: index, resource: tool, type: "tool", index: index })))))),
                    (activeSection === "all" || activeSection === "research") && (React.createElement("section", { className: "animate-fade-in" },
                        React.createElement("div", { className: "flex items-center gap-3 mb-8" },
                            React.createElement("div", { className: "p-2 bg-[#41E5BD]/5 rounded-lg" },
                                React.createElement(SearchIcon, { className: "w-8 h-8 text-[#41E5BD]" })),
                            React.createElement("h2", { className: "text-3xl font-bold text-white" }, "Research Papers")),
                        React.createElement("div", { className: "grid md:grid-cols-2 gap-6" }, resources.research.map((paper, index) => (React.createElement(ResourceCard, { key: index, resource: paper, type: "researchPaper", index: index })))))))))));
};
export default Resources;
