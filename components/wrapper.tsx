import React from 'react';
import Link from 'next/link'
import { elastic as Menu } from 'react-burger-menu';

export default function Wrapper({ children }) {
  return (
    <div id="outer-container">
      <Menu disableAutoFocus pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <div><Link href="/"><a id="home" className="menu-item text-gray-3">Home</a></Link></div>
        <div><Link href="/learning_layer_one"><a id="llo" className="menu-item text-gray-3">Learning Layer One</a></Link></div>
      </Menu>
      <main id="page-wrap">
        { children }
      </main>
    </div>
  );
}