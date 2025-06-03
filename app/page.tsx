import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Star,
  Users,
  Trophy,
  Rocket,
  Target,
  Brain,
  Zap,
  ArrowRight,
  Quote,
} from "lucide-react";

export default function PMMSchoolLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium">
            <span className="bg-white/20 px-2 py-1 rounded text-xs font-bold">
              LIMITED TIME
            </span>
            Apply code "MARKETREADY" to get $100 off at checkout
          </div>
          <Button
            variant="secondary"
            size="sm"
            className="bg-white text-purple-600 hover:bg-gray-100"
          >
            Start My PMM Journey
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">PMM School</div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#curriculum"
                className="text-gray-600 hover:text-gray-900"
              >
                Curriculum
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-gray-900"
              >
                Success Stories
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-gray-900"
              >
                Pricing
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
                  🚀 #1 PMM Career Accelerator
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Launch and grow your
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {" "}
                    PMM career
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Get the complete toolkit:
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">
                    💪 Master product marketing from A to Z
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">
                    🎯 Ace your PMM interviews with confidence
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">
                    🚀 Make an impact and accelerate your career
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8"
                >
                  Start Learning Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 border-2 border-white"
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">
                    4.9/5 rating
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="PMM School Instructor"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Feeling stuck in your PMM journey?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 border-red-200 bg-red-50">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Does this sound like you?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center mt-0.5">
                      <span className="text-white text-sm">✕</span>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        You want to break into PMM but don't know{" "}
                        <strong>where to start</strong>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center mt-0.5">
                      <span className="text-white text-sm">✕</span>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        You're overwhelmed by all the{" "}
                        <strong>conflicting advice online</strong>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center mt-0.5">
                      <span className="text-white text-sm">✕</span>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        You're stuck in <strong>analysis paralysis</strong>,
                        unsure of your next step
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-green-200 bg-green-50">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  There's a better way:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-gray-700">
                        Get <strong>clarity</strong> on the exact steps to land
                        a PMM role
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-gray-700">
                        Learn the right PMM skills that{" "}
                        <strong>hiring managers</strong> look for
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-gray-700">
                        <strong>Take action</strong> with a proven roadmap
                        designed to help you break in
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section
        id="curriculum"
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Master the complete PMM toolkit (What You'll Learn)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to become a world-class product marketer, from
              strategy to execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Module 1: PMM Foundations A-Z",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                icon: Brain,
                title: "Module 2: Market Research & Analysis",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                icon: Rocket,
                title: "Module 3: Go-to-Market Strategy",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                icon: Users,
                title: "Module 4: Customer Segmentation",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                icon: Zap,
                title: "Module 5: Product Positioning",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                icon: Trophy,
                title: "Module 6: Campaign Execution",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                image: "/placeholder.svg?height=200&width=400",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="mt-auto">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={`${item.title} illustration`}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="py-20 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Learn practical and actionable product marketing:
            </h2>
            <p className="text-xl text-gray-600">
              One-time payment, lifetime access to everything you need
            </p>
          </div>

          <Card className="p-8 border-2 border-purple-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-sm font-bold">
              MOST POPULAR
            </div>
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Complete PMM Mastery
                </h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-4xl font-bold text-gray-900">$499</span>
                  <span className="text-lg text-gray-500 line-through">
                    $1995
                  </span>
                </div>
                <p className="text-gray-600">
                  One-time payment • Lifetime access
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  "7+ hours of expert-led content",
                  "One complimentary 1:1 coaching",
                  "LinkedIn certification",
                  "Exclusive bonus content",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 text-lg">
                Start Your PMM Journey Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-center text-sm text-gray-500 mt-4">
                Use code MARKETREADY for $100 off (limited time)
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What people are saying about PMM School:
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Zach",
                image: "/placeholder.svg?height=80&width=80",
                quote:
                  "No frills, no fluff—just straight-to-the-point, actionable insights. I landed my first PMM role thanks to this course!",
              },
              {
                name: "Brie",
                image: "/placeholder.svg?height=80&width=80",
                quote:
                  "No frills, no fluff—just straight-to-the-point, actionable insights. I landed my first PMM role thanks to this course!",
              },
              {
                name: "Alicia",
                image: "/placeholder.svg?height=80&width=80",
                quote:
                  "No frills, no fluff—just straight-to-the-point, actionable insights. I landed my first PMM role thanks to this course!",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="p-6"
              >
                <CardContent className="p-0">
                  <Quote className="h-8 w-8 text-purple-600 mb-4" />
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900">
              Built With Modern Technologies
            </h2>
            <p className="text-gray-600 mt-2">
              This website was crafted using the following technologies:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-3">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <h3 className="font-medium text-gray-900">Next.js</h3>
              <p className="text-sm text-gray-500">React Framework</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mb-3">
                <span className="text-white font-bold">tw</span>
              </div>
              <h3 className="font-medium text-gray-900">Tailwind CSS</h3>
              <p className="text-sm text-gray-500">Utility-first CSS</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mb-3">
                <span className="text-white font-bold">UI</span>
              </div>
              <h3 className="font-medium text-gray-900">shadcn/ui</h3>
              <p className="text-sm text-gray-500">UI Components</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-3">
                <span className="text-white font-bold">V</span>
              </div>
              <h3 className="font-medium text-gray-900">Vercel</h3>
              <p className="text-sm text-gray-500">Deployment</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">
              Fully responsive, accessible, and optimized for performance
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">PMM School</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Course</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white"
                  >
                    Curriculum
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white"
                  >
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white"
                  >
                    Templates
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PMM School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
