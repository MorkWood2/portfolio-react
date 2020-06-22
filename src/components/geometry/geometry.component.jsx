import React, { Component } from 'react';
import * as THREE from 'three';
import './geometry.styles.scss';

class Geometry extends Component {
  componentDidMount() {
    var scene = new THREE.Scene();
    scene.background = null;
    var camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    var renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    this.mount.appendChild(renderer.domElement);
    var geometry = new THREE.IcosahedronGeometry();
    //directional light
    {
      const color = '0xffffff';
      const intensity = 1;
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(-1, 2, 4);
      scene.add(light);
    }
    const material = new THREE.MeshNormalMaterial({
      color: 0x44aa88,
      // wireframe: true,
    });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;

    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      render();
    };

    var mouseX = 0,
      mouseY = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    function onDocumentMouseMove(event) {
      mouseX = (event.clientX - windowHalfX) / 175;
      mouseY = (event.clientY - windowHalfY) / 175;
    }

    function render() {
      camera.position.x += (mouseX - camera.position.x) * 0.5;
      camera.position.y += (-mouseY - camera.position.y) * 0.5;

      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    }

    document.addEventListener('mousemove', onDocumentMouseMove, false);

    animate();
  }
  render() {
    return (
      <div className='geometry-container'>
        <div
          className='geometry-background'
          ref={(ref) => (this.mount = ref)}
        />
      </div>
    );
  }
}

export default Geometry;
