import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Dark animated video background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/videos/istockphoto-1468462288-640_adpp_is.mp4" type="video/mp4" />
        </video>
        {/* Light gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-primary-800/20 to-primary-900/30"></div>
        {/* Subtle animated elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-500/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-accent-600/8 rounded-full blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-16">
            
            {/* Newsletter section */}
            <div>
              <div className="bg-white border-2 border-primary-200 rounded-3xl p-12 max-w-2xl mx-auto shadow-lg">
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-display font-light text-primary-900 mb-4">
                      Restez informé
                    </h3>
                    <p className="text-primary-600 text-lg">
                      Recevez nos dernières actualités et événements
                    </p>
                  </div>
                  
                  <form className="space-y-6">
                    <div>
                      <input
                        type="email"
                        placeholder="Votre adresse email"
                        className="w-full px-6 py-4 bg-primary-50 border-2 border-primary-200 rounded-xl text-primary-900 placeholder-primary-500 focus:outline-none focus:border-accent-500 transition-all duration-300"
                        required
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-accent-500 hover:bg-accent-600 text-white font-medium py-4 px-8 transition-all duration-300 inline-flex items-center justify-center text-sm tracking-wide uppercase rounded-xl border-2 border-transparent hover:border-accent-300"
                    >
                      <span>S'abonner à la newsletter</span>
                    </button>
                  </form>
                  
                  <p className="text-primary-500 text-sm text-center">
                    Nous respectons votre vie privée. Désabonnement possible à tout moment.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}