import { GrNavigate } from "react-icons/gr";

export default {
  name: 'navigationItem',
  title: 'Navigation Item',
  type: 'object',
  icon: GrNavigate,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      required: true,
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "link",
      type: "link",
      title: "Link"
    },
    {
      name: "subItems",
      type: "array",
      title: "Sub items",
      of: [{ type: "navigationItem" }]
    }
  ]
}