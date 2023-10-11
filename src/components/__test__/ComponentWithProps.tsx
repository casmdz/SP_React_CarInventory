// components/ComponentWithProps.tsx

interface ComponentProps {
  message: string;
}

function ComponentWithProps(props: ComponentProps) {
  return (
    <div>
      <h1>This is a component with props</h1>
      <p>Received prop message: {props.message}</p>
    </div>
  );
}

export default ComponentWithProps;
