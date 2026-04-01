/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  Target, 
  Cpu, 
  Database, 
  ShieldAlert, 
  Terminal, 
  Activity,
  Search,
  Settings,
  Menu,
  X,
  Zap,
  Lock,
  Globe,
  BarChart3
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

// Components
import Dashboard from './components/Dashboard';
import KenoPredictor from './components/KenoPredictor';
import IntelDeepDive from './components/IntelDeepDive';
import C2Monitor from './components/C2Monitor';
import PayloadManager from './components/PayloadManager';

type View = 'dashboard' | 'keno' | 'intel' | 'c2' | 'payloads' | 'settings';

export default function App() {
  const [activeView, setActiveView] = useState<View>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navItems = [
    { id: 'dashboard', label: 'Operations Center', icon: LayoutDashboard },
    { id: 'keno', label: 'Quantum Predictor', icon: Cpu },
    { id: 'intel', label: 'Intel Deep Dive', icon: Search },
    { id: 'c2', label: 'C2 Monitor', icon: Activity },
    { id: 'payloads', label: 'Payload Arsenal', icon: ShieldAlert },
    { id: 'settings', label: 'System Config', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-quantum-bg overflow-hidden">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="relative flex flex-col bg-quantum-card border-r border-quantum-border z-50"
      >
        <div className="p-6 flex items-center justify-between">
          <AnimatePresence mode="wait">
            {isSidebarOpen && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-quantum-blue to-quantum-pink rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-display font-bold text-xl tracking-tight text-white">SOVEREIGN</span>
              </motion.div>
            )}
          </AnimatePresence>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors text-quantum-blue"
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id as View)}
              className={cn(
                "w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group",
                activeView === item.id 
                  ? "bg-quantum-blue/10 text-quantum-blue border border-quantum-blue/20" 
                  : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
              )}
            >
              <item.icon className={cn(
                "w-5 h-5 transition-transform group-hover:scale-110",
                activeView === item.id ? "text-quantum-blue" : "text-gray-500"
              )} />
              {isSidebarOpen && <span className="font-medium">{item.label}</span>}
              {activeView === item.id && isSidebarOpen && (
                <motion.div 
                  layoutId="active-pill"
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-quantum-blue shadow-[0_0_8px_#29c4ff]"
                />
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 mt-auto">
          <div className={cn(
            "bg-black/20 rounded-xl p-4 border border-quantum-border/50",
            !isSidebarOpen && "flex justify-center"
          )}>
            {isSidebarOpen ? (
              <>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-quantum-green animate-pulse" />
                  <span className="text-xs font-mono text-quantum-green">SYSTEM ONLINE</span>
                </div>
                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  vΩ.1 OMEGA ASCENDED
                </div>
              </>
            ) : (
              <div className="w-2 h-2 rounded-full bg-quantum-green animate-pulse" />
            )}
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 relative overflow-y-auto terminal-scrollbar">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#29c4ff11_0%,_transparent_50%)]" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="p-8"
          >
            {activeView === 'dashboard' && <Dashboard />}
            {activeView === 'keno' && <KenoPredictor />}
            {activeView === 'intel' && <IntelDeepDive />}
            {activeView === 'c2' && <C2Monitor />}
            {activeView === 'payloads' && <PayloadManager />}
            {activeView === 'settings' && (
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-display font-bold mb-6 text-white">System Configuration</h2>
                <div className="bg-quantum-card border border-quantum-border rounded-2xl p-8">
                  <p className="text-gray-400 mb-8">Manage your quantum-entangled infrastructure and C2 endpoints.</p>
                  {/* Settings content */}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
