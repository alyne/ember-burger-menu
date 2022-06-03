import Animation from 'ember-burger-menu/animations/base';

export default Animation.extend({
  animation: 'scale-up',

  outlet(open, width, right) {
    return {
      transform: open
        ? right
          ? `translate3d(-${width}px, 0, 0)`
          : `translate3d(${width}px, 0, 0)`
        : '',
    };
  },

  menu(open, width) {
    return {
      transform: open ? '' : `translate3d(0, 0, -${width}px)`,
    };
  },
});
