import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const videoUrl = searchParams.get("url");

  if (!videoUrl) {
    return NextResponse.json({ error: "Missing URL" }, { status: 400 });
  }

  // Fetch the video from the external source
  const response = await fetch(videoUrl);

  // Stream the file back to the browser
  const headers = new Headers(response.headers);
  headers.set("Content-Disposition", "attachment; filename=video.mp4");

  return new NextResponse(response.body, {
    headers,
  });
}