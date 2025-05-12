import { defineType, defineField } from "sanity";

export const resumeType = defineType({
  name: "resume",
  title: "Resume",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "file", title: "Resume File", type: "file" }),
    // Optional: Add a date field for versioning
    defineField({ name: "date", title: "Date", type: "date" }),
    // Optional: Add a preview image
    // defineField({ name: "preview", title: "Preview Image", type: "image" }),
  ],
});
