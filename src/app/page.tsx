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
          <h2 className="text-4xl font-bold text-white mb-4">关于我</h2>
          <p className="text-light-muted">这里将是关于部分</p>
        </div>
      </section>
      
      <section className="min-h-screen bg-dark-card flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">我的项目</h2>
          <p className="text-light-muted">这里将是项目展示部分</p>
        </div>
      </section>
    </main>
  );
}