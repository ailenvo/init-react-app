import { createContext } from "react";

export interface ModalModel {
  isShow: boolean;
  title: string;
  content: string | JSX.Element;
  isShowCloseIcon: boolean;
  okLabel?: string | null | undefined;
  okButtonClass?: string;
  isShowCloseButton: boolean;
  closeLabel?: string;
  handleOk?: () => boolean | Promise<boolean>;
  disableOk?: boolean;
  handleCloseModal?: () => void | any;

  modalClass?: string;
  image?: string | JSX.Element;
  style?: React.CSSProperties;
}

export const initModalModel: ModalModel = {
  isShow: false,
  title: "this is content",
  content: "This is a title",
  isShowCloseIcon: false,
  isShowCloseButton: true,
  okLabel: "Ok",
  closeLabel: "Close",
  handleOk: () => {
    return true;
  }
};

export interface WithAppContextProps {
  isLoading: boolean;
  toggleLoading: (value: boolean) => void;
  clearLoading: () => void;

  isShowModal: boolean;
  modalModel: ModalModel;
  closeModalDefault: () => void;
  openModal: (modal: ModalModel) => void;
  disableOk: boolean;
  toggleDisableOk: (value: boolean) => void;
}

const AppContext = createContext<WithAppContextProps>({
  isLoading: false,
  toggleLoading: () => {},
  clearLoading: () => {},

  modalModel: { ...initModalModel },
  openModal: () => {},
  isShowModal: false,
  closeModalDefault: () => {},
  disableOk: true,
  toggleDisableOk: () => {}
});

export const AppProvider = AppContext.Provider;

export const AppConsumer = AppContext.Consumer;
export default AppContext;
