"use client"
import React, { useRef, useEffect, useState } from "react";
import * as posenet from "@tensorflow-models/posenet";
import "@tensorflow/tfjs";

const PoseEstimationDemo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let stream: MediaStream | null = null;
    let animationFrameId: number;

    async function setup() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }
        const net = await posenet.load();
        async function detect() {
          if (videoRef.current && canvasRef.current) {
            const pose = await net.estimateSinglePose(videoRef.current, {
              flipHorizontal: false,
            });
            const ctx = canvasRef.current.getContext("2d");
            if (ctx) {
              ctx.clearRect(0, 0, 320, 240);
              ctx.drawImage(videoRef.current, 0, 0, 320, 240);
              pose.keypoints.forEach((keypoint) => {
                if (keypoint.score > 0.5) {
                  ctx.beginPath();
                  ctx.arc(keypoint.position.x, keypoint.position.y, 5, 0, 2 * Math.PI);
                  ctx.fillStyle = "red";
                  ctx.fill();
                }
              });
            }
          }
          animationFrameId = requestAnimationFrame(detect);
        }
        detect();
      } catch (err) {
        setError("Could not access webcam or load PoseNet.");
      }
      return () => {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        if (stream) stream.getTracks().forEach((track) => track.stop());
      };
    }
    setup();
    return () => {
      if (stream) stream.getTracks().forEach((track) => track.stop());
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="fixed bottom-4 right-4 z-50 bg-white/80 dark:bg-slate-900/80 rounded-xl shadow-lg p-3 border border-slate-200 dark:border-slate-700 flex flex-col items-center"
      style={{ width: 350 }}
    >
      <div className="font-semibold text-xs mb-2 text-slate-700 dark:text-slate-200">
        Pose Estimation Demo (PoseNet)
      </div>
      {error && <div className="text-red-500 text-xs mb-2">{error}</div>}
      <video ref={videoRef} width={320} height={240} style={{ display: "none" }} playsInline muted />
      <canvas ref={canvasRef} width={320} height={240} className="rounded-lg border border-slate-300 dark:border-slate-700" />
    </div>
  );
};

export default PoseEstimationDemo; 