export const EASE = [0.22, 1, 0.36, 1];

export const viewportOnce = { once: true, amount: 0.25 };

export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};

export const stagger = (staggerChildren = 0.09, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

// Brackets "draw" by scaling their two arms out from the corner.
export const drawArm = (axis) => ({
  hidden: { [axis === "x" ? "scaleX" : "scaleY"]: 0 },
  show: {
    [axis === "x" ? "scaleX" : "scaleY"]: 1,
    transition: { duration: 0.55, ease: EASE },
  },
});
