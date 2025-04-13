// This file contains type declarations for modules that don't have their own type definitions

// For CSS modules
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// For SVG files
declare module '*.svg' {
  import React from 'react';
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

// For any other missing module types
declare module '@react-spring/three' {
  export * from '@react-spring/three';
}
