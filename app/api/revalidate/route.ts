import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse, NextRequest } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const page = request.nextUrl.searchParams.get("page");
  const tag = request.nextUrl.searchParams.get("tag");
  if (tag) {
    revalidateTag(tag);
  } else if (page) {
    revalidatePath(page);
  }

  return NextResponse.json("ok");
}
