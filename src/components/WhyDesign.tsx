
export function WhyDesign() {
  return (
    <section className="py-16 px-4 container mx-auto">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-[#151820] rounded-3xl p-8 md:p-12 lg:p-16 border border-primary/20 shadow-2xl backdrop-blur-sm">
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary/10 rounded-full border border-primary/30 flex items-center justify-center backdrop-blur-sm">
            <svg
              className="w-8 h-8"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 37 53"
            >
              <g id="Icon">
                <path
                  clipRule="evenodd"
                  fill="rgba(213, 182, 124, 0.9)"
                  fillRule="evenodd"
                />
              </g>
            </svg>
          </div>
          
          <div className="absolute top-4 right-4 hidden lg:block">
            <svg
              className="w-24 h-16 text-primary/30"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 67 56"
            >
              <path
                stroke="currentColor"
                strokeWidth="5"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 text-primary font-semibold">
                Why i choose design?
              </h2>
            </div>
            
            <div>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300">
                "I dream of becoming a director in IT. I love telling stories visually and making scenes that people will love. Even small details matter to me. Before I started designing directly, I learned about development to see things from both a tech and user perspective, drawing ideas from everyday life."
              </p>
            </div>
          </div>

          {/* Decorative plant */}
          <div className="absolute bottom-4 right-4 w-24 h-32 hidden lg:block">
            <svg
              className="w-full h-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 216 190"
            >
              <path 
                fill="rgba(213, 182, 124, 0.12)"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}