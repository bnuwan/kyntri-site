import React, { useCallback, useEffect, useRef, useState } from 'react';

interface RingItem {
    id: number;
    top: number;
    left: number;
    size: number;
    speed: number;
    rot: number;
}

interface Particle {
    id: number;
    top: number;
    left: number;
    color: string;
    dx: number;
    dy: number;
}

type Phase = 'idle' | 'playing' | 'ended';

const RING_COLORS = ['oklch(65% 0.19 320)', 'oklch(60% 0.19 260)', 'oklch(75% 0.14 220)'];
const GAME_DURATION = 30;
const PADDLE_TOP_PCT = 96;
const CATCH_BAND_LOW = PADDLE_TOP_PCT - 6;
const CATCH_BAND_HIGH = PADDLE_TOP_PCT + 4;
const PADDLE_HALF_WIDTH = 10;

const HeroGameSection: React.FC = () => {
    const playAreaRef = useRef<HTMLDivElement>(null);

    const [phase, setPhase] = useState<Phase>('idle');
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
    const [paddleX, setPaddleX] = useState(50);
    const [items, setItems] = useState<RingItem[]>([]);
    const [particles, setParticles] = useState<Particle[]>([]);
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [scorePulse, setScorePulse] = useState(false);

    const phaseRef = useRef<Phase>(phase);
    const paddleXRef = useRef(paddleX);
    const itemIdRef = useRef(0);
    const particleIdRef = useRef(0);
    const rafIdRef = useRef<number | null>(null);
    const lastTsRef = useRef<number | null>(null);
    const spawnTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const countdownTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        phaseRef.current = phase;
    }, [phase]);

    useEffect(() => {
        paddleXRef.current = paddleX;
    }, [paddleX]);

    const clearAll = useCallback(() => {
        if (rafIdRef.current != null) cancelAnimationFrame(rafIdRef.current);
        if (spawnTimerRef.current != null) clearInterval(spawnTimerRef.current);
        if (countdownTimerRef.current != null) clearInterval(countdownTimerRef.current);
        rafIdRef.current = null;
        spawnTimerRef.current = null;
        countdownTimerRef.current = null;
    }, []);

    useEffect(() => clearAll, [clearAll]);

    const endGame = useCallback(() => {
        clearAll();
        setPhase('ended');
    }, [clearAll]);

    const spawnItem = useCallback(() => {
        itemIdRef.current += 1;
        const size = 40 + Math.random() * 24;
        const speed = 14 + Math.random() * 10;
        const left = 10 + Math.random() * 80;
        const rot = Math.random() * 40 - 20;
        setItems((prev) => [...prev, { id: itemIdRef.current, top: -8, left, size, speed, rot }]);
    }, []);

    const loop = useCallback((ts: number) => {
        if (lastTsRef.current == null) lastTsRef.current = ts;
        const dt = (ts - lastTsRef.current) / 1000;
        lastTsRef.current = ts;
        const paddle = paddleXRef.current;

        setItems((prevItems) => {
            let scoreDelta = 0;
            const newParticles: Particle[] = [];
            const nextItems: RingItem[] = [];

            for (const it of prevItems) {
                const top = it.top + it.speed * dt;
                const withinBand = top >= CATCH_BAND_LOW && top <= CATCH_BAND_HIGH;
                const withinX = Math.abs(it.left - paddle) <= PADDLE_HALF_WIDTH;

                if (withinBand && withinX) {
                    scoreDelta += 1;
                    for (let i = 0; i < 5; i++) {
                        particleIdRef.current += 1;
                        newParticles.push({
                            id: particleIdRef.current,
                            top: it.top,
                            left: it.left,
                            color: RING_COLORS[i % RING_COLORS.length],
                            dx: Math.round((Math.random() - 0.5) * 80),
                            dy: Math.round((Math.random() - 1) * 60),
                        });
                    }
                    continue;
                }
                if (top > 108) continue;
                nextItems.push({ ...it, top });
            }

            if (newParticles.length) {
                setParticles((prev) => [...prev, ...newParticles]);
                const ids = new Set(newParticles.map((p) => p.id));
                setTimeout(() => {
                    setParticles((prev) => prev.filter((p) => !ids.has(p.id)));
                }, 500);
            }
            if (scoreDelta > 0) {
                setScore((s) => s + scoreDelta);
                setScorePulse(true);
                setTimeout(() => setScorePulse(false), 200);
            }

            return nextItems;
        });

        if (phaseRef.current === 'playing') {
            rafIdRef.current = requestAnimationFrame(loop);
        }
    }, []);

    const startGame = useCallback(() => {
        clearAll();
        lastTsRef.current = null;
        itemIdRef.current = 0;
        particleIdRef.current = 0;
        phaseRef.current = 'playing';

        setPhase('playing');
        setScore(0);
        setTimeLeft(GAME_DURATION);
        setPaddleX(50);
        setItems([]);
        setParticles([]);
        setEmail('');
        setSubmitted(false);
        setScorePulse(false);

        playAreaRef.current?.focus();

        spawnTimerRef.current = setInterval(spawnItem, 850);
        countdownTimerRef.current = setInterval(() => {
            setTimeLeft((t) => {
                const next = t - 1;
                if (next <= 0) {
                    endGame();
                    return 0;
                }
                return next;
            });
        }, 1000);
        rafIdRef.current = requestAnimationFrame(loop);
    }, [clearAll, spawnItem, loop, endGame]);

    const handlePointerMove = useCallback((e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        if (phaseRef.current !== 'playing' || !playAreaRef.current) return;
        const rect = playAreaRef.current.getBoundingClientRect();
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const pct = ((clientX - rect.left) / rect.width) * 100;
        setPaddleX(Math.max(8, Math.min(92, pct)));
    }, []);

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
        if (phaseRef.current !== 'playing') return;
        if (e.key === 'ArrowLeft') setPaddleX((x) => Math.max(8, x - 6));
        else if (e.key === 'ArrowRight') setPaddleX((x) => Math.min(92, x + 6));
    }, []);

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setSubmitted(true);
    };

    let endHeadline = 'Everyone starts somewhere!';
    if (score >= 15) endHeadline = 'Ring master! 🏆';
    else if (score >= 8) endHeadline = 'Great catching! ✨';
    else if (score >= 1) endHeadline = 'Nice round!';

    return (
        <div
            style={{
                minHeight: '100vh',
                width: '100%',
                background: 'linear-gradient(160deg, oklch(97% 0.012 300) 0%, oklch(96% 0.015 250) 60%, oklch(95% 0.02 220) 100%)',
                fontFamily: "'Nunito', sans-serif",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '56px 32px',
                boxSizing: 'border-box',
            }}
        >
            <style>{`
                @keyframes heroGameFloatBob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
                @keyframes heroGamePopIn { 0% { transform: scale(0.6); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
                @keyframes heroGameBurstFade { 0% { transform: translate(0,0) scale(1); opacity: 1; } 100% { transform: translate(var(--dx), var(--dy)) scale(0.2); opacity: 0; } }
            `}</style>

            <div
                style={{
                    width: '100%',
                    maxWidth: 1180,
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 56,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/* Marketing column (first) */}
                <div style={{ order: 1, flex: '1 1 380px', minWidth: 320, maxWidth: 480, display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <div
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 8,
                            background: 'linear-gradient(90deg, oklch(90% 0.06 320), oklch(90% 0.06 250))',
                            color: 'oklch(38% 0.14 290)',
                            padding: '8px 16px',
                            borderRadius: 999,
                            fontWeight: 800,
                            fontSize: 13,
                            letterSpacing: '0.04em',
                            width: 'fit-content',
                        }}
                    >
                        <span>🎯</span>
                        <span>MINI GAME</span>
                    </div>

                    <h1
                        style={{
                            fontFamily: "'Baloo 2', sans-serif",
                            fontSize: 52,
                            lineHeight: 1.05,
                            margin: 0,
                            fontWeight: 800,
                            background: 'linear-gradient(100deg, oklch(58% 0.19 320), oklch(58% 0.19 260))',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        Catch some rings, catch some fun.
                    </h1>

                    <p style={{ fontSize: 19, lineHeight: 1.6, color: 'oklch(38% 0.02 280)', margin: 0, maxWidth: 420 }}>
                        See how many you can grab in 30 seconds. No losing, no pressure — just a quick, colorful break.
                    </p>

                    <div style={{ display: 'flex', gap: 24, marginTop: 8 }}>
                        <div>
                            <div style={{ fontFamily: "'Baloo 2', sans-serif", fontSize: 26, fontWeight: 800, color: 'oklch(52% 0.18 300)' }}>30s</div>
                            <div style={{ fontSize: 13, color: 'oklch(50% 0.02 280)', fontWeight: 700 }}>quick round</div>
                        </div>
                        <div>
                            <div style={{ fontFamily: "'Baloo 2', sans-serif", fontSize: 26, fontWeight: 800, color: 'oklch(55% 0.17 260)' }}>∞</div>
                            <div style={{ fontSize: 13, color: 'oklch(50% 0.02 280)', fontWeight: 700 }}>replays</div>
                        </div>
                        <div>
                            <div style={{ fontFamily: "'Baloo 2', sans-serif", fontSize: 26, fontWeight: 800, color: 'oklch(58% 0.15 230)' }}>0</div>
                            <div style={{ fontSize: 13, color: 'oklch(50% 0.02 280)', fontWeight: 700 }}>ways to lose</div>
                        </div>
                    </div>
                </div>

                {/* Game card (second) */}
                <div
                    style={{
                        order: 2,
                        flex: '1 1 420px',
                        minWidth: 340,
                        maxWidth: 460,
                        background: 'oklch(99% 0.004 280)',
                        borderRadius: 32,
                        boxShadow: '0 24px 60px -20px oklch(40% 0.05 280 / 0.35)',
                        overflow: 'hidden',
                        border: '1px solid oklch(92% 0.02 280)',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '18px 22px',
                            background: 'linear-gradient(90deg, oklch(95% 0.03 320), oklch(95% 0.03 250))',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <img src="/logo.png" style={{ width: 28, height: 28 }} alt="logo" />
                            <span style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 700, fontSize: 16, color: 'oklch(35% 0.05 280)' }}>Ring Toss</span>
                        </div>
                        <div style={{ display: 'flex', gap: 18 }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: 11, fontWeight: 700, color: 'oklch(50% 0.02 280)', letterSpacing: '0.05em' }}>SCORE</div>
                                <div
                                    style={{
                                        fontFamily: "'Baloo 2', sans-serif",
                                        fontSize: 22,
                                        fontWeight: 800,
                                        color: 'oklch(45% 0.18 300)',
                                        transform: scorePulse ? 'scale(1.3)' : 'scale(1)',
                                        transition: 'transform 0.2s ease',
                                    }}
                                >
                                    {score}
                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: 11, fontWeight: 700, color: 'oklch(50% 0.02 280)', letterSpacing: '0.05em' }}>TIME</div>
                                <div style={{ fontFamily: "'Baloo 2', sans-serif", fontSize: 22, fontWeight: 800, color: 'oklch(45% 0.16 250)' }}>{timeLeft}</div>
                            </div>
                        </div>
                    </div>

                    <div
                        ref={playAreaRef}
                        tabIndex={0}
                        onMouseMove={handlePointerMove}
                        onTouchMove={handlePointerMove}
                        onKeyDown={handleKeyDown}
                        style={{
                            position: 'relative',
                            height: 460,
                            width: '100%',
                            background: 'linear-gradient(180deg, oklch(94% 0.02 300) 0%, oklch(92% 0.025 250) 100%)',
                            overflow: 'hidden',
                            outline: 'none',
                            cursor: 'none',
                        }}
                    >
                        {items.map((it) => (
                            <img
                                key={it.id}
                                src="/logo.png"
                                alt="ring"
                                style={{
                                    position: 'absolute',
                                    top: `${it.top}%`,
                                    left: `${it.left}%`,
                                    width: it.size,
                                    height: it.size,
                                    transform: `translate(-50%,-50%) rotate(${it.rot}deg)`,
                                    filter: 'drop-shadow(0 6px 10px oklch(30% 0.05 280 / 0.25))',
                                    pointerEvents: 'none',
                                    transition: 'none',
                                }}
                            />
                        ))}

                        {particles.map((p) => (
                            <div
                                key={p.id}
                                style={
                                    {
                                        position: 'absolute',
                                        top: `${p.top}%`,
                                        left: `${p.left}%`,
                                        width: 10,
                                        height: 10,
                                        borderRadius: '50%',
                                        background: p.color,
                                        '--dx': `${p.dx}px`,
                                        '--dy': `${p.dy}px`,
                                        animation: 'heroGameBurstFade 0.5s ease-out forwards',
                                        pointerEvents: 'none',
                                        transition: 'none',
                                    } as React.CSSProperties
                                }
                            />
                        ))}

                        <div
                            style={{
                                position: 'absolute',
                                bottom: 14,
                                height: 22,
                                width: '19%',
                                left: `${paddleX}%`,
                                transform: 'translateX(-50%)',
                                borderRadius: 999,
                                background: 'linear-gradient(90deg, oklch(60% 0.19 320), oklch(58% 0.18 260))',
                                boxShadow: '0 6px 16px -4px oklch(45% 0.15 290 / 0.5)',
                                pointerEvents: 'none',
                                transition: 'none',
                            }}
                        />

                        {phase === 'idle' && (
                            <div
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 16,
                                    background: 'oklch(99% 0.005 280 / 0.7)',
                                    backdropFilter: 'blur(2px)',
                                    textAlign: 'center',
                                    padding: '0 32px',
                                }}
                            >
                                <img src="/logo.png" alt="logo" style={{ width: 56, height: 56, animation: 'heroGameFloatBob 2.4s ease-in-out infinite' }} />
                                <div style={{ fontFamily: "'Baloo 2', sans-serif", fontSize: 22, fontWeight: 800, color: 'oklch(35% 0.05 280)' }}>
                                    Ready to catch some rings?
                                </div>
                                <div style={{ fontSize: 14, color: 'oklch(50% 0.02 280)', maxWidth: 260 }}>
                                    Move your mouse (or use ← →) to slide the bar and catch the rings as they fall.
                                </div>
                                <button
                                    onClick={startGame}
                                    style={{
                                        fontFamily: "'Baloo 2', sans-serif",
                                        fontWeight: 700,
                                        fontSize: 16,
                                        color: 'white',
                                        background: 'linear-gradient(90deg, oklch(60% 0.19 320), oklch(58% 0.18 260))',
                                        border: 'none',
                                        padding: '12px 28px',
                                        borderRadius: 999,
                                        cursor: 'pointer',
                                        boxShadow: '0 10px 20px -8px oklch(50% 0.18 290 / 0.6)',
                                    }}
                                >
                                    Start Game
                                </button>
                            </div>
                        )}

                        {phase === 'ended' && (
                            <div
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 14,
                                    background: 'oklch(99% 0.005 280 / 0.85)',
                                    backdropFilter: 'blur(2px)',
                                    textAlign: 'center',
                                    padding: '0 32px',
                                    animation: 'heroGamePopIn 0.3s ease-out',
                                }}
                            >
                                <div style={{ fontFamily: "'Baloo 2', sans-serif", fontSize: 24, fontWeight: 800, color: 'oklch(35% 0.05 280)' }}>
                                    {endHeadline}
                                </div>
                                <div style={{ fontSize: 15, color: 'oklch(50% 0.02 280)' }}>
                                    You caught <strong>{score}</strong> ring{score === 1 ? '' : 's'} in 30 seconds.
                                </div>

                                {!submitted ? (
                                    <form onSubmit={handleEmailSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%', maxWidth: 280, marginTop: 6 }}>
                                        <input
                                            type="email"
                                            required
                                            placeholder="you@company.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            style={{
                                                padding: '11px 16px',
                                                borderRadius: 999,
                                                border: '1px solid oklch(85% 0.02 280)',
                                                fontSize: 14,
                                                fontFamily: "'Nunito', sans-serif",
                                                outline: 'none',
                                            }}
                                        />
                                        <button
                                            type="submit"
                                            style={{
                                                fontFamily: "'Baloo 2', sans-serif",
                                                fontWeight: 700,
                                                fontSize: 15,
                                                color: 'white',
                                                background: 'linear-gradient(90deg, oklch(60% 0.19 320), oklch(58% 0.18 260))',
                                                border: 'none',
                                                padding: '11px 20px',
                                                borderRadius: 999,
                                                cursor: 'pointer',
                                            }}
                                        >
                                            Save my score
                                        </button>
                                    </form>
                                ) : (
                                    <div style={{ fontSize: 14, fontWeight: 700, color: 'oklch(45% 0.15 300)' }}>🎉 Saved! We'll be in touch.</div>
                                )}

                                <button
                                    onClick={startGame}
                                    style={{
                                        marginTop: 4,
                                        fontFamily: "'Nunito', sans-serif",
                                        fontWeight: 700,
                                        fontSize: 13,
                                        color: 'oklch(45% 0.1 280)',
                                        background: 'none',
                                        border: 'none',
                                        textDecoration: 'underline',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Play again
                                </button>
                            </div>
                        )}
                    </div>

                    <div style={{ textAlign: 'center', padding: 10, fontSize: 12, color: 'oklch(55% 0.02 280)', background: 'oklch(97% 0.01 280)' }}>
                        Drag, or use ← → arrow keys, to move the bar
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroGameSection;
