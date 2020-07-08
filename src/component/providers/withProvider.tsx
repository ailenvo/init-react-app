import React, { useState, useEffect } from "react";
import { AppProvider, ModalModel, initModalModel } from "./appContext";
import { BehaviorSubject } from "rxjs";

const loadingSubject = new BehaviorSubject(false);
export const toggleLoading = (value: boolean) => {
  loadingSubject.next(value);
};

interface Props {}

const withAppProvider = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & Props> => {
  return props => {
    const [isLoading, setIsLoading] = useState(false);
    const [count, setCount] = useState(0);

    const toggleLoading = (value: boolean) => {
      if (value === true) {
        setCount(previous => previous + 1);
      } else {
        setCount(previous => (previous > 0 ? previous - 1 : 0));
      }
    };

    const clearLoading = () => {
      setCount(0);
    };

    useEffect(() => {
      if (count > 0) {
        setIsLoading(true);
      } else {
        setIsLoading(false);
      }
    }, [count]);

    //#region Subscribe Loading
    useEffect(() => {
      const subscribe = loadingSubject.subscribe(value => {
        toggleLoading(value);
      });
      return () => {
        subscribe.unsubscribe();
      };
    }, []);
    //#endregion Subscribe Loading

    const [alertModel, setAlert] = useState({ ...initModalModel });
    const [isShow, setIsShow] = useState(false);
    const [disableOk, setDisableOk] = useState(false);

    //this function is used for any page which want to show the popup
    const openAlert = (alert: ModalModel) => {
      setIsShow(true);
      setAlert(alert);
    };

    //this function is used when any page which show modal popup but doen't declare close function for it.
    //It means a isShow property is not changed the value (isShow = true)
    const closeModalDefault = () => {
      setIsShow(false);
      setDisableOk(false);
      setAlert({ ...alertModel, isShow: false });
    };

    return (
      <AppProvider
        value={{
          isLoading,
          toggleLoading,
          clearLoading,
          modalModel: alertModel,
          openModal: openAlert,
          isShowModal: isShow,
          closeModalDefault,
          disableOk,
          toggleDisableOk: (value: boolean) => {
            setDisableOk(value);
          }
        }}
      >
        <Component {...props} />
      </AppProvider>
    );
  };
};
export default withAppProvider;
