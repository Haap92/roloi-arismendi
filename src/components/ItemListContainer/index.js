import React from "react";
import gear from "../../assets/images/gear.svg"
import ItemCount from "../ItemCount";

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <div style={styles.landing}>
            <div><img style={styles.gear}src={gear} alt="gear" /></div>
            <span style={styles.greeting}>{greeting}</span>
        </div>
        <div style={styles.cards}>
        <ItemCount name={'Minimalist Analog Watch'} description={'The Minimalist Two-Hand Black Leather Watch'} img={'https://i.postimg.cc/bvjzSNw5/FS5447-main.jpg'} initial={1} stock={5} />
        <ItemCount name={'Common Digital Watch'} description={'Going Digital with a watch'} img={'https://i.postimg.cc/8zvpCrNW/71r-T69t8-GVL-UX679.jpg'} initial={1} stock={3} />
        <ItemCount name={'Arrg Smart Watch'} description={'The Smarter smart watch wide and convincing'} img={'https://i.postimg.cc/TYp2Z4st/gll770-twenteesky-original-imag8p3egtsk3t7h.webp'} initial={1} stock={7} />
        <ItemCount name={'Just a Vintage Watch'} description={'Old its always fun, nice piece of art'} img={'https://i.postimg.cc/tTkCjQyM/1.jpg'} initial={1} stock={2} />
        <ItemCount name={'Another Analog Watch'} description={'90 people favorite watch'} img={'https://i.postimg.cc/bvHqxcGw/Screen-Shot-2019-07-06-at-12-09-22-PM-large.webp'} initial={1} stock={6} />
        <ItemCount name={'More Interesting Digital Watch'} description={'Just to add some diversity to the website'} img={'https://i.postimg.cc/2yXk1Q1d/images.jpg'} initial={1} stock={4} />
        <ItemCount name={'The Usual Smart Watch'} description={'Everyone got one nowdays so we have to offer this one too'} img={'https://i.postimg.cc/CLXMY4TS/20b86b4166b88ee81a1104fe727a3bff.jpg'} initial={1} stock={8} />
        <ItemCount name={'Gorgeous Vintage Watch'} description={'Enjoy feeling luxury by adding this piece to your collection'} img={'https://i.postimg.cc/90fXX8QF/download.jpg'} initial={1} stock={3} />
        </div>
    </div>
  );
};

const styles = {
    landing:{ 
        width: '100%',
        height: 'calc(100vh - 60px)',
        display: 'flex',
        flexDirection: 'column' ,
        justifyContent: 'center',
        alignItems: 'center',
        wrap: 'wrap'
    },
    gear: {
        width: '100%',
        padding: 10
    },
    greeting:{
        fontSize: '100%' ,
        color: 'black' ,
        fontFamily: 'Roboto',
        fontWeight: 'bold' ,
    },
    cards:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    }
}
export default ItemListContainer;