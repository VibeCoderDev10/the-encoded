'use client';

import { useState } from 'react';

// Plays a reel on the site. If the browser cannot play the video file,
// it shows a looping silent preview of the same reel instead.
export default function ReelEmbed({ item, index }) {
  const [failed, setFailed] = useState(false);

  let body;
  if (failed) {
    body = (
      <div className="te-reel-video-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="te-reel-video" src={item.anim} alt={item.title} />
        <span className="te-reel-chip">Silent preview</span>
      </div>
    );
  } else {
    body = (
      <div className="te-reel-video-wrap">
        <video
          className="te-reel-video"
          src={item.video}
          poster={item.poster}
          controls
          playsInline
          preload="metadata"
          aria-label={item.title}
          onError={() => setFailed(true)}
          onPlay={(event) => {
            const current = event.currentTarget;
            document.querySelectorAll('video.te-reel-video').forEach((other) => {
              if (other !== current) other.pause();
            });
          }}
        />
      </div>
    );
  }

  return (
    <div className="te-reel" data-slide={index}>
      <div className="te-reel-frame">{body}</div>
    </div>
  );
}
