import * as THREE from 'three';

function Lights() {
  const group = new THREE.Group();

  const hemisphere = new THREE.HemisphereLight('#bfe5f9', '#ddbba0', 1.5);
  group.add(hemisphere);

  const directional = new THREE.DirectionalLight(0xffffff, 1.5);
  directional.position.set(5, 10, 10);
  directional.castShadow = true;
  directional.shadow.mapSize.set(1024, 1024);
  directional.shadow.camera.near = 0.01;
  directional.shadow.camera.far = 20;
  group.add(directional);

  const spot = new THREE.SpotLight(0xd2fcc0, 1);
  spot.position.set(-10, 10, -10);
  spot.penumbra = 0.1;
  spot.decay = 2;
  spot.distance = 40;
  group.add(spot);

  return <primitive object={group} />;
}

export default Lights;

