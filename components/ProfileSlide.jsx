import { INSTAGRAM_PROFILE_URL } from '../lib/data';

export default function ProfileSlide() {
  return (
    <div className="te-reel" data-slide="profile">
      <div className="te-reel-frame">
        <a
          href={INSTAGRAM_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="te-profile"
          aria-label="For more videos, visit The Encoded on Instagram"
        >
          <span className="te-profile-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="The Encoded logo" width={104} height={104} />
          </span>
          <span className="te-profile-eyebrow">The Encoded</span>
          <span className="te-profile-handle">@the_encoded_</span>
          <span className="te-serif te-profile-caption">For more videos</span>
          <span className="te-profile-button">Visit our Instagram &rarr;</span>
        </a>
      </div>
    </div>
  );
}
