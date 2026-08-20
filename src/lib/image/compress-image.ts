type CompressImageOptions = {
  maxDimension?: number;
  quality?: number;
};

export async function compressImage(
  file: File,
  options: CompressImageOptions = {},
): Promise<File> {
  const { maxDimension = 2400, quality = 0.85 } = options;

  if (!file.type.startsWith("image/")) {
    throw new Error("File harus berupa gambar.");
  }

  const bitmap = await createImageBitmap(file);

  try {
    const originalWidth = bitmap.width;
    const originalHeight = bitmap.height;

    let width = originalWidth;
    let height = originalHeight;

    const largestDimension = Math.max(originalWidth, originalHeight);

    if (largestDimension > maxDimension) {
      const scale = maxDimension / largestDimension;

      width = Math.round(originalWidth * scale);
      height = Math.round(originalHeight * scale);
    }

    const canvas = document.createElement("canvas");

    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext("2d");

    if (!context) {
      throw new Error("Browser tidak mendukung image processing.");
    }

    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";

    context.drawImage(bitmap, 0, 0, width, height);

    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        (result) => {
          if (!result) {
            reject(new Error("Gagal melakukan kompresi gambar."));
            return;
          }

          resolve(result);
        },
        "image/webp",
        quality,
      );
    });

    const originalName = file.name.replace(/\.[^/.]+$/, "");

    return new File([blob], `${originalName}.webp`, {
      type: "image/webp",
      lastModified: Date.now(),
    });
  } finally {
    bitmap.close();
  }
}
