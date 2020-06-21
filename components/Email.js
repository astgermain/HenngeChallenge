import React from 'react'
import Modal from '@material-ui/core/Modal'
import Button from "@material-ui/core/Button"

const MobileIconStyle = {
    marginLeft: "15px",
    maxWidth: "15px",
    position: "absolute",
    marginTop: "8px",
}

const PopoverStyle = {
    padding: "15px",
    background: "white",
    width: "100vw",
    height: "100vh",
    margin: "auto",
}
const ModalStyle = {
    height: "100vh",
    margin: "auto",
    overflow: "scroll",
}

export default function Email(props) {

    const [anchorEl, setAnchorEl] = React.useState(null)

    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }
    return(
    <div>
        <div className="row tableItem" onClick={handleClick}>

            <div className="col-6 col-md-2 headerItem hideMobile">{props.from}</div>
            <div className="col-8 col-md-2 headerItem showMobile">{props.from} </div>
            <div className="col-4 col-md-2 headerItem3 showMobile"> <span className="mDate"><span>{props.attachment ? <img src="/icon_clip.svg" className="clip"/> : ""}</span>{props.date}  <img src="/icon_arrow02.svg" className="dateArrow"/></span></div>
            <img src="/icon_mail_sp.svg" style={MobileIconStyle} className="showMobile" />
            <div className="col-9 col-md-2 headerItem">{props.to}</div>
            <div className="col-3 col-md-1 headerItem numTo ">{props.numTo > 1 ? <span className="numToSpan">+{props.numTo - 1}</span> : ""}</div>
            <div className="col-12 col-md-5 headerItem2">{props.subject}</div>
            <div className="col-12 col-md-2 headerItem hideMobile"><span className="attachment">{props.attachment ? <div><img src="/icon_clip.svg" className="clip"/> <span className="attachDateAdjust">{props.date}</span></div> : <span className="dateAdjust">{props.date}</span>}</span></div>



        </div>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={ ModalStyle }
    >
        <div style={ PopoverStyle }>
            <div className="row modalInput">
                From: {props.from}
            </div>
            <div className="row modalInput">
                To: {props.to}
            </div>
            <div className="row modalInput">
                Subject: {props.subject}
            </div>
            <div className="row modalInput">
                Date: {props.date}
            </div>
            <div className="row modalInput">
                {props.message}
            </div>
            <div className="row modalClose">
                <Button variant="contained" color="primary" onClick={handleClose}>
                    Close
                </Button>
            </div>
        </div>
    </Modal>
</div>
)}

