import { useEffect, useRef, useState } from "react";

// Subtle engine rumble via WebAudio API (no heavy assets)
export default function EngineRumble({ className = "fixed bottom-6 right-6 z-50" }) {
  const ctxRef = useRef(null);
  const gainRef = useRef(null);
  const noiseRef = useRef(null);
  const oscRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    return () => {
      stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function start() {
    if (ctxRef.current) return; // already running
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    ctxRef.current = ctx;

    // Low-frequency oscillator for hum
    const osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.value = 26; // low rumble base

    const lfo = ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.value = 0.3; // slow wobble

    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 6; // wobble depth in Hz

    lfo.connect(lfoGain).connect(osc.frequency);

    // Brown-ish noise layer
    const bufferSize = 2 * ctx.sampleRate;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      output[i] = (lastOut + (0.02 * white)) / 1.02; // brown-like noise
      lastOut = output[i];
    }
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;

    // Filters and gains
    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.value = 120;

    const master = ctx.createGain();
    master.gain.value = 0.14; // overall volume

    const oscGain = ctx.createGain();
    oscGain.gain.value = 0.06;

    noise.connect(noiseFilter).connect(master);
    osc.connect(oscGain).connect(master);
    master.connect(ctx.destination);

    noise.start();
    osc.start();
    lfo.start();

    gainRef.current = master;
    noiseRef.current = noise;
    oscRef.current = osc;
  }

  function stop() {
    try {
      const ctx = ctxRef.current;
      if (!ctx) return;
      noiseRef.current?.stop?.();
      oscRef.current?.stop?.();
      ctx.close();
    } catch (_) {}
    ctxRef.current = null;
    gainRef.current = null;
    noiseRef.current = null;
    oscRef.current = null;
  }

  async function toggle() {
    if (!enabled) {
      start();
      try {
        await ctxRef.current.resume?.();
      } catch {}
      setEnabled(true);
    } else {
      stop();
      setEnabled(false);
    }
  }

  return (
    <div className={className}>
      <button
        type="button"
        onClick={toggle}
        className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm shadow backdrop-blur ${enabled ? 'bg-amber-500 text-stone-900 border-amber-400' : 'bg-stone-900/60 text-amber-100 border-amber-400/30'}`}
        aria-pressed={enabled}
        aria-label={enabled ? 'Mute engine rumble' : 'Enable engine rumble'}
      >
        {enabled ? 'Rumble: On' : 'Rumble: Off'}
      </button>
    </div>
  );
}
