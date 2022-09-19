import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import WorkIcon from '@mui/icons-material/Work';
import Divider from '@mui/material/Divider';
import { Typography, Grid } from '@mui/material';

export default function Leituras({ vazaoSubida, vazaoDescida, sensorCisterna, sensorPoco, nivelCisterna, nivelPoco }) {
    return (
        <Grid container direction="column" justifyContent="space-between">
            <Grid item sx={{ mb: 2 }}>
                <Typography variant="h2" color="inherit">
                    Leituras de fluxo
                </Typography>
            </Grid>
            <Grid item>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h3" color="inherit">
                            Vazão de subida
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h3" color="inherit">
                            {vazaoSubida} l/min
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h3" color="inherit">
                            Vazão de descida
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h3" color="inherit">
                            {vazaoDescida} l/min
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Divider sx={{ my: 4 }} />
            <Grid item sx={{ mb: 2 }}>
                <Typography variant="h2" color="inherit">
                    Estados dos reservatórios
                </Typography>
            </Grid>
            <Grid item>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h3" color="inherit">
                            Cisterna:
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h3" color="inherit">
                            {nivelCisterna} l
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h3" color="inherit">
                            Poço Artesiano:
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h3" color="inherit">
                            {nivelPoco} l
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
