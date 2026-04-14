import PLYAnimationViewer from "../components/PLYAnimationViewer";
import { addBasePath } from "@/util/addUrlPrefix";

export default function Home() {
  const plyUrls = Array.from({ length: 50 }, (_, i) =>
    addBasePath(`/model/demo/frames/frame${i}.ply`),
  );

  return (
    <div style={{ width: "100%", height: "100%", position: "absolute" }}>
      <PLYAnimationViewer modelUrls={plyUrls} />
    </div>
  );
}
