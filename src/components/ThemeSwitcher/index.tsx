import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEventHandler, FC } from "react";

type Props = {
  darkModeOn?: boolean;
  onToggle: (darkModeOn: boolean) => void;
};

type ToggleProps = {
  value?: boolean;
  onChange: (state: boolean) => void;
};

const Toggle: FC<ToggleProps> = ({ value, onChange }) => {
  const onToggleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange(event.target.checked);
  };

  return (
    <label className="relative inline-block w-[47px] h-[21px] mx-6">
      <input
        type="checkbox"
        className="peer opacity-0 w-0 h-0"
        checked={value}
        onChange={onToggleChange}
      />
      <span className="absolute cursor-pointer rounded-themeSwitcher-toggle top-0 left-0 right-0 bottom-0 bg-themeSwitcher-toggle-bg before:absolute before:rounded-full before:content-[''] before:w-[15px] before:h-[15px] before:left-[3px] before:bottom-[3px] before:bg-white peer-checked:bg-themeSwitcher-toggle-active-bg peer-checked:before:translate-x-[26px]"></span>
    </label>
  );
};

export const ThemeSwitcher: FC<Props> = ({ darkModeOn, onToggle }) => {
  return (
    <div className="flex p-3 bg-themeSwitcher-bg rounded-themeSwitcher">
      <FontAwesomeIcon icon={faSun} className="text-themeSwitcher-icon text-[1.3rem]" />
      <Toggle value={darkModeOn} onChange={onToggle} />
      <FontAwesomeIcon icon={faMoon} className="text-themeSwitcher-icon text-[1.3rem]" />
    </div>
  );
};
