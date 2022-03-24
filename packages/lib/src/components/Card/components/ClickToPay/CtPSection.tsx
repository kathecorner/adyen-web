import { h } from 'preact';
// import useCoreContext from '../../../core/Context/useCoreContext';
import './CtPSection.scss';
import useCoreContext from '../../../../core/Context/useCoreContext';
import getImage from '../../../../utils/get-image';
import Img from '../../../internal/Img';

const brands = ['mc', 'visa', 'amex', 'discover'];

const CtPSection = ({ children }) => {
    const { loadingContext } = useCoreContext();

    const url = getImage({ loadingContext })('visacheckout');

    return (
        <div className="adyen-checkout-ctp__section">
            <div className="adyen-checkout-ctp__section-header">
                <Img className="adyen-checkout-ctp__section-header-logo" src={url} alt={url} />
                <span className="adyen-checkout-ctp__section-header-title">Click to Pay</span>
                <span className="adyen-checkout-ctp__section-header-subtitle">enabled by </span>
                {brands.map(brand => (
                    <Img key={brand} className="adyen-checkout-ctp__section-header-scheme" src={getImage({ loadingContext })(brand)} alt={brand} />
                ))}
            </div>

            {children}
        </div>
    );
};

export default CtPSection;
