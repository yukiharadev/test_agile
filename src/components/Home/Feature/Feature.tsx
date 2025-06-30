import styles from './css/feature.module.css';
import featuresConfig from '../../../configs/features.config';
import FeatureItem from './FeatureItem';

const Feature = () => {
    return (
        <div>
            <div className={styles.feature_title}>
                <p>Features</p>
                <span>
                Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.
                </span>
            </div>
            <div className={styles.feature_items}>
                {featuresConfig.map((feature) => (
                    <FeatureItem key={feature.id} {...feature} />
                ))}
            </div>
        </div>
    )
}

export default Feature;