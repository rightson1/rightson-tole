import { defineType, defineField, defineArrayMember } from "sanity";
import { HomeIcon } from "@sanity/icons";

export const homepageType = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  icon: HomeIcon,
  fields: [
    // HERO SECTION
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "text",
    }),
    // FEATURED IMAGE SECTION
    defineField({
      name: "featuredImageSection",
      title: "Featured Image Section",
      type: "object",
      fields: [
        defineField({ name: "image", title: "Image", type: "image" }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
        }),
      ],
    }),
    // WHAT I DO SECTION
    defineField({
      name: "whatIDoSection",
      title: "What I Do Section",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
        }),
        defineField({ name: "signature", title: "Signature", type: "string" }),
        defineField({
          name: "services",
          title: "Services",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({
                  name: "description",
                  title: "Description",
                  type: "text",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    // START A PROJECT SECTION
    defineField({
      name: "startProjectSection",
      title: "Start a Project Section",
      type: "object",
      fields: [
        defineField({ name: "leftTitle", title: "Left Title", type: "string" }),
        defineField({
          name: "rightDescription",
          title: "Right Description",
          type: "text",
        }),
        defineField({
          name: "buttons",
          title: "Buttons",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "text",
                  title: "Button Text",
                  type: "string",
                }),
                defineField({
                  name: "link",
                  title: "Button Link",
                  type: "url",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    // BLOGS SECTION (REFERENCES)
    defineField({
      name: "blogsSection",
      title: "Blogs Section",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Section Title", type: "string" }),
        defineField({
          name: "blogs",
          title: "Blogs",
          type: "array",
          of: [
            defineArrayMember({
              type: "reference",
              to: [{ type: "post" }],
            }),
          ],
        }),
      ],
    }),
    // SAMPLE PROJECTS SECTION (REFERENCES)
    defineField({
      name: "sampleProjectsSection",
      title: "Sample Projects Section",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Section Title", type: "string" }),
        defineField({
          name: "projects",
          title: "Projects",
          type: "array",
          of: [
            defineArrayMember({
              type: "reference",
              to: [{ type: "project" }],
            }),
          ],
        }),
      ],
    }),
    // ABOUT SECTION
    defineField({
      name: "aboutSection",
      title: "About Section",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "text" }),
        defineField({
          name: "description",
          title: "Description",
          type: "blockContent",
        }),
      ],
    }),
    // FOOTER SECTION
    defineField({
      name: "footerSection",
      title: "Footer Section",
      type: "object",
      fields: [
        defineField({
          name: "contactMe",
          title: "Contact Me",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "label", title: "Label", type: "string" }),
                defineField({
                  name: "link",
                  title: "Link",
                  type: "url",
                  validation: (Rule) =>
                    Rule.uri({ scheme: ["http", "https", "mailto", "tel"] }),
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: "whatIDoSection",
          title: "What I Do Section",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({
          name: "socialLinks",
          title: "Social Links",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "platform",
                  title: "Platform",
                  type: "string",
                }),
                defineField({ name: "url", title: "URL", type: "url" }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "hero",
    },
    prepare({ title }) {
      return {
        title: "Homepage",
        subtitle: "Edit your homepage content here",
      };
    },
  },
});
