import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  referenceSidebar: [
    "introduction",
    "tutorials/index",
    {
      type: "category",
      label: "Reference",
      items: [{ type: "autogenerated", dirName: "reference" }],
    },
  ],
  tutorialsSidebar: [
    "tutorials/index",
    {
      type: "category",
      label: "Beginner",
      items: [{ type: "autogenerated", dirName: "tutorials/beginner" }],
    },
    {
      type: "category",
      label: "Basic",
      items: [{ type: "autogenerated", dirName: "tutorials/basic" }],
    },
    {
      type: "category",
      label: "Advanced",
      items: [{ type: "autogenerated", dirName: "tutorials/advanced" }],
    },
  ],
};

export default sidebars;
