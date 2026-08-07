// Animated multi-hue blob cluster in the page background, using Taizen's
// brand palette — echoes the "linha arco-íris" signature gradient from the
// identity guide. Colors are driven entirely by CSS vars in globals.css.
export default function GradientBg() {
  return (
    <div className="gradient-bg" aria-hidden>
      <div className="gradient-bg__blob gradient-bg__blob--1" />
      <div className="gradient-bg__blob gradient-bg__blob--2" />
      <div className="gradient-bg__blob gradient-bg__blob--3" />
    </div>
  );
}
