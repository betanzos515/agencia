import { useContext } from "react";
import { agenciaContext } from "../context/agenciaContext";

const useAgencia = () => useContext(agenciaContext);

export default useAgencia;