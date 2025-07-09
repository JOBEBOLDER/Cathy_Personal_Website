import About from './components/sections/About';
import HeroFinal from './components/sections/HeroFinal';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

export default function Home() {
  return (
    <main className="relative">
      <HeroFinal />
      <About />
      <Projects />
      <Contact />

      {/* 占位符区域，之后我们会添加其他部分 */}
      <section className="min-h-screen bg-dark-surface flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4"> About me</h2>
          <p className="text-light-muted">Here are some details about me.</p>
        </div>
      </section>
      
      <section className="min-h-screen bg-dark-card flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">my project</h2>
          <p className="text-light-muted">Here will be the project showcase section.</p>
        </div>
      </section>
    </main>
  );
}