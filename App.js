import React from 'react';

export default function LuxuryHotelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
        <div className="container mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-600 rounded-xl shadow-2xl"></div>
              <span className="text-3xl font-bold bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                GrandPalace
              </span>
            </div>
            
            <div className="hidden lg:flex space-x-10">
              <a href="#" className="text-amber-100 hover:text-yellow-300 font-semibold transition-all duration-300 hover:scale-105">
                <span className="border-b-2 border-amber-500 pb-1">Home</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-300 font-semibold transition-all duration-300 hover:scale-105">
                Rooms & Suites
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-300 font-semibold transition-all duration-300 hover:scale-105">
                Dining
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-300 font-semibold transition-all duration-300 hover:scale-105">
                Spa & Wellness
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-300 font-semibold transition-all duration-300 hover:scale-105">
                Contact
              </a>
            </div>
            
            <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-gray-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg">
              📞 Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=2000&q=80)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        
        <div className="container relative mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
              Experience <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">Luxury</span>
              <br />
              <span className="text-5xl md:text-7xl">Redefined</span>
            </h1>
            
            <p className="text-xl text-amber-100 mb-10 max-w-xl">
              Five-star luxury hotel with breathtaking views, world-class amenities, and unparalleled service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group px-10 py-5 bg-gradient-to-r from-amber-500 to-yellow-500 text-gray-900 font-extrabold text-xl rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-3">
                <span>🏨 Book Your Stay</span>
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </button>
              <button className="px-10 py-5 bg-white/10 backdrop-blur-lg border-2 border-amber-400/30 text-amber-200 font-bold text-xl rounded-xl hover:bg-white/20 hover:border-amber-400/50 transition-all">
                🎬 Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-white mb-4">
            <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">Luxury</span> Accommodations
          </h2>
          <p className="text-gray-400 text-center text-xl mb-16 max-w-3xl mx-auto">
            Elegantly designed rooms and suites with panoramic views
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Room 1 */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl transform hover:-translate-y-4 transition-all duration-500">
              <div 
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              <div className="p-8 bg-gradient-to-b from-gray-900 to-black">
                <h3 className="text-3xl font-bold text-amber-300 mb-4">Deluxe Suite</h3>
                <p className="text-gray-400 mb-6">Spacious suite with ocean view, king bed, and private balcony.</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-4xl font-bold text-white">$499</span>
                    <span className="text-gray-400"> / night</span>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-bold rounded-lg hover:shadow-xl transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Room 2 */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl transform hover:-translate-y-4 transition-all duration-500">
              <div 
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              <div className="p-8 bg-gradient-to-b from-gray-900 to-black">
                <h3 className="text-3xl font-bold text-amber-300 mb-4">Presidential Suite</h3>
                <p className="text-gray-400 mb-6">Luxurious two-bedroom suite with butler service and private pool.</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-4xl font-bold text-white">$1,299</span>
                    <span className="text-gray-400"> / night</span>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-bold rounded-lg hover:shadow-xl transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Room 3 */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl transform hover:-translate-y-4 transition-all duration-500">
              <div 
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              <div className="p-8 bg-gradient-to-b from-gray-900 to-black">
                <h3 className="text-3xl font-bold text-amber-300 mb-4">Executive Room</h3>
                <p className="text-gray-400 mb-6">Modern room with city view, work desk, and premium amenities.</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-4xl font-bold text-white">$299</span>
                    <span className="text-gray-400"> / night</span>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-bold rounded-lg hover:shadow-xl transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-white mb-16">
            World-Class <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">Amenities</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Amenity 1 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-900/30">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-amber-900/30 to-yellow-900/30 flex items-center justify-center mb-6">
                <span className="text-4xl">🏊</span>
              </div>
              <h3 className="text-2xl font-bold text-amber-300 mb-4">Infinity Pool</h3>
              <p className="text-gray-400">Heated infinity pool with panoramic ocean views</p>
            </div>

            {/* Amenity 2 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-900/30">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-amber-900/30 to-yellow-900/30 flex items-center justify-center mb-6">
                <span className="text-4xl">🍽️</span>
              </div>
              <h3 className="text-2xl font-bold text-amber-300 mb-4">Fine Dining</h3>
              <p className="text-gray-400">Michelin-starred restaurant with world-class chefs</p>
            </div>

            {/* Amenity 3 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-900/30">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-amber-900/30 to-yellow-900/30 flex items-center justify-center mb-6">
                <span className="text-4xl">💆</span>
              </div>
              <h3 className="text-2xl font-bold text-amber-300 mb-4">Luxury Spa</h3>
              <p className="text-gray-400">Award-winning spa with holistic treatments</p>
            </div>

            {/* Amenity 4 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-900/30">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-amber-900/30 to-yellow-900/30 flex items-center justify-center mb-6">
                <span className="text-4xl">🏋️</span>
              </div>
              <h3 className="text-2xl font-bold text-amber-300 mb-4">Fitness Center</h3>
              <p className="text-gray-400">State-of-the-art gym with personal trainers</p>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2000&q=80)'
          }}
        ></div>
        
        <div className="container relative mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-white mb-16">
            Guest <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Testimonial 1 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-900/50">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 mr-4"></div>
                <div>
                  <h4 className="text-xl font-bold text-white">Sarah Johnson</h4>
                  <p className="text-amber-300">★★★★★</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Absolutely breathtaking! The service was impeccable and the views were unforgettable."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-900/50">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 mr-4"></div>
                <div>
                  <h4 className="text-xl font-bold text-white">Michael Chen</h4>
                  <p className="text-amber-300">★★★★★</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "The Presidential Suite exceeded all expectations. Truly a once-in-a-lifetime experience."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-900/50">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 mr-4"></div>
                <div>
                  <h4 className="text-xl font-bold text-white">Emma Wilson</h4>
                  <p className="text-amber-300">★★★★★</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Perfect for our anniversary getaway. Every detail was thoughtfully considered."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=80)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70"></div>
        </div>
        
        <div className="container relative mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            Your <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">Dream Stay</span> Awaits
          </h2>
          <p className="text-2xl text-amber-100 mb-12 max-w-3xl mx-auto">
            Experience unparalleled luxury and create memories that last a lifetime.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="📧 Enter your email for special offers" 
              className="px-8 py-5 rounded-2xl text-gray-900 text-xl flex-grow w-full shadow-xl"
            />
            <button className="px-12 py-5 bg-gradient-to-r from-amber-500 to-yellow-500 text-gray-900 font-black text-xl rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
              🏨 Book Your Stay Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-20 border-t border-amber-900/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-600 rounded-2xl shadow-xl"></div>
                <span className="text-4xl font-black bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                  GrandPalace
                </span>
              </div>
              <p className="text-gray-400 text-lg max-w-md">
                Luxury redefined. Experience world-class hospitality with breathtaking views and unparalleled service.
              </p>
            </div>

            {['Contact', 'Quick Links', 'Legal'].map((title, idx) => (
              <div key={idx}>
                <h4 className="text-2xl font-bold text-amber-300 mb-6">{title}</h4>
                <ul className="space-y-4">
                  {['+1 (555) 123-4567', 'info@grandpalace.com', '123 Luxury Ave, Maldives'].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-amber-300 transition-all duration-300">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
          
          <div className="border-t border-amber-900/30 mt-20 pt-12 text-center">
            <p className="text-gray-500">
              © 2024 GrandPalace Luxury Hotels. All rights reserved. | Images from Unsplash
            </p>
            <p className="text-gray-600 mt-4 text-sm">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}