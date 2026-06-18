export default function MountainScene3D() {
  return (
    <div
      className="mountain-wireframe-scene size-full opacity-75"
      aria-hidden="true"
    >
      <svg
        className="mountain-wireframe-float size-full"
        viewBox="0 0 1200 760"
        preserveAspectRatio="xMidYMid slice"
        role="img"
      >
        <defs>
          <linearGradient id="ridge-fade" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#d8e5ea" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#d8e5ea" stopOpacity="0.04" />
          </linearGradient>
        </defs>

        <g
          fill="none"
          stroke="url(#ridge-fade)"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        >
          <g className="mountain-wireframe-ridge mountain-wireframe-ridge-left">
            <path d="M365 565 L510 252 L660 565 Z" />
            <path d="M510 252 L455 565" />
            <path d="M510 252 L590 565" />
            <path d="M405 500 L455 565 L590 565 L630 500 L510 252 Z" />
            <path d="M425 455 L510 252 L615 455" />
          </g>

          <g className="mountain-wireframe-ridge mountain-wireframe-ridge-center">
            <path d="M500 602 L705 142 L915 602 Z" />
            <path d="M705 142 L615 602" />
            <path d="M705 142 L815 602" />
            <path d="M545 525 L615 602 L815 602 L875 525 L705 142 Z" />
            <path d="M585 462 L705 142 L845 462" />
            <path d="M632 394 L705 142 L790 394" />
          </g>

          <g className="mountain-wireframe-ridge mountain-wireframe-ridge-right">
            <path d="M785 582 L905 262 L1038 582 Z" />
            <path d="M905 262 L855 582" />
            <path d="M905 262 L982 582" />
            <path d="M820 520 L855 582 L982 582 L1012 520 L905 262 Z" />
            <path d="M842 475 L905 262 L998 475" />
          </g>
        </g>
      </svg>
    </div>
  );
}
