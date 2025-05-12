//homepage_events, all project, array, reference project_schema
import { DocumentIcon } from "@sanity/icons";
import { defineType, defineArrayMember, defineField } from "sanity";

export const projectViewType = defineType({
  name: "project_view",
  title: "Project View",
  type: "document",
  fields: [
    //homepage_events, all projects
    defineField({
      name: "homepage_events_title",
      title: "Homepage Events Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      //homepage events
      name: "homepage_events",
      title: "Homepage Events",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "project" }],
        }),
      ],
    }),
    //all projects
    defineField({
      name: "all_projects_title",
      title: "All Projects Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    //description
    defineField({
      name: "all_projects_description",
      title: "All Projects Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "all_projects",
      title: "All Projects",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "project" }],
        }),
      ],
    }),
  ],
});
