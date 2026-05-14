import { NextResponse } from "next/server";
import { saveBlogImage } from "@/lib/upload";
import { getAdminSession } from "@/lib/auth";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(req) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  let form;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid form data" },
      { status: 400 }
    );
  }

  const file = form.get("file");
  if (!file || typeof file === "string") {
    return NextResponse.json({ ok: false, error: "No file received" }, { status: 400 });
  }

  try {
    const url = await saveBlogImage(file);
    return NextResponse.json({ ok: true, url });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Upload failed" },
      { status: err?.statusCode || 400 }
    );
  }
}
