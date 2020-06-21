import '../styles/global.css'
import { LocalizationProvider } from '@material-ui/pickers';
import DateFnsUtils from '@material-ui/pickers/adapter/date-fns';

export default function App({ Component, pageProps }) {
    return (
        <LocalizationProvider dateAdapter={DateFnsUtils}>
            <Component {...pageProps} />
        </LocalizationProvider>
    )
}