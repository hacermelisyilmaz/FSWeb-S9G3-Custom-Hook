import { useState } from "react";
import { localStorageKullan } from "./localStorageKullan.js";

export const geceModuAc = () => {
  const [geceModu, setGeceModu] = useState(false);
  localStorageKullan();
  return [geceModu, setGeceModu];
};
