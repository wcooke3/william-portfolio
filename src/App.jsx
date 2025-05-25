import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="p-8 text-center bg-gray-100 shadow-md">
        <h1 className="text-4xl font-bold">William Cooke</h1>
        <p className="text-xl mt-2">Aspiring Data Analyst | Physics & Earth Science Undergraduate</p>
        <p className="mt-1 text-sm">
          wjcooke03@outlook.com |{" "}
          <a href="https://www.linkedin.com/in/william-cooke-b38526211/" className="text-blue-600">LinkedIn</a> |{" "}
          <a href="https://github.com/wcooke3/SMBH-Formation-through-Galaxy-Merging" className="text-blue-600">GitHub</a>
        </p>
      </header>

      <section className="p-8">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I’m a third-year Natural Sciences undergraduate at Durham University, passionate about data analysis, research,
          and solving complex problems. I have experience in Python programming, scientific analysis, and a strong foundation
          in physics and Earth sciences. I aim to work in the banking sector applying data-driven insights.
        </p>
      </section>

      <section className="p-8 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside">
          <li>Python (Matplotlib, Numba, NumPy, Pandas, SciPy)</li>
          <li>MATLAB</li>
          <li>Microsoft Office Suite</li>
          <li>Linux (Intermediate)</li>
          <li>Data Analysis & Visualisation</li>
        </ul>
      </section>

      <section className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded shadow-sm">
            <h3 className="font-bold text-lg">Python N-Body Gravitational Simulation</h3>
            <p className="mt-2">Developed a simulation in Python to model cosmic interactions and researched intermediate-mass black hole formation via cluster mergers.</p>
            <a href="https://github.com/wcooke3/SMBH-Formation-through-Galaxy-Merging" className="text-blue-600">View Project</a>
          </div>
          <div className="p-4 border rounded shadow-sm">
            <h3 className="font-bold text-lg">Investigating Galaxy Formation</h3>
            <p className="mt-2">Analysed galaxy colour and morphology data to explore the relationship between Sérsic index and galaxy age.</p>
          </div>
          <div className="p-4 border rounded shadow-sm">
            <h3 className="font-bold text-lg">Python Laboratory Work</h3>
            <p className="mt-2">Applied Python for statistical modelling, graph visualisation, curve fitting, and chi-squared testing across multiple lab projects.</p>
          </div>
        </div>
      </section>

      <section className="p-8 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>You can reach me via email at <a href="mailto:wjcooke03@outlook.com" className="text-blue-600">wjcooke03@outlook.com</a></p>
      </section>

      <footer className="p-4 text-center text-sm text-gray-600 bg-gray-100">
        &copy; {new Date().getFullYear()} William Cooke. All rights reserved.
      </footer>
    </div>
  );
}
