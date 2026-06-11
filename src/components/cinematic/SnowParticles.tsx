const particles = [
  [7, 12, 2, 13],
  [14, 68, 1, 18],
  [21, 34, 2, 16],
  [29, 82, 1, 20],
  [36, 17, 1, 14],
  [42, 58, 2, 21],
  [51, 26, 1, 17],
  [58, 76, 2, 15],
  [64, 43, 1, 19],
  [71, 9, 2, 22],
  [78, 61, 1, 16],
  [86, 31, 2, 18],
  [92, 88, 1, 14],
  [96, 52, 1, 20],
] as const;

export function SnowParticles({ density = 1 }: { density?: 1 | 2 }) {
  const repeated = density === 2 ? [...particles, ...particles] : particles;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {repeated.map(([left, top, size, duration], index) => (
        <span
          key={`${left}-${top}-${index}`}
          className="snow-particle absolute rounded-full bg-white"
          style={{
            left: `${density === 2 && index >= particles.length ? (left + 4) % 100 : left}%`,
            top: `${density === 2 && index >= particles.length ? (top + 19) % 100 : top}%`,
            width: size,
            height: size,
            opacity: 0.12 + (index % 3) * 0.08,
            animationDuration: `${duration}s`,
            animationDelay: `${-index * 1.7}s`,
          }}
        />
      ))}
    </div>
  );
}
