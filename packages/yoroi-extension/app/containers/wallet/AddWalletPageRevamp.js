// @flow
import type { Node } from 'react';
import AddWalletPageHeader from '../../components/wallet/add-wallet-revamp/AddWalletPageHeader';
import { Box } from '@mui/material';
import AddWalletPageContent from '../../components/wallet/add-wallet-revamp/AddWalletPageContent';

type Props = {|
  +onCreate: void => void,
  +onRestore: void => void,
  +onHardwareConnect: void => void,
|};

export default function AddWalletPageRevamp(props: Props): Node {
  return (
    <Box>
      <AddWalletPageHeader />
      <AddWalletPageContent
        onCreate={props.onCreate}
        onRestore={props.onRestore}
        onHardwareConnect={props.onHardwareConnect}
      />
    </Box>
  )
}