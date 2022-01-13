import { Web3ReactProvider } from '@web3-react/core';
import { LanguageProvider } from 'context/Localization';
// import { RefreshContextProvider } from '@contextApi/RefreshContext';
import { getLibrary } from 'utils/web3React';
import store, { persistor } from 'state';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

interface Props {
  children: React.ReactNode;
}

const Providers = (props: Props) => {
  const chainId = parseInt(process.env.REACT_APP_CHAIN_ID);
  console.log(chainId);
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
          <LanguageProvider>
            {/* <RefreshContextProvider> */}
            {props.children}
            {/* </RefreshContextProvider> */}
          </LanguageProvider>
        </PersistGate>
      </ReduxProvider>
    </Web3ReactProvider>
  );
};

export default Providers;
