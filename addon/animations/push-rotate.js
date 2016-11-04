export default function(isOpen, width, right) {
  return {
    outlet: {
      transform: isOpen ? right ?  `translate3d(-${width * 0.85}px, 0, ${width * 1.3}px) rotateY(15deg)` :  `translate3d(${width}px, 0, 0) rotateY(-15deg)` : ''
    }
  };
}
