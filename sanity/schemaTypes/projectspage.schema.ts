import { defineType, defineField, defineArrayMember } from "sanity";
import { DocumentIcon } from "@sanity/icons";

export const projectsPageType = defineType({
  name: "projectsPage",
  title: "Projects Page",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description:
        "Main heading for the projects page (e.g. 'Rightsons Projects')",
    }),
    defineField({
      name: "intro",
      title: "Intro",
      type: "text",
      description: "Introductory text for the projects page",
    }),
    defineField({
      name: "signature",
      title: "Signature",
      type: "string",
      description: "Signature or author name (e.g. 'Chari')",
    }),
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
      description: "Select the projects to display on this page",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Projects Page",
        subtitle: "Edit your projects page content here",
      };
    },
  },
});
