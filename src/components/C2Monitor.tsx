import React from 'react';
import { motion } from 'motion/react';
import { 
  Activity, 
  Server, 
  Shield, 
  Terminal as TerminalIcon,
  Wifi,
  Cpu,
  Database,
  Lock
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function C2Monitor() {
  const activeImplants = [
    { id: 'IMP-7182', host: 'WIN-DESKTOP-01', user: 'Admin', status: 'Active', latency: '45ms', os: 'Windows 11' },
    { id: 'IMP-9244', host: 'LINUX-SRV-04', user: 'root', status: 'Active', latency: '12ms', os: 'Ubuntu 22.04' },
    { id: 'IMP-1036', host: 'MAC-PRO-09', user: 'jdoe', status: 'Idle', latency: '120ms', os: 'macOS 14.2' },
    { id: 'IMP-4431', host: 'ANDROID-S23', user: 'mobile', status: 'Active', latency: '88ms', os: 'Android 14' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold text-white mb-2">C2 Monitor</h1>
          <p className="text-gray-400">Real-time command and control of the global implant network.</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-quantum-green/10 border border-quantum-green/20 rounded-xl flex items-center gap-3">
            <Wifi className="w-4 h-4 text-quantum-green" />
            <span className="text-sm font-mono text-quantum-green font-bold tracking-widest">LISTENING: PORT 443</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Server Status */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-quantum-card border border-quantum-border rounded-2xl p-6">
            <h3 className="font-display font-bold text-white mb-6 flex items-center gap-2">
              <Server className="w-5 h-5 text-quantum-blue" />
              Primary C2 Node
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Uptime</span>
                <span className="text-quantum-green font-bold">14d 06h 22m</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Connections</span>
                <span className="text-quantum-blue font-bold">1,247 Total</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Encryption</span>
                <span className="text-quantum-green font-bold">AES-4096-Q</span>
              </div>
              <div className="pt-4">
                <div className="text-[10px] text-gray-500 uppercase mb-2">Traffic Load</div>
                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-quantum-blue w-1/3" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-quantum-card border border-quantum-border rounded-2xl p-6">
            <h3 className="font-display font-bold text-white mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-quantum-pink" />
              Evasion Level
            </h3>
            <div className="text-center py-4">
              <div className="text-4xl font-display font-bold text-quantum-pink mb-2">AI+</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">Advanced Neural Evasion</div>
            </div>
          </div>
        </div>

        {/* Active Implants Table */}
        <div className="lg:col-span-3">
          <div className="bg-quantum-card border border-quantum-border rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-quantum-border flex items-center justify-between bg-white/5">
              <h3 className="font-display font-bold text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-quantum-blue" />
                Active Reality Fragments
              </h3>
              <span className="text-xs font-mono text-gray-500">TOTAL_ACTIVE: 4</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-[10px] font-mono text-gray-500 uppercase tracking-widest bg-black/20">
                    <th className="px-6 py-3 font-medium">Implant ID</th>
                    <th className="px-6 py-3 font-medium">Hostname</th>
                    <th className="px-6 py-3 font-medium">User</th>
                    <th className="px-6 py-3 font-medium">OS</th>
                    <th className="px-6 py-3 font-medium">Latency</th>
                    <th className="px-6 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-quantum-border/30">
                  {activeImplants.map((imp, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors group cursor-pointer">
                      <td className="px-6 py-4">
                        <div className="text-sm font-mono text-quantum-blue font-bold">{imp.id}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-300">{imp.host}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-400">{imp.user}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-xs text-gray-500">{imp.os}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-xs font-mono text-gray-400">{imp.latency}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className={cn(
                            "w-1.5 h-1.5 rounded-full",
                            imp.status === 'Active' ? 'bg-quantum-green animate-pulse' : 'bg-gray-500'
                          )} />
                          <span className={cn(
                            "text-[10px] font-bold uppercase",
                            imp.status === 'Active' ? 'text-quantum-green' : 'text-gray-500'
                          )}>{imp.status}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 bg-black/40 border border-quantum-border rounded-2xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <TerminalIcon className="w-5 h-5 text-quantum-blue" />
              <span className="text-sm font-bold text-white uppercase tracking-widest">Command Execution</span>
            </div>
            <div className="flex gap-4">
              <input 
                type="text" 
                className="flex-1 bg-black/60 border border-quantum-border rounded-xl px-4 py-3 font-mono text-sm text-quantum-blue outline-none focus:border-quantum-blue transition-all"
                placeholder="Enter command for selected implants..."
              />
              <button className="px-8 py-3 bg-quantum-blue text-black font-bold rounded-xl hover:scale-105 active:scale-95 transition-all">
                EXECUTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
