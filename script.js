gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

gsap.to("#rocketSVG", {
  duration: 20, // Adjust scroll duration
  motionPath: {
    path: "#rocketPath", // The id of your SVG path
    align: "self", // Align the rocket to the path
    autoRotate: true, // Rotate the rocket along the path
    // orient: 'auto', // alternative for autoRotate
    // orient: {rotation: 'auto', clockwise: true} // control direction
  },
  scrollTrigger: {
    trigger: ".container", // The element that triggers the animation
    start: "top top", // Adjust start point
    end: "bottom bottom", // Adjust end point
    scrub: true, // Smooth scrolling animation
    markers: false // Set to true for debugging ScrollTrigger
  }
});