import { CardElement } from './Card';
import { CardElementProps } from './types';
import CoreProvider from '../../core/Context/CoreProvider';
import CardInput from './components/CardInput';
import { h } from 'preact';
import ClickToPayProvider from './components/ClickToPay/ClickToPayProvider';
import ContentSeparator from '../internal/ContentSeparator';
import CtPSection from './components/ClickToPay/CtPSection';
import PersonalDetails from '../internal/PersonalDetails';
import Button from '../internal/Button';
// import Spinner from '../internal/Spinner';

class ClickToPayElement extends CardElement {
    public static type = 'clicktopay';

    constructor(props: CardElementProps) {
        super(props);
    }

    // protected static defaultProps = {
    //     ...CardElement.defaultProps,
    //     brands: ['bcmc', 'maestro', 'visa']
    // };

    // /**
    //  * Now that the Bancontact (BCMC) Card component can accept a number dual branded with Visa (which requires a CVC) it has to be handled differently
    //  * at creation time (no automatic removing of the CVC securedField).
    //  * At the same time we can't treat it as a regular 'card' component - because it needs to hide the CVC field at at startup,
    //  * as well as show the BCMC logo in the number field and ignore any of the internal, regEx driven, brand detection.
    //  */
    // formatProps(props: CardElementProps) {
    //     return {
    //         ...super.formatProps(props),
    //         type: 'bcmc', // Force type (only for the Dropin is type automatically set to 'bcmc') - this will bypass the regEx brand detection
    //         cvcPolicy: CVC_POLICY_HIDDEN
    //     };
    // }
    //
    // // Disable internal event.emit() for Bancontact
    // public onBrand = event => {
    //     if (this.props.onBrand) this.props.onBrand(event);
    // };

    render() {
        return (
            <CoreProvider
                i18n={this.props.i18n}
                loadingContext={this.props.loadingContext}
                commonProps={{ isCollatingErrors: this.props.SRConfig.collateErrors }}
            >
                <ClickToPayProvider>
                    {viewMode => {
                        console.log(viewMode);
                        return (
                            <div>
                                <CtPSection>
                                    <PersonalDetails requiredFields={['shopperEmail']} />
                                    <Button label="Look up my saved cards" />
                                </CtPSection>
                                <ContentSeparator classNames={['adyen-checkout-ctp__separator']} label="Or enter card details manually" />
                                <CardInput
                                    setComponentRef={this.setComponentRef}
                                    {...this.props}
                                    {...this.state}
                                    onChange={this.setState}
                                    onSubmit={this.submit}
                                    payButton={this.payButton}
                                    onBrand={this.onBrand}
                                    onBinValue={this.onBinValue}
                                    brand={this.brand}
                                    brandsIcons={this.brands}
                                />
                            </div>
                        );
                    }}
                </ClickToPayProvider>
            </CoreProvider>
        );
    }
}

export default ClickToPayElement;
