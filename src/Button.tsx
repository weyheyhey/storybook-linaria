export interface ButtonProps {
  backgroundColor?: string;
}

export function Button({ backgroundColor }: ButtonProps) {
  return <button style={{ backgroundColor }}>Button</button>;
}