import ProjectsSibeBar from './components/ProjectsSibebar';
import NewProject from './components/NewProject';

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSibeBar />
      <NewProject />
    </main>
  );
}

export default App;
