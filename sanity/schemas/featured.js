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
        name: "short description",
        type: "string",
        title: "Short Description",
        validation: (Rule) => Rule.max(200),
      },
  
      {
        name: "restaurants",
        type: "arry",
        title: "Restaurants",
      },
    ],
  }