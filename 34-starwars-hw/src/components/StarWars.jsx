import React, {Component} from 'react';
import styles from '../css/farGalaxy.module.css';

class StarWars extends Component {
    constructor(props) {
        super(props);
        this.starWarsInfo = sessionStorage.getItem("opening_crawl");
    }

    render() {
        return (
            <div className={styles.farGalaxy}>
                {this.starWarsInfo}
            </div>
        );
    }
}

export default StarWars;