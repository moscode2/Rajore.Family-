function Parents() {
  const parents = [
    {
      name: "Joseph",
      description: "A wise and caring patriarch who loves gardening, reading classic literature, and sharing stories from his youth. His gentle wisdom and unwavering support have been the foundation of our family.",
      hobbies: "Gardening, Reading, Chess",
      wisdom: "\"Family is not just about blood, it's about the love we share and the memories we create together.\"",
      photo:"images/jaduong.jpg"
    },
    {
      name: "Christine",
      description: "The heart of our family, known for her incredible cooking, warm hugs, and endless patience. She has a gift for bringing people together and making everyone feel loved and welcome.",
      hobbies: "Cooking, Knitting, Volunteering",
      wisdom: "\"A home filled with laughter and love is the greatest treasure one can have.\"",
      photo:"images/mum.jpg"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Meet Our Parents
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The pillars of our family, whose love, wisdom, and guidance have shaped who we are today.
          </p>
        </div>

        {/* Parents Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {parents.map((parent, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center transform hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              {/* Photo */}
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-md">
              <img
                 src={parent.photo}
                  alt={parent.name}
                  className="w-full h-full object-cover"
                    />
                    </div>

              {/* Name */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {parent.name}
              </h2>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {parent.description}
              </p>

              {/* Hobbies */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Hobbies & Interests</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {parent.hobbies.split(", ").map((hobby, hobbyIndex) => (
                    <span
                      key={hobbyIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>

              {/* Wisdom Quote */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Words of Wisdom</h3>
                <p className="text-gray-600 italic">
                  {parent.wisdom}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Family Values Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            The Values They Taught Us
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <span className="text-3xl mb-3 block">❤️</span>
              <h3 className="font-semibold text-gray-800 mb-2">Love</h3>
              <p className="text-sm text-gray-600">Unconditional love for family and others</p>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <span className="text-3xl mb-3 block">🤝</span>
              <h3 className="font-semibold text-gray-800 mb-2">Respect</h3>
              <p className="text-sm text-gray-600">Treating everyone with dignity and kindness</p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-6">
              <span className="text-3xl mb-3 block">💪</span>
              <h3 className="font-semibold text-gray-800 mb-2">Perseverance</h3>
              <p className="text-sm text-gray-600">Never giving up in the face of challenges</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <span className="text-3xl mb-3 block">🌟</span>
              <h3 className="font-semibold text-gray-800 mb-2">Integrity</h3>
              <p className="text-sm text-gray-600">Always doing what's right, even when it's hard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parents;