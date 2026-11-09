import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useApp } from '../context/AppContext';
import { DrawingCategory, DrawingTemplate, DrawingSubmission } from '../types';
import { DRAWING_CATEGORIES, READY_MADE_DRAWING_TEMPLATES, ACTIVE_DRAWING_CHALLENGES } from '../data/drawingsData';
import confetti from 'canvas-confetti';
import { 
  Palette, 
  Paintbrush, 
  PenTool, 
  Eraser, 
  RotateCcw, 
  RotateCw, 
  Trash2, 
  Download, 
  Save, 
  Sparkles, 
  Check, 
  Image as ImageIcon,
  Compass,
  Square,
  Circle as CircleIcon,
  Minus,
  Star,
  Type,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Brush,
  Award,
  Layers,
  ArrowLeft,
  ArrowRight,
  Flame,
  Search,
  Filter,
  CheckCircle2,
  ExternalLink,
  Edit3,
  RefreshCw,
  FolderHeart
} from 'lucide-react';

// At least 36 rich, distinct, child-friendly colors in 3 rows
const PALETTE_36 = [
  // Row 1: Reds, Oranges, Warm Yellows & Pinks (12)
  '#ef4444', '#b91c1c', '#f87171', '#f97316', '#ea580c', '#fb923c',
  '#f59e0b', '#d97706', '#facc15', '#fde047', '#ec4899', '#f43f5e',
  // Row 2: Purples, Blues & Cyans (12)
  '#c084fc', '#8b5cf6', '#7c3aed', '#6366f1', '#1d4ed8', '#2563eb',
  '#38bdf8', '#06b6d4', '#14b8a6', '#2dd4bf', '#0d9488', '#93c5fd',
  // Row 3: Greens, Earth Tones, Neutrals & Whites (12)
  '#84cc16', '#22c55e', '#15803d', '#65a30d', '#fed7aa', '#fef3c7',
  '#d4a373', '#78350f', '#92400e', '#475569', '#000000', '#ffffff'
];

type StudioMode = 'gallery' | 'colouring' | 'my-drawing' | 'saved-art';
type ActiveTool = 'bucket' | 'pencil' | 'brush' | 'eraser' | 'line' | 'rect' | 'circle' | 'star' | 'text';

