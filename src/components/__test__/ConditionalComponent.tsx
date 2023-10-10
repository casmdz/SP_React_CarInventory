// components/ConditionalComponent.tsx

interface ConditionalComponentProps {
  showContent: boolean;
}

function ConditionalComponent(props: ConditionalComponentProps) {
  return (
    <div>
      <h1>Conditional Rendering</h1>
      {props.showContent ? (
        <p>This content is displayed because showContent is true.</p>
      ) : (
        <p>This content is hidden because showContent is false.</p>
      )}
    </div>
  );
}

export default ConditionalComponent;
