import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get("url");

  if (!imageUrl) {
    return NextResponse.json({ error: "Missing URL" }, { status: 400 });
  }

  try {
    const response = await fetch(imageUrl, {
      headers: {
        // Some Instagram CDN URLs reject hotlink requests without browser-like headers.
        Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      },
    });

    if (!response.ok || !response.body) {
      return NextResponse.json(
        { error: "Unable to fetch thumbnail" },
        { status: 502 }
      );
    }

    const headers = new Headers();
    headers.set("Content-Type", response.headers.get("content-type") || "image/jpeg");
    headers.set("Cache-Control", "public, max-age=300");
    headers.delete("Content-Security-Policy");
    headers.delete("X-Frame-Options");

    return new NextResponse(response.body, {
      headers,
      status: 200,
    });
  } catch {
    return NextResponse.json({ error: "Thumbnail proxy failed" }, { status: 500 });
  }
}
