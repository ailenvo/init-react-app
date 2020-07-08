import React from "react";
import { AppConsumer } from "./appContext";

const withAppConsumer = (
  Component: React.ComponentType<any>
): React.FC<any> => {
  return props => (
    <AppConsumer>
      {context => <Component {...context} {...props} />}
    </AppConsumer>
  );
};

export default withAppConsumer;

//TODO: This code doesn't work
// const withAppConsumer = <P extends object>(
//   Component: React.ComponentType<P>
// ): React.FC<P & WithAppContextProps> => {
//   return (props) => (
//     <AppConsumer>
//       {(context) => <Component {...context} {...props} />}
//     </AppConsumer>
//   );
// };
