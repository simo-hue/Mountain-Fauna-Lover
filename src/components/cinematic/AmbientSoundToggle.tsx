"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useTranslations } from "next-intl";

export function AmbientSoundToggle() {
  const t = useTranslations("cinematic.sound");
  const audioRef = useRef<HTMLAudioElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("mfl-sound") !== "on") return;

    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.22;
    audio
      .play()
      .then(() => setEnabled(true))
      .catch(() => setEnabled(false));
  }, []);

  const toggle = async () => {
    if (unavailable) return;
    const audio = audioRef.current;
    if (!audio) return;

    if (enabled) {
      audio.pause();
      setEnabled(false);
      window.localStorage.setItem("mfl-sound", "off");
      return;
    }

    try {
      audio.volume = 0.22;
      await audio.play();
      setEnabled(true);
      window.localStorage.setItem("mfl-sound", "on");
    } catch {
      setUnavailable(true);
      setEnabled(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/alpine-ambience.mp3"
        loop
        preload="none"
        onError={() => setUnavailable(true)}
      />
      <button
        type="button"
        onClick={toggle}
        disabled={unavailable}
        className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-2 text-[0.58rem] tracking-[0.17em] text-white/55 uppercase backdrop-blur-md transition hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
        aria-label={
          unavailable ? t("unavailable") : enabled ? t("off") : t("on")
        }
        title={unavailable ? t("unavailable") : undefined}
      >
        {enabled ? (
          <Volume2 className="size-3.5" />
        ) : (
          <VolumeX className="size-3.5" />
        )}
        <span className="hidden sm:inline">
          {unavailable ? t("missing") : t("label")}
        </span>
      </button>
    </>
  );
}
