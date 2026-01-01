'use client';
import { useEffect } from 'react';
import { Code2, Server, Cloud, Shield, ArrowRight, Mail, Phone, MapPin, Layers, Zap, Target, Heart, Lightbulb, CheckCircle2, Database, GitBranch } from 'lucide-react';

export default function Home() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-blue-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-blue-900">Prime Global Software Solutions</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#services" className="text-gray-600 hover:text-blue-800 transition font-medium">Services</a>
            <a href="#expertise" className="text-gray-600 hover:text-blue-800 transition font-medium">Expertise</a>
            <a href="#values" className="text-gray-600 hover:text-blue-800 transition font-medium">Values</a>
            <a href="#about" className="text-gray-600 hover:text-blue-800 transition font-medium">About</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-800 transition font-medium">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <div className="bg-blue-100 border border-blue-200 rounded-full px-4 py-2">
                <span className="text-blue-800 text-sm font-semibold">South African Software Excellence</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Engineering Software For The Way
              <span className="text-blue-800"> Modern Business Works</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              At Prime Global Software Solutions, we turn complex business challenges
              into high-performance software solutions built for scale, resilience,
              and impact.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:shadow-xl hover:shadow-blue-900/30 transition-all hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#services"
                className="bg-white border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="values" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-800">Core Values</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Built on three fundamental principles that guide every solution we deliver
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-2xl p-8 hover:border-blue-300 transition-all hover:shadow-xl group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/30">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Honesty</h3>
              <p className="text-gray-600 leading-relaxed">
                Building lasting relationships through transparency and integrity in every engagement.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-2xl p-8 hover:border-blue-300 transition-all hover:shadow-xl group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/30">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Agility</h3>
              <p className="text-gray-600 leading-relaxed">
                Adapting swiftly to project needs and delivering efficiently with modern methodologies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-2xl p-8 hover:border-blue-300 transition-all hover:shadow-xl group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/30">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Leveraging modern tools and frameworks to deliver value-driven, cutting-edge results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Key <span className="text-blue-800">Services</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive software solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 hover:border-blue-300 transition-all hover:shadow-xl group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/30">
                <Code2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Software Development</h3>
              <p className="text-gray-600 leading-relaxed">
                End-to-end development of bespoke applications tailored to client needs using .NET, React, and modern frameworks.
              </p>
            </div>

            <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 hover:border-blue-300 transition-all hover:shadow-xl group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/30">
                <Layers className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">System Integration</h3>
              <p className="text-gray-600 leading-relaxed">
                Connecting disparate systems to ensure seamless workflows and data flow across your organization.
              </p>
            </div>

            <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 hover:border-blue-300 transition-all hover:shadow-xl group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/30">
                <Cloud className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Solutions (Azure)</h3>
              <p className="text-gray-600 leading-relaxed">
                Designing and deploying secure, scalable, and cost-effective Microsoft Azure cloud architectures.
              </p>
            </div>

            <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 hover:border-blue-300 transition-all hover:shadow-xl group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/30">
                <Server className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">API Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Creating robust, secure, and well-documented REST APIs to support system interoperability.
              </p>
            </div>

            <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 hover:border-blue-300 transition-all hover:shadow-xl group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/30">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Transformation</h3>
              <p className="text-gray-600 leading-relaxed">
                Guiding organizations in adopting modern tools, processes, and platforms for competitive advantage.
              </p>
            </div>

            <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 hover:border-blue-300 transition-all hover:shadow-xl group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/30">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Support & Maintenance</h3>
              <p className="text-gray-600 leading-relaxed">
                Ongoing assistance to ensure system reliability, performance, and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise Section */}
      <section id="expertise" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technical <span className="text-blue-800">Expertise</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Cutting-edge technologies and frameworks powering enterprise solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center shadow-lg shadow-blue-900/30">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Languages & Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['C#', '.NET 6/8', 'ASP.NET Core', 'JavaScript', 'TypeScript', 'React', 'MVC', 'Angular', 'MAUI'].map(tech => (
                  <span key={tech} className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium border border-blue-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center shadow-lg shadow-blue-900/30">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Cloud & DevOps</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Microsoft Azure', 'GitHub Actions', 'Azure DevOps', 'CI/CD Pipelines'].map(tech => (
                  <span key={tech} className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium border border-blue-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center shadow-lg shadow-blue-900/30">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Data & Storage</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['SQL Server', 'MongoDB', 'NoSQL'].map(tech => (
                  <span key={tech} className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium border border-blue-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center shadow-lg shadow-blue-900/30">
                  <GitBranch className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Architecture</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Event-Driven', 'Microservices', 'REST APIs'].map(tech => (
                  <span key={tech} className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium border border-blue-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Work with <span className="text-blue-200">Prime Global Software?</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-200 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Freelance Flexibility, Enterprise Quality</h3>
                    <p className="text-blue-100">Get the agility and focus of a freelancer with the delivery standards of a corporate team.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-200 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Transparent Partnership</h3>
                    <p className="text-blue-100">Clear communication, milestone-based delivery, and honest feedback throughout the project.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-200 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Proven Expertise</h3>
                    <p className="text-blue-100">Over 10 years of professional experience across multiple domains and industries.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-200 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Client-Focused Delivery</h3>
                    <p className="text-blue-100">Every engagement is tailored to your project scope and business goals.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <div className="text-4xl font-bold text-white mb-2">10+</div>
                <div className="text-blue-200">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-blue-200">Black-Owned</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <div className="text-4xl font-bold text-white mb-2">SA</div>
                <div className="text-blue-200">Based Company</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <div className="text-4xl font-bold text-white mb-2">2025</div>
                <div className="text-blue-200">Established</div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-white/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Mission</h3>
                <p className="text-blue-100 leading-relaxed">
                  To deliver tailored, high-performance software solutions that empower businesses to innovate, streamline operations, and grow sustainably.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Vision</h3>
                <p className="text-blue-100 leading-relaxed">
                  To be a trusted independent technology partner recognized for honesty, adaptability, and excellence in software craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's <span className="text-blue-800">Connect</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Ready to transform your business? Get in touch with us today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-2xl p-8 text-center hover:border-blue-300 transition-all hover:shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-900/30">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 font-semibold mb-2">Email</h3>
              <a href="mailto:xolani15.xa@gmail.com" className="text-blue-800 text-sm hover:underline">xolani15.xa@gmail.com</a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-2xl p-8 text-center hover:border-blue-300 transition-all hover:shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-900/30">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 font-semibold mb-2">Phone</h3>
              <a href="tel:+27723185498" className="text-blue-800 text-sm hover:underline">+27 72 318 5498</a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-2xl p-8 text-center hover:border-blue-300 transition-all hover:shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-900/30">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 font-semibold mb-2">Location</h3>
              <p className="text-gray-600 text-sm">South Africa</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-center text-white shadow-xl">
            <p className="text-xl font-semibold mb-2">Ready to get started?</p>
            <p className="text-blue-100 mb-6">Schedule a consultation to discuss your project needs</p>
            <a
              href="mailto:xolani15.xa@gmail.com"
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all hover:scale-105"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-lg font-bold text-gray-900">Prime Global Software Solutions</span>
          </div>
          <p className="text-gray-600 text-sm mb-2">
            Honesty • Agility • Innovation
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 Prime Global Software Solutions (Pty) Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
