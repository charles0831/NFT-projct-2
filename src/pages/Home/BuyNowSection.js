import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
// images
import walletImage from 'assets/images/Home/feature.png'
import gameAvatar1 from 'assets/images/Home/yellow_monster.gif'
import gameAvatar2 from 'assets/images/Home/green_monster.gif'
import gameAvatar3 from 'assets/images/Home/pink_monster.gif'
import gameAvatar4 from 'assets/images/Home/brown_monster.gif'
import featureAvatar from 'assets/images/Home/forrest.png'
import clsx from 'clsx'
import { makeStyles, withStyles, TextField, Button } from '@material-ui/core'
import styles from 'assets/jss/pages/Home/buyNowSectionStyle'
import globalStyles from 'assets/jss/PLUTEX'

const useStyles = makeStyles(styles)
const useGlobalStyles = makeStyles(globalStyles)

const WalletButton = withStyles(() => ({
  root: {
    color: '#000000',
    backgroundColor: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#CCCCCC',
    },
    fontWeight: '700',
    borderRadius: '25px',
    padding: '10px 15px',
    textTransform: 'none',
    width: '130px',
    margin: '20px',
  },
}))(Button)

const BuyButton = withStyles(() => ({
  root: {
    color: '#FFFFFF',
    backgroundColor: '#000000',
    '&:hover': {
      backgroundColor: '#4c4c4c',
    },
    fontWeight: '700',
    borderRadius: '25px',
    padding: '10px 15px',
    textTransform: 'none',
    width: '130px',
    margin: '20px',
  },
}))(Button)

const BuyNowSection = () => {
  const classes = useStyles()
  const globalClasses = useGlobalStyles()
  return (
    <Box className={classes.ecosystemSectionArea}>
      <Box className={classes.quantityContainer}>
        <Box className={classes.container}>
          <Grid container display="flex" alignItems="center" justify="space-between">
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <Box display="flex" justifyContent="center" mb={4.5}>
                <img src={walletImage} className={classes.walletArea} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={9}>
              <Box className={classes.titleArea}>
                <Typography className={classes.title}>Get Your Astrohedz!</Typography>
              </Box>
              <Box className={classes.textContentArea}>
                <Typography className={classes.text31}>Limited to 30 per mint.</Typography>
              </Box>
              <Box className={classes.textContentArea}>
                <Box className={classes.text31}>
                  <Typography className={classes.text31} gutterBottom>
                    Quantity
                  </Typography>
                </Box>
                <Box>
                  <TextField
                    id="text-quantity"
                    variant="outlined"
                    className={classes.textQuantity}
                    // style={{ backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 25 }}
                  />
                </Box>
              </Box>
              <Box className={classes.textContentArea}>
                <WalletButton variant="contained" color="primary" className={classes.wallet}>
                  Linked Wallet
                </WalletButton>
                <BuyButton variant="contained" color="primary" className={classes.roadmap}>
                  Buy now!
                </BuyButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box className={classes.detailContainer}>
        <Box className={classes.container}>
          <Box className={classes.content}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography className={classes.title}>The Details</Typography>
              <Typography className={globalClasses.text21}>
                All Astrohedz are unique and programmatically generated from four different alien species with over 800
                possible traits, including body type, clothing, eyes, mouth, headwear, and background. Even though all
                Astrohedz are out of this world, some are slightly ( or astronomically ) more rare than others.
                Astrohedz are stored as ERC-721 tokens on ther Ethereum blockchain and hosted on IPFS. Purchasing
                Astrohedz cost 0.07ETH. To access members-only areas such asthe upcoming game, Astrohodlers will need to
                be signed into their Metamask Wallet.
              </Typography>
              <Typography variant="h5" className={classes.distribution}>
                FAIR DISTRIBUTION
              </Typography>
              <Typography className={globalClasses.text21}>
                Aliens form the Enefty Galaxy hate bonding curves. That&apos;s why we don&apos;t use them. Buying an
                Astrohed costs 0.07 ETH. Because we believe that every one ( no matter what planet you&apos;re from) is
                equal ( except for Narfnarfs of course... every hates Narfnarfs.)
              </Typography>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box className={classes.galaxyContainer}>
        <Box className={classes.container}>
          <Box className={classes.content}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography className={clsx(classes.galaxyTitle, classes.title)}>
                Welcome to the Astrohedz Galaxy
              </Typography>
              <Typography className={clsx(globalClasses.text21, classes.galaxyDescription)}>
                When you roadmap Astrohedz, in addition to getting an awesome avatar and a provably-rare (and obviously
                stellar ) piece of digital art, you are gaining access to an intergalactic community that will
                participate in adn create fun activities as well as have early access ( and perkys ) in ouer upcoming
                game. One of the best features that the Astrohedz community offers is that Astrohodlers will play an
                intergral part in developing our game. The game is for everyone... so we think everyone should have a
                say in what we do?
              </Typography>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box className={classes.gameContainer}>
        <Box className={classes.container}>
          <Box className={classes.content}>
            <Typography className={classes.title}>THE GAMES</Typography>
            <Grid container display="flex" alignItems="center" justify="space-around" spacing={7}>
              <Grid item xs={12} sm={6} md={3} lg={3} className={classes.gameAvatar}>
                <img src={gameAvatar1} />
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={3} className={classes.gameAvatar}>
                <img src={gameAvatar2} />
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={3} className={classes.gameAvatar}>
                <img src={gameAvatar3} />
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={3} className={classes.gameAvatar}>
                <img src={gameAvatar4} />
              </Grid>
            </Grid>
            <Box className={classes.featureContainer}>
              <Grid container display="flex" alignItems="center" justify="center" spacing={7}>
                <Grid item xs={12} sm={12} md={5} lg={5}>
                  <img src={featureAvatar} className={classes.featureAvatar} />
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7} className={classes.gameAvatar}>
                  <Box className={classes.featureText}>
                    <Typography className={classes.featureDescription}>
                      When you roadmap Astrohedz, in addition to getting an awesome avatar and a provably-rare (and
                      obviously stellar ) piece of digital art, you are gaining access to an intergalactic community
                      that will participate in adn create fun activities as well as have early access ( and perkys ) in
                      ouer upcoming game. One of the best features that the Astrohedz community offers is that
                      Astrohodlers will play an intergral part in developing our game. The game is for everyone... so we
                      think everyone should have a say in what we do?
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={classes.gameBottomContainer}>{/* <img src={gameBottomImg} /> */}</Box>
    </Box>
  )
}

export default BuyNowSection