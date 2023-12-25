export default {
    name: 'featured',
    title: 'Featured',
    type: 'document',
    fields: [
      {
        name: "name",
        type: "string",
        title: "Featured Category",
        validation: (Rule) => Rule.required(),
      },
  
      {
        name: "shortdescription",
        type: "string",
        title: "Short Description",
        validation: (Rule) => Rule.max(200),
      },
  
      {
        name: "restaurants",
        type: "array",
        title: "Restaurants",
        of: [{ type: "reference", to: [{ type: "restaurant" }] }]
      },
    ],
  }