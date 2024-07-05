import { ReactComponent as Edgeware } from "./edgeware.svg";
import { useMemo } from "react";

export default function CrustIcon(props) {
  const Icon = useMemo(() => Edgeware, []);
  return <Icon {...props} />;
}