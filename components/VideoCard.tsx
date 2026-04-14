"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function VideoCard({
  title,
  caption,
  youtubeId,
  index = 0,
}: {
  title: string;
  caption: string;
  youtubeId: string;
  index?: number;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group overflow-hidden rounded-md bg-dark-surface"
    >
      <div className="relative aspect-video w-full">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            title={title}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${title}`}
            className="relative block h-full w-full"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-opacity group-hover:opacity-80"
              style={{
                backgroundImage: `url(https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg)`,
              }}
            />
            <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-dark-primary shadow-xl transition-transform group-hover:scale-110">
                <Play size={24} fill="currentColor" />
              </div>
            </div>
          </button>
        )}
      </div>
      <div className="p-6">
        <p className="font-mono text-xs uppercase tracking-wider text-muted">
          {caption}
        </p>
        <h3 className="mt-2 font-display text-lg font-bold text-white">{title}</h3>
      </div>
    </motion.div>
  );
}
