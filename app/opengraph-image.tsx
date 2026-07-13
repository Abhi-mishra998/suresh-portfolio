import { ImageResponse } from "next/og";

export const alt = "ByteHubble AI Academy — Become an AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          color: "#ededed",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            color: "#a3a3a3",
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          ByteHubble · AI Academy
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: -2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Become an AI Engineer.</span>
          <span style={{ color: "#737373" }}>Not merely an AI user.</span>
        </div>
        <div style={{ fontSize: 24, color: "#a3a3a3" }}>
          Founded by Suresh Avula
        </div>
      </div>
    ),
    { ...size },
  );
}
