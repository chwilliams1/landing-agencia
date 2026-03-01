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
          position: "relative",
        }}
      >
        {/* Tooth */}
        <svg
          width="20"
          height="22"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 0C7 0 5.5.8 4.6 2c-.9 1.3-1 3-.6 5 .4 1.6.9 3.2 1.4 4.8.5 1.5.9 3 1.2 4.2.3.9.6 1.2 1 1.2s.7-.3.9-1.1c.2-.9.3-1.9.5-3.1.2-1 .5-1.5 1-1.5s.8.5 1 1.5c.2 1.2.4 2.2.5 3.1.2.8.5 1.1.9 1.1.4 0 .7-.3 1-1.2.3-1.2.7-2.7 1.2-4.2.5-1.6 1-3.2 1.4-4.8.4-2 .3-3.7-.6-5C13.5.8 12 0 9 0z"
            fill="white"
          />
        </svg>
        {/* Cursor arrow */}
        <svg
          width="11"
          height="14"
          viewBox="0 0 11 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", right: 1, top: 6 }}
        >
          <path
            d="M0 0l10 7.5-3.5 1-1.5 4.5-2-4.5L0 10V0z"
            fill="white"
          />
          <path
            d="M1.5 2l6.5 5-2.5.7-1.2 3.3-1.3-3.2L1.5 8.5V2z"
            fill="#0E7490"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
