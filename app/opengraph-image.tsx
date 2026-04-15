import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Head Up Agency — F&B Digital Growth";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1A1A1A",
          padding: "64px 72px",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            color: "#E8FF00",
            letterSpacing: "0.18em",
            fontFamily: "monospace",
          }}
        >
          <span>{"// F&B DIGITAL GROWTH AGENCY"}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 148,
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              fontWeight: 800,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <span>Head Up&nbsp;</span>
            <span style={{ color: "#E8FF00" }}>Agency.</span>
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#F5F5F5",
              letterSpacing: "-0.01em",
              maxWidth: 900,
            }}
          >
            GrabFood &amp; Foodpanda marketing · POS system solutions
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#888888",
            fontSize: 22,
            fontFamily: "monospace",
            letterSpacing: "0.12em",
          }}
        >
          <span>headupagency.com</span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span
              style={{
                width: 12,
                height: 12,
                background: "#E8FF00",
                display: "block",
              }}
            />
            <span>SPECIALISING IN F&amp;B</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
