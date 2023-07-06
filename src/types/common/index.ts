import { Dispatch, RefObject, SetStateAction } from "react";
import { CharacterDetail } from "../fetch-types";

export type ButtonProps = {
  children: string,
  onClick?: () => void,
  type?: 'submit' | 'reset' | 'button' | undefined;
  buttonRef?: RefObject<HTMLButtonElement>
};

export type TextPropType = {
  type: string,
  index?: number,
  children: string | number,
  onClick?: () => void
};

export type CrewCharacterWrapperPropsType = {
  children: JSX.Element | JSX.Element[];
};

export type InputType = {
  type: string,
};

export type SelectBoxType = {
  text: string,
  selectedName?: string,
  setSelectedName?: Dispatch<SetStateAction<string>>,
  buttonRef?: RefObject<HTMLSelectElement>,
  setCharacter?: Dispatch<SetStateAction<Partial<CharacterDetail>>>
};

export type OptionListType = {
  isDropped: boolean,
};