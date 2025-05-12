import { defineType, defineField } from "sanity";

export const fileType = defineType({
  name: "fileAsset",
  title: "File Asset",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "file", title: "File", type: "file" }),
    // Optionally, add a category/type field:
    // defineField({ name: "category", title: "Category", type: "string" }),
  ],
});
