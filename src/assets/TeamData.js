const TeamData = [
  {
    img: "data:image/jpeg;base64,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",
    name: "Esvic Victor",
    title: "Frontend Surgeon",
    about: "Impossibilty is NONSENSE",
    id: 1,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLQ_syBNtLl9t3a2FjDAfS7vBMfdzctXiwnQ&usqp=CAU",
    name: "Zuby Alikah",
    title: "Cyber Security Expert",
    about: "Consistency is PARAMOUNT",
    id: 2,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMGJQXYDZbgG2rI9VeockZKpcuw_kfjs0ZeQ&usqp=CAU",
    name: "Eta Abakadang",
    title: "Blockchain Developer",
    about: "The numbers MATTERS",
    id: 3,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0zz4ioBG0X5g0NY6HYPoFvVdr50SALUJUsw&usqp=CAU",
    name: "Irene Archibong",
    title: "Novel Manikin",
    about: "A 2500 pages creates a MANSION",
    id: 4,
  },
];

export default TeamData;