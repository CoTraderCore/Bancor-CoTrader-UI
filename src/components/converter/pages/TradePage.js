import React from 'react'
import TradeModal from '../modals/TradeModal'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { ArrowRight } from '@material-ui/icons';
import pageStyles from '../../../css/pageStyles'

const useStyles = pageStyles

function TradePage(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}><ArrowRight className={classes.icon} /></span>;
  return (
    <React.Fragment>
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} gutterBottom component="h2">
          Trade via Bancor
        </Typography>
        <Typography variant="body1" className={'mb-2'} component="p">
          {bull} This dapp allows you to add and trade tokens in the Bancor Network.
          </Typography>
          <Typography variant="body1" className={'mb-2'} component="p">
          {bull} Our default lists include both Bancor official and CoTrader verified tokens.
          </Typography>
          <Typography variant="body1" className={'mb-2'} component="p">
          {bull} You can add a new token in the "add converter" tab.
          </Typography>
          <Typography variant="body1" className={'mb-2'} component="p">
          {bull} You can ask us to verify the token in "Chat & Support" below.
        </Typography>
        <Typography variant="body1" className={'mb-2'} component="p">
        {bull} Please be careful when choosing unverified tokens.
      </Typography>
      <Typography variant="body1" className={'mb-2'} component="p">
      {bull} More updates coming soon.
    </Typography>
        <Typography className={classes.modal} component="div">
          <TradeModal {...props}/>
        </Typography>
      </CardContent>
    </Card>
    </React.Fragment>
  )
}
export default TradePage
