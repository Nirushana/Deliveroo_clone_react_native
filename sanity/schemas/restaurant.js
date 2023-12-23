import {defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Restaurant Name",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "short_description",
      type: "string",
      title: "Short Description",
      validation: (Rule) => Rule.max(200),
    },

    {
      name: "image",
      type: "image",
      title: "Image of Resturant",
    },

    {
      name: "lat",
      type: "number",
      title: "Latitude of Restaurant",
    },

    {
      name: "long",
      type: "number",
      title: "Longitude of Resturant",
    },

    {
      name: "address",
      type: "string",
      title: "Address of Resturant",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "rating",
      type: "number",
      title: "Enter the rating from (1-5 Stars)",
      validation: (Rule) => Rule.required().min(1).max(5).error("Please enter a number between 1 to 5"),
    },
  ],

  
})
