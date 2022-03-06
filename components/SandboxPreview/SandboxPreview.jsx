export function SandboxPreview({ title, exampleDir }) {
  return (
    <iframe
      src={`https://codesandbox.io/embed/github/pmndrs/threejs-journey/tree/main/examples/${exampleDir}?view=preview&hidenavigation=1&module=/src/App.jsx`}
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        border: 0,
      }}
      width="100%"
      height="100%"
      title={title}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
  )
}
