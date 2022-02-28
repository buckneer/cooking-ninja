import "./ThemeSelector.css";
import {useTheme} from "../../hooks/useTheme";

import modeIcon from "../../assets/brightness.svg"


const themeColors = ["#58259c", "#249c6b", "#b70233"]

function ThemeSelector() {

  let {changeColor, changeMode, mode} = useTheme();

  let toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  }


  return (
      <div className="ThemeSelector">
        <div className="mode-toggle">
          <img
              src={modeIcon}
              alt="Change Mode"
              onClick={toggleMode}
              style={{filter: mode === "dark" ? 'invert(100%)' : "invert(20%)"}}
          />
        </div>
        <div className="theme-buttons">
          {themeColors.map(color => (
              <div
                key={color}
                onClick={() => changeColor(color)}
                style={{
                  background: color
                }}
              />
          ))}
        </div>
      </div>
  );
}

export default ThemeSelector;
