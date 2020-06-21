import React from 'react'
import Head from 'next/head'
import DatePickerComponent from "../components/DatePickerComponent"
import Email from "../components/Email"
import Button from '@material-ui/core/Button'

export default function Home() {
    const [email, setEmails] = React.useState(true)
    const handleEmailsClick = () => {
        setEmails(!email)
    }
    const [pretendSubject, setPretendSubject] = React.useState(`[web:333] "Web Contact"`)

    return (
        <div className="container">
            <Head>
                <title>Audit Email Viewer</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="stylesheet"
                      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"/>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
            </Head>

            <main>
                <p className="results">
                    <Button variant="contained" color="primary" onClick={handleEmailsClick}>
                        {email === true ? "Add Emails" : "Remove Emails"}
                    </Button>
                </p>
                <div className="description"><DatePickerComponent/></div>
                <p className="results">Results: <span className="resultsNum">{email === true ? "0" : "10"}</span> mail(s)</p>
                <div className="divider"/>
                {email === true ?
                    ""
                :
                    <div className="tableHeader">
                        <div className="row headerTabs">
                            <div className="col-2 headerItem">From</div>
                            <div className="col-3 headerItem">To</div>
                            <div className="col-5 headerItem">Subject</div>
                            <div className="col-2 headerItem"><span className="dateAdjust">Date</span></div>
                        </div>
                        <div className="row mobileTabs">
                            <div className="col-12 headerItem2">
                                <button className="mobileTabButton">From</button>
                                <span className="mobileDivider">|</span>
                                <button className="mobileTabButton">To</button>
                                <span className="mobileDivider">|</span>
                                <button className="mobileTabButton">Subject</button>
                                <span className="mobileDivider">|</span>
                                <button className="mobileTabButton">Date</button>
                            </div>
                        </div>

                    </div>
                }
                <div className="grid">
                    {email === true
                        ? <p className="logoNoMail"><img src="/logo.png" className="logo" /></p>
                        :<div>
                        <Email id={111} from="aaa@example.com" to="zzz.zzz@example.com" numTo={1} subject="[ HR-888 ] Notice of official announcement" date="0:20" message="message1" attachment={false} />
                        <Email id={112} from="bbb.bbbb@example.com" to="yyy@example.com" numTo={1} subject={pretendSubject} date="0:10" message="message2" attachment={false} />
                        <Email id={113} from="ccc@example.com" to="xxx@example.com, 2xxx@example.com" numTo={2} subject="Happy New Year! Greetings for the New Year." date="0:00" message="message3" attachment={true} />
                        <Email id={114} from="ddd.dddd@example.com" to="vvv.vvv@example.com, 2vvv.vvv@example.com" numTo={2} subject="[HR-887(Revised: Office Expansion Project Team)] Notice of official announcement" date="Jan 01" message="message4" attachment={false} />
                        <Email id={115} from="eee@example.com" to="sss@example.com, rrr@example.com, sss@example.com" numTo={3} subject="[Github] Logout page" date="Jan 01" message="message5" attachment={false} />
                        <Email id={116} from="fff.fff@example.com" to="qqq.qqq@example.com" numTo={1} subject="［dev］ Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5" date="Jan 01" message="message6" attachment={false} />
                        <Email id={117} from="ggg@example.com" to="ppp@example.com" numTo={1} subject="Re: [Github] Brush-up on loading animation" date="Jan 01" message="message7" attachment={false} />
                        <Email id={118} from="hhh.hhh@example.com" to="ooo.ooo@example.com" numTo={1} subject="Workplace Summary for sample, Inc.: Jun 2 - Jun 9" date="Jan 01" message="message8" attachment={true} />
                        <Email id={119} from="iii@example.com" to="nnn@example.com" numTo={1} subject="I love you" date="2019/12/31" message="message9" attachment={true} />
                        <Email id={120} from="Pablo-Diego@example.com" to="Pablo-Diego-José-Francisco@example.com" numTo={1} subject="[info:888] ABC EQUIPMENT COMPANY" date="2019/12/31" message="message10" attachment={false} />
                        </div>
                    }

                </div>
            </main>

            <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 90%;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          margin: auto;
        }
        
        

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

            <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
        </div>
    )
}
