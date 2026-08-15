import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Sparkles, BookOpen, Play, Pause, RefreshCw } from 'lucide-react';

export function RemotionVideoTab() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= 12.0) {
            setIsPlaying(false);
            return 0;
          }
          return Math.round((prev + 0.1) * 10) / 10;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Determine current scene details based on time (0s - 12s)
  const getSceneData = () => {
    if (currentTime >= 0 && currentTime < 4.0) {
      return {
        scene: 'Scene 1 (0s - 4s)',
        text: 'Hey guys, This special thank you card perfectly expresses gratitude to your customers',
        sub: 'Góc trung cảnh (Medium Shot) - Cô gái mỉm cười giữ tấm thiệp và nói lời thoại chào khách hàng.',
        zoom: 'scale-100 translate-y-0',
        waveHeight: [6, 12, 18, 14, 8, 12, 16, 20, 10, 6, 12, 18],
        cardTransform: 'scale-90 translate-y-4 rotate-2'
      };
    }
    if (currentTime >= 4.0 && currentTime < 8.0) {
      return {
        scene: 'Scene 2 (4s - 8s)',
        text: 'It enhances the customer experience, boosts brand loyalty',
        sub: 'Góc cận cảnh (Medium Close-Up) - Cô gái đưa tấm thiệp sát ống kính hơn, tay kia chỉ vào họa tiết hoa hồng.',
        zoom: 'scale-110 -translate-y-2',
        waveHeight: [14, 18, 22, 24, 18, 12, 20, 24, 22, 16, 12, 8],
        cardTransform: 'scale-110 -translate-y-4 rotate-0 shadow-2xl'
      };
    }
    return {
      scene: 'Scene 3 (8s - 12s)',
      text: 'and is perfect for small businesses',
      sub: 'Góc trung cảnh (Medium Shot) - Cô gái ôm tấm thiệp trước ngực và vẫy tay cười chào tạm biệt.',
      zoom: 'scale-100 translate-y-0',
      waveHeight: [8, 14, 10, 8, 12, 16, 12, 10, 14, 18, 10, 6],
      cardTransform: 'scale-95 translate-y-2 -rotate-2'
    };
  };

  const currentScene = getSceneData();

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = Math.min(12.0, Math.max(0, Math.round((clickX / width) * 12 * 10) / 10));
    setCurrentTime(newTime);
  };

  const remotionCode = `import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate, Img } from 'remotion';
import React from 'react';

// Render 12s UGC Ad Video for Thank You Card
export const ThankYouCardAd = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  
  // Tổng frame = 12s * 30fps = 360 frames
  // Scene 1: 0 - 120 frames (0s - 4s)
  // Scene 2: 120 - 240 frames (4s - 8s)
  // Scene 3: 240 - 360 frames (8s - 12s)

  // 1. Tạo hiệu ứng zoom và pan camera thực tế bằng CSS transforms
  const cameraScale = interpolate(
    frame,
    [0, 120, 121, 240, 241, 360],
    [1.0, 1.05, 1.15, 1.2, 1.0, 1.02], // Scene 2 zoom sát hơn
    { extrapolateRight: 'clamp' }
  );

  const cameraTranslateY = interpolate(
    frame,
    [120, 240],
    [0, -15], // Scene 2 pan nhẹ lên trên
    { extrapolateRight: 'clamp' }
  );

  // 2. Chuyển động của tấm thiệp hoa hồng trên tay cô gái
  const cardSpring = spring({
    frame: frame % 120,
    fps,
    config: { damping: 15 }
  });
  
  const cardScale = interpolate(cardSpring, [0, 1], [0.9, 1.0]);

  return (
    <AbsoluteFill className="bg-zinc-950 overflow-hidden font-sans">
      {/* Khung hình camera mô phỏng */}
      <div 
        className="w-full h-full relative transition-transform duration-100 ease-out"
        style={{
          transform: \`scale(\${cameraScale}) translateY(\${cameraTranslateY}px)\`,
        }}
      >
        {/* Render Keyframe cô gái cầm card */}
        <Img 
          src="/artifacts/thankyou_card_ugc_keyframe.png" 
          className="w-full h-full object-cover"
        />

        {/* Lớp phủ nhịp đập camera cầm tay nhẹ nhàng (Organic Handheld movement) */}
        <div 
          className="absolute inset-0 bg-black/5 mix-blend-overlay pointer-events-none"
          style={{
            transform: \`translate(\${Math.sin(frame / 10) * 2}px, \${Math.cos(frame / 8) * 2}px)\`
          }}
        />
      </div>

      {/* Hiển thị phụ đề kịch bản dịch (Subtitles) ở 1/3 dưới khung hình */}
      <div className="absolute bottom-16 left-6 right-6 bg-black/70 backdrop-blur-md border border-white/10 p-4 rounded-2xl text-center space-y-1">
        {frame < 120 && (
          <p className="text-white text-sm font-semibold leading-relaxed">
            "Hey guys, This special thank you card perfectly expresses gratitude to your customers"
          </p>
        )}
        {frame >= 120 && frame < 240 && (
          <p className="text-purple-300 text-sm font-semibold leading-relaxed">
            "It enhances the customer experience, boosts brand loyalty"
          </p>
        )}
        {frame >= 240 && (
          <p className="text-emerald-300 text-sm font-semibold leading-relaxed">
            "and is perfect for small businesses"
          </p>
        )}
      </div>
    </AbsoluteFill>
  );
};`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* 1. Video Simulator Panel (lg:col-span-5) */}
      <div className="lg:col-span-5 flex flex-col items-center p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800/80 gap-6">
        
        {/* Phone frame wrapper (9:16 aspect ratio simulation) */}
        <div className="w-64 h-[440px] rounded-3xl bg-zinc-950 border-4 border-zinc-800 dark:border-zinc-700 shadow-2xl relative flex flex-col justify-between overflow-hidden p-0">
          
          {/* Top Speaker / Notch simulation */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-zinc-800/80 rounded-full flex items-center justify-center z-30">
            <div className="w-8 h-1 bg-zinc-900 rounded-full" />
          </div>

          {/* Main Video Viewport (Camera scale & pan simulation) */}
          <div className={cn("w-full h-full relative transition-all duration-700 ease-out overflow-hidden flex items-center justify-center", currentScene.zoom)}>
            {/* The generated AI Keyframe as video content background */}
            <img 
              src="/thankyou_card_ugc_keyframe.png" 
              alt="UGC Video Keyframe" 
              className="w-full h-full object-cover select-none pointer-events-none"
            />

            {/* Handheld organic shaking effect */}
            <div 
              className="absolute inset-0 bg-transparent pointer-events-none"
              style={{
                transform: isPlaying 
                  ? `translate(${Math.sin(currentTime * 8) * 1.5}px, ${Math.cos(currentTime * 6) * 1.5}px)` 
                  : 'none'
              }}
            />
          </div>

          {/* Subtitles Overlay */}
          <div className="absolute bottom-6 left-4 right-4 z-20 px-3 py-3.5 bg-black/75 dark:bg-zinc-950/85 backdrop-blur-md rounded-2xl border border-white/10 text-center space-y-1">
            <p className="text-[10px] font-bold text-purple-400 uppercase tracking-widest block">
              {currentScene.scene}
            </p>
            <p className="text-xs font-semibold leading-relaxed text-zinc-100">
              "{currentScene.text}"
            </p>
            <p className="text-[8px] text-zinc-400 italic font-sans leading-normal">
              {currentScene.sub}
            </p>
          </div>

        </div>

        {/* Video Player Controls */}
        <div className="w-80 space-y-3">
          
          {/* Progress bar */}
          <div 
            onClick={handleProgressBarClick}
            className="h-1.5 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full cursor-pointer overflow-hidden relative"
          >
            <div 
              className="h-full bg-purple-500 transition-all duration-100" 
              style={{ width: `${(currentTime / 12.0) * 100}%` }} 
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center text-xs">
            <span className="text-zinc-500 font-semibold font-mono">
              00:{Math.floor(currentTime).toString().padStart(2, '0')}.{Math.round((currentTime % 1) * 10)} / 00:12.0
            </span>
            <div className="flex gap-2">
              <Button 
                size="sm" 
                variant="outline"
                className="h-8 text-xs font-bold rounded-xl"
                onClick={() => { setCurrentTime(0); setIsPlaying(false); }}
              >
                <RefreshCw className="w-3.5 h-3.5 mr-1" />
                Reset
              </Button>
              <Button 
                size="sm" 
                className="h-8 text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white rounded-xl"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 mr-1" /> Pause
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 mr-1" /> Play UGC Simulation
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

      </div>

      {/* 2. Strategy & Code Panels (lg:col-span-7) */}
      <div className="lg:col-span-7 space-y-6">
        
        {/* Strategy explanation card */}
        <Card className="p-6 border-none bg-white dark:bg-zinc-900 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-500" />
            <h2 className="text-lg font-bold tracking-tight">Kịch bản Quảng cáo Viral & Kỹ thuật Remotion</h2>
          </div>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Kịch bản video ngắn (9:16) 12 giây tập trung quảng bá **Thank You Card** (thiệp cảm ơn đính kèm đơn hàng). Video sử dụng hình ảnh chân thực, giả lập máy quay cầm tay chuyển động nhẹ để giữ chân người xem.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800/60">
              <span className="font-bold text-zinc-700 dark:text-zinc-200 block mb-1">Cấu trúc 3 Phân Cảnh (Ad flow)</span>
              <ul className="space-y-1 text-zinc-500 list-disc list-inside">
                <li>0s - 4s: Giới thiệu thiệp cảm ơn tăng độ tin cậy.</li>
                <li>4s - 8s: Nâng cao trải nghiệm, giữ chân khách hàng.</li>
                <li>8s - 12s: Kêu gọi hành động cho các doanh nghiệp nhỏ.</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800/60">
              <span className="font-bold text-zinc-700 dark:text-zinc-200 block mb-1">Ứng dụng Code Remotion</span>
              <ul className="space-y-1 text-zinc-500 list-disc list-inside">
                <li>Ghép ảnh keyframe AI chuyển đổi theo frame.</li>
                <li>Tạo hiệu ứng rung máy organic bằng hàm toán học Sin/Cos.</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Code explorer panel */}
        <Card className="p-6 border-none bg-zinc-900 text-zinc-100 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-400" />
              <h2 className="text-sm font-bold tracking-tight text-white">Mã nguồn Remotion Component</h2>
            </div>
            <Badge variant="outline" className="text-[9px] border-white/10 text-zinc-400">ThankYouCardAd.tsx</Badge>
          </div>
          
          <pre className="text-[10px] leading-relaxed overflow-x-auto p-4 bg-black/40 rounded-xl max-h-80 border border-white/5 font-mono text-zinc-300">
            {remotionCode}
          </pre>
        </Card>

      </div>

    </div>
  );
}
