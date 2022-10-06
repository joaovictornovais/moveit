import '../styles/global.css';

import { ChallengesContexts, ChallengesProvier } from '../contexts/ChallengesContexts';
import { CountdownProvider } from '../contexts/CountdownContexts';

function MyApp({ Component, pageProps }) {
  
  return (
    
      <CountdownProvider>
        <Component {...pageProps} />
      </CountdownProvider>
    
  )
}

export default MyApp
