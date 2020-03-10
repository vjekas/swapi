import React from 'react';
import { Image, Grid } from 'semantic-ui-react';

export default function Home() {
  return (
    <div>
      <img src="https://www.freepnglogos.com/uploads/star-wars-logo-png-8.png" alt="img" height="150px"></img>

      <Grid container columns={3}>
        <Grid.Column>
          <Image src='https://img.pngio.com/star-wars-a-new-hope-luke-skywalker-png-by-metropolis-hero1125-on-luke-skywalker-png-802_996.png' height="300px" />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://i1.wp.com/freepngimages.com/wp-content/uploads/2015/11/darth-vader-transparent-image.png?fit=608%2C514' height="300px" />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://img.pngio.com/star-wars-the-clone-wars-obi-wan-kenobi-png-by-metropolis-hero1125-obi-wan-png-809_988.png' height="300px" />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://i.pinimg.com/736x/08/32/1a/08321a3751a378f934d455a161ebde8a.jpg' height="300px" />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://img.pngio.com/leia-organa-png-vector-clipart-psd-peoplepngcom-leia-organa-png-400_729.png' height="300px" />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://pluspng.com/img-png/han-solo-png-hansolo-fathead-png-1330.png' height="300px" />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://www.model-space.com/media/catalog/product/cache/1/thumbnail/1280x/9df78eab33525d08d6e5fb8d27136e95/s/s/ss2171_1500.png' height="300px" />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://vignette.wikia.nocookie.net/starwars/images/d/d5/MP-YodaSpecies.png/revision/latest/top-crop/width/360/height/450?cb=20140412000157' height="300px" />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://vdgmh27479.i.lithium.com/t5/image/serverpage/image-id/618iA52F42FE5B261F0B/image-size/large/is-moderation-mode/true?v=1.0&px=999' height="300px" />
        </Grid.Column>
      </Grid>
    </div>
  );
}
