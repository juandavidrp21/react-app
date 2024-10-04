import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

function Card(props: CardProps) {
  const { children } = props;

  return (
    <div className="card" style={{ width: "350px" }}>
      <div className="card-body">{children}</div>
    </div>
  );
}

interface CardBodyProps {
  tittle: string;
  text?: string;
}

export function CardBody(props: CardBodyProps) {
  const { tittle, text } = props;
  return (
    <>
      <h5 className="card-title">{tittle}</h5>
      <p className="card-text">{text}</p>
    </>
  );
}

export default Card;
