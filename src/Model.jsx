/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/pj4.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.print.geometry}
        material={nodes.print.material}
        scale={[1, 1, 0.999]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flashcut.geometry}
        material={nodes.flashcut.material}
        position={[0.17, 1.363, -0.697]}
        scale={[0.908, 1.254, 1.254]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flashcut2.geometry}
        material={materials.flash}
        position={[-0.012, -0.007, -0.032]}
        scale={[1.009, 1.393, 1.393]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flash.geometry}
        material={materials.flash}
        position={[-0.012, -0.007, -0.032]}
        scale={[1.009, 1.393, 1.393]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lens.geometry}
        material={materials.button}
        position={[-0.012, 0.054, 0]}
        scale={0.978}
      />
      <group position={[-0.04, 0.01, 0.007]} scale={0.985}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001.geometry}
          material={materials.button}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_1.geometry}
          material={materials.button}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tag.geometry}
        material={materials.base}
        position={[0.247, 1.18, 0.684]}
        scale={[0.016, 0.1, 0.21]}
      />
      <group position={[2.613, -0.283, 0]} scale={0.74}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials.photo_a}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials.photo_b}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.back.geometry}
        material={materials.back}
        position={[-0.012, -0.015, 0]}
        scale={[1, 1.05, 1]}
      />
      <mesh castShadow receiveShadow geometry={nodes.base.geometry} material={materials.base} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.front.geometry}
        material={materials.front}
        position={[-0.012, -0.015, 0]}
        scale={[1, 1.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.moon.geometry}
        material={materials.moon}
        position={[0.305, 1.174, -0.047]}
        rotation={[0.501, -0.023, 1.592]}
        scale={0.074}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flash_w.geometry}
        material={materials.flash_w}
        position={[0.104, 1.202, -0.704]}
        scale={[0.237, 0.149, 0.237]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cloud_A.geometry}
        material={materials.cloud}
        position={[0.285, 1.058, 0.021]}
        scale={[0.765, 1, 1]}
      />
      <group position={[0.354, 0.973, -0.007]} rotation={[0, 0, Math.PI / 2]} scale={[1, 0.9, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle009.geometry}
          material={materials.cloud}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle009_1.geometry}
          material={materials.cloud}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.len_glass.geometry}
        material={materials.lens}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.star.geometry}
        material={materials.star}
        position={[0.311, 0.861, -0.063]}
        rotation={[0.214, -0.056, -0.254]}
        scale={0.086}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.star001.geometry}
        material={materials.star}
        position={[0.306, 0.963, 0.181]}
        rotation={[-0.327, -0.067, 0.194]}
        scale={0.112}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.star002.geometry}
        material={materials.star}
        position={[0.2, 1.271, -0.595]}
        rotation={[0.217, 0.04, 0.181]}
        scale={0.101}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.star003.geometry}
        material={materials.star}
        position={[0.101, 1.266, -0.826]}
        rotation={[0.218, -0.032, -0.142]}
        scale={0.085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.star004.geometry}
        material={materials.star}
        position={[0.077, 1.379, -0.807]}
        rotation={[-0.284, -0.08, 0.268]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lilypad.geometry}
        material={materials.lily}
        position={[2.26, -0.274, 0.309]}
        rotation={[0, -0.844, 0]}
        scale={0.814}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lilypad001.geometry}
        material={materials.lily}
        position={[2.477, -0.274, 0.529]}
        rotation={[Math.PI, -0.778, Math.PI]}
        scale={0.884}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lilypad002.geometry}
        material={materials.lily}
        position={[2.963, -0.274, -0.07]}
        rotation={[-Math.PI, 1.173, -Math.PI]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lilypad003.geometry}
        material={materials.lily}
        position={[3.143, -0.274, 0.485]}
        rotation={[0, 0.3, 0]}
        scale={0.816}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lilypad004.geometry}
        material={materials.lily}
        position={[3.156, -0.274, -0.349]}
        rotation={[0, -1.258, 0]}
        scale={1.124}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lilypad005.geometry}
        material={materials.lily}
        position={[2.756, -0.274, -0.496]}
        rotation={[-Math.PI, 0.125, -Math.PI]}
        scale={0.84}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lilypad006.geometry}
        material={materials.lily}
        position={[2.323, -0.274, -0.244]}
        rotation={[0, 0.459, 0]}
        scale={1.158}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vine_a.geometry}
        material={materials.vine}
        position={[0.163, 1.271, 1.674]}
        rotation={[0.257, 0.723, -0.073]}
        scale={1.781}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf.geometry}
        material={nodes.leaf.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vine_b.geometry}
        material={materials.vine}
        position={[0.244, 0.705, -1.085]}
        rotation={[0.452, 0.734, -0.606]}
        scale={0.162}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vine_c.geometry}
        material={materials['vine.001']}
        position={[0, -0.186, 0]}
        rotation={[0, -0.226, 0]}
        scale={0.195}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fish_a.geometry}
        material={materials.fish}
        position={[1.116, 0.376, -0.866]}
        rotation={[1.592, -0.014, -2.691]}
        scale={[0.166, 0.24, 0.24]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fish_b.geometry}
        material={materials.fish}
        position={[-0.497, 1.756, 0.656]}
        rotation={[1.414, -0.336, -2.686]}
        scale={[0.12, 0.174, 0.174]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fish_c.geometry}
        material={materials.fish}
        position={[1.506, -0.543, -0.199]}
        rotation={[1.691, 0.049, -2.197]}
        scale={[0.17, 0.245, 0.245]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Z_03.geometry}
        material={materials.Material}
        position={[0, 0.3, 0]}
      />
    </group>
  )
}

useGLTF.preload('/pj4.glb')
