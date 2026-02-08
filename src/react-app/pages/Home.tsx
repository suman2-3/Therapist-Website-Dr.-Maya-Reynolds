import { Button } from "@/react-app/components/ui/button";
import { FAQAccordion } from "@/react-app/components/FAQAccordion";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f0ed]">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-neutral-200/50">
        <div className="max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-[1800px] 4xl:max-w-[2200px] mx-auto px-6 2xl:px-12 3xl:px-16 py-5 2xl:py-6 3xl:py-8 flex items-center justify-between">
          <h1 className="text-3xl 2xl:text-4xl 3xl:text-5xl font-bold text-neutral-800" style={{ fontFamily: 'Crimson Pro, serif' }}>
            Dr. Maya Reynolds
          </h1>
          <nav className="flex items-center gap-12 2xl:gap-16 3xl:gap-20 ml-auto">
            <a href="#demo" className="text-neutral-700 hover:text-neutral-900 transition-colors 2xl:text-lg 3xl:text-xl">
              Demo
            </a>
            <a href="#blog" className="text-neutral-700 hover:text-neutral-900 transition-colors 2xl:text-lg 3xl:text-xl">
              Blog
            </a>
            <a href="#contact" className="text-neutral-700 hover:text-neutral-900 transition-colors 2xl:text-lg 3xl:text-xl">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-[1800px] 4xl:max-w-[2200px] mx-auto px-6 2xl:px-12 3xl:px-16 py-16 2xl:py-24 3xl:py-32">
        <div className="grid md:grid-cols-2 gap-12 2xl:gap-16 3xl:gap-24 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl -ml-16 2xl:-ml-24 3xl:-ml-32">
              <img
                src="./hero.jpeg"
                alt="Dr. Maya Reynolds"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6 2xl:space-y-8 3xl:space-y-10">
            <h2 
              className="text-5xl md:text-6xl 2xl:text-7xl 3xl:text-8xl text-neutral-800 leading-tight"
              style={{ fontFamily: 'Crimson Pro, serif' }}
            >
              Anxiety & Trauma
              <br />
              <span className="whitespace-nowrap">Therapy in San Diego, CA</span>
            </h2>

            <p className="text-lg 2xl:text-xl 3xl:text-2xl text-neutral-700 leading-relaxed">
              Helping you heal with compassion and understanding.
            </p>

            <p className="text-neutral-700 leading-relaxed 2xl:text-lg 3xl:text-xl 3xl:leading-relaxed">
              Hi, I'm Dr. Maya Reynolds, a licensed clinical psychologist here to support your journey toward healing and growth. Whether you're struggling with anxiety, trauma, or major life changes, I provide a safe and empathetic space where you can regain balance, find clarity, and build a more resilient self.
            </p>

            <div className="pt-4 2xl:pt-6">
              <Button 
                size="lg"
                className="bg-[#a88860] hover:bg-[#967853] text-white px-8 2xl:px-10 3xl:px-12 py-6 2xl:py-7 3xl:py-8 text-base 2xl:text-lg 3xl:text-xl rounded-md shadow-lg"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="py-20 2xl:py-28 3xl:py-36 relative overflow-hidden">
        <div className="max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-[1800px] 4xl:max-w-[2200px] mx-auto px-6 2xl:px-12 3xl:px-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 2xl:gap-16 3xl:gap-24 items-center">
            {/* Left: Content */}
            <div className="space-y-6 2xl:space-y-8 3xl:space-y-10">
              <h2 
                className="text-5xl md:text-6xl 2xl:text-7xl 3xl:text-8xl text-neutral-800 leading-tight"
                style={{ fontFamily: 'Crimson Pro, serif' }}
              >
                Create a Life That Feels Steadier and More Manageable
              </h2>

              <p className="text-neutral-700 leading-relaxed 2xl:text-lg 3xl:text-xl">
                Life can feel overwhelming—especially when anxiety, unresolved trauma, or major life changes begin to affect your sense of stability. You may find yourself functioning on the outside while feeling exhausted or disconnected on the inside. Therapy can offer a space to slow down, understand what's happening beneath the surface, and develop practical tools for navigating life with greater clarity and self-compassion. You don't have to carry it as your own.
              </p>

              <div className="pt-4 2xl:pt-6">
                <Button 
                  size="lg"
                  className="bg-[#a88860] hover:bg-[#967853] text-white px-8 2xl:px-10 3xl:px-12 py-6 2xl:py-7 3xl:py-8 text-base 2xl:text-lg 3xl:text-xl rounded-md shadow-lg"
                >
                  Begin Your Healing Journey
                </Button>
              </div>
            </div>

            {/* Right: Diagonal Image Section */}
            <div className="relative">
              <div className="aspect-[4/3]"></div>
            </div>
          </div>
        </div>

        {/* Diagonal Background Image - extends to edge */}
        <div 
          className="absolute top-0 right-0 w-[55%] 2xl:w-[50%] 3xl:w-[45%] h-full"
          style={{
            clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)',
            background: '#1a1a2e'
          }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <div 
              className="w-96 h-96 2xl:w-[450px] 2xl:h-[450px] 3xl:w-[550px] 3xl:h-[550px] overflow-hidden"
              style={{
                transform: 'rotate(45deg)'
              }}
            >
              <img
                src="./diagonal-background.jpeg"
                alt="Woman in contemplation"
                className="w-full h-full object-cover"
                style={{
                  transform: 'rotate(-45deg) scale(1.4)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 2xl:py-28 3xl:py-36">
        <div className="max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-[1800px] 4xl:max-w-[2200px] mx-auto px-6 2xl:px-12 3xl:px-16">
          <h2 
            className="text-5xl md:text-6xl 2xl:text-7xl 3xl:text-8xl text-neutral-800 text-center mb-16 2xl:mb-20 3xl:mb-24"
            style={{ fontFamily: 'Crimson Pro, serif' }}
          >
            My Specialties
          </h2>

          <div className="grid md:grid-cols-3 gap-8 2xl:gap-12 3xl:gap-16">
            {/* Anxiety Therapy Card */}
            <div className="bg-white/40 backdrop-blur-sm border border-neutral-200/50 rounded-lg p-8 2xl:p-10 3xl:p-12 flex flex-col items-center text-center">
              <div className="w-64 h-64 2xl:w-72 2xl:h-72 3xl:w-80 3xl:h-80 rounded-full overflow-hidden mb-6 2xl:mb-8 shadow-lg">
                <img
                  src="./s1.jpeg"
                  alt="Anxiety Therapy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 
                className="text-3xl 2xl:text-4xl 3xl:text-5xl text-neutral-800 mb-4 2xl:mb-6"
                style={{ fontFamily: 'Crimson Pro, serif' }}
              >
                Anxiety Therapy
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-6 2xl:mb-8 flex-grow 2xl:text-lg 3xl:text-xl">
                Find relief from persistent worry, panic attacks, or overwhelming stress. Together, we'll work to calm your mind and regain a sense of control.
              </p>
              <Button 
                className="bg-[#a88860] hover:bg-[#967853] text-white px-8 2xl:px-10 py-3 2xl:py-4 rounded-md 2xl:text-lg"
              >
                Learn More
              </Button>
            </div>

            {/* Trauma Therapy Card */}
            <div className="bg-white/40 backdrop-blur-sm border border-neutral-200/50 rounded-lg p-8 2xl:p-10 3xl:p-12 flex flex-col items-center text-center">
              <div className="w-64 h-64 2xl:w-72 2xl:h-72 3xl:w-80 3xl:h-80 rounded-full overflow-hidden mb-6 2xl:mb-8 shadow-lg">
                <img
                  src="./s2.jpeg"
                  alt="Trauma Therapy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 
                className="text-3xl 2xl:text-4xl 3xl:text-5xl text-neutral-800 mb-4 2xl:mb-6"
                style={{ fontFamily: 'Crimson Pro, serif' }}
              >
                Trauma Therapy
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-6 2xl:mb-8 flex-grow 2xl:text-lg 3xl:text-xl">
                Heal from past trauma with EMDR and trauma-focused therapies. We'll process your experiences at your pace in a safe, supportive environment.
              </p>
              <Button 
                className="bg-[#a88860] hover:bg-[#967853] text-white px-8 2xl:px-10 py-3 2xl:py-4 rounded-md 2xl:text-lg"
              >
                Learn More
              </Button>
            </div>

            {/* Life Transitions Card */}
            <div className="bg-white/40 backdrop-blur-sm border border-neutral-200/50 rounded-lg p-8 2xl:p-10 3xl:p-12 flex flex-col items-center text-center">
              <div className="w-64 h-64 2xl:w-72 2xl:h-72 3xl:w-80 3xl:h-80 rounded-full overflow-hidden mb-6 2xl:mb-8 shadow-lg">
                <img
                  src="./s3.jpeg"
                  alt="Life Transitions Counseling"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 
                className="text-3xl 2xl:text-4xl 3xl:text-5xl text-neutral-800 mb-4 2xl:mb-6"
                style={{ fontFamily: 'Crimson Pro, serif' }}
              >
                Life Transitions Counseling
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-6 2xl:mb-8 flex-grow 2xl:text-lg 3xl:text-xl">
                Navigate major life changes such as career shifts, relationship transitions, or loss. I'll help you find clarity and develop strategies for moving forward.
              </p>
              <Button 
                className="bg-[#a88860] hover:bg-[#967853] text-white px-8 2xl:px-10 py-3 2xl:py-4 rounded-md 2xl:text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* You Don't Have to Do This Alone Section */}
      <section className="py-20 2xl:py-28 3xl:py-36">
        <div className="max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-[1800px] 4xl:max-w-[2200px] mx-auto px-6 2xl:px-12 3xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 2xl:gap-16 3xl:gap-24 items-center">
            {/* Left: Image */}
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="./alone.jpeg"
                  alt="Therapy session"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-6 2xl:space-y-8 3xl:space-y-10">
              <h2 
                className="text-5xl md:text-6xl 2xl:text-7xl 3xl:text-8xl text-neutral-800 leading-tight"
                style={{ fontFamily: 'Crimson Pro, serif' }}
              >
                You don't have to do this all alone.
              </h2>

              <p className="text-lg 2xl:text-xl 3xl:text-2xl text-neutral-700">
                If you are facing any of these, there's hope:
              </p>

              <div className="space-y-4 2xl:space-y-5 3xl:space-y-6">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 text-[#a88860] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-neutral-700 2xl:text-lg 3xl:text-xl">Persistent feelings of sadness or hopelessness</p>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 text-[#a88860] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-neutral-700 2xl:text-lg 3xl:text-xl">Constant anxiety or feelings of panic</p>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 text-[#a88860] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-neutral-700 2xl:text-lg 3xl:text-xl">Difficulty coping with past trauma</p>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 text-[#a88860] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-neutral-700 2xl:text-lg 3xl:text-xl">Struggles with low self-esteem</p>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 text-[#a88860] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-neutral-700 2xl:text-lg 3xl:text-xl">A sense of overwhelm navigating life changes</p>
                </div>
              </div>

              <p className="text-neutral-700 leading-relaxed pt-4 2xl:text-lg 3xl:text-xl">
                With empathy and guidance, we'll work together to find a path forward.
              </p>

              <div className="pt-4 2xl:pt-6">
                <Button 
                  size="lg"
                  className="bg-[#a88860] hover:bg-[#967853] text-white px-8 2xl:px-10 3xl:px-12 py-6 2xl:py-7 3xl:py-8 text-base 2xl:text-lg 3xl:text-xl rounded-md shadow-lg"
                >
                  Contact Me Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="py-20 2xl:py-28 3xl:py-36">
        <div className="max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-[1800px] 4xl:max-w-[2200px] mx-auto px-6 2xl:px-12 3xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 2xl:gap-16 3xl:gap-24 items-center">
            {/* Left: Content */}
            <div className="space-y-8 2xl:space-y-10 3xl:space-y-12">
              <div>
                <h2 
                  className="text-5xl md:text-6xl 2xl:text-7xl 3xl:text-8xl text-neutral-800 mb-6 2xl:mb-8"
                  style={{ fontFamily: 'Crimson Pro, serif' }}
                >
                  My Approach
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-2 2xl:text-lg 3xl:text-xl">
                  As a licensed clinical psychologist, I bring empathy, expertise,
                </p>
                <p className="text-neutral-700 leading-relaxed mb-4 2xl:text-lg 3xl:text-xl">
                  and a personalized approach to each therapy session.
                </p>
                <p className="text-neutral-700 leading-relaxed 2xl:text-lg 3xl:text-xl">
                  Here's what you can expect when you work with me:
                </p>
              </div>

              {/* Feature Cards */}
              <div className="space-y-6 2xl:space-y-8">
                {/* Card 1 - Compassionate */}
                <div className="bg-white/30 backdrop-blur-sm border border-neutral-200/50 rounded-lg p-6 2xl:p-8 3xl:p-10 flex gap-6 2xl:gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 2xl:w-24 2xl:h-24 3xl:w-28 3xl:h-28 flex items-center justify-center">
                      <svg className="w-16 h-16 2xl:w-20 2xl:h-20 3xl:w-24 3xl:h-24 text-[#a88860]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 
                      className="text-2xl 2xl:text-3xl 3xl:text-4xl text-neutral-800 mb-2 2xl:mb-3"
                      style={{ fontFamily: 'Crimson Pro, serif' }}
                    >
                      Compassionate & Nonjudgmental
                    </h3>
                    <p className="text-neutral-700 leading-relaxed 2xl:text-lg 3xl:text-xl">
                      You'll be welcomed into a warm, caring environment where you can freely express yourself without fear of judgment.
                    </p>
                  </div>
                </div>

                {/* Card 2 - Evidence-Based */}
                <div className="bg-white/30 backdrop-blur-sm border border-neutral-200/50 rounded-lg p-6 2xl:p-8 3xl:p-10 flex gap-6 2xl:gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 2xl:w-24 2xl:h-24 3xl:w-28 3xl:h-28 flex items-center justify-center">
                      <svg className="w-16 h-16 2xl:w-20 2xl:h-20 3xl:w-24 3xl:h-24 text-[#a88860]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 
                      className="text-2xl 2xl:text-3xl 3xl:text-4xl text-neutral-800 mb-2 2xl:mb-3"
                      style={{ fontFamily: 'Crimson Pro, serif' }}
                    >
                      Evidence-Based Methods
                    </h3>
                    <p className="text-neutral-700 leading-relaxed 2xl:text-lg 3xl:text-xl">
                      I'll draw from proven techniques such as cognitive-behavioral therapy (CBT) and mindfulness to best meet your needs.
                    </p>
                  </div>
                </div>

                {/* Card 3 - Collaborative */}
                <div className="bg-white/30 backdrop-blur-sm border border-neutral-200/50 rounded-lg p-6 2xl:p-8 3xl:p-10 flex gap-6 2xl:gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 2xl:w-24 2xl:h-24 3xl:w-28 3xl:h-28 flex items-center justify-center">
                      <svg className="w-16 h-16 2xl:w-20 2xl:h-20 3xl:w-24 3xl:h-24 text-[#a88860]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 
                      className="text-2xl 2xl:text-3xl 3xl:text-4xl text-neutral-800 mb-2 2xl:mb-3"
                      style={{ fontFamily: 'Crimson Pro, serif' }}
                    >
                      Collaborative & Goal-Oriented
                    </h3>
                    <p className="text-neutral-700 leading-relaxed 2xl:text-lg 3xl:text-xl">
                      We'll work together to set meaningful goals and create a clear path toward healing and personal growth.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-neutral-700 leading-relaxed 2xl:text-lg 3xl:text-xl">
                My goal is to empower you with tools and insights that will foster lasting positive changes.
              </p>

              <div className="pt-2 2xl:pt-4">
                <Button 
                  size="lg"
                  className="bg-[#a88860] hover:bg-[#967853] text-white px-8 2xl:px-10 3xl:px-12 py-6 2xl:py-7 3xl:py-8 text-base 2xl:text-lg 3xl:text-xl rounded-md shadow-lg"
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>

            {/* Right: Portrait Image */}
            <div className="relative flex justify-center items-center">
              {/* Background decorative circles */}
              

              {/* Foreground portrait image */}
              <div className="relative z-10 w-[480px] h-[580px] 2xl:w-[580px] 2xl:h-[680px] 3xl:w-[680px] 3xl:h-[780px]">
                <img
                  src="./hero.jpeg"
                  alt="Dr. Maya Reynolds portrait"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters of Personal Life Section */}
      <section className="py-20 2xl:py-28 3xl:py-36">
        <div className="max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-[1800px] 4xl:max-w-[2200px] mx-auto px-6 2xl:px-12 3xl:px-16">
          <div className="grid md:grid-cols-2 gap-12 2xl:gap-16 3xl:gap-24 items-center">
            {/* Left: Content Card */}
            <div className="bg-[#f0e5dd]/60 backdrop-blur-sm rounded-2xl p-12 2xl:p-16 3xl:p-20 space-y-8 2xl:space-y-10 h-full">
              <div>
                <h2 
                  className="text-5xl md:text-6xl 2xl:text-7xl 3xl:text-8xl text-neutral-800 leading-tight mb-3 2xl:mb-4"
                  style={{ fontFamily: 'Crimson Pro, serif' }}
                >
                  Chapters of Personal Life
                </h2>
                <p 
                  className="text-2xl 2xl:text-3xl 3xl:text-4xl text-neutral-700"
                  style={{ fontFamily: 'Crimson Pro, serif' }}
                >
                  with Dr. Maya Reynolds
                </p>
              </div>

              <p className="text-neutral-700 leading-relaxed 2xl:text-lg 3xl:text-xl">
                Life transitions, emotional challenges, and past experiences can shape different "chapters" of our personal journey. I provide compassionate therapy to help you navigate these changes with understanding and resilience.
              </p>

              <div className="space-y-4 2xl:space-y-5 3xl:space-y-6">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 text-[#a88860] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-neutral-700 2xl:text-lg 3xl:text-xl">Navigating major life changes</p>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 text-[#a88860] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-neutral-700 2xl:text-lg 3xl:text-xl">Coping with anxiety and overwhelm</p>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 text-[#a88860] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-neutral-700 2xl:text-lg 3xl:text-xl">Healing from past trauma</p>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 text-[#a88860] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-neutral-700 2xl:text-lg 3xl:text-xl">Building self-esteem and resilience</p>
                </div>
              </div>

              <div className="pt-4 2xl:pt-6">
                <Button 
                  size="lg"
                  className="bg-[#a88860] hover:bg-[#967853] text-white px-8 2xl:px-10 3xl:px-12 py-6 2xl:py-7 3xl:py-8 text-base 2xl:text-lg 3xl:text-xl rounded-md shadow-lg"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right: Portrait Image */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=1067&fit=crop"
                  alt="Dr. Maya Reynolds"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Treatment Section */}
      <section className="py-20 2xl:py-28 3xl:py-36">
        <div className="max-w-6xl 2xl:max-w-7xl 3xl:max-w-screen-2xl mx-auto px-6 2xl:px-12 3xl:px-16">
          {/* Header */}
          <div className="text-center mb-12 2xl:mb-16 3xl:mb-20">
            <h2 
              className="text-5xl md:text-6xl 2xl:text-7xl 3xl:text-8xl text-neutral-800 mb-8 2xl:mb-10"
              style={{ fontFamily: 'Crimson Pro, serif' }}
            >
              Comprehensive Treatment with
              <br />
              Therapy & Medication
            </h2>
            <p className="text-neutral-700 leading-relaxed max-w-4xl 2xl:max-w-5xl mx-auto 2xl:text-lg 3xl:text-xl">
              Combining therapy and medication can be effective in providing the best outcomes, especially for those experiencing more severe symptoms. I offer guidance on medication in collaboration with psychiatrists to ensure a holistic approach to your mental health.
            </p>
          </div>

          {/* Divider with "or" */}
          <div className="flex items-center justify-center gap-4 my-12 2xl:my-16">
            <div className="flex-1 h-px bg-neutral-300"></div>
            <span 
              className="text-3xl 2xl:text-4xl 3xl:text-5xl text-neutral-700"
              style={{ fontFamily: 'Crimson Pro, serif' }}
            >
              or
            </span>
            <div className="flex-1 h-px bg-neutral-300"></div>
          </div>

          {/* Two Cards */}
          <div className="grid md:grid-cols-2 gap-8 2xl:gap-12 3xl:gap-16 mb-12 2xl:mb-16">
            {/* Left Card - Therapy and Medication Combined */}
            <div className="bg-[#e8dcd0]/60 backdrop-blur-sm rounded-2xl p-10 2xl:p-14 3xl:p-16 flex flex-col items-center text-center">
              <div className="mb-6 2xl:mb-8">
                <svg className="w-20 h-20 2xl:w-24 2xl:h-24 3xl:w-28 3xl:h-28 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  <circle cx="18" cy="18" r="3" strokeWidth={1.5} />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17l2 2" />
                </svg>
              </div>
              <h3 
                className="text-3xl 2xl:text-4xl 3xl:text-5xl text-neutral-800 mb-4 2xl:mb-6"
                style={{ fontFamily: 'Crimson Pro, serif' }}
              >
                Explore therapy and
                <br />
                medication combined
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-8 2xl:mb-10 flex-grow 2xl:text-lg 3xl:text-xl">
                Learn about the benefits of combining talk therapy with medication.
              </p>
              <Button 
                className="bg-[#a88860] hover:bg-[#967853] text-white px-8 2xl:px-10 py-3 2xl:py-4 rounded-md 2xl:text-lg"
              >
                Learn More
              </Button>
            </div>

            {/* Right Card - Personalized Medication Guidance */}
            <div className="bg-[#c8d5c5]/60 backdrop-blur-sm rounded-2xl p-10 2xl:p-14 3xl:p-16 flex flex-col items-center text-center">
              <div className="mb-6 2xl:mb-8">
                <svg className="w-20 h-20 2xl:w-24 2xl:h-24 3xl:w-28 3xl:h-28 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <h3 
                className="text-3xl 2xl:text-4xl 3xl:text-5xl text-neutral-800 mb-4 2xl:mb-6"
                style={{ fontFamily: 'Crimson Pro, serif' }}
              >
                Personalized medication
                <br />
                guidance
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-8 2xl:mb-10 flex-grow 2xl:text-lg 3xl:text-xl">
                Get expert help deciding if medication is right for you.
              </p>
              <Button 
                className="bg-[#a88860] hover:bg-[#967853] text-white px-8 2xl:px-10 py-3 2xl:py-4 rounded-md 2xl:text-lg"
              >
                Get Help
              </Button>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-neutral-700 leading-relaxed mb-6 2xl:text-lg 3xl:text-xl">
              Have questions about therapy and medication? Let's find the best plan for you together.
            </p>
            <Button 
              size="lg"
              className="bg-[#a88860] hover:bg-[#967853] text-white px-8 2xl:px-10 3xl:px-12 py-6 2xl:py-7 3xl:py-8 text-base 2xl:text-lg 3xl:text-xl rounded-md shadow-lg"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 2xl:py-28 3xl:py-36">
        <div className="max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-[1800px] 4xl:max-w-[2200px] mx-auto px-6 2xl:px-12 3xl:px-16">
          {/* Header */}
          <div className="text-center mb-16 2xl:mb-20 3xl:mb-24">
            <h2 
              className="text-5xl md:text-6xl 2xl:text-7xl 3xl:text-8xl text-neutral-800 mb-4 2xl:mb-6"
              style={{ fontFamily: 'Crimson Pro, serif' }}
            >
              More than 100 5-Star Reviews
            </h2>
            <p className="text-neutral-700 text-lg 2xl:text-xl 3xl:text-2xl">
              See how therapy clients have found support and healing.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-8 2xl:gap-12 3xl:gap-16 mb-12 2xl:mb-16">
            {/* Testimonial 1 - Laura */}
            <div className="bg-[#f0e5dd]/60 backdrop-blur-sm rounded-2xl overflow-hidden">
              <div className="aspect-[4/3]">
                <img
                  src="./r1.jpeg"
                  alt="Laura"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 2xl:p-10 3xl:p-12">
                <p className="text-neutral-700 leading-relaxed mb-6 2xl:text-lg 3xl:text-xl">
                  "I had been struggling with intense anxiety and overwhelm. Working with Dr. Maya was life-changing for me. Her compassion and expertise helped me find relief and resilience. I feel like I have a new lease on life."
                </p>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 2xl:w-6 2xl:h-6 text-[#a88860]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p 
                  className="text-neutral-800 font-semibold text-lg 2xl:text-xl mb-1"
                  style={{ fontFamily: 'Crimson Pro, serif' }}
                >
                  LAURA
                </p>
                <p className="text-neutral-600 text-sm 2xl:text-base uppercase tracking-wide">
                  Dr. Maya Reynolds Client
                </p>
              </div>
            </div>

            {/* Testimonial 2 - Megan */}
            <div className="bg-[#f0e5dd]/60 backdrop-blur-sm rounded-2xl overflow-hidden">
              <div className="aspect-[4/3]">
                <img
                  src="./r2.jpeg"
                  alt="Megan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 2xl:p-10 3xl:p-12">
                <p className="text-neutral-700 leading-relaxed mb-6 2xl:text-lg 3xl:text-xl">
                  "Dr. Reynolds supported me through one of the most difficult periods of my life. She taught me valuable coping strategies and provided a safe space to process my emotions. I'm so grateful for her help and the progress I've made."
                </p>
                <p 
                  className="text-neutral-800 font-semibold text-lg 2xl:text-xl mb-1 mt-12"
                  style={{ fontFamily: 'Crimson Pro, serif' }}
                >
                  MEGAN
                </p>
                <p className="text-neutral-600 text-sm 2xl:text-base uppercase tracking-wide">
                  Dr. Maya Reynolds Client
                </p>
              </div>
            </div>

            {/* Testimonial 3 - Jason */}
            <div className="bg-[#f0e5dd]/60 backdrop-blur-sm rounded-2xl overflow-hidden">
              <div className="aspect-[4/3]">
                <img
                  src="./r3.jpeg"
                  alt="Jason"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 2xl:p-10 3xl:p-12">
                <p className="text-neutral-700 leading-relaxed mb-6 2xl:text-lg 3xl:text-xl">
                  "Dr. Maya has been an incredible source of support. She really listens and provides thoughtful feedback. Her guidance has been instrumental in my healing path. I can't recommend her enough."
                </p>
                <p 
                  className="text-neutral-800 font-semibold text-lg 2xl:text-xl mb-1 mt-12"
                  style={{ fontFamily: 'Crimson Pro, serif' }}
                >
                  JASON
                </p>
                <p className="text-neutral-600 text-sm 2xl:text-base uppercase tracking-wide">
                  Dr. Maya Reynolds Client
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-[#a88860] hover:bg-[#967853] text-white px-8 2xl:px-10 3xl:px-12 py-6 2xl:py-7 3xl:py-8 text-base 2xl:text-lg 3xl:text-xl rounded-md shadow-lg"
            >
              Read More Testimonials
            </Button>
          </div>
        </div>
      </section>

      {/* Our Office Section */}
      <section className="relative overflow-hidden">
        {/* Decorative curved wave at top */}
        <div className="absolute top-0 left-0 w-full h-48 -mt-1">
          <svg 
            viewBox="0 0 1440 320" 
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path 
              fill="#f5f0ed" 
              fillOpacity="1" 
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,138.7C1248,128,1344,128,1392,128L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>

        {/* Decorative plant element - top right */}
        <div className="absolute top-20 right-0 w-80 h-80 opacity-30 pointer-events-none">
          <img 
            src="./plant.jpeg" 
            alt="Decorative plant"
            className="w-full h-full object-contain"
            style={{ filter: 'opacity(0.4) saturate(0.8)' }}
          />
        </div>

        <div className="max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-[1800px] 4xl:max-w-[2200px] mx-auto px-6 2xl:px-12 3xl:px-16 relative z-10 pt-32 2xl:pt-40 3xl:pt-48 pb-20 2xl:pb-28 3xl:pb-36">
          {/* Header */}
          <div className="text-center mb-16 2xl:mb-20 3xl:mb-24">
            <h2 
              className="text-5xl md:text-6xl 2xl:text-7xl 3xl:text-8xl text-neutral-800 mb-4 2xl:mb-6"
              style={{ fontFamily: 'Crimson Pro, serif' }}
            >
              Our Office
            </h2>
            <p 
              className="text-3xl 2xl:text-4xl 3xl:text-5xl text-neutral-700 mb-8 2xl:mb-10"
              style={{ fontFamily: 'Crimson Pro, serif' }}
            >
              A Calm, Private Space for Healing
            </p>
            <p className="text-neutral-700 leading-relaxed max-w-3xl 2xl:max-w-4xl mx-auto 2xl:text-lg 3xl:text-xl">
              Dr. Maya Reynolds' office is designed to provide a tranquil, private space where your comfort, confidentiality, and emotional safety are top priorities.
            </p>
          </div>

          {/* Office Image and Details Grid */}
          <div className="grid md:grid-cols-[2fr_1fr] gap-12 2xl:gap-16 3xl:gap-20 items-start">
            {/* Left: Office Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="./office.jpeg"
                  alt="Therapy office interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Visit Details */}
            <div className="space-y-10 2xl:space-y-12 3xl:space-y-14">
              {/* Your Visit */}
              <div>
                <h3 
                  className="text-3xl 2xl:text-4xl 3xl:text-5xl text-neutral-800 mb-6 2xl:mb-8"
                  style={{ fontFamily: 'Crimson Pro, serif' }}
                >
                  Your Visit
                </h3>
                <div className="space-y-4 2xl:space-y-5">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 text-[#a88860] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-neutral-700 2xl:text-lg 3xl:text-xl">A private, comfortable room for one-on-one sessions</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 text-[#a88860] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-neutral-700 2xl:text-lg 3xl:text-xl">An atmosphere that is calm, grounded, and confidential</p>
                  </div>
                </div>
              </div>

              {/* Location & Session Options */}
              <div>
                <h3 
                  className="text-3xl 2xl:text-4xl 3xl:text-5xl text-neutral-800 mb-6 2xl:mb-8"
                  style={{ fontFamily: 'Crimson Pro, serif' }}
                >
                  Location & Session Options
                </h3>
                <div className="space-y-4 2xl:space-y-5">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 text-[#a88860] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-neutral-700 2xl:text-lg 3xl:text-xl">San Diego, California</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 text-[#a88860] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p className="text-neutral-700 2xl:text-lg 3xl:text-xl">In-person sessions available</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 text-[#a88860] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-neutral-700 2xl:text-lg 3xl:text-xl">Telehealth options offered</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4 2xl:pt-6">
                <Button 
                  size="lg"
                  className="bg-[#a88860] hover:bg-[#967853] text-white px-8 2xl:px-10 py-6 2xl:py-7 text-base 2xl:text-lg rounded-md shadow-lg w-full"
                >
                  Schedule a Session
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 2xl:py-28 3xl:py-36">
        <div className="max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-[1800px] 4xl:max-w-[2200px] mx-auto px-6 2xl:px-12 3xl:px-16">
          <div className="grid md:grid-cols-2 gap-16 2xl:gap-20 3xl:gap-28 items-start">
            {/* Left: Heading and Illustration */}
            <div className="space-y-8 2xl:space-y-10">
              <div>
                <h2 
                  className="text-5xl md:text-6xl 2xl:text-7xl 3xl:text-8xl text-neutral-800 leading-tight mb-6 2xl:mb-8"
                  style={{ fontFamily: 'Crimson Pro, serif' }}
                >
                  Have questions?
                </h2>
                <p className="text-neutral-700 text-lg 2xl:text-xl 3xl:text-2xl leading-relaxed">
                  Find trust-worthy answers on all things mental health at Talkspace.
                </p>
              </div>

              {/* Illustration */}
              <div className="flex justify-center md:justify-start">
                <div className="w-full max-w-md 2xl:max-w-lg 3xl:max-w-xl">
                  <img
                    src="https://019c3cb9-7d2f-7dea-9d5b-2ea76c072f8e.mochausercontent.com/page6image-removebg-preview.png"
                    alt="Hands nurturing a flower illustration"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Right: FAQ Accordion */}
            <div>
              <FAQAccordion
                items={[
                  {
                    question: "How much is Talkspace online therapy?",
                    answer: "Therapy costs vary depending on your plan and insurance coverage. We offer flexible pricing options to make mental health care accessible. Contact us for a personalized quote based on your specific needs."
                  },
                  {
                    question: "Does insurance cover online therapy?",
                    answer: "Many insurance plans do cover online therapy sessions. We work with most major insurance providers and can help verify your benefits. Our team will assist you in understanding your coverage and out-of-pocket costs."
                  },
                  {
                    question: "Is online therapy effective?",
                    answer: "Yes, research shows that online therapy can be just as effective as in-person therapy for many mental health conditions. It offers the same evidence-based treatments with added convenience and accessibility."
                  },
                  {
                    question: "What is the difference between therapy and psychiatry?",
                    answer: "Therapy focuses on talk-based treatment and developing coping strategies, while psychiatry is a medical specialty that can prescribe medication. Many people benefit from a combination of both approaches for comprehensive mental health care."
                  },
                  {
                    question: "Can therapy really help with anxiety and depression?",
                    answer: "Absolutely. Therapy is one of the most effective treatments for anxiety and depression. Through evidence-based approaches like CBT and mindfulness techniques, therapy helps you develop tools to manage symptoms and improve your quality of life."
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Today Section */}
      <section 
        className="py-32 2xl:py-40 3xl:py-48 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #8b7d6b 0%, #9a8a76 100%)',
        }}
      >
        {/* Subtle texture overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
          }}
        />

        <div className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl mx-auto px-6 2xl:px-12 text-center relative z-10">
          {/* Heading */}
          <h2 
            className="text-5xl md:text-6xl 2xl:text-7xl 3xl:text-8xl text-white leading-tight mb-8 2xl:mb-10"
            style={{ fontFamily: 'Crimson Pro, serif' }}
          >
            Get Started Today
          </h2>

          {/* Subheading */}
          <p className="text-xl 2xl:text-2xl 3xl:text-3xl text-white/90 mb-6 2xl:mb-8">
            Ready to take the first step towards a happier, healthier you?
          </p>

          {/* Body Text */}
          <p className="text-white/80 text-lg 2xl:text-xl 3xl:text-2xl leading-relaxed mb-16 2xl:mb-20">
            Contact me to book your first session and begin your path to healing. I look forward to starting this therapeutic journey with you.
          </p>

          {/* Features Grid - Three Decorative Boxes */}
          <div className="grid md:grid-cols-3 gap-8 2xl:gap-12 3xl:gap-16 mb-16 2xl:mb-20">
            {/* Feature Box 1 - In-person or Telehealth */}
            <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-2xl p-8 2xl:p-10 3xl:p-12 flex flex-col items-center text-center hover:bg-white/15 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              <div className="mb-6 2xl:mb-8 w-20 h-20 2xl:w-24 2xl:h-24 3xl:w-28 3xl:h-28 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg className="w-10 h-10 2xl:w-12 2xl:h-12 3xl:w-14 3xl:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 
                className="text-2xl 2xl:text-3xl 3xl:text-4xl text-white mb-4 2xl:mb-5 font-semibold"
                style={{ fontFamily: 'Crimson Pro, serif' }}
              >
                In-person or telehealth sessions
              </h3>
              <p className="text-white/80 leading-relaxed 2xl:text-lg 3xl:text-xl">
                Choose what works best for you.
              </p>
            </div>

            {/* Feature Box 2 - Tailored Treatment */}
            <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-2xl p-8 2xl:p-10 3xl:p-12 flex flex-col items-center text-center hover:bg-white/15 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              <div className="mb-6 2xl:mb-8 w-20 h-20 2xl:w-24 2xl:h-24 3xl:w-28 3xl:h-28 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg className="w-10 h-10 2xl:w-12 2xl:h-12 3xl:w-14 3xl:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 
                className="text-2xl 2xl:text-3xl 3xl:text-4xl text-white mb-4 2xl:mb-5 font-semibold"
                style={{ fontFamily: 'Crimson Pro, serif' }}
              >
                Tailored treatment plans
              </h3>
              <p className="text-white/80 leading-relaxed 2xl:text-lg 3xl:text-xl">
                Therapy customized to your unique needs.
              </p>
            </div>

            {/* Feature Box 3 - Supportive Care */}
            <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-2xl p-8 2xl:p-10 3xl:p-12 flex flex-col items-center text-center hover:bg-white/15 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              <div className="mb-6 2xl:mb-8 w-20 h-20 2xl:w-24 2xl:h-24 3xl:w-28 3xl:h-28 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg className="w-10 h-10 2xl:w-12 2xl:h-12 3xl:w-14 3xl:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 
                className="text-2xl 2xl:text-3xl 3xl:text-4xl text-white mb-4 2xl:mb-5 font-semibold"
                style={{ fontFamily: 'Crimson Pro, serif' }}
              >
                Supportive and empathetic care
              </h3>
              <p className="text-white/80 leading-relaxed 2xl:text-lg 3xl:text-xl">
                A safe, compassionate environment.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="px-10 2xl:px-12 py-4 2xl:py-5 border-2 border-white text-white text-lg 2xl:text-xl rounded-md hover:bg-white/10 transition-all duration-200 flex items-center gap-2 group">
              Get in Touch
              <svg className="w-5 h-5 2xl:w-6 2xl:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#e8e0d8] py-16 2xl:py-20 3xl:py-24">
        <div className="max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-[1800px] 4xl:max-w-[2200px] mx-auto px-6 2xl:px-12 3xl:px-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 2xl:gap-16 3xl:gap-20 mb-12 2xl:mb-16">
            {/* Column 1: Download the App */}
            <div className="space-y-6">
              <h3 
                className="text-2xl 2xl:text-3xl 3xl:text-4xl text-neutral-800 mb-6 2xl:mb-8"
                style={{ fontFamily: 'Crimson Pro, serif' }}
              >
                Download the App
              </h3>
              
              {/* QR Code */}
              <div className="bg-white p-4 2xl:p-5 rounded-lg w-40 h-40 2xl:w-48 2xl:h-48 3xl:w-56 3xl:h-56 flex items-center justify-center">
                <img
                  src="./qr.jpeg"
                  alt="QR Code"
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="text-neutral-700 text-sm 2xl:text-base 3xl:text-lg leading-relaxed">
                Scan the QR code
                <br />
                to download the therapy app
              </p>
            </div>

            {/* Column 2: Contact */}
            <div className="space-y-4">
              <h3 
                className="text-2xl 2xl:text-3xl 3xl:text-4xl text-neutral-800 mb-6 2xl:mb-8"
                style={{ fontFamily: 'Crimson Pro, serif' }}
              >
                Contact
              </h3>
              
              <div className="space-y-3 text-neutral-700 2xl:text-lg 3xl:text-xl">
                <p className="font-medium">Dr. Maya Reynolds, Psy.D.</p>
                <p>Licensed Clinical</p>
                <p>Psychologist</p>
                <p className="pt-2">San Diego, CA</p>
                <p>(In-person & Telehealth)</p>
                
                <div className="pt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 2xl:w-6 2xl:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p>dr.mayareynolds</p>
                  </div>
                  <p className="ml-7">@example.com</p>
                  
                  <div className="flex items-center gap-2 pt-2">
                    <svg className="w-5 h-5 2xl:w-6 2xl:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p>(619) 555-1234</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Hours */}
            <div className="space-y-4">
              <h3 
                className="text-2xl 2xl:text-3xl 3xl:text-4xl text-neutral-800 mb-6 2xl:mb-8"
                style={{ fontFamily: 'Crimson Pro, serif' }}
              >
                Hours
              </h3>
              
              <div className="space-y-2 text-neutral-700 2xl:text-lg 3xl:text-xl">
                <p>Mon – Fri:</p>
                <p>9am – 6pm</p>
              </div>
            </div>

            {/* Column 4: Navigate */}
            <div className="space-y-4">
              <h3 
                className="text-2xl 2xl:text-3xl 3xl:text-4xl text-neutral-800 mb-6 2xl:mb-8"
                style={{ fontFamily: 'Crimson Pro, serif' }}
              >
                Navigate
              </h3>
              
              <nav className="space-y-3 2xl:space-y-4">
                <a href="#home" className="block text-neutral-700 hover:text-neutral-900 transition-colors 2xl:text-lg 3xl:text-xl">
                  › Home
                </a>
                <a href="#about" className="block text-neutral-700 hover:text-neutral-900 transition-colors 2xl:text-lg 3xl:text-xl">
                  › About
                </a>
                <a href="#services" className="block text-neutral-700 hover:text-neutral-900 transition-colors 2xl:text-lg 3xl:text-xl">
                  › Services
                </a>
                <a href="#faqs" className="block text-neutral-700 hover:text-neutral-900 transition-colors 2xl:text-lg 3xl:text-xl">
                  › FAQs
                </a>
                <a href="#blog" className="block text-neutral-700 hover:text-neutral-900 transition-colors 2xl:text-lg 3xl:text-xl">
                  › Blog
                </a>
                <a href="#contact" className="block text-neutral-700 hover:text-neutral-900 transition-colors 2xl:text-lg 3xl:text-xl">
                  › Contact
                </a>
              </nav>
            </div>

            {/* Column 5: Legal */}
            <div className="space-y-4">
              <h3 
                className="text-2xl 2xl:text-3xl 3xl:text-4xl text-neutral-800 mb-6 2xl:mb-8"
                style={{ fontFamily: 'Crimson Pro, serif' }}
              >
                Legal
              </h3>
              
              <nav className="space-y-3 2xl:space-y-4">
                <a href="#privacy" className="block text-neutral-700 hover:text-neutral-900 transition-colors 2xl:text-lg 3xl:text-xl">
                  Privacy & Cookies Policy
                </a>
                <a href="#terms" className="block text-neutral-700 hover:text-neutral-900 transition-colors 2xl:text-lg 3xl:text-xl">
                  Terms of Service
                </a>
                <a href="#disclaimer" className="block text-neutral-700 hover:text-neutral-900 transition-colors 2xl:text-lg 3xl:text-xl">
                  Disclaimer
                </a>
                <a href="#rights" className="block text-neutral-700 hover:text-neutral-900 transition-colors 2xl:text-lg 3xl:text-xl">
                  Client Rights Notice
                </a>
              </nav>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 2xl:pt-10 border-t border-neutral-400">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 2xl:gap-6 text-neutral-700 text-sm 2xl:text-base 3xl:text-lg">
              <p>© Dr. Maya Reynolds. All Rights Reserved.</p>
              <span className="hidden md:inline">|</span>
              <a href="#privacy" className="hover:text-neutral-900 transition-colors">
                Privacy & Cookies Policy
              </a>
              <span className="hidden md:inline">|</span>
              <a href="#terms" className="hover:text-neutral-900 transition-colors">
                Terms of Service
              </a>
              <span className="hidden md:inline">|</span>
              <a href="#disclaimer" className="hover:text-neutral-900 transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
