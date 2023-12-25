
export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of dish",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "shortdescription",
      type: "string",
      title: "Short Description",
      validation: (Rule) => Rule.max(200),
    },

    {
      name: "price",
      type: "number",
      title: "Price of dish in GBP",

    },

    {
      name: "image",
      type: "image",
      title: "Image of Dish",
    }
  ],
}
