import PLYViewer from "../components/PLYViewer";
import { addBasePath } from "@/util/addUrlPrefix";

const App = () => {
  const plyUrl = addBasePath(`/model/demo/frames/frame17.ply`);

  return (
    <div className='page-index'>
      <PLYViewer modelUrl={plyUrl} />

      <style jsx global>{`
        .page-index {
          width: 100%;
          height: 100%;
          background-color: #fff;
          position: absolute;
        }
      `}</style>
    </div>
  );
};

export default App;
