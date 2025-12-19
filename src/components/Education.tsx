export function Education() {
  const educationData = [
    {
      institution: "DSEC - Dhanalakshmi Srinivasan Engineering College",
      degree: "B.E. Computer Science & Engineering",
      duration: "March 2020 · Perambalur, Tamil Nadu",
    },
    {
      institution: "V.E.T Higher Secondary School, VDM",
      degree: "Computer Science - Higher Secondary",
      duration: "April 2016 · Virudhachalam, Tamil Nadu",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-secondary/10">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-foreground mb-4">Education</h2>
        <p className="text-muted-foreground text-lg">
          A quick look at my academic journey
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="rounded-xl bg-card p-6 shadow-md border hover:shadow-xl transition-all duration-300 text-left"
          >
            <h3 className="text-lg font-bold text-foreground mb-1">
              {edu.degree}
            </h3>
            <div className="text-primary font-medium mb-2">{edu.institution}</div>
            <div className="text-muted-foreground mb-1">{edu.duration}</div>
            <div className="text-sm text-foreground font-bold">
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
