"use client";
import Paragraph from "./components/Paragraph";
import Word from "./components/Word";
import Character from "./components/Character";

const paragraph =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

export default function Home() {
  const words = paragraph.split(" ");
  return (
    <main style={{ background: "rgb(24,24,24)" }}>
      <h1 className="text-white text-center text-[2vw] pt-[2vw]">scroll down</h1>
      <div style={{ height: "100vh" }}></div>
      <Paragraph paragraph={paragraph} />
      <div style={{ height: "100vh" }}></div>
      <Word paragraph={paragraph} />
      <div style={{ height: "100vh" }}></div>
      <Character paragraph={paragraph} />
      <div style={{ height: "100vh" }}></div>
    </main>
  );
}
