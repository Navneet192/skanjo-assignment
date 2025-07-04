import React from "react";
import CVAnalysisDashboard from "./CVAnalysisDashboard";
import FeatureIcon from "./FeatureIcon";
import { Eye, Users, Shield, ArrowRight, BrainCircuit } from "lucide-react";

function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-10 items-center p-15">
          {/* LEFT: Text Content */}
          <div className="max-w-2xl">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-300 w-fit mb-6 shadow-sm">
              <BrainCircuit className="w-4 h-4 text-gray-800" />
              <span className="text-sm font-semibold text-gray-800 tracking-tight">
                AI-Powered Recruitment
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Stop Ignoring
              <br />
              Your
              <br />
              <span className="bg-gradient-to-r from-gray-900 via-gray-400 to-white bg-clip-text text-transparent">
                Best Candidates.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-gray-600 mb-16 leading-relaxed">
              AI-powered CV screening for Zoho Recruit that helps recruiters
              rescue <span className="font-semibold">top talent</span> from
              being overlooked.
            </p>

            {/* Features Row */}
            <div className="flex items-center space-x-6 mb-16">
              <FeatureIcon
                icon={Eye}
                text="Smart Detection"
                color="bg-blue-500"
              />
              <FeatureIcon
                icon={Users}
                text="Zoho Integration"
                color="bg-purple-500"
              />
              <FeatureIcon
                icon={Shield}
                text="AI Screening"
                color="bg-green-500"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4 mb-16">
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center space-x-2 shadow-lg">
                <span>Try Free</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="text-gray-700 hover:text-black font-medium transition">
                Learn More
              </button>
            </div>

            <div className="text-sm text-gray-500 mb-4">
              Trusted by 500+ recruitment teams
            </div>
            <div className="flex items-center space-x-8 text-gray-400 font-semibold text-lg">
              <span>ZOHO</span>
              <span>RECRUIT</span>
              <span>AI</span>
            </div>
          </div>

          {/* RIGHT: Image or Dashboard */}
          <div className="mt-16 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative w-fit">
              {/* Floating Brain Icon */}
              <div className="absolute -top-5 -right-5 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
              </div>
              {/* CV Analysis Card */}
              <CVAnalysisDashboard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HeroSection;
