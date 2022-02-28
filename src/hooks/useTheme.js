import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";


export const useTheme = () => {
  let context = useContext(ThemeContext);

  if(context === undefined) {
    throw new Error("useTheme() must be used inside ThemeProvider");
  }


  return context;
}
