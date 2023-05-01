
import { Grid } from '@mui/material';
import Image from './image';

const Images = ({ data }) => {
    
    return (
        <Grid container>
            {
                data.map(image => (
                    <Grid xs={3} item>
                        <Image key={image.id} image={image} />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default Images;