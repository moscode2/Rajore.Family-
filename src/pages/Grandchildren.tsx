function Grandchildren() {
  const grandchildren = [
    {
      name: "Leon & Liam",
      age: [5, 3],
      description:
        "Two adorable boys from our elder son, who light up every room with their laughter and endless joy.",
      school: "1st Unit",
      hobbies: ["Science", "Space", "Building"],
      dreams: "Both are future astronauts",
      photo: "images/Liam.jpg",
    },
    {
      name: "Jonlin & Favour",
      age: [11, 4],
      description:
        "Sweet angels from Linnet's family. Hadrian holds a special place as our parents' first granddaughter.",
      school: "6th Grade & Kindergarten",
      hobbies: ["Drawing", "Stories", "Dancing"],
      dreams: "Wants to illustrate children's books",
      photo: "images/paper.jpeg",
    },
    {
      name: "Aiden",
      age: [5],
      description:
        "Always radiating joy and laughter in every photo. Aiden is a bundle of energy and curiosity.",
      school: "2nd Grade",
      hobbies: ["Loughing", "Drawing", "Watching TV"],
      dreams: "Wants to be a firefighter",
      photo: "images/Aiden.JPG",
    },
    {
      name: "Talia & Tyran",
      age: [7, 4],
      description:
        "Beautiful souls whose charm shines right through the picture.",
      school: "4th & 2nd Grade",
      hobbies: ["Animals", "Playing", "Singing"],
      dreams: "Wants to be a veterinarian and help all animals",
      photo: "images/jojoo.jpg",
    },
    {
      name: "Stanley & Aurellia",
      age: [8, 3],
      description:
        "Always full of warmth and smiles—truly ever-welcoming. They bring sunshine wherever they go.",
      school: "4th Grade",
      hobbies: ["Soccer", "Swimming", "Guitar"],
      dreams: "Wants to play professional soccer",
      photo: "images/father.jpg",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Grandchildren
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The bright lights of our family's future, each one unique and special in their own wonderful way. 
            They bring endless joy, laughter, and hope to our hearts.
          </p>
        </div>

        {/* Grandchildren Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {grandchildren.map((grandchild, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              {/* Photo */}
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-md">
                <img
                  src={grandchild.photo}
                  alt={grandchild.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name and Age */}
              <div className="text-center mb-3">
                <h2 className="text-xl font-bold text-gray-800 mb-1">
                  {grandchild.name}
                </h2>
                <div className="flex justify-center items-center gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {grandchild.age.length > 1
                      ? `Ages ${grandchild.age.join(" & ")}`
                      : `Age ${grandchild.age[0]}`}
                  </span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    {grandchild.school}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-center text-sm mb-4 leading-relaxed">
                {grandchild.description}
              </p>

              {/* Hobbies */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-2 text-center">
                  Loves
                </h3>
                <div className="flex flex-wrap justify-center gap-1">
                  {grandchild.hobbies.map((hobby, hobbyIndex) => (
                    <span
                      key={hobbyIndex}
                      className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dreams */}
              <div className="bg-yellow-50 rounded-xl p-3 text-center">
                <h3 className="text-sm font-semibold text-gray-800 mb-1">
                  Big Dreams
                </h3>
                <p className="text-xs text-gray-600 italic">
                  {grandchild.dreams}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Grandchildren;
