import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, 
  Zap, 
  TrendingUp, 
  RefreshCcw, 
  Target,
  ShieldAlert,
  Dna
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function KenoPredictor() {
  const [selectedTiles, setSelectedTiles] = useState<number[]>([]);
  const [predictedTiles, setPredictedTiles] = useState<number[]>([]);
  const [drawnTiles, setDrawnTiles] = useState<number[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [balance, setBalance] = useState(10000000);
  const [sessionProfit, setSessionProfit] = useState(0);
  const [currentBet, setCurrentBet] = useState(500000);

  const multipliers = [
    { match: 1, val: '2.5x' },
    { match: 2, val: '5x' },
    { match: 3, val: '25x' },
    { match: 4, val: '100x' },
    { match: 5, val: '500x' },
    { match: 6, val: '2,500x' },
    { match: 7, val: '10,000x' },
    { match: 8, val: '50,000x' },
  ];

  const handleTileClick = (num: number) => {
    if (selectedTiles.includes(num)) {
      setSelectedTiles(selectedTiles.filter(t => t !== num));
    } else if (selectedTiles.length < 10) {
      setSelectedTiles([...selectedTiles, num]);
    }
  };

  const runQuantumAnalysis = () => {
    setIsAnalyzing(true);
    setPredictedTiles([]);
    
    // Simulate complex RNG analysis
    setTimeout(() => {
      const prediction = [7, 15, 23, 32, 38, 12, 28, 35].sort(() => Math.random() - 0.5).slice(0, 8);
      setPredictedTiles(prediction);
      setIsAnalyzing(false);
    }, 2000);
  };

  const executeExploitBet = () => {
    if (selectedTiles.length === 0) return;
    
    setBalance(prev => prev - currentBet);
    
    // Simulate manipulated draw
    const draw = [7, 15, 23, 32, 38, 12, 28, 35]; // Forced pattern
    setDrawnTiles(draw);
    
    const matches = selectedTiles.filter(t => draw.includes(t)).length;
    const multiplier = matches > 0 ? parseFloat(multipliers[matches - 1]?.val.replace('x', '').replace(',', '')) : 0;
    const win = Math.floor(currentBet * multiplier);
    
    setTimeout(() => {
      setBalance(prev => prev + win);
      setSessionProfit(prev => prev + (win - currentBet));
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <header>
        <h1 className="text-4xl font-display font-bold text-white mb-2">Quantum Keno Predictor</h1>
        <p className="text-gray-400">Advanced RNG manipulation and seed pairing injection module.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Controls */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-quantum-card border border-quantum-border rounded-2xl p-6">
            <h3 className="font-display font-bold text-white mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-quantum-blue" />
              Quantum Controls
            </h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-black/30 rounded-xl border border-quantum-border/50 text-center">
                  <div className="text-xs text-gray-500 uppercase mb-1">Balance</div>
                  <div className="text-xl font-display font-bold text-quantum-blue">{balance.toLocaleString()}</div>
                </div>
                <div className="p-4 bg-black/30 rounded-xl border border-quantum-border/50 text-center">
                  <div className="text-xs text-gray-500 uppercase mb-1">Profit</div>
                  <div className={cn("text-xl font-display font-bold", sessionProfit >= 0 ? "text-quantum-green" : "text-quantum-pink")}>
                    {sessionProfit >= 0 ? '+' : ''}{sessionProfit.toLocaleString()}
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-gray-500 uppercase mb-3 block">Bet Amount</label>
                <div className="text-2xl font-display font-bold text-white mb-4">{currentBet.toLocaleString()} GP</div>
                <div className="grid grid-cols-3 gap-2">
                  {[100000, 500000, 1000000].map(amt => (
                    <button 
                      key={amt}
                      onClick={() => setCurrentBet(amt)}
                      className="px-3 py-2 bg-white/5 hover:bg-white/10 border border-quantum-border rounded-lg text-xs font-bold transition-colors"
                    >
                      {amt / 1000}K
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <button 
                  onClick={runQuantumAnalysis}
                  disabled={isAnalyzing}
                  className="w-full py-4 bg-gradient-to-r from-quantum-blue to-quantum-pink rounded-xl font-bold text-white shadow-lg shadow-quantum-blue/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                >
                  {isAnalyzing ? 'ANALYZING RNG STREAM...' : '🌌 RUN QUANTUM ANALYSIS'}
                </button>
                <button 
                  onClick={executeExploitBet}
                  className="w-full py-4 bg-quantum-green/10 border border-quantum-green/30 text-quantum-green rounded-xl font-bold hover:bg-quantum-green/20 transition-all"
                >
                  💣 EXECUTE EXPLOIT BET
                </button>
              </div>
            </div>
          </div>

          <div className="bg-quantum-card border border-quantum-border rounded-2xl p-6">
            <h3 className="font-display font-bold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-quantum-green" />
              Profit Multipliers
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {multipliers.map(m => (
                <div key={m.match} className="flex justify-between items-center p-3 bg-black/20 rounded-lg border border-quantum-border/30">
                  <span className="text-xs text-gray-400">Match {m.match}</span>
                  <span className="text-sm font-bold text-quantum-blue">{m.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center: Board */}
        <div className="lg:col-span-5">
          <div className="bg-quantum-card border border-quantum-border rounded-2xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-display font-bold text-white text-xl">RuneHall Keno Board</h3>
              <div className="flex gap-2">
                <div className="flex items-center gap-2 px-3 py-1 bg-quantum-blue/10 rounded-full border border-quantum-blue/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-quantum-blue" />
                  <span className="text-[10px] font-bold text-quantum-blue uppercase">40 Tiles</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-8 gap-3">
              {Array.from({ length: 40 }, (_, i) => i + 1).map(num => (
                <motion.button
                  key={num}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleTileClick(num)}
                  className={cn(
                    "aspect-square rounded-xl font-bold text-lg transition-all duration-300 border-2 relative overflow-hidden",
                    selectedTiles.includes(num)
                      ? "bg-quantum-pink border-quantum-pink text-white shadow-[0_0_15px_rgba(255,41,105,0.5)]"
                      : drawnTiles.includes(num)
                        ? "bg-quantum-blue border-quantum-blue text-white shadow-[0_0_15px_rgba(41,196,255,0.5)]"
                        : predictedTiles.includes(num)
                          ? "bg-quantum-green/20 border-quantum-green text-quantum-green animate-pulse"
                          : "bg-black/40 border-quantum-border/50 text-gray-500 hover:border-quantum-blue/50 hover:text-gray-300"
                  )}
                >
                  {num}
                  {predictedTiles.includes(num) && (
                    <div className="absolute top-0 right-0 p-1">
                      <Zap className="w-2 h-2" />
                    </div>
                  )}
                </motion.button>
              ))}
            </div>

            <div className="mt-8 flex justify-between items-center text-sm font-mono">
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-quantum-pink" />
                  <span className="text-gray-400">Selected</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-quantum-blue" />
                  <span className="text-gray-400">Drawn</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded border border-quantum-green" />
                  <span className="text-gray-400">Predicted</span>
                </div>
              </div>
              <button 
                onClick={() => {
                  setSelectedTiles([]);
                  setDrawnTiles([]);
                  setPredictedTiles([]);
                }}
                className="text-gray-500 hover:text-white transition-colors"
              >
                [RESET_BOARD]
              </button>
            </div>
          </div>
        </div>

        {/* Right: Analysis */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-quantum-card border border-quantum-border rounded-2xl p-6">
            <h3 className="font-display font-bold text-white mb-4 flex items-center gap-2">
              <Dna className="w-5 h-5 text-quantum-pink" />
              RNG Fingerprint
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-black/40 rounded-xl border border-quantum-border/30">
                <div className="text-[10px] text-gray-500 uppercase mb-2">Current Seed Hash</div>
                <div className="text-xs font-mono text-quantum-blue break-all">
                  f3a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center">
                  <div className="text-[10px] text-gray-500 uppercase">Entropy</div>
                  <div className="text-lg font-display font-bold text-quantum-green">HIGH</div>
                </div>
                <div className="text-center">
                  <div className="text-[10px] text-gray-500 uppercase">Bias</div>
                  <div className="text-lg font-display font-bold text-quantum-pink">0.02%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-quantum-card border border-quantum-border rounded-2xl p-6">
            <h3 className="font-display font-bold text-white mb-4 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-yellow-400" />
              Exploit Status
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Seed Cracking</span>
                <span className="text-quantum-green font-bold">READY</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Pattern Injection</span>
                <span className="text-quantum-green font-bold">ACTIVE</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Timing Attack</span>
                <span className="text-quantum-blue font-bold">ARMED</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">RTP Manipulation</span>
                <span className="text-quantum-pink font-bold">STANDBY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
