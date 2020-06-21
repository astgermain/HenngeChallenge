
import { TextField } from "@material-ui/core"
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles'
import { MobileDateRangePicker } from "@material-ui/pickers";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
}))

const DatePickerStyle = {
    color: "black",
    width: "100%",
    height: "55px",
    maxWidth: "350px",
};
const DatePickerSearchButtonStyle = {
    height: "100%",
    display: "inline-block",
    borderColor: "#ccc",
    userSelect: "none",
    border: "1px solid #d0d0d0",
    borderLeft: "0",
    padding: ".5rem 1rem",
    fontSize: "1rem",
    borderRadius: "10px",
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
    fontWeight: "400",
    lineHeight: "1.25",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    outline: "none",

}
const DatePickerSearchButtonIconStyle = {
    height: "25px",
}
const DatePickerCalButtonIconStyle = {
    height: "20px",
    position: "absolute",
    zIndex: "10",
    verticalAlign: "middle",
    display: "inline-flex",
    margin: "15px",
}

const DatePickerInputStyle = {
    padding: "15px",
    paddingLeft: "50px",
    borderRadius: "10px",
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
    boxShadow: "rgb(181, 180, 180) 0px 0px 0px 1px inset",
}

const PopoverStyle = {
    padding: "15px",
    background: "white",
    boxShadow: "inset 0 0 2px #696868",
    borderRadius: "10px",
    width: "fit-content",
    margin: "auto",
}
const ModalStyle = {
    height: "50vh",
    margin: "auto",
}




function DatePickerComponent() {
    const classes = useStyles()
    const [selectedDate, setDateChange] = React.useState([null, null]);
    const [DateRangeValue, setDateRangeValue] = React.useState("");
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }



    return (
        <div style={ DatePickerStyle }>
            <div className="input-group mb-3">
                <div><img src="/icon_calender.svg" style={ DatePickerCalButtonIconStyle } /></div>
                <input type="text" style={ DatePickerInputStyle } defaultValue={DateRangeValue} className="form-control" placeholder="Pick a date" aria-label="Recipient's username" aria-describedby="button-addon2" onClick={handleClick} />
                <div className="input-group-append">
                    <button  style={ DatePickerSearchButtonStyle } type="button" id="button-addon2" >
                        <img src="/icon_search.svg" style={ DatePickerSearchButtonIconStyle } />
                    </button>

                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        style={ModalStyle}
                    >
                        <div style={ PopoverStyle }>
                        <MobileDateRangePicker
                            startText="Start Date"
                            endText="End Date"
                            value={selectedDate}
                            onChange={date => {
                                let datesForInput = ""
                                if(date[0] != null) {
                                    datesForInput = `${date[0].getUTCFullYear()}/${date[0].getUTCMonth() + 1}/${date[0].getUTCDate()}`
                                    if(date[1] != null) {
                                        datesForInput = `${datesForInput} - ${date[1].getUTCFullYear()}/${date[1].getUTCMonth() + 1}/${date[1].getUTCDate()}`
                                    }
                                }

                                setDateChange(date)
                                setDateRangeValue(datesForInput)
                            }}
                            renderInput={(startProps, endProps) => (

                                <>
                                    {console.log(DateRangeValue)}
                                    <div className="row modalInput">
                                        <TextField {...startProps} />
                                        <TextField {...endProps} />
                                    </div>
                                    <div className="row modalClose">
                                        <Button variant="contained" color="primary" onClick={handleClose}>
                                            Close
                                        </Button>
                                    </div>
                                </>
                            )}
                        />
                        </div>
                    </Modal>
                </div>

            </div>
        </div>
    );
}
/*
            <div style={ DatePickerStyle }>
                <DateRangePicker
                    startText="Check-in"
                    endText="Check-out"
                    value={selectedDate}
                    onChange={date => handleDateChange(date)}
                    renderInput={(startProps, endProps) => (
                        <>
                            <TextField {...startProps} />
                            <DateRangeDelimiter> to </DateRangeDelimiter>
                            <TextField {...endProps} />
                        </>
                    )}
                />
                <div className="input-group mb-3">
                    <div><img src="/icon_calender.svg" style={ DatePickerCalButtonIconStyle } /></div>
                    <input type="text" style={ DatePickerInputStyle } className="form-control" placeholder="Pick a date" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <div className="input-group-append">
                        <button  style={ DatePickerSearchButtonStyle } type="button" id="button-addon2"><img src="/icon_search.svg" style={ DatePickerSearchButtonIconStyle } /></button>
                    </div>
                </div>
            </div>



 */


export default DatePickerComponent;
