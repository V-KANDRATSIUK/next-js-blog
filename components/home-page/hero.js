import classes from './hero.module.css';
import Image from "next/image";

export default function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src={'/images/site/max.png'}
                    alt='sdf'
                    width={300}
                    height={300}
                />
            </div>
            <h1>
                Hey
            </h1>
            <p>Bla bla bla</p>
        </section>
    );
}