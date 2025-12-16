import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HeroComponent } from './features/hero/hero.component';
import { ProjectsComponent } from './features/projects/components/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, HeroComponent, ProjectsComponent],
  template: `
    <div class="app-container">
      <!-- Animated Background Layer -->
      <div class="fixed inset-0 -z-10 overflow-hidden">
        <!-- Animated gradient orbs -->
        <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 to-cyan-500/20 dark:from-blue-600/30 dark:to-cyan-600/30 rounded-full blur-[120px] animate-float-slow"></div>
        <div class="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-blue-500/15 to-green-500/15 dark:from-blue-600/25 dark:to-green-600/25 rounded-full blur-[140px] animate-float-slower" style="animation-delay: 1s;"></div>
        <div class="absolute bottom-0 left-1/3 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/20 to-orange-500/20 dark:from-cyan-600/30 dark:to-orange-600/30 rounded-full blur-[130px] animate-float-slow" style="animation-delay: 2s;"></div>
        <div class="absolute bottom-1/4 right-1/3 w-[450px] h-[450px] bg-gradient-to-bl from-blue-500/15 to-green-500/15 dark:from-blue-600/25 dark:to-green-600/25 rounded-full blur-[110px] animate-float-slower" style="animation-delay: 3s;"></div>
        
        <!-- Mesh gradient overlay -->
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(34,170,242,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_50%,rgba(34,170,242,0.15),transparent_50%)]"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.15),transparent_50%)]"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.06),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.12),transparent_50%)]"></div>
        
        <!-- Subtle grid pattern -->
        <div class="absolute inset-0 bg-[linear-gradient(rgba(34,170,242,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,170,242,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>
      </div>

      <app-navbar></app-navbar>
      <section id="home" class="section-transition">
        <app-hero></app-hero>
      </section>
      <section id="portfolio" class="section-transition">
        <app-projects></app-projects>
      </section>
      <!-- About Me Section -->
      <section id="about" class="section-transition min-h-screen py-24 relative overflow-hidden">
        <!-- Enhanced Background Elements -->
        <div class="absolute inset-0 opacity-40">
          <div class="absolute top-20 right-20 w-72 h-72 bg-blue-400/20 dark:bg-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
          <div class="absolute bottom-20 left-20 w-96 h-96 bg-green-400/20 dark:bg-green-600/30 rounded-full blur-3xl animate-pulse" style="animation-delay: 1.5s;"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
          <!-- Section Header -->
          <div class="text-center mb-12 md:mb-20">
            <div class="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-800/80 dark:to-slate-700/80 border-2 border-cyan-400/40 dark:border-cyan-500/40 backdrop-blur-xl shadow-2xl shadow-cyan-500/20">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 dark:text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
              </svg>
              <span class="text-xs sm:text-sm font-extrabold uppercase tracking-wider sm:tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 dark:from-cyan-400 dark:to-green-400">Discover My Journey</span>
            </div>
            <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-amber-950 dark:text-white mb-4 sm:mb-6 leading-tight px-4">
              About
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-green-600 dark:from-blue-400 dark:via-cyan-400 dark:to-green-400 animate-gradient"> Me</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              Building tomorrow's intelligent solutions with passion, precision, and purpose
            </p>
          </div>

          <!-- Content Grid -->
          <div class="grid lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            <!-- Main Bio -->
            <div class="lg:col-span-2 space-y-6 md:space-y-8">
              <!-- Education Card -->
              <div class="group bg-gradient-to-br from-white to-blue-50/30 dark:from-slate-900/80 dark:to-slate-800/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-amber-200/60 dark:border-cyan-500/20 backdrop-blur-xl shadow-2xl hover:shadow-cyan-500/30 hover:border-cyan-400/60 dark:hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.02]">
                <div class="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div class="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-cyan-500/50 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                      Academic Background
                    </h3>
                    <div class="h-0.5 sm:h-1 w-16 sm:w-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                  </div>
                </div>
                <div class="space-y-3 sm:space-y-4 md:space-y-5 text-sm sm:text-base md:text-lg text-slate-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    Currently pursuing <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400">Computer Engineering</span> at 
                    <span class="font-bold text-slate-900 dark:text-white"> General Sir John Kotelawala Defence University</span>, 
                    where I am developing expertise in building transformative digital solutions that bridge innovative engineering principles with real world applications.
                  </p>
                  <p>
                    My academic foundation was established at <span class="font-semibold text-slate-900 dark:text-white">Maris Stella College, Negombo</span>, 
                    where I cultivated a deep passion for technology and systematic problem solving that continues to drive my professional journey.
                  </p>
                </div>
              </div>

              <!-- Technical Excellence Card -->
              <div class="group bg-gradient-to-br from-white to-green-50/30 dark:from-slate-900/80 dark:to-slate-800/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-amber-200/60 dark:border-green-500/20 backdrop-blur-xl shadow-2xl hover:shadow-green-500/30 hover:border-green-400/60 dark:hover:border-green-400/50 transition-all duration-500 hover:scale-[1.02]">
                <div class="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div class="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/50 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 transition-all duration-300">
                      Technical Expertise
                    </h3>
                    <div class="h-0.5 sm:h-1 w-16 sm:w-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                  </div>
                </div>
                <div class="space-y-3 sm:space-y-4 md:space-y-5 text-sm sm:text-base md:text-lg text-slate-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    My passion lies at the intersection of <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">Artificial Intelligence</span>, 
                    <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400"> Machine Learning</span>, and 
                    <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600 dark:from-cyan-400 dark:to-teal-400"> Full Stack Development</span>. 
                    I specialize in architecting intelligent systems that seamlessly integrate into real world scenarios, enhancing efficiency, empowering decision making, and elevating user experiences.
                  </p>
                  <p>
                    Through diverse academic initiatives and personal projects, I have developed comprehensive expertise in 
                    <span class="font-semibold text-slate-900 dark:text-white">modern software architecture</span>, 
                    <span class="font-semibold text-slate-900 dark:text-white">scalable system design</span>, and 
                    <span class="font-semibold text-slate-900 dark:text-white">user centric interface development</span>, 
                    consistently delivering solutions that blend technical excellence with intuitive design.
                  </p>
                </div>
              </div>
            </div>

            <!-- Enhanced Sidebar -->
            <div class="space-y-6 md:space-y-8">
              <!-- Profile Highlights Card -->
              <div class="relative group bg-gradient-to-br from-blue-600 via-cyan-600 to-green-600 dark:from-blue-500 dark:via-cyan-500 dark:to-green-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-2xl shadow-cyan-500/40 overflow-hidden hover:shadow-cyan-500/60 transition-all duration-500 hover:scale-[1.02]">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="relative z-10">
                  <div class="flex items-center gap-2 mb-4 sm:mb-6">
                    <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <h3 class="text-lg sm:text-xl md:text-2xl font-extrabold">Profile Highlights</h3>
                  </div>
                  <div class="space-y-3 sm:space-y-4 md:space-y-5">
                    <div class="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                      <svg class="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                      </svg>
                      <div>
                        <p class="font-bold text-sm sm:text-base">Location</p>
                        <p class="text-blue-100 text-xs sm:text-sm mt-0.5 sm:mt-1">Negombo, Sri Lanka</p>
                      </div>
                    </div>
                    <div class="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                      <svg class="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                      </svg>
                      <div>
                        <p class="font-bold text-sm sm:text-base">University</p>
                        <p class="text-blue-100 text-xs sm:text-sm mt-0.5 sm:mt-1">KDU Computer Engineering</p>
                      </div>
                    </div>
                    <div class="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                      <svg class="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                      </svg>
                      <div>
                        <p class="font-bold text-sm sm:text-base">Academic Year</p>
                        <p class="text-blue-100 text-xs sm:text-sm mt-0.5 sm:mt-1">4th Year Undergraduate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Passions & Interests Card -->
              <div class="group bg-gradient-to-br from-white to-cyan-50/50 dark:from-slate-900/90 dark:to-slate-800/70 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-amber-200/60 dark:border-slate-700 backdrop-blur-xl shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-400/60 transition-all duration-500 hover:scale-[1.02]">
                <div class="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                  <div class="p-2 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg">
                    <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <h3 class="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">Beyond Technology</h3>
                </div>
                <div class="space-y-3 sm:space-y-4">
                  <p class="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-relaxed">
                    Active <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">badminton athlete</span> 🏸 
                  </p>
                  <p class="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                    Athletics has instilled in me <span class="font-semibold text-slate-900 dark:text-white">unwavering discipline</span>, 
                    <span class="font-semibold text-slate-900 dark:text-white">collaborative teamwork</span>, and 
                    <span class="font-semibold text-slate-900 dark:text-white">resilient perseverance</span>—core values that fundamentally shape my approach to solving complex engineering challenges.
                  </p>
                </div>
              </div>

              <!-- Career Opportunities Card -->
              <div class="relative group bg-gradient-to-br from-green-50 to-emerald-50 dark:from-emerald-900/30 dark:to-green-900/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-green-400/50 dark:border-green-500/40 backdrop-blur-xl shadow-2xl hover:shadow-green-500/30 transition-all duration-500 overflow-hidden hover:scale-[1.02]">
                <div class="absolute top-0 right-0 w-32 h-32 bg-green-400/20 rounded-full blur-3xl"></div>
                <div class="relative z-10">
                  <div class="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <span class="relative flex h-3 w-3 sm:h-4 sm:w-4">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-3 w-3 sm:h-4 sm:w-4 bg-green-500 shadow-lg shadow-green-500/50"></span>
                    </span>
                    <h3 class="text-base sm:text-lg md:text-xl font-extrabold text-slate-900 dark:text-white">Available for Opportunities</h3>
                  </div>
                  <p class="text-xs sm:text-sm text-slate-700 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4">
                    Actively seeking <span class="font-bold text-green-700 dark:text-green-400">collaborative ventures</span>, 
                    <span class="font-bold text-green-700 dark:text-green-400">internship programs</span>, and 
                    <span class="font-bold text-green-700 dark:text-green-400">innovative projects</span> in:
                  </p>
                  <div class="flex flex-wrap gap-1.5 sm:gap-2">
                    <span class="px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg">Software Engineering</span>
                    <span class="px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-green-500 to-green-600 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg">AI & ML</span>
                    <span class="px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg">Product Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Professional Profile Photo -->
          <div class="flex justify-center mt-10 sm:mt-12 md:mt-16">
            <div class="relative group">
              <!-- Animated Gradient Border -->
              <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-green-600 dark:from-blue-500 dark:via-cyan-500 dark:to-green-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500 animate-gradient"></div>
              
              <!-- Image Container -->
              <div class="relative bg-white dark:bg-slate-900 rounded-2xl p-1.5">
                <img 
                  src="assets/images/photo_2025-12-16_16-31-51.jpg" 
                  alt="Randeepa Ariyawansa - Professional Profile" 
                  class="relative w-36 h-auto sm:w-40 sm:h-auto md:w-48 md:h-auto lg:w-56 lg:h-auto rounded-xl object-contain shadow-xl group-hover:scale-105 transition-transform duration-500"
                />
                
                <!-- Subtle Overlay on Hover -->
                <div class="absolute inset-1.5 rounded-xl bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Resume Section -->
      <section id="resume" class="section-transition py-24 relative overflow-hidden">
        <!-- Subtle Background Elements -->
        <div class="absolute inset-0 opacity-30">
          <div class="absolute top-10 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 dark:from-blue-600/30 dark:to-cyan-600/30 rounded-full blur-3xl"></div>
          <div class="absolute bottom-10 right-1/4 w-80 h-80 bg-gradient-to-tl from-green-400/20 to-emerald-400/20 dark:from-green-600/30 dark:to-emerald-600/30 rounded-full blur-3xl"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl">
          <!-- Section Header -->
          <div class="text-center mb-10 sm:mb-12 md:mb-16">
            <div class="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-800/80 dark:to-slate-700/80 border-2 border-cyan-400/40 dark:border-cyan-500/40 backdrop-blur-xl shadow-2xl shadow-cyan-500/20">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 dark:text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/>
              </svg>
              <span class="text-xs sm:text-sm font-extrabold uppercase tracking-wider sm:tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 dark:from-cyan-400 dark:to-green-400">Professional Profile</span>
            </div>
            <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-amber-950 dark:text-white mb-4 sm:mb-6 leading-tight px-4">
              Resume
            </h2>
            <p class="text-sm sm:text-base md:text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
              Explore my academic background, technical expertise, and project experience. Download my CV for a detailed overview.
            </p>

            <!-- Download CV Button -->
            <a 
              href="assets/cv/Randeepa_Ariyawansa_CV.pdf" 
              download="Randeepa_Ariyawansa_CV.pdf"
              class="group inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 dark:from-blue-500 dark:to-cyan-500 dark:hover:from-blue-600 dark:hover:to-cyan-600 text-white font-bold rounded-xl sm:rounded-2xl shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-500/60 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <svg class="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              <span class="text-sm sm:text-base md:text-lg">Download CV</span>
            </a>
          </div>

          <!-- Favourite Tools & Technologies -->
          <div class="mt-12 sm:mt-16 md:mt-20">
            <div class="text-center mb-8 sm:mb-10 md:mb-12 px-4">
              <h3 class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
                Favourite
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 dark:from-cyan-400 dark:to-green-400"> Tools & Technologies</span>
              </h3>
              <div class="h-1 w-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto"></div>
            </div>

            <!-- Tools Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 sm:gap-4 md:gap-6">
              <!-- React -->
              <div class="group bg-white/90 dark:bg-slate-900/70 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-amber-200/60 dark:border-slate-800 backdrop-blur-md shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-blue-500/20 hover:border-blue-400/60 hover:scale-110 transition-all duration-300">
                <div class="flex flex-col items-center gap-2 sm:gap-3">
                  <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" class="w-full h-full" fill="#61DAFB">
                      <circle cx="12" cy="12" r="2.5"/>
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" opacity="0.3"/>
                      <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" stroke-width="1"/>
                      <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" stroke-width="1" transform="rotate(60 12 12)"/>
                      <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" stroke-width="1" transform="rotate(120 12 12)"/>
                    </svg>
                  </div>
                  <p class="text-xs sm:text-sm font-bold text-slate-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-center">React</p>
                </div>
              </div>

              <!-- Next.js -->
              <div class="group bg-white/90 dark:bg-slate-900/70 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-amber-200/60 dark:border-slate-800 backdrop-blur-md shadow-lg hover:shadow-2xl hover:shadow-slate-500/30 dark:hover:shadow-slate-500/20 hover:border-slate-400/60 hover:scale-110 transition-all duration-300">
                <div class="flex flex-col items-center gap-2 sm:gap-3">
                  <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" class="w-full h-full dark:invert">
                      <path d="M11.572 0a12 12 0 0 0-12 12 12 12 0 0 0 12 12 12 12 0 0 0 12-12 12 12 0 0 0-12-12zm3.482 7.424l-6.606 9.232h-1.664l7.035-9.232h1.235zm-2.117 0L7.424 14.07V7.424h1.664v4.688l3.27-4.688h1.579z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p class="text-xs sm:text-sm font-bold text-slate-700 dark:text-gray-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors text-center">Next.js</p>
                </div>
              </div>

              <!-- Node.js -->
              <div class="group bg-white/90 dark:bg-slate-900/70 rounded-2xl p-6 border-2 border-amber-200/60 dark:border-slate-800 backdrop-blur-md shadow-lg hover:shadow-2xl hover:shadow-green-500/30 dark:hover:shadow-green-500/20 hover:border-green-400/60 hover:scale-110 transition-all duration-300">
                <div class="flex flex-col items-center gap-3">
                  <div class="w-16 h-16 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" class="w-full h-full" fill="#339933">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.5c-5.238 0-9.5-4.262-9.5-9.5S6.762 2.5 12 2.5s9.5 4.262 9.5 9.5-4.262 9.5-9.5 9.5z"/>
                      <path d="M12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z"/>
                    </svg>
                  </div>
                  <p class="text-sm font-bold text-slate-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Node.js</p>
                </div>
              </div>

              <!-- PHP -->
              <div class="group bg-white/90 dark:bg-slate-900/70 rounded-2xl p-6 border-2 border-amber-200/60 dark:border-slate-800 backdrop-blur-md shadow-lg hover:shadow-2xl hover:shadow-indigo-500/30 dark:hover:shadow-indigo-500/20 hover:border-indigo-400/60 hover:scale-110 transition-all duration-300">
                <div class="flex flex-col items-center gap-3">
                  <div class="w-16 h-16 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" class="w-full h-full" fill="#777BB4">
                      <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.551.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174h-.813l-.69 3.624H9.667l1.23-6.326h1.377l-.383 1.97h.932c.706 0 1.201.149 1.486.448.285.299.358.747.217 1.343l-.608 3.12h-1.382zm4.876-3.736c.045-.233.061-.467.048-.702-.013-.235-.08-.458-.201-.667-.121-.21-.318-.381-.59-.514-.272-.133-.661-.199-1.168-.199h-1.824l-1.23 6.326h1.377l.47-2.41h.827l.444 2.41h1.484l-.614-2.729a1.8 1.8 0 0 0 .555-.338c.169-.154.31-.34.421-.56.111-.219.185-.453.221-.7z"/>
                    </svg>
                  </div>
                  <p class="text-sm font-bold text-slate-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">PHP</p>
                </div>
              </div>

              <!-- MongoDB -->
              <div class="group bg-white/90 dark:bg-slate-900/70 rounded-2xl p-6 border-2 border-amber-200/60 dark:border-slate-800 backdrop-blur-md shadow-lg hover:shadow-2xl hover:shadow-green-500/30 dark:hover:shadow-green-500/20 hover:border-green-400/60 hover:scale-110 transition-all duration-300">
                <div class="flex flex-col items-center gap-3">
                  <div class="w-16 h-16 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" class="w-full h-full" fill="#47A248">
                      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
                    </svg>
                  </div>
                  <p class="text-sm font-bold text-slate-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">MongoDB</p>
                </div>
              </div>

              <!-- MySQL -->
              <div class="group bg-white/90 dark:bg-slate-900/70 rounded-2xl p-6 border-2 border-amber-200/60 dark:border-slate-800 backdrop-blur-md shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-blue-500/20 hover:border-blue-400/60 hover:scale-110 transition-all duration-300">
                <div class="flex flex-col items-center gap-3">
                  <div class="w-16 h-16 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" class="w-full h-full" fill="#4479A1">
                      <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.416 1.22-.416.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"/>
                    </svg>
                  </div>
                  <p class="text-xs sm:text-sm font-bold text-slate-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-center">React</p>
                </div>
              </div>

              <!-- Git -->
              <div class="group bg-white/90 dark:bg-slate-900/70 rounded-2xl p-6 border-2 border-amber-200/60 dark:border-slate-800 backdrop-blur-md shadow-lg hover:shadow-2xl hover:shadow-orange-500/30 dark:hover:shadow-orange-500/20 hover:border-orange-400/60 hover:scale-110 transition-all duration-300">
                <div class="flex flex-col items-center gap-3">
                  <div class="w-16 h-16 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" class="w-full h-full" fill="#F05032">
                      <path d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.341l2.658 2.66a1.838 1.838 0 011.947 2.966 1.838 1.838 0 11-2.584-2.584l-2.48-2.48v6.522a1.838 1.838 0 11-1.456-.117V8.216a1.838 1.838 0 01-.998-2.407L7.17 3.094.452 9.812a1.55 1.55 0 000 2.188l10.478 10.478a1.55 1.55 0 002.188 0l10.428-10.43a1.55 1.55 0 000-2.188"/>
                    </svg>
                  </div>
                  <p class="text-sm font-bold text-slate-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">Git</p>
                </div>
              </div>

              <!-- GitHub -->
              <div class="group bg-white/90 dark:bg-slate-900/70 rounded-2xl p-6 border-2 border-amber-200/60 dark:border-slate-800 backdrop-blur-md shadow-lg hover:shadow-2xl hover:shadow-slate-500/30 dark:hover:shadow-slate-500/20 hover:border-slate-400/60 hover:scale-110 transition-all duration-300">
                <div class="flex flex-col items-center gap-3">
                  <div class="w-16 h-16 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" class="w-full h-full dark:invert">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p class="text-sm font-bold text-slate-700 dark:text-gray-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">GitHub</p>
                </div>
              </div>

              <!-- Docker -->
              <div class="group bg-white/90 dark:bg-slate-900/70 rounded-2xl p-6 border-2 border-amber-200/60 dark:border-slate-800 backdrop-blur-md shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-blue-500/20 hover:border-blue-400/60 hover:scale-110 transition-all duration-300">
                <div class="flex flex-col items-center gap-3">
                  <div class="w-16 h-16 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" class="w-full h-full" fill="#2496ED">
                      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.087-.239-1.232-.994-2.223-2.211-2.912.162-.234.24-.455.24-.681 0-.309-.114-.597-.339-.834a1.163 1.163 0 00-.854-.368c-.371 0-.711.185-.961.538-.386.544-.567 1.395-.567 2.686 0 .113.008.229.021.346l-.134-.027a3.67 3.67 0 00-.665-.052c-1.102 0-2.069.37-2.87 1.096-.447.409-.8.865-1.031 1.332-.17-.02-.34-.034-.515-.034-1.842 0-3.337.989-4.458 2.947a7.812 7.812 0 00-.838 3.582c0 1.13.272 2.193.813 3.166 1.028 1.849 2.679 2.783 4.904 2.783h12.24c1.143 0 2.105-.269 2.86-.798.982-.686 1.478-1.631 1.478-2.811 0-.681-.131-1.274-.395-1.782A5.08 5.08 0 0023.763 9.89"/>
                    </svg>
                  </div>
                  <p class="text-sm font-bold text-slate-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Docker</p>
                </div>
              </div>

              <!-- Arduino -->
              <div class="group bg-white/90 dark:bg-slate-900/70 rounded-2xl p-6 border-2 border-amber-200/60 dark:border-slate-800 backdrop-blur-md shadow-lg hover:shadow-2xl hover:shadow-teal-500/30 dark:hover:shadow-teal-500/20 hover:border-teal-400/60 hover:scale-110 transition-all duration-300">
                <div class="flex flex-col items-center gap-3">
                  <div class="w-16 h-16 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" class="w-full h-full" fill="#00979D">
                      <path d="M23.82 12c0 6.518-5.302 11.82-11.82 11.82S.18 18.518.18 12 5.482.18 12 .18 23.82 5.482 23.82 12zm-3.245 0c0-4.748-3.827-8.575-8.575-8.575-4.748 0-8.575 3.827-8.575 8.575 0 4.748 3.827 8.575 8.575 8.575 4.748 0 8.575-3.827 8.575-8.575zM10.34 9.18h-.93v2.34H7.14v.93h2.34v2.34h.93v-2.34h2.34v-.93h-2.34zm5.338.93h3.27v-.93h-3.27z"/>
                    </svg>
                  </div>
                  <p class="text-sm font-bold text-slate-700 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Arduino</p>
                </div>
              </div>

              <!-- VS Code -->
              <div class="group bg-white/90 dark:bg-slate-900/70 rounded-2xl p-6 border-2 border-amber-200/60 dark:border-slate-800 backdrop-blur-md shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-blue-500/20 hover:border-blue-400/60 hover:scale-110 transition-all duration-300">
                <div class="flex flex-col items-center gap-3">
                  <div class="w-16 h-16 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" class="w-full h-full" fill="#007ACC">
                      <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
                    </svg>
                  </div>
                  <p class="text-sm font-bold text-slate-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">VS Code</p>
                </div>
              </div>

              <!-- Cursor -->
              <div class="group bg-white/90 dark:bg-slate-900/70 rounded-2xl p-6 border-2 border-amber-200/60 dark:border-slate-800 backdrop-blur-md shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 dark:hover:shadow-purple-500/20 hover:border-purple-400/60 hover:scale-110 transition-all duration-300">
                <div class="flex flex-col items-center gap-3">
                  <div class="w-16 h-16 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" class="w-full h-full" fill="#000" class="dark:invert">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm-1 5v10l8-5-8-5z"/>
                    </svg>
                  </div>
                  <p class="text-sm font-bold text-slate-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Cursor</p>
                </div>
              </div>

              <!-- Shotcut -->
              <div class="group bg-white/90 dark:bg-slate-900/70 rounded-2xl p-6 border-2 border-amber-200/60 dark:border-slate-800 backdrop-blur-md shadow-lg hover:shadow-2xl hover:shadow-indigo-500/30 dark:hover:shadow-indigo-500/20 hover:border-indigo-400/60 hover:scale-110 transition-all duration-300">
                <div class="flex flex-col items-center gap-3">
                  <div class="w-16 h-16 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" class="w-full h-full" fill="#3F51B5">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 1.5L20 7.5v9.5c0 4.52-3.13 8.75-8 10-4.87-1.25-8-5.48-8-10V7.5l8-4zM10 9v6l5-3-5-3z"/>
                    </svg>
                  </div>
                  <p class="text-sm font-bold text-slate-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Shotcut</p>
                </div>
              </div>

              <!-- OBS Studio -->
              <div class="group bg-white/90 dark:bg-slate-900/70 rounded-2xl p-6 border-2 border-amber-200/60 dark:border-slate-800 backdrop-blur-md shadow-lg hover:shadow-2xl hover:shadow-slate-500/30 dark:hover:shadow-slate-500/20 hover:border-slate-400/60 hover:scale-110 transition-all duration-300">
                <div class="flex flex-col items-center gap-3">
                  <div class="w-16 h-16 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" class="w-full h-full" fill="#302E31">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zM8.5 7A1.5 1.5 0 0 0 7 8.5v7A1.5 1.5 0 0 0 8.5 17h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 15.5 7h-7zm.5 2h6v6H9V9z"/>
                    </svg>
                  </div>
                  <p class="text-sm font-bold text-slate-700 dark:text-gray-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">OBS Studio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Contact Section -->
      <section id="contact" class="section-transition min-h-screen py-24 relative">
        <div class="relative z-10 container mx-auto px-6 lg:px-12 max-w-5xl">
          <!-- Section Header -->
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2.5 px-5 py-2.5 mb-8 rounded-full bg-amber-100/80 dark:bg-slate-800/60 border border-cyan-500/30 backdrop-blur-md shadow-lg shadow-cyan-500/10">
              <svg class="w-4 h-4 text-cyan-600 dark:text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <span class="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-300">Get In Touch</span>
            </div>
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-950 dark:text-white mb-6 leading-tight">
              Let's
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-400 dark:to-green-400"> Connect</span>
            </h2>
            <p class="text-lg md:text-xl text-amber-800 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <!-- Contact Cards Grid -->
          <div class="grid md:grid-cols-3 gap-6 mb-12">
            <!-- Phone Card -->
            <a href="tel:+94740904523" class="group bg-white/90 dark:bg-slate-900/50 rounded-2xl p-8 border-2 border-amber-200/60 dark:border-slate-800 backdrop-blur-md shadow-lg shadow-amber-200/50 dark:shadow-cyan-500/10 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-400/30 dark:hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-500">
              <div class="flex flex-col items-center text-center">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-green-600 dark:from-blue-500 dark:to-green-500 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-green-600 dark:group-hover:from-blue-400 dark:group-hover:to-green-400 transition-all duration-300">Phone</h3>
                <p class="text-slate-700 dark:text-gray-300 font-medium">074 090 4523</p>
                <p class="text-xs text-slate-500 dark:text-gray-500 mt-2">Available 9 AM - 9 PM</p>
              </div>
            </a>

            <!-- Email Card -->
            <a href="mailto:avithariyawansa207@gmail.com" class="group bg-white/90 dark:bg-slate-900/50 rounded-2xl p-8 border-2 border-amber-200/60 dark:border-slate-800 backdrop-blur-md shadow-lg shadow-amber-200/50 dark:shadow-cyan-500/10 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-400/30 dark:hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-500">
              <div class="flex flex-col items-center text-center">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-green-600 dark:from-blue-500 dark:to-green-500 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-green-600 dark:group-hover:from-blue-400 dark:group-hover:to-green-400 transition-all duration-300">Email</h3>
                <p class="text-slate-700 dark:text-gray-300 font-medium text-sm break-all">avithariyawansa207&#64;gmail.com</p>
                <p class="text-xs text-slate-500 dark:text-gray-500 mt-2">Preferred method</p>
              </div>
            </a>

            <!-- Location Card -->
            <div class="group bg-white/90 dark:bg-slate-900/50 rounded-2xl p-8 border-2 border-amber-200/60 dark:border-slate-800 backdrop-blur-md shadow-lg shadow-amber-200/50 dark:shadow-cyan-500/10 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-400/30 dark:hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-500">
              <div class="flex flex-col items-center text-center">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-green-600 dark:from-blue-500 dark:to-green-500 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-green-600 dark:group-hover:from-blue-400 dark:group-hover:to-green-400 transition-all duration-300">Location</h3>
                <p class="text-slate-700 dark:text-gray-300 font-medium">Negombo, Sri Lanka</p>
                <p class="text-xs text-slate-500 dark:text-gray-500 mt-2">Open to remote work</p>
              </div>
            </div>
          </div>

          <!-- CTA Section -->
          <div class="bg-gradient-to-br from-blue-600 to-green-600 dark:from-blue-500 dark:to-green-500 rounded-2xl p-12 text-white text-center shadow-2xl shadow-cyan-500/30">
            <h3 class="text-3xl md:text-4xl font-bold mb-4">Ready to Start a Conversation?</h3>
            <p class="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Whether you have a project in mind or just want to chat about technology, I'd love to hear from you.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:avithariyawansa207@gmail.com" class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-cyan-700 font-semibold rounded-xl hover:bg-amber-50 hover:scale-105 transition-all duration-300 shadow-xl">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Send Email
              </a>
              <a href="tel:+94740904523" class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="relative py-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border-t border-amber-200/40 dark:border-slate-800">
        <div class="container mx-auto px-4 sm:px-6 lg:px-12">
          <div class="text-center">
            <p class="text-sm md:text-base text-slate-600 dark:text-gray-400">
              © 2025 Randeepa Ariyawansa. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      position: relative;
    }

    section {
      scroll-margin-top: 80px;
      transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
    }

    .section-transition {
      opacity: 1;
      transform: translateY(0);
    }

    @keyframes float-slow {
      0%, 100% {
        transform: translate(0, 0) scale(1);
      }
      33% {
        transform: translate(30px, -30px) scale(1.05);
      }
      66% {
        transform: translate(-20px, 20px) scale(0.95);
      }
    }

    @keyframes float-slower {
      0%, 100% {
        transform: translate(0, 0) scale(1);
      }
      33% {
        transform: translate(-25px, 25px) scale(1.03);
      }
      66% {
        transform: translate(20px, -20px) scale(0.97);
      }
    }

    .animate-float-slow {
      animation: float-slow 20s ease-in-out infinite;
    }

    .animate-float-slower {
      animation: float-slower 25s ease-in-out infinite;
    }
  `]
})
export class AppComponent {
  title = 'portfolio-frontend';
}