export const DrawingChampionsView: React.FC = () => {
  const { 
    currentStudent, 
    savedDrawings, 
    saveDrawingSubmission,
    deleteDrawingSubmission 
  } = useApp();

  // Navigation mode: Ready-made Gallery, Colouring Studio, My Own Drawing, Saved Art Portfolio
  const [activeMode, setActiveMode] = useState<StudioMode>('gallery');

  // Category filter for ready-made gallery (6 core categories)
  const [activeCategory, setActiveCategory] = useState<DrawingCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Active template currently opened in Colouring Studio
  const [activeTemplate, setActiveTemplate] = useState<DrawingTemplate | null>(null);

  // Common tool settings (persistent across tool switches)
  const [currentTool, setCurrentTool] = useState<ActiveTool>('bucket');
  const [selectedColor, setSelectedColor] = useState<string>('#ef4444'); // Default RED
  const [brushSize, setBrushSize] = useState<number>(8);
  const [isShapeFilled, setIsShapeFilled] = useState<boolean>(true);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [artworkTitle, setArtworkTitle] = useState<string>('My Masterpiece');

  // History stack for Undo / Redo
  const [history, setHistory] = useState<ImageData[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  // Canvas refs
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const templateImgRef = useRef<HTMLImageElement | null>(null);

  // Dragging / Shape drawing state
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [startPos, setStartPos] = useState<{ x: number; y: number } | null>(null);
  const [snapshotBeforeShape, setSnapshotBeforeShape] = useState<ImageData | null>(null);

  // Text Tool Modal state
  const [showTextModal, setShowTextModal] = useState<boolean>(false);
  const [textInput, setTextInput] = useState<string>('');
  const [textPosition, setTextPosition] = useState<{ x: number; y: number } | null>(null);

  // Saved Art state
  const [savedArtTab, setSavedArtTab] = useState<'all' | 'coloured' | 'original'>('all');
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Filter drawings by current student UID
  const studentDrawings = savedDrawings.filter(d => 
    !currentStudent || d.studentId === currentStudent.id
  );

  // Helper to push canvas state into history stack
  const pushHistory = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    try {
      const snap = ctx.getImageData(0, 0, canvas.width, canvas.height);
      setHistory(prev => {
        const next = prev.slice(0, historyIndex + 1);
        next.push(snap);
        return next;
      });
      setHistoryIndex(prev => prev + 1);
    } catch (e) {
      // Ignored
    }
  }, [historyIndex]);

  // Undo action
  const handleUndo = () => {
    if (historyIndex > 0) {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;

      const targetIdx = historyIndex - 1;
      ctx.putImageData(history[targetIdx], 0, 0);
      setHistoryIndex(targetIdx);
    }
  };

  // Redo action
  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;

      const targetIdx = historyIndex + 1;
      ctx.putImageData(history[targetIdx], 0, 0);
      setHistoryIndex(targetIdx);
    }
  };

  // Get accurate coordinates mapped to internal canvas buffer (800x650)
  const getCanvasCoords = (e: React.PointerEvent<HTMLCanvasElement> | React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    let clientX = 0;
    let clientY = 0;
    if ('touches' in e && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else if ('changedTouches' in e && (e as any).changedTouches.length > 0) {
      clientX = (e as any).changedTouches[0].clientX;
      clientY = (e as any).changedTouches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    const x = Math.round((clientX - rect.left) * scaleX);
    const y = Math.round((clientY - rect.top) * scaleY);

    return {
      x: Math.max(0, Math.min(canvas.width - 1, x)),
      y: Math.max(0, Math.min(canvas.height - 1, y))
    };
  };

  // 1. ROCK-SOLID SCANLINE FLOOD FILL (COLOUR BUCKET)
  const executeFloodFill = (startX: number, startY: number, colorHex: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const imgData = ctx.getImageData(0, 0, width, height);
    const data = imgData.data;

    // Convert selected hex color to RGB
    const fillR = parseInt(colorHex.slice(1, 3), 16);
    const fillG = parseInt(colorHex.slice(3, 5), 16);
    const fillB = parseInt(colorHex.slice(5, 7), 16);

    // Helper: is this pixel an outline boundary?
    const isBoundaryPixel = (x: number, y: number) => {
      if (x < 0 || x >= width || y < 0 || y >= height) return true;
      const idx = (y * width + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const a = data[idx + 3];
      if (a < 80) return false;
      // Luminance check for black/dark outline
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;
      return lum < 85;
    };

    // If user tapped directly on an outline line, search nearby within 6px for enclosed area
    let targetX = startX;
    let targetY = startY;
    if (isBoundaryPixel(targetX, targetY)) {
      let found = false;
      for (let r = 1; r <= 6; r++) {
        const offsets = [
          [0, -r], [0, r], [-r, 0], [r, 0],
          [-r, -r], [r, -r], [-r, r], [r, r]
        ];
        for (const [dx, dy] of offsets) {
          const nx = startX + dx;
          const ny = startY + dy;
          if (!isBoundaryPixel(nx, ny)) {
            targetX = nx;
            targetY = ny;
            found = true;
            break;
          }
        }
        if (found) break;
      }
      if (!found) return; // Completely surrounded
    }

    const startIdx = (targetY * width + targetX) * 4;
    const startR = data[startIdx];
    const startG = data[startIdx + 1];
    const startB = data[startIdx + 2];

    // If already the exact same color, do nothing
    if (
      Math.abs(startR - fillR) < 8 &&
      Math.abs(startG - fillG) < 8 &&
      Math.abs(startB - fillB) < 8
    ) {
      return;
    }

    // Match check: is pixel part of the region we want to color?
    const matchesRegion = (x: number, y: number) => {
      if (x < 0 || x >= width || y < 0 || y >= height) return false;
      if (isBoundaryPixel(x, y)) return false;
      const idx = (y * width + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      // Color distance to starting color
      const diff = Math.abs(r - startR) + Math.abs(g - startG) + Math.abs(b - startB);
      return diff < 55;
    };

    // Scanline Flood Fill with visited buffer
    const visited = new Uint8Array(width * height);
    const stack: [number, number][] = [[targetX, targetY]];
    visited[targetY * width + targetX] = 1;

    let filledCount = 0;
    const maxPixels = width * height;

    while (stack.length > 0 && filledCount < maxPixels) {
      const [cx, cy] = stack.pop()!;

      // Scan left
      let lx = cx;
      while (lx > 0 && !visited[cy * width + (lx - 1)] && matchesRegion(lx - 1, cy)) {
        lx--;
        visited[cy * width + lx] = 1;
      }

      // Scan right
      let rx = cx;
      while (rx < width - 1 && !visited[cy * width + (rx + 1)] && matchesRegion(rx + 1, cy)) {
        rx++;
        visited[cy * width + rx] = 1;
      }

      // Fill current scanline from lx to rx
      for (let x = lx; x <= rx; x++) {
        const idx = (cy * width + x) * 4;
        visited[cy * width + x] = 1;
        data[idx] = fillR;
        data[idx + 1] = fillG;
        data[idx + 2] = fillB;
        data[idx + 3] = 255;
        filledCount++;

        // Check scanline above
        if (cy > 0) {
          const ny = cy - 1;
          if (!visited[ny * width + x] && matchesRegion(x, ny)) {
            visited[ny * width + x] = 1;
            stack.push([x, ny]);
          }
        }

        // Check scanline below
        if (cy < height - 1) {
          const ny = cy + 1;
          if (!visited[ny * width + x] && matchesRegion(x, ny)) {
            visited[ny * width + x] = 1;
            stack.push([x, ny]);
          }
        }
      }
    }

    // Write filled image data back to canvas
    ctx.putImageData(imgData, 0, 0);

    // Re-overlay crisp template outline on top (which has fill="none") to ensure outlines remain razor sharp
    if (templateImgRef.current && activeMode === 'colouring') {
      ctx.drawImage(templateImgRef.current, 0, 0, width, height);
    }

    pushHistory();
  };

  // Load a ready-made outline template onto the canvas
  const handleOpenTemplateForColouring = (template: DrawingTemplate) => {
    setActiveTemplate(template);
    setActiveMode('colouring');
    setArtworkTitle(template.title);
    setCurrentTool('bucket'); // Default to bucket for colouring
    setZoomLevel(1);

    setTimeout(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;

      // Fill canvas background with clean white
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Load SVG outline image
      const img = new Image();
      const svgBlob = new Blob([template.svgOutline], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);

      img.onload = () => {
        templateImgRef.current = img;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        URL.revokeObjectURL(url);

        const initialSnap = ctx.getImageData(0, 0, canvas.width, canvas.height);
        setHistory([initialSnap]);
        setHistoryIndex(0);
      };
      img.src = url;
    }, 60);
  };

  // Open "My Own Drawing" (blank canvas)
  const handleOpenMyOwnDrawing = (customTitle?: string) => {
    setActiveTemplate(null);
    templateImgRef.current = null;
    setActiveMode('my-drawing');
    setArtworkTitle(customTitle || `My Drawing by ${currentStudent?.name || 'Champion'}`);
    setCurrentTool('brush');
    setZoomLevel(1);

    setTimeout(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;

      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const initialSnap = ctx.getImageData(0, 0, canvas.width, canvas.height);
      setHistory([initialSnap]);
      setHistoryIndex(0);
    }, 60);
  };

  // Re-open saved artwork from portfolio
  const handleResumeSavedDrawing = (drawing: DrawingSubmission) => {
    if (drawing.type === 'coloured' && drawing.templateId) {
      const matched = READY_MADE_DRAWING_TEMPLATES.find(t => t.id === drawing.templateId);
      if (matched) {
        setActiveTemplate(matched);
      }
      setActiveMode('colouring');
    } else {
      setActiveTemplate(null);
      templateImgRef.current = null;
      setActiveMode('my-drawing');
    }

    setArtworkTitle(drawing.title);

    setTimeout(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;

      const img = new Image();
      img.onload = () => {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const snap = ctx.getImageData(0, 0, canvas.width, canvas.height);
        setHistory([snap]);
        setHistoryIndex(0);
      };
      img.src = drawing.dataUrl;
    }, 60);
  };

  // Cycle Previous & Next Drawing within current category
  const navigateTemplate = (direction: 'prev' | 'next') => {
    if (!activeTemplate) return;
    const sameCategoryTemplates = READY_MADE_DRAWING_TEMPLATES.filter(t => t.category === activeTemplate.category);
    const currentIndex = sameCategoryTemplates.findIndex(t => t.id === activeTemplate.id);
    if (currentIndex === -1) return;

    let targetIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (targetIndex >= sameCategoryTemplates.length) targetIndex = 0;
    if (targetIndex < 0) targetIndex = sameCategoryTemplates.length - 1;

    handleOpenTemplateForColouring(sameCategoryTemplates[targetIndex]);
  };

  // Clear / Reset buttons
  const handleClearDrawing = () => {
    // Clear back to template outline (or blank if my-drawing)
    if (activeTemplate) {
      handleOpenTemplateForColouring(activeTemplate);
    } else {
      handleOpenMyOwnDrawing(artworkTitle);
    }
  };

  // Pointer Down (Mouse, Touch, Stylus)
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const coords = getCanvasCoords(e);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    if (currentTool === 'bucket') {
      executeFloodFill(coords.x, coords.y, selectedColor);
      return;
    }

    if (currentTool === 'text') {
      setTextPosition(coords);
      setShowTextModal(true);
      return;
    }

    setIsDrawing(true);
    setStartPos(coords);

    // Save snapshot before shape for live dragging preview
    if (['line', 'rect', 'circle', 'star'].includes(currentTool)) {
      setSnapshotBeforeShape(ctx.getImageData(0, 0, canvas.width, canvas.height));
      return;
    }

    ctx.beginPath();
    ctx.moveTo(coords.x, coords.y);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = currentTool === 'pencil' ? 2.5 : brushSize;
    ctx.strokeStyle = currentTool === 'eraser' ? '#ffffff' : selectedColor;
  };

  // Pointer Move
  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    e.preventDefault();
    const coords = getCanvasCoords(e);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    // Handle shape preview dragging
    if (['line', 'rect', 'circle', 'star'].includes(currentTool) && startPos && snapshotBeforeShape) {
      ctx.putImageData(snapshotBeforeShape, 0, 0);
      ctx.lineWidth = brushSize;
      ctx.strokeStyle = selectedColor;
      ctx.fillStyle = selectedColor;

      if (currentTool === 'line') {
        ctx.beginPath();
        ctx.moveTo(startPos.x, startPos.y);
        ctx.lineTo(coords.x, coords.y);
        ctx.stroke();
      } else if (currentTool === 'rect') {
        const x = Math.min(startPos.x, coords.x);
        const y = Math.min(startPos.y, coords.y);
        const w = Math.abs(coords.x - startPos.x);
        const h = Math.abs(coords.y - startPos.y);
        if (isShapeFilled) ctx.fillRect(x, y, w, h);
        ctx.strokeRect(x, y, w, h);
      } else if (currentTool === 'circle') {
        const r = Math.hypot(coords.x - startPos.x, coords.y - startPos.y);
        ctx.beginPath();
        ctx.arc(startPos.x, startPos.y, r, 0, Math.PI * 2);
        if (isShapeFilled) ctx.fill();
        ctx.stroke();
      } else if (currentTool === 'star') {
        const r = Math.hypot(coords.x - startPos.x, coords.y - startPos.y);
        drawStar(ctx, startPos.x, startPos.y, 5, r, r * 0.45);
      }
      return;
    }

    // Freehand drawing (pencil, brush, eraser)
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();
  };

  // Pointer Up
  const handlePointerUp = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    setStartPos(null);
    setSnapshotBeforeShape(null);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    // In colouring mode, re-overlay outline so lines remain crisp
    if (templateImgRef.current && activeMode === 'colouring') {
      ctx.drawImage(templateImgRef.current, 0, 0, canvas.width, canvas.height);
    }

    pushHistory();
  };

  // Helper to draw 5-point star
  const drawStar = (ctx: CanvasRenderingContext2D, cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number) => {
    let rot = (Math.PI / 2) * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;
      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    if (isShapeFilled) ctx.fill();
    ctx.stroke();
  };

  // Commit text tool onto canvas
  const handleAddText = () => {
    if (!textPosition || !textInput.trim()) {
      setShowTextModal(false);
      return;
    }
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    ctx.font = `bold ${Math.max(brushSize * 3, 24)}px 'Nunito', sans-serif`;
    ctx.fillStyle = selectedColor;
    ctx.fillText(textInput.trim(), textPosition.x, textPosition.y);

    if (templateImgRef.current && activeMode === 'colouring') {
      ctx.drawImage(templateImgRef.current, 0, 0, canvas.width, canvas.height);
    }

    pushHistory();
    setTextInput('');
    setTextPosition(null);
    setShowTextModal(false);
  };

  // Download high-resolution PNG
  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataUrl;
    const clean = (artworkTitle || 'drawing').toLowerCase().replace(/[^\w]/g, '_');
    a.download = `vacation_champions_${clean}.png`;
    a.click();
  };

  // Save Artwork to Student Account
  const handleSaveArtwork = (celebrate: boolean = false) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');

    const isColoured = activeMode === 'colouring' && !!activeTemplate;
    const category = isColoured ? activeTemplate!.category : 'Cartoon and Fun';

    saveDrawingSubmission({
      title: artworkTitle.trim() || (isColoured ? activeTemplate!.title : 'My Masterpiece'),
      category,
      topic: category,
      type: isColoured ? 'coloured' : 'original',
      templateId: isColoured ? activeTemplate!.id : undefined,
      dataUrl,
      pointsEarned: celebrate ? 40 : 25
    });

    if (celebrate) {
      try {
        confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
      } catch (e) {}
    }

    setToastMessage(celebrate ? '🎉 Masterpiece submitted! +40 Champion Points awarded!' : 'Artwork saved to your private portfolio!');
    setTimeout(() => {
      setToastMessage(null);
      setActiveMode('saved-art');
      setSavedArtTab(isColoured ? 'coloured' : 'original');
    }, 1100);
  };

  // Filtered Templates for Gallery
  const filteredTemplates = READY_MADE_DRAWING_TEMPLATES.filter(t => {
    if (activeCategory !== 'All' && t.category !== activeCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16 px-2 sm:px-4">
      {/* Top Header Banner */}
      <div className="bg-linear-to-r from-amber-500 via-rose-500 to-indigo-600 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-3xl">🎨</span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-xs rounded-full text-xs font-black tracking-wider uppercase">
                Vacation Fun Mall • Drawing Studio
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight">
              DRAWING CHAMPIONS
            </h1>
            <p className="text-amber-100 text-sm sm:text-base font-medium mt-1 max-w-2xl">
              120+ ready-made colouring drawings across 6 categories, independent blank studio, smart bucket fill, and student portfolio.
            </p>
          </div>

          {/* Navigation Bar */}
          <div className="flex flex-wrap items-center gap-2 bg-black/25 p-2 rounded-2xl backdrop-blur-md border border-white/20 self-start md:self-auto">
            <button
              onClick={() => setActiveMode('gallery')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeMode === 'gallery' ? 'bg-white text-slate-900 shadow-md' : 'text-white/90 hover:bg-white/10'
              }`}
            >
              <span>🖼️</span>
              <span>Colouring World ({READY_MADE_DRAWING_TEMPLATES.length})</span>
            </button>
            <button
              onClick={() => handleOpenMyOwnDrawing()}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeMode === 'my-drawing' ? 'bg-white text-slate-900 shadow-md' : 'text-white/90 hover:bg-white/10'
              }`}
            >
              <span>🖌️</span>
              <span>My Own Drawing</span>
            </button>
            <button
              onClick={() => setActiveMode('saved-art')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeMode === 'saved-art' ? 'bg-white text-slate-900 shadow-md' : 'text-white/90 hover:bg-white/10'
              }`}
            >
              <span>⭐</span>
              <span>My Portfolio ({studentDrawings.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="bg-emerald-600 text-white px-5 py-3 rounded-2xl font-bold flex items-center gap-3 shadow-md animate-bounce">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ============================================================== */}
      {/* SECTION 1: READY-MADE DRAWINGS GALLERY (6 CATEGORIES, 120 DRAWINGS) */}
      {/* ============================================================== */}
      {activeMode === 'gallery' && (
        <div className="space-y-6">
          {/* 6 Categories Selection Bar */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  6 Ready-Made Colouring Categories (20 drawings each):
                </p>
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                  <button
                    onClick={() => setActiveCategory('All')}
                    className={`px-3.5 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeCategory === 'All'
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <span>✨</span>
                    <span>All (120)</span>
                  </button>

                  {DRAWING_CATEGORIES.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                        activeCategory === cat.id
                          ? 'bg-rose-500 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-rose-50 hover:text-rose-700'
                      }`}
                    >
                      <span>{cat.icon}</span>
                      <span>{cat.name} ({cat.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Search Box */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search 120 drawings..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-amber-500 outline-hidden"
                />
              </div>
            </div>
          </div>

          {/* 120 Drawings Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredTemplates.map(template => (
              <div
                key={template.id}
                onClick={() => handleOpenTemplateForColouring(template)}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-amber-400 transition-all cursor-pointer flex flex-col group"
              >
                {/* SVG Outline Thumbnail Box */}
                <div className="h-44 bg-slate-50 p-3 border-b border-slate-100 flex items-center justify-center relative group-hover:bg-amber-50/40 transition-colors">
                  <div
                    className="w-full h-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full"
                    dangerouslySetInnerHTML={{ __html: template.svgOutline }}
                  />
                  <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-amber-600 text-white px-3 py-1.5 rounded-xl text-[11px] font-bold shadow-md flex items-center gap-1">
                      <span>🎨</span> Color
                    </span>
                  </div>
                </div>

                <div className="p-3 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md truncate max-w-full block mb-1">
                      {template.category}
                    </span>
                    <h3 className="font-extrabold text-slate-900 text-xs truncate group-hover:text-amber-600 transition-colors">
                      {template.title}
                    </h3>
                  </div>

                  <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-500">
                    <span>{template.classTier}</span>
                    <span className="text-amber-600">+35 pts</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
              <div className="text-5xl mb-2">🔍</div>
              <h3 className="font-bold text-slate-800">No drawings found</h3>
              <p className="text-xs text-slate-500 mt-1">Try resetting your search query or category filter.</p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="mt-3 px-4 py-2 bg-amber-600 text-white text-xs font-bold rounded-xl cursor-pointer"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      )}

      {/* ============================================================== */}
      {/* SECTION 2 & 3: COLOURING STUDIO & MY OWN DRAWING STUDIO */}
      {/* ============================================================== */}
      {(activeMode === 'colouring' || activeMode === 'my-drawing') && (
        <div className="space-y-4">
          {/* Studio Top Control Bar */}
          <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => setActiveMode('gallery')}
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer shrink-0 flex items-center gap-1.5 text-xs font-bold"
                title="Back to Gallery"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back to Gallery</span>
              </button>

              <div className="flex-1">
                <input
                  type="text"
                  value={artworkTitle}
                  onChange={(e) => setArtworkTitle(e.target.value)}
                  className="text-base sm:text-lg font-extrabold text-slate-900 border-b border-transparent hover:border-slate-300 focus:border-amber-500 outline-hidden px-1 py-0.5 rounded-md w-full"
                  placeholder="Artwork Title..."
                />
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mt-0.5">
                  <span className="text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                    {activeMode === 'colouring' ? `Template: ${activeTemplate?.title}` : 'My Own Drawing Studio'}
                  </span>
                  {activeTemplate && (
                    <span className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                      {activeTemplate.category}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation & Action Buttons */}
            <div className="flex items-center gap-2 self-end md:self-auto flex-wrap">
              {activeMode === 'colouring' && (
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                  <button
                    onClick={() => navigateTemplate('prev')}
                    className="p-1.5 hover:bg-white text-slate-700 rounded-lg cursor-pointer transition-colors"
                    title="Previous Drawing in Category"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <span className="text-[11px] font-bold px-1 text-slate-600">Drawing</span>
                  <button
                    onClick={() => navigateTemplate('next')}
                    className="p-1.5 hover:bg-white text-slate-700 rounded-lg cursor-pointer transition-colors"
                    title="Next Drawing in Category"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              <button
                onClick={handleDownload}
                className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer transition-colors"
                title="Download as PNG"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download</span>
              </button>

              <button
                onClick={() => handleSaveArtwork(false)}
                className="px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer transition-colors"
                title="Save draft to My Portfolio"
              >
                <Save className="w-4 h-4" />
                <span>Save Artwork</span>
              </button>

              <button
                onClick={() => handleSaveArtwork(true)}
                className="px-4 py-2 bg-linear-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white text-xs font-extrabold rounded-xl flex items-center gap-1.5 cursor-pointer shadow-md transition-all scale-102"
              >
                <Sparkles className="w-4 h-4" />
                <span>Submit 🏆</span>
              </button>
            </div>
          </div>

          {/* Main Drawing Workspace: Tools Sidebar + Canvas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Tools & Palette Sidebar */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-xs space-y-5">
              {/* Tool Selection */}
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Select Tool:
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {/* Colour Bucket (Flood Fill) */}
                  <button
                    onClick={() => setCurrentTool('bucket')}
                    className={`p-2.5 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                      currentTool === 'bucket'
                        ? 'bg-rose-500 text-white shadow-md scale-102 font-bold ring-2 ring-rose-300'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
                    }`}
                    title="Colour Bucket (Tap enclosed area to fill)"
                  >
                    <Palette className="w-5 h-5" />
                    <span className="text-[10px]">Bucket</span>
                  </button>

                  {/* Pencil */}
                  <button
                    onClick={() => setCurrentTool('pencil')}
                    className={`p-2.5 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                      currentTool === 'pencil'
                        ? 'bg-amber-600 text-white shadow-md scale-102 font-bold ring-2 ring-amber-300'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
                    }`}
                    title="Fine Pencil (2.5px)"
                  >
                    <PenTool className="w-5 h-5" />
                    <span className="text-[10px]">Pencil</span>
                  </button>

                  {/* Brush */}
                  <button
                    onClick={() => setCurrentTool('brush')}
                    className={`p-2.5 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                      currentTool === 'brush'
                        ? 'bg-amber-600 text-white shadow-md scale-102 font-bold ring-2 ring-amber-300'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
                    }`}
                    title="Smooth Brush"
                  >
                    <Paintbrush className="w-5 h-5" />
                    <span className="text-[10px]">Brush</span>
                  </button>

                  {/* Eraser */}
                  <button
                    onClick={() => setCurrentTool('eraser')}
                    className={`p-2.5 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                      currentTool === 'eraser'
                        ? 'bg-amber-600 text-white shadow-md scale-102 font-bold ring-2 ring-amber-300'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
                    }`}
                    title="Eraser"
                  >
                    <Eraser className="w-5 h-5" />
                    <span className="text-[10px]">Eraser</span>
                  </button>

                  {/* Additional Shape Tools for My Own Drawing */}
                  {activeMode === 'my-drawing' && (
                    <>
                      <button
                        onClick={() => setCurrentTool('line')}
                        className={`p-2.5 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                          currentTool === 'line' ? 'bg-amber-600 text-white shadow-md' : 'bg-slate-50 text-slate-700'
                        }`}
                      >
                        <Minus className="w-5 h-5" />
                        <span className="text-[10px]">Line</span>
                      </button>
                      <button
                        onClick={() => setCurrentTool('rect')}
                        className={`p-2.5 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                          currentTool === 'rect' ? 'bg-amber-600 text-white shadow-md' : 'bg-slate-50 text-slate-700'
                        }`}
                      >
                        <Square className="w-5 h-5" />
                        <span className="text-[10px]">Box</span>
                      </button>
                      <button
                        onClick={() => setCurrentTool('circle')}
                        className={`p-2.5 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                          currentTool === 'circle' ? 'bg-amber-600 text-white shadow-md' : 'bg-slate-50 text-slate-700'
                        }`}
                      >
                        <CircleIcon className="w-5 h-5" />
                        <span className="text-[10px]">Circle</span>
                      </button>
                      <button
                        onClick={() => setCurrentTool('star')}
                        className={`p-2.5 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                          currentTool === 'star' ? 'bg-amber-600 text-white shadow-md' : 'bg-slate-50 text-slate-700'
                        }`}
                      >
                        <Star className="w-5 h-5" />
                        <span className="text-[10px]">Star</span>
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Brush / Eraser Size Slider */}
              {['brush', 'eraser', 'line', 'rect', 'circle', 'star'].includes(currentTool) && (
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-600 mb-1">
                    <span>Thickness:</span>
                    <span className="text-amber-600 font-mono">{brushSize}px</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="36"
                    value={brushSize}
                    onChange={(e) => setBrushSize(parseInt(e.target.value))}
                    className="w-full accent-amber-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>Fine (3px)</span>
                    <span>Medium (18px)</span>
                    <span>Bold (36px)</span>
                  </div>
                </div>
              )}

              {/* 36 Vibrant Colours Palette + Custom Color Picker */}
              <div>
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  <span>36 Colours Palette:</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-slate-500 font-bold">Custom:</span>
                    <input
                      type="color"
                      value={selectedColor}
                      onChange={(e) => setSelectedColor(e.target.value)}
                      className="w-6 h-6 rounded-lg cursor-pointer border border-slate-300"
                      title="Choose Custom Color"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-6 gap-2">
                  {PALETTE_36.map(c => (
                    <button
                      key={c}
                      onClick={() => setSelectedColor(c)}
                      className={`w-8 h-8 rounded-xl transition-all cursor-pointer relative shadow-2xs ${
                        selectedColor === c ? 'scale-115 ring-2 ring-rose-500 ring-offset-2 z-10' : 'hover:scale-105'
                      } ${c === '#ffffff' ? 'border border-slate-300' : ''}`}
                      style={{ backgroundColor: c }}
                      title={c}
                    >
                      {selectedColor === c && (
                        <Check className={`w-4 h-4 mx-auto ${['#ffffff', '#facc15', '#fde047', '#fed7aa', '#fef3c7'].includes(c) ? 'text-slate-900' : 'text-white'}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reset / Clear Buttons */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={handleClearDrawing}
                  className="flex-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Clear Colours</span>
                </button>
                <button
                  onClick={() => {
                    if (activeTemplate) {
                      handleOpenTemplateForColouring(activeTemplate);
                    } else {
                      handleOpenMyOwnDrawing(artworkTitle);
                    }
                  }}
                  className="flex-1 py-2 px-3 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Reset All</span>
                </button>
              </div>
            </div>

            {/* Interactive Drawing Canvas */}
            <div className="lg:col-span-8 flex flex-col gap-3">
              {/* Canvas Controls Header (Undo, Redo, Zoom) */}
              <div className="bg-white rounded-2xl px-4 py-2 border border-slate-200 shadow-xs flex items-center justify-between gap-3 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleUndo}
                    disabled={historyIndex <= 0}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                    title="Undo"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleRedo}
                    disabled={historyIndex >= history.length - 1}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                    title="Redo"
                  >
                    <RotateCw className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-1.5 bg-slate-100 px-2 py-1 rounded-xl">
                  <button
                    onClick={() => setZoomLevel(prev => Math.max(0.75, prev - 0.25))}
                    className="p-1 rounded-lg hover:bg-white text-slate-600 cursor-pointer"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] font-mono px-1">{(zoomLevel * 100).toFixed(0)}%</span>
                  <button
                    onClick={() => setZoomLevel(prev => Math.min(2.0, prev + 0.25))}
                    className="p-1 rounded-lg hover:bg-white text-slate-600 cursor-pointer"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setZoomLevel(1)}
                    className="text-[10px] text-slate-500 hover:text-slate-900 underline ml-1 cursor-pointer"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* Canvas Board (Touch-action none to prevent mobile screen pull-to-refresh) */}
              <div className="bg-slate-200/90 rounded-3xl p-3 sm:p-5 border border-slate-300 flex items-center justify-center overflow-auto min-h-[520px]">
                <div 
                  className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-100 origin-center"
                  style={{ transform: `scale(${zoomLevel})` }}
                >
                  <canvas
                    ref={canvasRef}
                    width={800}
                    height={650}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerLeave={handlePointerUp}
                    style={{ touchAction: 'none' }}
                    className="block cursor-crosshair max-w-full bg-white select-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* SECTION 4: MY SAVED ART PORTFOLIO */}
      {/* ============================================================== */}
      {activeMode === 'saved-art' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 flex items-center gap-2">
                <span>⭐</span> My Drawing Portfolio
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Artworks created and saved by {currentStudent?.name || 'Student'}. Re-open to continue, download, or showcase!
              </p>
            </div>

            <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl text-xs font-bold">
              <button
                onClick={() => setSavedArtTab('all')}
                className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                  savedArtTab === 'all' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All ({studentDrawings.length})
              </button>
              <button
                onClick={() => setSavedArtTab('coloured')}
                className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                  savedArtTab === 'coloured' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Coloured ({studentDrawings.filter(d => d.type === 'coloured').length})
              </button>
              <button
                onClick={() => setSavedArtTab('original')}
                className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                  savedArtTab === 'original' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                My Own ({studentDrawings.filter(d => d.type === 'original' || !d.type).length})
              </button>
            </div>
          </div>

          {studentDrawings.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {studentDrawings
                .filter(d => savedArtTab === 'all' || (savedArtTab === 'coloured' ? d.type === 'coloured' : d.type === 'original' || !d.type))
                .map(art => (
                  <div
                    key={art.id}
                    className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="h-52 bg-slate-50 border-b border-slate-100 p-3 flex items-center justify-center relative group">
                      <img
                        src={art.dataUrl}
                        alt={art.title}
                        className="max-h-full max-w-full object-contain rounded-xl shadow-xs"
                      />
                      <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleResumeSavedDrawing(art)}
                          className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold flex items-center gap-1 shadow-md cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>Continue</span>
                        </button>
                      </div>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between text-xs font-bold mb-1">
                          <span className="text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md truncate max-w-[150px]">
                            {art.category || art.topic}
                          </span>
                          <span className="text-slate-400">
                            {new Date(art.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <h3 className="font-extrabold text-slate-900 text-sm truncate">
                          {art.title}
                        </h3>
                      </div>

                      <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <button
                          onClick={() => handleResumeSavedDrawing(art)}
                          className="text-xs font-bold text-amber-600 hover:text-amber-800 flex items-center gap-1 cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>Edit</span>
                        </button>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => {
                              const a = document.createElement('a');
                              a.href = art.dataUrl;
                              a.download = `${art.title.replace(/\s+/g, '_')}.png`;
                              a.click();
                            }}
                            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 cursor-pointer"
                            title="Download PNG"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => setItemToDelete(art.id)}
                            className="p-1.5 rounded-lg text-rose-500 hover:text-rose-700 hover:bg-rose-50 cursor-pointer"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
              <div className="text-5xl mb-2">🎨</div>
              <h3 className="font-bold text-slate-800">Your Portfolio is Empty</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                Explore our 120 ready-made colouring drawings or start a blank canvas to create your first masterpiece!
              </p>
              <button
                onClick={() => setActiveMode('gallery')}
                className="mt-4 px-5 py-2.5 bg-amber-600 text-white text-xs font-extrabold rounded-2xl cursor-pointer shadow-md"
              >
                Start Colouring Now 🎨
              </button>
            </div>
          )}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {itemToDelete && (
        <div className="fixed inset-0 bg-slate-900/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full text-center space-y-4 shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto text-xl font-bold">
              <Trash2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Delete Artwork?</h3>
            <p className="text-xs text-slate-500">
              Are you sure you want to remove this drawing from your portfolio?
            </p>
            <div className="flex items-center gap-3 justify-center pt-2">
              <button
                onClick={() => setItemToDelete(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  deleteDrawingSubmission(itemToDelete);
                  setItemToDelete(null);
                }}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl cursor-pointer"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Text Tool Modal */}
      {showTextModal && (
        <div className="fixed inset-0 bg-slate-900/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full space-y-4 shadow-2xl">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Type className="w-5 h-5 text-amber-600" />
              <span>Add Custom Text</span>
            </h3>
            <input
              type="text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="e.g. My Garden, Lion King, Happy Diwali..."
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-amber-500 outline-hidden"
              autoFocus
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleAddText();
              }}
            />
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => { setShowTextModal(false); setTextPosition(null); }}
                className="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleAddText}
                className="px-4 py-2 bg-amber-600 text-white text-xs font-bold rounded-xl cursor-pointer shadow-xs"
              >
                Place Text ✨
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
