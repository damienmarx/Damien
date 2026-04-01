import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Globe, 
  Database, 
  Network, 
  Share2, 
  ShieldAlert,
  Terminal as TerminalIcon,
  Filter,
  Download,
  Link as LinkIcon
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function IntelDeepDive() {
  const [target, setTarget] = useState('runehall.com');
  const [isScanning, setIsScanning] = useState(false);

  const discoveredAssets = [
    { type: 'Domain', value: 'runehall.com', status: 'Primary' },
    { type: 'Subdomain', value: 'api.runehall.com', status: 'Vulnerable' },
    { type: 'Subdomain', value: 'cdn.runehall.com', status: 'Secure' },
    { type: 'Subdomain', value: 'admin.runehall.com', status: 'Protected' },
    { type: 'IP', value: '104.21.78.142', status: 'Cloudflare' },
  ];

  const vulnerabilities = [
    { title: 'SQL Injection', severity: 'Critical', target: 'api.runehall.com/v1/user', confidence: '98%' },
    { title: 'XSS (Stored)', severity: 'High', target: 'runehall.com/chat', confidence: '85%' },
    { title: 'Broken Auth', severity: 'Medium', target: 'admin.runehall.com', confidence: '72%' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold text-white mb-2">Intel Deep Dive</h1>
          <p className="text-gray-400">Comprehensive OSINT and vulnerability correlation engine.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="pl-10 pr-4 py-2 bg-black/40 border border-quantum-border rounded-xl text-sm focus:border-quantum-blue outline-none transition-all w-64"
              placeholder="Enter target domain..."
            />
          </div>
          <button 
            onClick={() => setIsScanning(true)}
            className="px-6 py-2 bg-quantum-blue text-black font-bold rounded-xl hover:scale-105 active:scale-95 transition-all"
          >
            INITIATE SCAN
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Asset Discovery */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-quantum-card border border-quantum-border rounded-2xl p-6">
            <h3 className="font-display font-bold text-white mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5 text-quantum-blue" />
              Asset Discovery
            </h3>
            <div className="space-y-3">
              {discoveredAssets.map((asset, i) => (
                <div key={i} className="p-3 bg-black/20 rounded-xl border border-quantum-border/30 flex justify-between items-center group hover:border-quantum-blue/50 transition-all">
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase font-mono">{asset.type}</div>
                    <div className="text-sm font-bold text-gray-200">{asset.value}</div>
                  </div>
                  <span className={cn(
                    "text-[10px] font-bold px-2 py-1 rounded",
                    asset.status === 'Vulnerable' ? 'bg-quantum-pink/20 text-quantum-pink' :
                    asset.status === 'Primary' ? 'bg-quantum-blue/20 text-quantum-blue' : 'bg-gray-500/20 text-gray-400'
                  )}>
                    {asset.status}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 border border-dashed border-quantum-border rounded-xl text-xs text-gray-500 hover:text-gray-300 hover:border-quantum-blue/50 transition-all">
              + ADD CUSTOM ASSET
            </button>
          </div>

          <div className="bg-quantum-card border border-quantum-border rounded-2xl p-6">
            <h3 className="font-display font-bold text-white mb-4 flex items-center gap-2">
              <Network className="w-5 h-5 text-quantum-pink" />
              Network Graph
            </h3>
            <div className="aspect-video bg-black/40 rounded-xl border border-quantum-border/30 flex items-center justify-center">
              <Share2 className="w-12 h-12 text-quantum-border animate-pulse" />
            </div>
          </div>
        </div>

        {/* Vulnerability Assessment */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-quantum-card border border-quantum-border rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-quantum-border flex items-center justify-between bg-white/5">
              <h3 className="font-display font-bold text-white flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-quantum-pink" />
                Vulnerability Assessment
              </h3>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-white/5 rounded-lg text-gray-500"><Filter className="w-4 h-4" /></button>
                <button className="p-2 hover:bg-white/5 rounded-lg text-gray-500"><Download className="w-4 h-4" /></button>
              </div>
            </div>
            <div className="p-0">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-[10px] font-mono text-gray-500 uppercase tracking-widest bg-black/20">
                    <th className="px-6 py-3 font-medium">Vulnerability</th>
                    <th className="px-6 py-3 font-medium">Severity</th>
                    <th className="px-6 py-3 font-medium">Target Endpoint</th>
                    <th className="px-6 py-3 font-medium">Confidence</th>
                    <th className="px-6 py-3 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-quantum-border/30">
                  {vulnerabilities.map((vuln, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="text-sm font-bold text-gray-200">{vuln.title}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={cn(
                          "text-[10px] font-bold px-2 py-1 rounded",
                          vuln.severity === 'Critical' ? 'bg-quantum-pink/20 text-quantum-pink' :
                          vuln.severity === 'High' ? 'bg-orange-500/20 text-orange-500' : 'bg-yellow-500/20 text-yellow-500'
                        )}>
                          {vuln.severity}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-xs font-mono text-gray-400 flex items-center gap-2">
                          <LinkIcon className="w-3 h-3" />
                          {vuln.target}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-xs font-mono text-quantum-blue">{vuln.confidence}</div>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-xs font-bold text-quantum-blue hover:underline opacity-0 group-hover:opacity-100 transition-opacity">
                          EXPLOIT
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-quantum-card border border-quantum-border rounded-2xl p-6">
            <h3 className="font-display font-bold text-white mb-4 flex items-center gap-2">
              <TerminalIcon className="w-5 h-5 text-quantum-blue" />
              Correlation Console
            </h3>
            <div className="p-4 bg-black/60 rounded-xl border border-quantum-border/50 font-mono text-xs space-y-2 h-48 overflow-y-auto terminal-scrollbar">
              <div className="text-gray-500">[SYSTEM] Initializing correlation engine...</div>
              <div className="text-quantum-blue">[INFO] Correlating data from 12 OSINT sources</div>
              <div className="text-quantum-green">[MATCH] Found linked identity: Murk {'->'} runehall_admin</div>
              <div className="text-quantum-green">[MATCH] Found linked IP: 104.21.78.142 {'->'} Cloudflare Edge</div>
              <div className="text-quantum-pink">[ALERT] Potential honeypot detected on /admin/login</div>
              <div className="text-gray-500">[SYSTEM] Correlation complete. 3 high-value targets identified.</div>
              <div className="text-white animate-pulse">_</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
