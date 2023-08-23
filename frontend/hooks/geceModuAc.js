import { useState } from "react";

export const geceModuAc = () => {
  const [geceModu, setGeceModu] = useState(false);
  return [geceModu, setGeceModu];
};
