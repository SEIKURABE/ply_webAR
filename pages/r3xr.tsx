import {
  VRButton,
  ARButton,
  XR,
  Controllers,
  Hands,
  useHitTest,
} from "@react-three/xr";
import { Canvas } from "@react-three/fiber";

export const Child = () => {
  useHitTest((hitMatrix: any, hit: any) => {
    console.log(hitMatrix.decompose());
  });

  return (
    <>
      <Controllers />
      <Hands />
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color='blue' />
      </mesh>
    </>
  );
};

function App() {
  return (
    <>
      <ARButton />

      <Canvas>
        <XR>
          <Child />
        </XR>
      </Canvas>
    </>
  );
}

export default App;
