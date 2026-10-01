import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SmartImageProps = ImgHTMLAttributes<HTMLImageElement>;

export function SmartImage({
  className,
  loading = "lazy",
  decoding = "async",
  onLoad,
  onError,
  ...props
}: SmartImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (imageRef.current?.complete && imageRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  return (
    <img
      {...props}
      ref={imageRef}
      loading={loading}
      decoding={decoding}
      onLoad={(event) => {
        setLoaded(true);
        onLoad?.(event);
      }}
      onError={(event) => {
        setLoaded(true);
        onError?.(event);
      }}
      className={cn("image-loading", loaded && "image-loaded", className)}
    />
  );
}