import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 7,
          background: "#0E7490",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 1c-2.2 0-4 .8-5 2.2-1 1.4-1.2 3.2-.7 5.3.4 1.8 1 3.6 1.5 5.3.5 1.7 1 3.3 1.4 4.7.3 1 .7 1.5 1.3 1.5.5 0 .9-.4 1.1-1.3.2-1 .4-2.2.7-3.5.2-1 .6-1.7 1.2-1.7s1 .7 1.2 1.7c.3 1.3.5 2.5.7 3.5.2.9.6 1.3 1.1 1.3.6 0 1-.5 1.3-1.5.4-1.4.9-3 1.4-4.7.5-1.7 1.1-3.5 1.5-5.3.5-2.1.3-3.9-.7-5.3C15 1.8 13.2 1 11 1z"
            fill="white"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
