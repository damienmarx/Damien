import React from 'react';
import { motion } from 'motion/react';
import { 
  Activity, 
  Users, 
  ShieldCheck, 
  TrendingUp, 
  Terminal as TerminalIcon,
  AlertTriangle,
  Zap,
  Globe,
  Lock
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Dashboard() {
  const stats = [
    { label: 'Active Implants', value: '1,247', icon: Activity, color: 'text-quantum-blue' },
    { label: 'Captured Souls', value: '67', icon: Users, color: 'text-quantum-pink' },
    { label: 'System Integrity', value: '99.9%', icon: ShieldCheck, color: 'text-quantum-green' },
    { label: 'RNG Confidence', value: '94.2%', icon: TrendingUp, color: 'text-yellow-400' },
  ];

  const recentActivity = [
    { type: 'capture', target: 'runehall.com', detail: 'New credential harvested: Murk', time: '2m ago' },
    { type: 'exploit', target: 'api.runehall.com', detail: 'SQLi vulnerability confirmed', time: '15m ago' },
    { type: 'system', target: 'C2 Node 01', detail: 'Quantum sync complete', time: '1h ago' },
    { type: 'capture', target: 'google.com', detail: 'Session token intercepted', time: '3h ago' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold text-white mb-2">Operations Center</h1>
          <p className="text-gray-400">Real-time monitoring of the Sovereign Trinity infrastructure.</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-black/30 border border-quantum-border rounded-lg flex items-center gap-3">
            <Globe className="w-4 h-4 text-quantum-blue" />
            <span className="text-sm font-mono text-gray-300">IP: 169.254.169.254</span>
          </div>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-quantum-card border border-quantum-border p-6 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <stat.icon className="w-12 h-12" />
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className={cn("p-2 rounded-lg bg-white/5", stat.color)}>
                <stat.icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">{stat.label}</span>
            </div>
            <div className="text-3xl font-display font-bold text-white">{stat.value}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Live Feed */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-quantum-card border border-quantum-border rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-quantum-border flex items-center justify-between bg-white/5">
              <h3 className="font-display font-bold text-white flex items-center gap-2">
                <TerminalIcon className="w-5 h-5 text-quantum-blue" />
                Live Intelligence Feed
              </h3>
              <span className="text-xs font-mono text-quantum-blue animate-pulse">STREAMING_ACTIVE</span>
            </div>
            <div className="p-6 space-y-4 max-h-[400px] overflow-y-auto terminal-scrollbar font-mono text-sm">
              {recentActivity.map((act, i) => (
                <div key={i} className="flex gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-quantum-border/30">
                  <span className="text-gray-500 whitespace-nowrap">[{act.time}]</span>
                  <span className={cn(
                    "font-bold uppercase",
                    act.type === 'capture' ? 'text-quantum-pink' : 
                    act.type === 'exploit' ? 'text-yellow-400' : 'text-quantum-blue'
                  )}>[{act.type}]</span>
                  <span className="text-gray-300">{act.detail}</span>
                  <span className="ml-auto text-gray-500 italic">@{act.target}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-quantum-card border border-quantum-border rounded-2xl p-6">
              <h3 className="font-display font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-quantum-blue" />
                Active Operations
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-black/20 rounded-xl border border-quantum-border/50">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-300">RNG Seed Cracking</span>
                    <span className="text-sm font-mono text-quantum-blue">78%</span>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '78%' }}
                      className="h-full bg-quantum-blue"
                    />
                  </div>
                </div>
                <div className="p-4 bg-black/20 rounded-xl border border-quantum-border/50">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-300">Subdomain Brute-force</span>
                    <span className="text-sm font-mono text-quantum-pink">42%</span>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '42%' }}
                      className="h-full bg-quantum-pink"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-quantum-card border border-quantum-border rounded-2xl p-6">
              <h3 className="font-display font-bold text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-quantum-pink" />
                Critical Alerts
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-quantum-pink/10 border border-quantum-pink/20 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-quantum-pink animate-ping" />
                  <span className="text-xs text-quantum-pink font-bold">WAF DETECTED: CLOUDFLARE</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-yellow-400/10 border border-yellow-400/20 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <span className="text-xs text-yellow-400 font-bold">HONEYPOT WARNING: api.runehall.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="space-y-6">
          <div className="bg-quantum-card border border-quantum-border rounded-2xl p-6">
            <h3 className="font-display font-bold text-white mb-6">Network Topology</h3>
            <div className="aspect-square bg-black/40 rounded-xl border border-quantum-border/30 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#29c4ff22_0%,_transparent_70%)]" />
              <div className="relative w-32 h-32 border-2 border-quantum-blue/30 rounded-full animate-[spin_10s_linear_infinite] flex items-center justify-center">
                <div className="w-24 h-24 border-2 border-quantum-pink/30 rounded-full animate-[spin_7s_linear_infinite_reverse]" />
                <Lock className="absolute w-8 h-8 text-quantum-blue" />
              </div>
            </div>
          </div>

          <div className="bg-quantum-card border border-quantum-border rounded-2xl p-6">
            <h3 className="font-display font-bold text-white mb-4">Resource Allocation</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">CPU Usage</span>
                <span className="text-sm font-mono text-quantum-green">12.4%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Memory</span>
                <span className="text-sm font-mono text-quantum-green">1.2 GB</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Bandwidth</span>
                <span className="text-sm font-mono text-quantum-green">450 KB/s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
