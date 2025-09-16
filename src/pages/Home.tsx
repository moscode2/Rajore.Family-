import { motion } from "framer-motion";

function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           
    {/* Family Badge Logo */}
    <motion.img
      src="/images/Family.jpg"
      alt="Rajore Family Badge"
      className="w-32 h-32 mx-auto mb-6 rounded-full shadow-2xl border-4 border-white"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    />

    {/* Subtext */}
    <motion.p
      className="text-xl md:text-2xl mb-8 opacity-90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      A home filled with love, legacy, and the joy of togetherness
    </motion.p>
  </div>
</section>
      {/* Family Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Family Story
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Every family has a story, and ours is woven with laughter, love,
              and cherished traditions. From our wise parents who built the
              foundation of our values, to our accomplished children carrying
              forward our legacy, and our playful grandchildren who bring joy
              and hope for the future — we are a family united by love and
              strengthened by tradition.
            </p>
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-pink-400 to-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-4xl">👨‍👩‍👧‍👦</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Family Photo Section */}
      {/* Featured Family Photo Section */}
<section className="py-16 bg-gradient-to-br from-rose-50 to-amber-100">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.h2
      className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      Our Family Portrait
    </motion.h2>

    {/* Make this relative so overlay is scoped correctly */}
    <motion.div
      className="relative bg-white rounded-2xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Background Photo */}
      <img
        src="/images/Dad.jpg" // replace with your image path
        alt="Family Portrait"
        className="w-full h-[400px] object-cover"
      />

      {/* Overlay for darkening the image slightly */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Centered Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
        <h3 className="text-4xl font-bold mb-4">Welcome to Our Family</h3>
        <p className="text-lg max-w-xl text-center">
          Celebrating love, togetherness, and the memories we cherish forever
        </p>
        {/* Decorative flowers */}
        <div className="mt-4 text-3xl">🌸 🌼 🌺</div>
      </div>
    </motion.div>
  </div>
</section>


      {/* Future Events Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Family News & Events
            </h2>
            <p className="text-gray-600 mb-8">
              Never miss a birthday, anniversary, or celebration — this is where
              we keep our family heartbeat alive.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                className="bg-pink-50 rounded-xl p-6"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-3xl mb-3 block">🎉</span>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Celebrations
                </h3>
                <p className="text-sm text-gray-600">
                  Birthdays, anniversaries, and special milestones
                </p>
              </motion.div>
              <motion.div
                className="bg-green-50 rounded-xl p-6"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-3xl mb-3 block">🏠</span>
                <h3 className="font-semibold text-gray-800 mb-2">Gatherings</h3>
                <p className="text-sm text-gray-600">
                  Family reunions and holiday get-togethers
                </p>
              </motion.div>
              <motion.div
                className="bg-yellow-50 rounded-xl p-6"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-3xl mb-3 block">📰</span>
                <h3 className="font-semibold text-gray-800 mb-2">News</h3>
                <p className="text-sm text-gray-600">
                  Updates and announcements from family members
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
