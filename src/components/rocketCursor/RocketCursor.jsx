import { useEffect, useRef } from "react";

// A rocket-shaped cursor that ignites and leaves a fading white vapor trail
// while the pointer moves — matching the starry background of the site.
export const RocketCursor = () => {
  const layerRef = useRef(null);
  const posRef = useRef(null);
  const rocketRef = useRef(null);

  useEffect(() => {
    // Only run for a real (fine) pointer — skip touch devices.
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const layer = layerRef.current;
    const pos = posRef.current;
    const rocket = rocketRef.current;
    if (!layer || !pos || !rocket) return;

    document.body.classList.add("rocket-cursor-active");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let rocketX = mouseX;
    let rocketY = mouseY;
    let angle = 0;
    let started = false;
    let lastPuff = 0;
    let rafId;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!started) {
        started = true;
        // Snap to the pointer on the very first move so it doesn't glide in.
        rocketX = mouseX;
        rocketY = mouseY;
        pos.style.opacity = "1";
      }
    };

    const onLeave = () => {
      pos.style.opacity = "0";
    };
    const onEnter = () => {
      if (started) pos.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    const spawnPuff = (x, y) => {
      const puff = document.createElement("span");
      puff.className = "rocket-puff";
      const size = 9 + Math.random() * 11;
      puff.style.width = `${size}px`;
      puff.style.height = `${size}px`;
      puff.style.left = `${x + (Math.random() * 6 - 3)}px`;
      puff.style.top = `${y + (Math.random() * 6 - 3)}px`;
      layer.appendChild(puff);
      // Remove once its fade-out animation is done.
      puff.addEventListener("animationend", () => puff.remove());
      // Safety net in case animationend doesn't fire.
      setTimeout(() => puff.remove(), 900);
    };

    const tick = (t) => {
      const dx = mouseX - rocketX;
      const dy = mouseY - rocketY;

      // Smoothly chase the pointer.
      rocketX += dx * 0.25;
      rocketY += dy * 0.25;

      const speed = Math.hypot(dx, dy);
      const moving = speed > 1.4;

      if (moving) {
        // Rocket art points "up"; rotate its nose toward travel direction.
        angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
      }

      pos.style.transform = `translate(${rocketX}px, ${rocketY}px)`;
      rocket.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

      if (moving) {
        rocket.classList.add("igniting");
        if (!reduceMotion && t - lastPuff > 22 && speed > 2) {
          lastPuff = t;
          const ux = dx / speed;
          const uy = dy / speed;
          // Emit vapor from behind the rocket (opposite the travel direction).
          spawnPuff(rocketX - ux * 14, rocketY - uy * 14);
        }
      } else {
        rocket.classList.remove("igniting");
      }

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafId);
      document.body.classList.remove("rocket-cursor-active");
      if (layer) {
        layer.querySelectorAll(".rocket-puff").forEach((p) => p.remove());
      }
    };
  }, []);

  return (
    <div className="rocket-cursor-layer" ref={layerRef} aria-hidden="true">
      <div className="rocket-cursor-pos" ref={posRef} style={{ opacity: 0 }}>
        <div className="rocket-cursor" ref={rocketRef}>
          <svg
            width="26"
            height="40"
            viewBox="0 0 30 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* ignition flame */}
            <g className="rocket-flame">
              <path
                d="M15 29 C 10.5 35, 12 41, 15 45 C 18 41, 19.5 35, 15 29 Z"
                fill="#FF7A00"
              />
              <path
                d="M15 30 C 12.2 34.5, 13 39, 15 41.5 C 17 39, 17.8 34.5, 15 30 Z"
                fill="#FFD54A"
              />
            </g>
            {/* fins */}
            <path d="M9.5 23 L4 32 L9.5 29 Z" fill="#DB4437" />
            <path d="M20.5 23 L26 32 L20.5 29 Z" fill="#DB4437" />
            {/* body */}
            <path
              d="M15 2 C 21 8, 22 18, 21 28 L 9 28 C 8 18, 9 8, 15 2 Z"
              fill="#EDEFF3"
            />
            {/* nose cone */}
            <path
              d="M15 2 C 18 5, 19.6 9, 20 12.5 L 10 12.5 C 10.4 9, 12 5, 15 2 Z"
              fill="#DB4437"
            />
            {/* window */}
            <circle
              cx="15"
              cy="17"
              r="3.3"
              fill="#4285F4"
              stroke="#2b6fd6"
              strokeWidth="1.1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default RocketCursor;
