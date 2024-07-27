import { Typography, Grid, IconButton } from "@mui/material"
import ScheduleIcon from '@mui/icons-material/Schedule'
import SettingsIcon from '@mui/icons-material/Settings'
import AddIcon from '@mui/icons-material/Add'
import 'styles/timetable.css'

const Header = () => {
    return (
        <div>
            <Grid container alignItems="center" justifyContent="space-between" className="header">
                <Typography className="timetable-title-box">
                    <Typography>
                        2023학년 2학기
                    </Typography>
                    <Typography variant="h5" className="timetable-title">
                        시간표
                    </Typography>
                </Typography>
                <div>
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                    <IconButton>
                        <ScheduleIcon />
                    </IconButton>
                </div>
            </Grid>
        </div>
    )
}

export default Header
