"use client";

import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";

type Stage =
  | "opening"
  | "gallery"
  | "letter"
  | "message"
  | "note"
  | "goodnight";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [stage, setStage] = useState<Stage>("opening");
  const [oneWord, setOneWord] = useState("");
  const [wish, setWish] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // NOTE: tambahan untuk spin a note
  const [note, setNote] = useState<string | null>(null);

  const notes = [
    "You’re doing better than you think.",
    "You don’t need to be perfect to be loved.",
    "Rest is still progress.",
    "You’re allowed to take your time.",
    "Even small steps still count.",
    "You don’t have to carry everything alone.",
    "You are not behind. You are just human.",
    "I’m proud of you for surviving days you didn’t talk about.",
    "You deserve softness, not just strength.",
    "It’s okay to start over. Again and again.",
    "You are enough, just as you are.",
    "Your feelings are valid, even the messy ones.",
    "You are worthy of good things.",
    "It’s okay to say no to things that drain you.",
    "You are more resilient than you realize.",
    "You are not your mistakes.",
    "It’s okay to ask for help when you need it.",
    "You are capable of more than you know.",
    "Your pace is the right pace for you.",
    "You are loved, even on days you don’t feel it.",
  ];

  function spinNote() {
    const random = notes[Math.floor(Math.random() * notes.length)];
    setNote(random);

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
    });
  }

  useEffect(() => {
    audioRef.current = new Audio("/music/hbd.mp3");
    audioRef.current.loop = true;
    audioRef.current.preload = "auto";
  }, []);

  async function startExperience() {
    // 🎉 Confetti sekali pas buka
    confetti({
      particleCount: 140,
      spread: 90,
      origin: { y: 0.6 },
    });

    try {
      await audioRef.current?.play();
    } catch {}

    setStage("gallery");
  }

  function stopMusic() {
    audioRef.current?.pause();
  }

  function pop() {
  confetti({
    particleCount: 18,
    spread: 45,
    startVelocity: 18,
    origin: { y: 0.8 },
  });
}

  return (
    <main className="w-screen h-screen overflow-hidden">
      {/* ========== OPENING ========== */}
      {stage === "opening" && (
        <section
          className="relative w-full h-full flex items-center justify-center"
          style={{
            backgroundImage: "url('/images/cover.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#3D2A22]/55" />

          <div className="relative z-10 text-center px-6 max-w-xl">
            <p className="text-sm tracking-wide text-[#F7EEE7] opacity-90 mb-2">
              TURN ON YOUR VOLUME 🔊
            </p>

            <h1 className="text-4xl sm:text-5xl font-bold text-[#F7EEE7] mb-3">
              hi, happy birthdayy!
            </h1>

            <p className="text-base sm:text-lg text-[#F7EEE7] opacity-90 mb-6">
              click this and enjoy — i made this little page for u, maaf kl msh
              cupu✨
            </p>

            <button
              onClick={startExperience}
              className="btn-vibe rounded-2xl px-6 py-3 font-semibold bg-[#3D2A22] text-[#FAF3EE]"
            >
              Open 🎁
            </button>
          </div>
        </section>
      )}

      {/* ========== GALLERY ========== */}
      {stage === "gallery" && (
        <section className="w-full h-full bg-[#F7EEE7] overflow-y-auto p-4 sm:p-6">
          <div className="max-w-xl mx-auto space-y-6">
            <img
              src="/images/collage.jpg"
              alt="memories"
              className="w-full rounded-2xl"
            />

            <div className="text-center space-y-2">
              <span className="inline-block rounded-full bg-[#3D2A22] text-[#FAF3EE] px-4 py-1 text-sm">
                9 years of friendship
              </span>

              <p className="text-sm sm:text-base text-[#4A342A] opacity-90">
                A few moments, a lot of memories. I’m really glad I get to share
                these with u.
              </p>
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => setStage("letter")}
                className="btn-vibe rounded-2xl px-6 py-3 font-semibold bg-[#3D2A22] text-[#FAF3EE]"
              >
                Next →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ========== LETTER ========== */}
      {stage === "letter" && (
        <section className="w-full h-full bg-[#F7EEE7] overflow-y-auto p-4 sm:p-6">
          <div className="max-w-xl mx-auto bg-[#FAF3EE] rounded-[24px] p-5 sm:p-8 shadow-sm">
            <div className="flex justify-center mb-3">
              <span className="rounded-full border border-[#CDB9AA] px-4 py-1 text-sm text-[#3D2A22]">
                9 years • still here
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#3D2A22] mb-4 text-center">
              Happy Birthday My 911 🎂
            </h2>

            <p className="text-sm sm:text-base text-[#4A342A] leading-relaxed opacity-90">
              Another year older, another chapter. I hope this year brings you a
              little more clarity, a little more peace, and fewer days where
              everything feels too heavy.
              <br />
              <br />
              You don’t need to have it all figured out. Growth doesn’t always
              look loud or impressive—sometimes it’s just choosing to keep
              going, even on quiet, ordinary days.
              <br />
              <br />
              Take ur time. Life isn’t a race, and you’re not behind. I hope you
              find moments that feel right, people who feel safe, and reasons to
              be proud of how far you’ve come.
              <br />
              <br />
              Thanks for sticking around all these years. Nine years of
              friendship feels kind of unreal, but I’m glad it’s you.
              <br />
              No big words — just appreciation.
              <br />
              <br />
              Jangan terlalu positif thinking, buat hal yang jelas-jelas nggak
              layak di posthink tapi semoga kamu bisa lebih tegaas dalam segala
              ketidakpastian yang datang Ttap percaya kalo u cukup kuat untuk
              ngadepin semuanya.
              <br />
              <br />
              I always want you to know that you’re seen, you’re valued, and you
              matter.
              <br />
              <br />
              Live a bit more yaaa ❤️
            </p>

            <div className="mt-6 flex justify-center gap-3">
              <button
                onClick={() => setStage("message")}
                className="btn-vibe rounded-2xl px-6 py-3 font-semibold bg-[#3D2A22] text-[#FAF3EE]"
              >
                Next →
              </button>

              <button
                onClick={stopMusic}
                className="rounded-2xl px-6 py-3 font-semibold bg-[#CDB9AA] text-[#3D2A22]"
              >
                Stop Music 🔇
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ========== MESSAGE (PAGE 4) ========== */}
      {stage === "message" && (
        <section className="w-full h-full bg-[#F7EEE7] overflow-y-auto p-4 sm:p-6">
          <div className="max-w-xl mx-auto bg-[#FAF3EE] rounded-[24px] p-5 sm:p-8 shadow-sm relative">
            <div className="flex justify-center mb-3">
              <span className="rounded-full border border-[#CDB9AA] px-4 py-1 text-sm text-[#3D2A22]">
                one last thing 💌
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#3D2A22] mb-2 text-center">
              Leave a little message
            </h2>
            <p className="text-sm sm:text-base text-[#4A342A] opacity-90 text-center mb-6">
              Just for you. No pressure, keep it simple.
            </p>

            <div className="space-y-4">
              {/* one word */}
              <div>
                <label className="block text-sm font-medium text-[#3D2A22] mb-2">
                  Write one word about this year
                </label>
                <input
                  value={oneWord}
                  onChange={(e) => setOneWord(e.target.value)}
                  maxLength={24}
                  placeholder="e.g. healing / chaos / growth"
                  className="w-full rounded-2xl border border-[#CDB9AA] bg-white px-4 py-3 text-[#3D2A22] outline-none focus:ring-2 focus:ring-[#CDB9AA]"
                />
                <p className="mt-1 text-xs text-[#4A342A] opacity-70">
                  {oneWord.length}/24
                </p>
              </div>

              {/* wish */}
              <div>
                <label className="block text-sm font-medium text-[#3D2A22] mb-2">
                  What do you wish for yourself?
                </label>
                <textarea
                  value={wish}
                  onChange={(e) => setWish(e.target.value)}
                  rows={4}
                  maxLength={220}
                  placeholder="Type a short wish…"
                  className="w-full rounded-2xl border border-[#CDB9AA] bg-white px-4 py-3 text-[#3D2A22] outline-none focus:ring-2 focus:ring-[#CDB9AA] resize-none"
                />
                <p className="mt-1 text-xs text-[#4A342A] opacity-70">
                  {wish.length}/220
                </p>
              </div>

              <div className="flex justify-center pt-2">
                <button
                  onClick={() => {
                    // optional: confetti kecil pas submit
                    confetti({
                      particleCount: 90,
                      spread: 80,
                      origin: { y: 0.7 },
                    });
                    setShowPopup(true);
                  }}
                  disabled={!oneWord.trim() && !wish.trim()}
                  className="rounded-2xl px-7 py-3 font-semibold bg-[#3D2A22] text-[#FAF3EE] disabled:opacity-40"
                >
                  Send 💌
                </button>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={() => setStage("opening")}
                  className="text-sm text-[#4A342A] opacity-80 hover:opacity-100 underline"
                >
                  back to start
                </button>
              </div>
            </div>

            {/* POPUP / MODAL */}
            {showPopup && (
              <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                <div
                  className="absolute inset-0 bg-black/40"
                  onClick={() => setShowPopup(false)}
                />
                <div className="relative w-full max-w-md rounded-[24px] bg-[#FAF3EE] p-6 shadow-lg border border-[#CDB9AA]">
                  <h3 className="text-xl font-bold text-[#3D2A22] text-center mb-2">
                    I hope it happens.
                  </h3>
                  <p className="text-sm text-[#4A342A] opacity-90 text-center">
                    I’m rooting for you. Always. 🌷
                  </p>

                  {(oneWord.trim() || wish.trim()) && (
                    <div className="mt-4 rounded-2xl border border-[#CDB9AA] bg-white p-4">
                      {oneWord.trim() && (
                        <p className="text-sm text-[#3D2A22]">
                          <span className="font-semibold">Your word:</span>{" "}
                          {oneWord}
                        </p>
                      )}
                      {wish.trim() && (
                        <p className="text-sm text-[#3D2A22] mt-2 whitespace-pre-line">
                          <span className="font-semibold">Your wish:</span>{" "}
                          {wish}
                        </p>
                      )}
                    </div>
                  )}

                  <div className="mt-5 flex justify-center gap-3">
                    <button
                      onClick={() => {
                        setShowPopup(false);
                        setNote(null);
                        setStage("note");
                      }}
                      className="rounded-2xl px-6 py-3 font-semibold border border-[#CDB9AA] text-[#3D2A22]"
                    >
                      Next ✨
                    </button>

                    <button
                      onClick={() => {
                        setShowPopup(false);
                        setStage("goodnight");
                      }}
                      className="btn-vibe rounded-2xl px-6 py-3 font-semibold bg-[#3D2A22] text-[#FAF3EE]"
                    >
                      End ✨
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ========== NOTE (PAGE 5) ========== */}
      {stage === "note" && (
        <section className="w-full h-full bg-[#F7EEE7] overflow-y-auto p-4 sm:p-6 flex items-center justify-center">
          <div className="max-w-xl w-full mx-auto bg-[#FAF3EE] rounded-[24px] p-6 sm:p-8 shadow-sm">
            <div className="flex justify-center mb-3">
              <span className="rounded-full border border-[#CDB9AA] px-4 py-1 text-sm text-[#3D2A22]">
                spin a note 🎲
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#3D2A22] mb-2 text-center">
              One random reminder for you
            </h2>

            <p className="text-sm sm:text-base text-[#4A342A] opacity-90 text-center mb-6">
              Click the button. Read it slowly.
            </p>

            <div className="flex justify-center mb-6">
              <button
                onClick={spinNote}
                className="rounded-2xl px-7 py-3 font-semibold bg-[#3D2A22] text-[#FAF3EE] hover:opacity-90"
              >
                Give me a note 🎲
              </button>
            </div>

            <div className="min-h-[120px] flex items-center justify-center">
              {note ? (
                <div className="w-full rounded-2xl border border-[#CDB9AA] bg-white p-5 text-center">
                  <p className="text-lg sm:text-xl font-semibold text-[#3D2A22] leading-relaxed">
                    {note}
                  </p>
                </div>
              ) : (
                <p className="text-sm text-[#4A342A] opacity-70 text-center">
                  (your note will appear here ✨)
                </p>
              )}
            </div>

            <div className="mt-6 flex justify-center gap-3">
              <button
                onClick={() => setStage("message")}
                className="rounded-2xl px-6 py-3 font-semibold border border-[#CDB9AA] text-[#3D2A22]"
              >
                Back
              </button>

              <button
                onClick={() => setStage("goodnight")}
                className="btn-vibe rounded-2xl px-6 py-3 font-semibold bg-[#3D2A22] text-[#FAF3EE]"
              >
                Next →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ========== GOODNIGHT (PAGE 6) ========== */}
      {stage === "goodnight" && (
        <section className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#0B0F1A]">
          {/* gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1A] via-[#101A2E] to-[#05060A]" />

          {/* simple stars */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, #ffffff 1px, transparent 1px), radial-gradient(circle at 70% 40%, #ffffff 1px, transparent 1px), radial-gradient(circle at 40% 80%, #ffffff 1px, transparent 1px), radial-gradient(circle at 85% 75%, #ffffff 1px, transparent 1px), radial-gradient(circle at 55% 15%, #ffffff 1px, transparent 1px)",
              backgroundSize: "900px 900px",
            }}
          />

          <div className="relative z-10 text-center px-6 max-w-xl">
            <p className="text-sm text-white/70 mb-3">
              okay… that’s really the end 🌙
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Sleep well ya.
            </h2>

            <p className="text-sm sm:text-base text-white/75 leading-relaxed mb-8">
              I hope today felt a little lighter.
              <br />
              Thank you for being here.
              <br />
              See you in the morning ✨
            </p>

            {/* 🐱 CAT (NO IMAGE) */}
            <div className="flex justify-center mb-8">
              <div
                className="relative"
                style={{
                  width: 120,
                  height: 90,
                  animation: "catFloat 3s ease-in-out infinite",
                }}
              >
                {/* zzz */}
                <div className="absolute -top-2 right-2 text-white/70 text-sm font-semibold">
                  <span style={{ animation: "zzz 2.2s ease-in-out infinite" }}>
                    z
                  </span>
                  <span
                    className="inline-block ml-1"
                    style={{
                      animation: "zzz 2.2s ease-in-out infinite",
                      animationDelay: "0.6s",
                    }}
                  >
                    z
                  </span>
                  <span
                    className="inline-block ml-1"
                    style={{
                      animation: "zzz 2.2s ease-in-out infinite",
                      animationDelay: "1.2s",
                    }}
                  >
                    z
                  </span>
                </div>

                {/* ears */}
                <div className="absolute left-7 top-4 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[22px] border-b-white/90" />
                <div className="absolute right-7 top-4 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[22px] border-b-white/90" />

                {/* head */}
                <div className="absolute left-1/2 top-7 -translate-x-1/2 w-[88px] h-[62px] rounded-[28px] bg-white/90" />

                {/* eyes */}
                <div
                  className="absolute left-[44px] top-[52px] w-[12px] h-[8px] bg-[#0B0F1A]/80 rounded-full"
                  style={{ animation: "blink 4s ease-in-out infinite" }}
                />
                <div
                  className="absolute left-[64px] top-[52px] w-[12px] h-[8px] bg-[#0B0F1A]/80 rounded-full"
                  style={{ animation: "blink 4s ease-in-out infinite" }}
                />

                {/* nose */}
                <div className="absolute left-1/2 top-[58px] -translate-x-1/2 w-[6px] h-[6px] bg-[#0B0F1A]/70 rotate-45 rounded-[2px]" />

                {/* cheeks */}
                <div className="absolute left-[30px] top-[58px] w-[10px] h-[10px] rounded-full bg-pink-200/50" />
                <div className="absolute right-[30px] top-[58px] w-[10px] h-[10px] rounded-full bg-pink-200/50" />
              </div>
            </div>

            <button
              onClick={() => {
                stopMusic();
                setStage("opening");
              }}
              className="rounded-2xl px-6 py-3 font-semibold bg-white text-[#0B0F1A] hover:opacity-90"
            >
              Close ✨
            </button>
          </div>
        </section>
      )}

      {/* Animations (global) */}
      <style jsx global>{`
        @keyframes catFloat {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes blink {
          0%,
          90%,
          100% {
            transform: scaleY(1);
          }
          95% {
            transform: scaleY(0.1);
          }
        }

        @keyframes zzz {
          0% {
            opacity: 0;
            transform: translateY(0px) translateX(0px) scale(0.9);
          }
          20% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-26px) translateX(10px) scale(1.1);
          }
        }
      `}</style>
      
      <style jsx global>{`
        .btn-vibe {
          position: relative;
          overflow: hidden;
          transform: translateZ(0);
          transition: transform 120ms ease, filter 120ms ease;
      }
        .btn-vibe:active {
          transform: scale(0.98);
          filter: brightness(0.98);
      }
        .btn-vibe::after {
          content: "";
          position: absolute;
          inset: -40px;
          background: radial-gradient(circle, rgba(255,255,255,0.35), transparent 55%);
          opacity: 0;
          transform: scale(0.6);
          transition: opacity 200ms ease, transform 200ms ease;
          pointer-events: none;
      }
        .btn-vibe:active::after {
          opacity: 1;
          transform: scale(1);
     }

 
     @keyframes fadeUp {
       from { opacity: 0; transform: translateY(10px); }
       to { opacity: 1; transform: translateY(0); }
     }
     .page-enter {
       animation: fadeUp 260ms ease both;
     }
   `}</style>

    </main>
  );
}