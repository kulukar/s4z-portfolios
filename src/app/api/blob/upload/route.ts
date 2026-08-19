import { requireAdmin } from "@/src/lib/auth/require-admin";
import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { error } from "console";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await requireAdmin();
  } catch {
    return NextResponse.json(
      {
        error: "Unauthorized.",
      },
      {
        status: 401,
      },
    );
  }
  try {
    const body = (await request.json()) as HandleUploadBody;

    const jsonResponse = await handleUpload({
      body,
      request,

      onBeforeGenerateToken: async (pathname) => {
        return {
          allowedContentTypes: ["image/jpeg", "image/png", "image/webp"],

          maximumSizeInBytes: 10 * 1024 * 1024,

          addRandomSuffix: true,

          tokenPayload: JSON.stringify({
            pathname,
          }),
        };
      },

      onUploadCompleted: async ({ blob }) => {
        console.log("Blob uploaded:", blob.url);
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    console.error("Blob upload error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to upload image.",
      },
      {
        status: 400,
      },
    );
  }
}
