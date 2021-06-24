import { container } from 'assets/jss/constants'
import gameBottomImg from 'assets/images/Home/bg_walking.gif'

const buyNowSectionStyle = {
  ecosystemSectionArea: {
    width: '100%',
    position: 'relative',
  },
  quantityContainer: {
    paddingTop: 60,
    backgroundColor: '#FF56B1',
    paddingBottom: 25,
  },
  container: {
    ...container,
  },
  detailContainer: {
    paddingTop: 46,
    backgroundColor: '#000000',
  },
  galaxyContainer: {
    paddingTop: 46,
    backgroundColor: '#38EB28',
  },
  galaxyTitle: {
    color: 'black !important',
  },
  galaxyDescription: {
    color: 'black !important',
  },
  gameContainer: {
    paddingTop: 46,
    backgroundColor: '#000000',
    paddingBottom: 40,
  },
  featureContainer: {
    backgroundColor: '#191919',
    borderRadius: '10px',
    border: '2px solid white',
    padding: 36,
    marginTop: 46,
    textAlign: 'center',
  },
  featureText: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 30,
  },
  featureDescription: {
    fontWeight: 600,
    lineHeight: '35px',
    textAlign: 'left',
  },
  gameBottomContainer: {
    marginBottom: '-6px',
    // backgroundImage: 'url(' + gameBottomImg + ')',
    background: 'url(' + gameBottomImg + ') 50% 50% no-repeat rgb(249,249,249)',
    width: '100%',
    height: '683px',
  },
  textContentArea: {
    position: 'relative',
    marginBottom: '50px',
    textAlign: 'center',
    '@media (max-width: 600px)': { marginBottom: '5px' },
    '@media (min-width: 600px)': { marginBottom: '10px' },
    '@media (min-width: 768px)': { marginBottom: '15px' },
    '@media (min-width: 960px)': { marginBottom: '20px' },
    '@media (min-width: 1280px)': { marginBottom: '25px' },
  },
  textQuantity: {
    borderRadius: 15,
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderRadius: '15px',
      borderColor: 'black',
      borderWidth: '2px',
    },
  },
  distribution: {
    fontSize: 20,
    color: 'white',
    fontWeight: 600,
    paddingBottom: 20,
  },
  wallet: {
    '& .MuiButton-containedPrimary': {
      color: 'black',
      backgroundColor: 'white',
    },
  },
  walletArea: {
    width: '100%',
    maxWidth: '300px',
    borderRadius: '10px',
  },
  titleArea: {
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width: 600px)': {
      justifyContent: 'center',
    },
    '@media (min-width: 600px)': {
      justifyContent: 'center',
    },
    '@media (min-width: 768px)': {
      justifyContent: 'center',
    },
    '@media (min-width: 960px)': {
      justifyContent: 'center',
    },
    '@media (min-width: 1280px)': {
      justifyContent: 'center',
    },
  },
  text31: {
    position: 'relative',
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: 400,
    '@media (max-width: 600px)': { fontSize: '18px', lineHeight: '27px' },
    '@media (min-width: 600px)': { fontSize: '18px', lineHeight: '27px' },
    '@media (min-width: 768px)': { fontSize: '19px', lineHeight: '29px' },
    '@media (min-width: 960px)': { fontSize: '20px', lineHeight: '31px' },
    '@media (min-width: 1280px)': { fontSize: '21px', lineHeight: '33px' },
    alignItems: 'center',
    letterSpacing: '0.65px',
    color: '#000000',
  },
  title: {
    fontWeight: 700,
    '@media (max-width: 600px)': { fontSize: '30px', lineHeight: '40px' },
    '@media (min-width: 600px)': { fontSize: '30px', lineHeight: '40px' },
    '@media (min-width: 768px)': { fontSize: '35px', lineHeight: '50px' },
    '@media (min-width: 960px)': { fontSize: '45px', lineHeight: '55px' },
    '@media (min-width: 1280px)': { fontSize: '45px', lineHeight: '60px' },
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '1.47px',
    color: '#FFFFFF',
    justifyContent: 'center',
    marginBottom: 30,
  },
  gameAvatar: {
    textAlign: 'center',
  },
  featureAvatar: {
    width: '100%',
    maxWidth: '300px',
    borderRadius: '10px',
  },
}

export default buyNowSectionStyle