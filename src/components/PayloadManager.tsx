import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldAlert, 
  Terminal as TerminalIcon, 
  Code, 
  Cpu, 
  Zap, 
  Lock,
  Download,
  Copy,
  ExternalLink,
  ChevronRight,
  Bug
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function PayloadManager() {
  const [selectedCategory, setSelectedCategory] = useState('web');

  const payloads = [
    { id: 'XSS-01', name: 'DOM-Based XSS', type: 'web', severity: 'High', status: 'Ready' },
    { id: 'SQL-04', name: 'Blind SQLi Injector', type: 'web', severity: 'Critical', status: 'Ready' },
    { id: 'RCE-09', name: 'Reflective DLL Loader', type: 'windows', severity: 'Critical', status: 'Armed' },
    { id: 'HTA-02', name: 'Stealth HTA Dropper', type: 'windows', severity: 'High', status: 'Ready' },
    { id: 'APK-05', name: 'Persistent Android Backdoor', type: 'mobile', severity: 'High', status: 'Armed' },
    { id: 'JWT-01', name: 'JWT Alg None Exploit', type: 'web', severity: 'Medium', status: 'Ready' },
  ];

  const categories = [
    { id: 'web', label: 'Web Exploits', icon: Globe },
    { id: 'windows', label: 'Windows Binaries', icon: Cpu },
    { id: 'mobile', label: 'Mobile Implants', icon: Smartphone },
    { id: 'network', label: 'Network Tools', icon: Network },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold text-white mb-2">Payload Arsenal</h1>
          <p className="text-gray-400">Manage and deploy advanced polymorphic payloads and exploit chains.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2 bg-white/5 border border-quantum-border rounded-xl text-sm font-bold hover:bg-white/10 transition-all">
            IMPORT PAYLOAD
          </button>
          <button className="px-6 py-2 bg-quantum-pink text-white font-bold rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-quantum-pink/20">
            GENERATE NEW
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Categories */}
        <div className="lg:col-span-1 space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-200 group border",
                selectedCategory === cat.id 
                  ? "bg-quantum-pink/10 text-quantum-pink border-quantum-pink/30" 
                  : "bg-quantum-card text-gray-400 border-quantum-border hover:bg-white/5"
              )}
            >
              <cat.icon className={cn(
                "w-5 h-5",
                selectedCategory === cat.id ? "text-quantum-pink" : "text-gray-500"
              )} />
              <span className="font-bold">{cat.label}</span>
              <ChevronRight className={cn(
                "ml-auto w-4 h-4 transition-transform",
                selectedCategory === cat.id ? "rotate-90" : "opacity-0 group-hover:opacity-100"
              )} />
            </button>
          ))}
        </div>

        {/* Payload List */}
        <div className="lg:col-span-3 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {payloads.filter(p => p.type === selectedCategory).map((payload, i) => (
              <motion.div
                key={payload.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-quantum-card border border-quantum-border rounded-2xl p-6 hover:border-quantum-pink/50 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Code className="w-16 h-16" />
                </div>
                
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-[10px] font-mono text-quantum-pink font-bold mb-1">{payload.id}</div>
                    <h4 className="text-lg font-display font-bold text-white">{payload.name}</h4>
                  </div>
                  <span className={cn(
                    "text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest",
                    payload.status === 'Armed' ? 'bg-quantum-pink text-white animate-pulse' : 'bg-quantum-green/20 text-quantum-green'
                  )}>
                    {payload.status}
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Severity</span>
                    <span className={cn(
                      "font-bold",
                      payload.severity === 'Critical' ? 'text-quantum-pink' : 'text-yellow-400'
                    )}>{payload.severity}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Polymorphic Variants</span>
                    <span className="text-white font-mono">47</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-white/5 hover:bg-white/10 border border-quantum-border rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2">
                    <Copy className="w-3 h-3" /> COPY
                  </button>
                  <button className="flex-1 py-2 bg-white/5 hover:bg-white/10 border border-quantum-border rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2">
                    <Download className="w-3 h-3" /> DOWNLOAD
                  </button>
                  <button className="p-2 bg-quantum-pink/10 hover:bg-quantum-pink/20 border border-quantum-pink/30 rounded-lg text-quantum-pink transition-all">
                    <Zap className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-black/40 border border-quantum-border rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-quantum-blue/10 border border-quantum-blue/20">
                <TerminalIcon className="w-6 h-6 text-quantum-blue" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white">Payload Compiler</h3>
                <p className="text-sm text-gray-500">Build custom exploit chains with AI-powered obfuscation.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase">Target Architecture</label>
                <select className="w-full bg-black/40 border border-quantum-border rounded-xl px-4 py-3 text-sm text-gray-300 outline-none focus:border-quantum-blue">
                  <option>x64 (Windows)</option>
                  <option>ARM64 (Android)</option>
                  <option>Web (JavaScript)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase">Evasion Level</label>
                <select className="w-full bg-black/40 border border-quantum-border rounded-xl px-4 py-3 text-sm text-gray-300 outline-none focus:border-quantum-blue">
                  <option>Standard (Bypass AV)</option>
                  <option>Advanced (Bypass EDR)</option>
                  <option>Quantum (Polymorphic)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase">Persistence</label>
                <select className="w-full bg-black/40 border border-quantum-border rounded-xl px-4 py-3 text-sm text-gray-300 outline-none focus:border-quantum-blue">
                  <option>None (Memory Only)</option>
                  <option>Service Worker</option>
                  <option>Registry Key</option>
                </select>
              </div>
            </div>

            <div className="p-6 bg-black/60 rounded-xl border border-quantum-border/50 font-mono text-xs text-quantum-green mb-6">
              <div className="flex justify-between mb-4 border-b border-quantum-border/30 pb-2">
                <span>BUILD_LOG_v1.0.4</span>
                <span className="text-gray-500">01 APR 2026</span>
              </div>
              <div className="space-y-1">
                <div>[SYSTEM] Initializing compiler...</div>
                <div>[INFO] Loading obfuscation modules...</div>
                <div>[INFO] Applying polymorphic transformations...</div>
                <div className="text-quantum-blue">[OK] Entropy level: 7.94 (Optimal)</div>
                <div className="text-quantum-blue">[OK] Signature check: 0 matches found</div>
                <div className="text-white animate-pulse">_</div>
              </div>
            </div>

            <button className="w-full py-4 bg-quantum-blue text-black font-bold rounded-xl hover:scale-[1.01] active:scale-[0.99] transition-all shadow-lg shadow-quantum-blue/20">
              COMPILE & ARM PAYLOAD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Icons for categories
import { Globe, Smartphone, Network } from 'lucide-react';
