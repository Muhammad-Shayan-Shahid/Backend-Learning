import { createContext, useState } from 'react'

export const recpiecontext = createContext();

const RecpieContext = (props) => {
  const [data, setdata] = useState([
    {
  "img": "https://images.unsplash.com/photo-1550547660-d9450f859349",
  "title": "Classic Chicken Biryani",
  "ingrediants": "2 cups basmati rice\n500g chicken\n1 cup yogurt\n2 onions (sliced)\n2 tomatoes (chopped)\n1 tbsp ginger garlic paste\nWhole spices\nSalt to taste\nOil as needed",
  "instrctions": "1. Wash and soak rice for 30 minutes.\n2. Fry onions until golden brown.\n3. Add chicken, yogurt, tomatoes, and spices.\n4. Cook until chicken is tender.\n5. Boil rice separately until 70% cooked.\n6. Layer rice and chicken mixture.\n7. Cover and cook on low heat (dum) for 15 minutes.\n8. Serve hot.",
  "category": "lunch" ,
  "desc" : "This is lunch"
}
  ]);
  console.log(data)

  return (
    <recpiecontext.Provider value={{ data, setdata }}>
      {props.children}
    </recpiecontext.Provider>
  );
};

export default RecpieContext;
