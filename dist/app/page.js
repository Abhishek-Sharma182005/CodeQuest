"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const framer_motion_1 = require("framer-motion");
const button_1 = require("@/components/ui/button");
const ParticleBackground_1 = require("@/components/ParticleBackground");
const lucide_react_1 = require("lucide-react");
function Home() {
    return (<main className="min-h-screen relative overflow-hidden">
      <ParticleBackground_1.ParticleBackground />
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              CodeQuest
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              The Ultimate 100-Day DSA Challenge
            </p>
          </framer_motion_1.motion.div>

          <framer_motion_1.motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="max-w-2xl mx-auto backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              🚀 Join the Challenge
            </h2>
            <p className="text-gray-300 mb-6">
              Push your limits and master Data Structures & Algorithms through our
              gamified, fully automated leaderboard system. Compete with developers
              worldwide and track your progress!
            </p>
            
            <div className="flex justify-center gap-4">
              <framer_motion_1.motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button_1.Button variant="glass" size="lg" className="gap-2">
                  <lucide_react_1.Github className="w-5 h-5"/>
                  Login with GitHub
                </button_1.Button>
              </framer_motion_1.motion.div>
            </div>
          </framer_motion_1.motion.div>

          <framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (<div key={feature.title} className="backdrop-blur-lg bg-white/5 p-6 rounded-xl border border-white/10">
                <div className="text-2xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>))}
          </framer_motion_1.motion.div>
        </div>
      </div>
    </main>);
}
const features = [
    {
        icon: "🎯",
        title: "Daily Challenges",
        description: "New problems every day, carefully curated to help you master DSA concepts progressively.",
    },
    {
        icon: "🏆",
        title: "Live Leaderboard",
        description: "Compete with developers worldwide and track your progress in real-time.",
    },
    {
        icon: "🌟",
        title: "Earn Badges",
        description: "Unlock achievements and showcase your progress with beautiful 3D animated badges.",
    },
];
