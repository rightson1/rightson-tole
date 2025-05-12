import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { projectType } from "./project.schema";
import { projectViewType } from "./project_view.schema";
import { homepageType } from "./homepage.schema";
import { resumeType } from "./resume.schema";
import { projectsPageType } from "./projectspage.schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    projectType,
    projectViewType,
    homepageType,
    resumeType,
    projectsPageType,
  ],
};
