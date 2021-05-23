import { createMuiTheme } from '@material-ui/core'

const customTheme = createMuiTheme({
    overrides: {
        MuiPickersToolbarButton: {
            toolbarBtn: {
                color: '#fff'
            }
        },
        MuiPickersToolbar: {
            toolbarLandscape: {
                color: '#fff'
            },
            toolbar: {
                color: '#fff'
            }
        },
        MuiPickersDay: {
            day: {
                color: '#2E266F'
            },
            daySelected: {
                backgroundColor: '#F6934B'
            },
            dayDisabled: {
                color: '#707070'
            },
            current: {
                color: '#ED854A'
            }
        },

        MuiPickersCalendarHeader: {
            daysHeader: {
                color: '#2E266F'
            },
            dayLabel: {
                color: '#F6934B'
            },
            switchHeader: {
                color: '#2E266F'
            }
        }
    },
    palette: {
        text: {
            primary: '#827da9'
        },
        primary: {
            500: '#F6934B',
            700: '#ED854A'
        }
    }
})

export default customTheme
