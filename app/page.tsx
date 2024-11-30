import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, BarChart2, Calendar, MessageSquare, Users, Zap, ChevronRight } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F9F9F9] text-[#2D3748]">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white shadow-sm">
        <Link className="flex items-center justify-center" href="#">
          <Zap className="h-6 w-6 text-[#6C63FF]" />
          <span className="ml-2 text-xl font-bold text-[#2D3748]">Quasara</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {["Features", "Pricing", "About", "Contact"].map((item) => (
            <Link key={item} className="text-sm font-medium hover:text-[#6C63FF] transition-colors" href="#">
              {item}
            </Link>
          ))}
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-[#6C63FF] via-[#8A84FF] to-[#FF6584]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Elevate Your Content Creation
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Manage, optimize, and grow your content creation business with our all-in-one platform. Connect with brands, access AI-powered insights, and scale your operations.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-white/90 text-[#2D3748] placeholder-gray-500" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="bg-[#32E0C4] text-[#2D3748] hover:bg-[#2BCEB3] transition-colors">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-gray-200">
                  Start your free 14-day trial. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#6C63FF]">Powerful Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              {[
                { icon: Calendar, title: "Smart Scheduling", description: "AI-powered content scheduling across multiple platforms." },
                { icon: BarChart2, title: "Deep Analytics", description: "Comprehensive insights into your content performance." },
                { icon: MessageSquare, title: "AI Assistant", description: "24/7 AI chatbot for content ideas and strategy." },
                { icon: Users, title: "Brand Collaborations", description: "Connect with top brands for lucrative partnerships." },
                { icon: Zap, title: "Content Generation", description: "AI-driven content creation tailored to your audience." },
                { icon: Users, title: "Creator Marketplace", description: "Access a pool of talented creators for your projects." },
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 p-6 bg-gray-50 rounded-xl shadow-sm transition-all duration-200 hover:shadow-md hover:scale-105">
                  <div className="p-3 bg-[#6C63FF] rounded-full">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D3748]">{feature.title}</h3>
                  <p className="text-sm text-gray-600 text-center">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FF6584]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-white">Creator Success Stories</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { quote: "Quasara&apos;s AI insights helped me grow my audience by 500% in just 3 months!", author: "Alex K., Tech Influencer" },
                { quote: "I landed a 6-figure brand deal through Quasara&apos;s networking feature. Game-changer!", author: "Samantha R., Fashion Blogger" },
                { quote: "The content generation tool saves me hours every week. My engagement has never been higher!", author: "Marcus T., Travel Vlogger" },
              ].map((testimonial, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 p-6 bg-white rounded-xl shadow-md">
                  <p className="text-sm text-[#2D3748] italic">&quot;{testimonial.quote}&quot;</p>
                  <p className="font-semibold text-[#6C63FF]">- {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#6C63FF]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Ready to Revolutionize Your Content Creation?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of creators who are scaling their business with Quasara.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-white/90 text-[#2D3748] placeholder-gray-500" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="bg-[#32E0C4] text-[#2D3748] hover:bg-[#2BCEB3] transition-colors">
                    Get Started
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#6C63FF]">
                  Why Choose Quasara?
                </h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
                  We empower creators with cutting-edge AI technology, robust analytics, and unparalleled networking opportunities. Our platform is designed to help you create better content, grow your audience, and maximize your earnings.
                </p>
                <ul className="grid gap-4 mt-6">
                  {[
                    "AI-powered content optimization",
                    "Real-time performance analytics",
                    "Seamless multi-platform management",
                    "Access to exclusive brand deals",
                    "24/7 AI assistant support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <ChevronRight className="h-5 w-5 text-[#32E0C4]" />
                      <span className="text-[#2D3748]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-lg">
                  <div className="absolute top-0 -left-4 w-72 h-72 bg-[#FF6584] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                  <div className="absolute top-0 -right-4 w-72 h-72 bg-[#6C63FF] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                  <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#32E0C4] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                  <div className="relative space-y-4">
                    <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                      <div className="flex-1">
                        <div className="h-4 w-48 bg-gray-300 rounded"></div>
                      </div>
                      <div className="w-24 h-6 rounded-full bg-[#6C63FF]"></div>
                    </div>
                    <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                      <div className="flex-1">
                        <div className="h-4 w-56 bg-gray-300 rounded"></div>
                      </div>
                      <div className="w-20 h-6 rounded-full bg-[#FF6584]"></div>
                    </div>
                    <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                      <div className="flex-1">
                        <div className="h-4 w-44 bg-gray-300 rounded"></div>
                      </div>
                      <div className="w-28 h-6 rounded-full bg-[#32E0C4]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-[#2D3748] text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col space-y-2">
              <h3 className="font-bold">Product</h3>
              {["Features", "Pricing", "Integrations", "FAQ"].map((item) => (
                <Link key={item} href="#" className="hover:text-[#32E0C4] transition-colors">
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="font-bold">Company</h3>
              {["About", "Blog", "Careers", "Press"].map((item) => (
                <Link key={item} href="#" className="hover:text-[#32E0C4] transition-colors">
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="font-bold">Resources</h3>
              {["Community", "Contact", "Support", "Sitemap"].map((item) => (
                <Link key={item} href="#" className="hover:text-[#32E0C4] transition-colors">
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="font-bold">Legal</h3>
              {["Terms", "Privacy", "Cookies", "Licenses"].map((item) => (
                <Link key={item} href="#" className="hover:text-[#32E0C4] transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm">© 2024 Quasara. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              {["Twitter", "Facebook", "Instagram", "LinkedIn"].map((social) => (
                <Link key={social} href="#" className="text-sm hover:text-[#32E0C4] transition-colors">
                  {social}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}