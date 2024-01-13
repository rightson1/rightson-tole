import { NextResponse, NextRequest } from "next/server";
import { client } from "@/utils/client";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug");
  if (!slug) {
    const items = await client.getEntries({ content_type: "projects" });

    const data = items.items;
    if (!data)
      return NextResponse.json(null, {
        status: 404,
      });
    const fields = data.map((item: any) => item.fields);

    return NextResponse.json(fields);
  } else {
    console.log(slug);
    const response = await client.getEntries({
      content_type: "projects",
      "fields.slug": slug,
    });
    const data = response.items[0].fields;
    console.log(response);
    return NextResponse.json(data);
  }
}
