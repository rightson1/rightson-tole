import { defineField, defineType } from "sanity";
import { DocumentIcon } from "@sanity/icons";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    //slug
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },

      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "created_at",
      title: "Created At",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "main_image",
      title: "Main Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featured_image",
      title: "Featured Image",
      type: "image",
      // Optional, no validation
    }),
    defineField({
      name: "youtube_preview",
      title: "Youtube Preview",
      type: "url",
    }),
    defineField({
      name: "live_preview",
      title: "Live Preview",
      type: "url",
    }),
    //excerpt
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            defineField({
              name: "description",
              title: "Image Description",
              type: "string",
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "github_link",
      title: "Github Link",
      type: "url",
    }),
    defineField({
      name: "demo_link",
      title: "Demo Link",
      type: "url",
    }),
  ],
});
