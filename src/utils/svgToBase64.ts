export function svgToBase64(svgString: string) {
    if (typeof window === "undefined") {
      return "";
    }
    const cleanSvg = svgString.trim();
  
    const base64 = window.btoa(cleanSvg);
  
    return `data:image/svg+xml;base64,${base64}`;
  }
  