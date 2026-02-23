import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const videoUrl = searchParams.get("url");

  if (!videoUrl) {
    return NextResponse.json({ error: "Missing URL" }, { status: 400 });
  }

  try {
    const response = await fetch(videoUrl);
    if (!response.ok || !response.body) {
      return NextResponse.json({ error: "Unable to fetch media" }, { status: 502 });
    }

    const headers = new Headers(response.headers);
    headers.set("Content-Type", response.headers.get("content-type") || "video/mp4");
    headers.set("Content-Disposition", 'attachment; filename="fastvidl-video.mp4"');
    headers.set("Cache-Control", "no-store");
    headers.delete("Content-Security-Policy");
    headers.delete("X-Frame-Options");

    return new NextResponse(response.body, {
      headers,
      status: 200,
    });
  } catch {
    return NextResponse.json({ error: "Download proxy failed" }, { status: 500 });
  }
}