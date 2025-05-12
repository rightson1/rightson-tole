import { webhook_secret } from "@/sanity/env";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse, NextRequest } from "next/server";
import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const page = request.nextUrl.searchParams.get("page");
  const tag = request.nextUrl.searchParams.get("tag");
  console.log(tag);
  if (tag) {
    revalidateTag(tag);
  } else if (page) {
    revalidatePath(page);
  }

  return NextResponse.json("ok");
}

export async function POST(req: NextRequest) {
  try {
    const hookSecret = webhook_secret;
    const signature = req.headers.get(SIGNATURE_HEADER_NAME);

    if (!signature) {
      return new Response("No signature", { status: 401 });
    }

    const body = await req.text();
    const isValid = await isValidSignature(body, signature, hookSecret);

    if (!isValid) {
      return new Response("Invalid Signature", { status: 401 });
    }

    const jsonBody = JSON.parse(body);
    if (!jsonBody?._type) {
      return new Response("Bad Request", { status: 400 });
    }
    console.log({
      tag: jsonBody._type,
      jsonBody,
      body,
    });
    revalidateTag(jsonBody._type);

    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      body: jsonBody,
    });
  } catch (error: any) {
    console.error(error);
    return new Response(error.message, { status: 500 });
  }
}
