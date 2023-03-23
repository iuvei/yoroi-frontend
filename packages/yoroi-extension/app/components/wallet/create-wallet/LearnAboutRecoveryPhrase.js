// @flow
import { Node, ComponentType, useEffect } from 'react';
import { defineMessages, injectIntl, FormattedHTMLMessage } from 'react-intl';
import { observer } from 'mobx-react';
import type { $npm$ReactIntl$IntlShape } from 'react-intl';
import { Stack, Typography, Box } from '@mui/material';
import StepController from './StepController';
import SaveRecoveryPhraseTipsDialog from './SaveRecoveryPhraseTipsDialog';
import { ReactComponent as InfoIcon } from '../../../assets/images/info-icon-primary.inline.svg';
import { isDialogShownBefore, TIPS_DIALOGS } from './steps';

const messages: * = defineMessages({
  description: {
    id: 'wallet.create.firstStep.description',
    defaultMessage:
      '!!!A recovery phrase is a secret series of words that can be used to recover your Yoroi Wallet. See the video below how to <strong>use a recovery phrase</strong>.',
  },
});

type Intl = {|
  intl: $npm$ReactIntl$IntlShape,
|};

type Props = {|
  nextStep(): void,
  prevStep(): void,
|};

function LearnAboutRecoveryPhrase(props: Props & Intl): Node {
  const { nextStep, prevStep, isDialogOpen, openDialog, closeDialog } = props;

  const isActiveDialog = isDialogOpen(SaveRecoveryPhraseTipsDialog);

  useEffect(() => {
    if (!isActiveDialog && !isDialogShownBefore(TIPS_DIALOGS.LEARN_ABOUT_RECOVERY_PHRASE))
      openDialog(SaveRecoveryPhraseTipsDialog);
  }, []);

  return (
    <Stack alignItems="center" justifyContent="center">
      <Stack direction="column" alignItems="center" justifyContent="center" maxWidth="648px">
        <Typography mb="16px" variant="body1">
          <FormattedHTMLMessage {...messages.description} />
          <Box
            component="span"
            sx={{
              cursor: 'pointer',
              ml: '4px',
              '& svg': {
                mb: '-5px',
              },
            }}
            onClick={() => openDialog(SaveRecoveryPhraseTipsDialog)}
          >
            <InfoIcon />
          </Box>
        </Typography>

        <Box sx={{ height: '365px', width: '100%' }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/_ltQayKP5ek"
            title="Introducing EMURGO"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ borderRadius: '8px' }}
          />
        </Box>

        <StepController goNext={nextStep} goBack={prevStep} />
      </Stack>
      <SaveRecoveryPhraseTipsDialog
        open={isActiveDialog}
        onClose={() => closeDialog(TIPS_DIALOGS.LEARN_ABOUT_RECOVERY_PHRASE)}
      />
    </Stack>
  );
}

export default (injectIntl(observer(LearnAboutRecoveryPhrase)): ComponentType<Props>);
