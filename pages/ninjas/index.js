import styles from '../../styles/ninjas.module.css'
import Link from 'next/link';
export const getStaticProps = async () => {
    const respons = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await respons.json();

    return {
        props:{ninjas:data}
    }

}

const people = ({ ninjas }) => { 
    return ( 
        <div>
            <h1>All Ninjas</h1>
            {ninjas.map(ninja => (
                <Link legacyBehavior href = {'/ninjas/' + ninja.id} key = {ninja.id}>
                    <a className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </a>

                </Link>
            ))}
        </div>
     );
}
 
export default people;

