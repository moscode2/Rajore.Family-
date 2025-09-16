function Children() {
  const children = [
    {
      name: "Henry & Liz",
      career: "Senior Content Writer and a Social Media Strategist. His partner, Liz, is a talented Product Designer at Zalando,Germany.",
      description:
      "Henry is a Senior Content Writer with a passion for storytelling and digital communication. " +
      "He also thrives as a Social Media Strategist, helping brands connect meaningfully with their audiences. " +
      "His partner, Liz, is a talented Product Designer at Zalando, Germany, where she creates elegant and user-friendly digital experiences. " +
      "Together, they blend creativity and innovation, making a dynamic and inspiring duo.",
    
      hobbies: ["Swimming", "Hiking", "Photography"],
      character: "Innovative and determined",
      photo:"images/Liz.jpg"
    },
    {
      name: "Linnet",
      career: "Teacher",
      description: "A compassionate teacher dedicated to helping others. She specializes in Competency-Based Education and works at a local primary school.",
      hobbies: ["Music", "Yoga", "Dancing"],
      character: "Caring and dedicated",
      photo:"images/japuonj.jpg"
    },
    {
      name: "Ann ",
      career: "Laboratory Technician",
      description: "An inspiring lab technician contributing to the field of medical science. She works in a renowned hospital, ensuring accurate diagnostics and patient care.",
      hobbies: ["Health debate", "Traveling", "Cooking"],
      character: "Patient and inspiring",
      photo:"images/nyar.jpg"
    },
    {
      name: "Emmaculate",
      career: "Teacher",
      description: "A passionate educator who loves to inspire young minds. She teaches at a local high school and is known for her creative teaching methods.A teacher of History and Kiswahili.",
      hobbies: ["Sleeping", "Sculpture", "Teaching"],
      character: "Creative and expressive",
      photo:"images/mwalimu.jpg"
    },
    {
      name: "Selline ",
      career: "Teacher",
      description: "A dedicated Teacher of Geography and Kiswahili at a local high school,inspiring young learners with a passion for languages, culture, and the world around them. Known for nurturing curiosity and guiding students toward academic and personal growth.",
      hobbies: ["Bible reading", "Singing", "Teaching"],
      character: "Compassionate and expressive",
      photo:"images/selline.jpg"
    },
    {
      name: "Moses ",
      career: "Full Stack Developer",
      description: " He is a Full Stack Developer skilled in both frontend and backend technologies, capable of building complete web applications from user interfaces to server logic and databases. He bridges the gap between design and functionality, ensuring seamless, responsive, and scalable digital experiences.",
      hobbies: ["Music", "Singing", "Traveling"],
      character: "Collaborative, Problem solver and Adaptable",
      photo:"images/Mosesa.jpeg"
    },
    {
      name: "David",
      career: "IT Specialist",
      description: "An IT Specialist with expertise in network administration, cybersecurity, and technical support. He ensures the smooth operation of IT systems and helps organizations protect their digital assets.",
      hobbies: ["Watching", "Networking", "Gaming"],
      character: " Problem solver and Netwoker",
      photo:"images/davido.jpg"
    },
    {
      name: "Calisto",
      career: "Student",
      description: "Currently embracing the exciting adventures of primary school, he stands out as the only one with a unique curriculum tailored just for him.",
      hobbies: ["Watching", "Playing", "Gaming"],
      character: " Curious and Energetic",
      photo:"images/cliff.jpg"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Children
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each of our children has grown into remarkable individuals, pursuing their passions and making a positive impact in their communities.
          </p>
        </div>

        {/* Children Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {children.map((child, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              {/* Photo */}
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-md">
              <img
                 src={child.photo}
                  alt={child.name}
                  className="w-full h-full object-cover"
                    />
                    </div>
              {/* Name and Career */}
              <div className="text-center mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
                  {child.name}
                </h2>
                <p className="text-blue-600 font-semibold">
                  {child.career}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-center mb-4 leading-relaxed">
                {child.description}
              </p>

              {/* Character Trait */}
              <div className="text-center mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  {child.character}
                </span>
              </div>

              {/* Hobbies */}
              <div className="text-center">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">Interests</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {child.hobbies.map((hobby, hobbyIndex) => (
                    <span
                      key={hobbyIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Our Pride & Joy
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            We are incredibly proud of each of our children's achievements and the positive impact they're making in the world. 
            Their dedication, compassion, and hard work inspire us every day.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <span className="text-3xl mb-3 block">🎓</span>
              <h3 className="font-semibold text-gray-800 mb-2">Education</h3>
              <p className="text-sm text-gray-600">All graduated with honors from top universities</p>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <span className="text-3xl mb-3 block">💼</span>
              <h3 className="font-semibold text-gray-800 mb-2">Career Success</h3>
              <p className="text-sm text-gray-600">Excelling in their chosen professions</p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-6">
              <span className="text-3xl mb-3 block">🤝</span>
              <h3 className="font-semibold text-gray-800 mb-2">Community Service</h3>
              <p className="text-sm text-gray-600">Active volunteers in their communities</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <span className="text-3xl mb-3 block">👨‍👩‍👧‍👦</span>
              <h3 className="font-semibold text-gray-800 mb-2">Family Values</h3>
              <p className="text-sm text-gray-600">Carrying forward our family traditions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Children;