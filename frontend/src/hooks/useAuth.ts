import { useCallback } from 'react';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { NoBscProviderError } from '@binance-chain/bsc-connector';
import { NoEthereumProviderError } from '@web3-react/injected-connector';
import { connectorsByName } from 'utils/web3React';
import { setupNetwork } from 'utils/wallet';
// import { useTranslation } from '@contextApi/Localization';
import { useAppDispatch } from 'state';
import { LOGOUT } from 'state/profile/action';

const connectorLocalStorageKey = 'connectorIdv2';
enum ConnectorNames {
  Injected = 'Injected',
  WalletConnect = 'walletconnect',
  BSC = 'bsc',
}

const useAuth = () => {
  const dispatch = useAppDispatch();
  // const { t } = useTranslation();
  const { activate, deactivate } = useWeb3React();
  // const { toastError } = useToast();

  const login = useCallback(
    (connectorID: ConnectorNames) => {
      const connector = connectorsByName[connectorID];
      if (connector) {
        activate(connector, async (error: Error) => {
          if (error instanceof UnsupportedChainIdError) {
            const hasSetup = await setupNetwork();
            if (hasSetup) {
              activate(connector);
              window.localStorage.setItem(
                connectorLocalStorageKey,
                connectorID
              );
            }
          } else {
            window.localStorage.removeItem(connectorLocalStorageKey);
            if (
              error instanceof NoEthereumProviderError ||
              error instanceof NoBscProviderError
            ) {
              // toastError(t('Provider Error'), t('No provider was found'));
            }
          }
        });
        window.localStorage.setItem(connectorLocalStorageKey, connectorID);
      } else {
        // toastError(t('Unable to find connector'), t('The connector config is wrong'));
      }
    },
    [activate]
  );

  const logout = useCallback(() => {
    deactivate();
    dispatch(LOGOUT());
    // This localStorage key is set by @web3-react/walletconnect-connector
    if (window.localStorage.getItem('walletconnect')) {
      connectorsByName.walletconnect.close();
      connectorsByName.walletconnect.walletConnectProvider = null;
    }
    window.localStorage.removeItem(connectorLocalStorageKey);
  }, [deactivate, dispatch]);

  return { login, logout };
};

export default useAuth;
