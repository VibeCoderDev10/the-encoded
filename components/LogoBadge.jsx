export default function LogoBadge({ size = 54 }) {
  return (
    <span
      className="inline-block shrink-0 overflow-hidden rounded-full"
      style={{ width: size, height: size }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="The Encoded logo"
        width={size}
        height={size}
        className="block h-full w-full object-contain"
      />
    </span>
  );
}
